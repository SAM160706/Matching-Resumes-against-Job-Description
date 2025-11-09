const express = require('express');
const { body, validationResult } = require('express-validator');
const Application = require('../models/Application');
const Job = require('../models/Job');
const { requireAuth } = require('../middleware/auth');

const router = express.Router();

// Apply to job (applicants only)
router.post('/', 
  requireAuth,
  [
    body('jobId').notEmpty().withMessage('Job ID is required'),
    body('resumeText').notEmpty().withMessage('Resume text is required'),
    body('resumeFileName').notEmpty().withMessage('Resume file name is required')
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: errors.array()
        });
      }

      if (req.session.userType !== 'applicant') {
        return res.status(403).json({
          success: false,
          message: 'Only applicants can apply to jobs'
        });
      }

      const { jobId, resumeText, resumeFileName } = req.body;

      // Check if job exists
      const job = await Job.findById(jobId);
      if (!job) {
        return res.status(404).json({
          success: false,
          message: 'Job not found'
        });
      }

      // Check if already applied
      const existingApplication = await Application.findOne({
        applicantId: req.session.userId,
        jobId
      });

      if (existingApplication) {
        return res.status(400).json({
          success: false,
          message: 'You have already applied to this job'
        });
      }

      // Calculate basic match score (simple keyword matching for now)
      const matchScore = calculateMatchScore(resumeText, job);

      const application = new Application({
        applicantId: req.session.userId,
        jobId,
        resumeText,
        resumeFileName,
        matchScore
      });

      await application.save();

      res.status(201).json({
        success: true,
        message: 'Application submitted successfully',
        application: {
          id: application._id,
          matchScore: application.matchScore,
          status: application.status
        }
      });
    } catch (error) {
      console.error('Application error:', error);
      res.status(500).json({
        success: false,
        message: 'Server error while submitting application'
      });
    }
  }
);

// Get user's applications
router.get('/my-applications', requireAuth, async (req, res) => {
  try {
    if (req.session.userType !== 'applicant') {
      return res.status(403).json({
        success: false,
        message: 'Only applicants can view their applications'
      });
    }

    const applications = await Application.find({ applicantId: req.session.userId })
      .populate('jobId', 'title company location')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      applications
    });
  } catch (error) {
    console.error('Get applications error:', error);
    res.status(500).json({
      success: false,
      message: 'Server error while fetching applications'
    });
  }
});

// Simple matching algorithm
function calculateMatchScore(resumeText, job) {
  const resume = resumeText.toLowerCase();
  const jobDesc = job.description.toLowerCase();
  const jobSkills = job.skills.map(skill => skill.toLowerCase());
  
  // Skills matching
  let skillMatches = 0;
  jobSkills.forEach(skill => {
    if (resume.includes(skill)) {
      skillMatches++;
    }
  });
  const skillsScore = jobSkills.length > 0 ? (skillMatches / jobSkills.length) * 100 : 0;
  
  // Keyword matching
  const jobKeywords = jobDesc.split(' ').filter(word => word.length > 3);
  let keywordMatches = 0;
  jobKeywords.forEach(keyword => {
    if (resume.includes(keyword)) {
      keywordMatches++;
    }
  });
  const keywordsScore = jobKeywords.length > 0 ? (keywordMatches / jobKeywords.length) * 100 : 0;
  
  // Experience matching (basic)
  const experienceScore = resume.includes('experience') || resume.includes('years') ? 80 : 60;
  
  // Education matching (basic)
  const educationScore = resume.includes('degree') || resume.includes('university') || resume.includes('college') ? 85 : 70;
  
  // Overall score (weighted average)
  const overall = Math.round(
    (skillsScore * 0.4) + 
    (keywordsScore * 0.3) + 
    (experienceScore * 0.2) + 
    (educationScore * 0.1)
  );
  
  return {
    overall: Math.min(overall, 100),
    skills: Math.round(skillsScore),
    experience: Math.round(experienceScore),
    education: Math.round(educationScore),
    keywords: Math.round(keywordsScore)
  };
}

module.exports = router;