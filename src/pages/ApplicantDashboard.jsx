import React, { useState, useEffect } from 'react';
import JobCard from '../components/JobCard';
import MatchAnalysis from '../components/MatchAnalysis';
import ResumeRecommendations from '../components/ResumeRecommendations';

const ApplicantDashboard = () => {
  const [uploadedResume, setUploadedResume] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);
  const [matchData, setMatchData] = useState(null);
  const [recommendations, setRecommendations] = useState(null);
  const [jobs, setJobs] = useState([]);

  // Mock job data - in real app, fetch from API
  useEffect(() => {
    const mockJobs = [
      {
        id: 1,
        title: "Frontend Developer",
        company: "Tech Corp",
        description: "We are looking for a skilled Frontend Developer with experience in React, JavaScript, and modern web technologies...",
        skills: ["React", "JavaScript", "CSS", "HTML", "Git"],
        experience: "2-4 years",
        location: "Remote",
        postedDate: "2 days ago"
      },
      {
        id: 2,
        title: "Full Stack Developer",
        company: "StartupXYZ",
        description: "Join our team as a Full Stack Developer. You'll work with Node.js, React, MongoDB, and AWS...",
        skills: ["Node.js", "React", "MongoDB", "AWS", "Docker"],
        experience: "3-5 years",
        location: "New York",
        postedDate: "1 week ago"
      },
      {
        id: 3,
        title: "Software Engineer",
        company: "BigTech Inc",
        description: "We're seeking a Software Engineer to work on scalable systems using Java, Spring Boot, and microservices...",
        skills: ["Java", "Spring Boot", "Microservices", "SQL", "Kubernetes"],
        experience: "4-6 years",
        location: "San Francisco",
        postedDate: "3 days ago"
      }
    ];
    setJobs(mockJobs);
  }, []);

  const handleResumeUpload = (event) => {
    const file = event.target.files[0];
    if (file && (file.type === 'application/pdf' || file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document')) {
      setUploadedResume(file);
    } else {
      alert('Please upload a PDF or DOCX file');
    }
  };

  const handleJobApply = (job) => {
    if (!uploadedResume) {
      alert('Please upload your resume first');
      return;
    }

    setSelectedJob(job);
    
    // Mock match analysis - in real app, call API
    const mockMatchData = {
      overallMatch: 78,
      breakdown: {
        skills: {
          score: 85,
          details: {
            matched: ["React", "JavaScript", "CSS"],
            missing: ["Git", "HTML"]
          }
        },
        experience: {
          score: 70,
          details: {
            candidateYears: 2,
            requiredYears: 3
          }
        },
        education: {
          score: 90,
          details: {
            match: "Bachelor's in Computer Science - Perfect match"
          }
        },
        keywords: {
          score: 75,
          details: {}
        }
      }
    };

    const mockRecommendations = {
      skillsToAdd: ["Git", "HTML", "TypeScript"],
      skillImpact: 15,
      experienceAdvice: "Consider highlighting any freelance or personal projects to demonstrate additional experience",
      keywordsToAdd: ["responsive design", "web development", "frontend optimization"],
      overallAdvice: "Strong technical foundation. Focus on adding missing skills and emphasizing relevant project experience."
    };

    setMatchData(mockMatchData);
    setRecommendations(mockRecommendations);
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-cyan-400 mb-2">
            Applicant Dashboard
          </h1>
          <p className="text-gray-400 text-lg">Find your perfect job match with AI-powered analysis</p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Resume Upload & Job Listings */}
          <div className="lg:col-span-2 space-y-6">
            {/* Resume Upload Section */}
            <div className="bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-700">
              <h2 className="text-xl font-bold text-white mb-4">
                Upload Resume
              </h2>
              <div className="border-2 border-dashed border-gray-600 rounded-xl p-8 text-center bg-gray-700/50 hover:bg-gray-700 transition-colors duration-300">
                <input
                  type="file"
                  accept=".pdf,.docx"
                  onChange={handleResumeUpload}
                  className="hidden"
                  id="resume-upload"
                />
                <label
                  htmlFor="resume-upload"
                  className="cursor-pointer bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors duration-200 shadow-lg inline-block"
                >
                  Choose Resume
                </label>
                <p className="text-gray-400 mt-3 font-medium">PDF or DOCX files only</p>
              </div>
              {uploadedResume && (
                <div className="mt-4 p-4 bg-green-900/30 border border-green-700 rounded-xl">
                  <p className="text-green-400 font-semibold">
                    ✓ {uploadedResume.name} uploaded successfully!
                  </p>
                </div>
              )}
            </div>

            {/* Job Listings */}
            <div className="bg-gray-800 rounded-xl shadow-xl p-6 border border-gray-700">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-white">
                  Available Jobs
                </h2>
                <span className="bg-cyan-600 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                  {jobs.length}
                </span>
              </div>
              <div className="space-y-6">
                {jobs.map(job => (
                  <JobCard 
                    key={job.id} 
                    job={job} 
                    onApply={handleJobApply}
                    showApplyButton={true}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Match Analysis & Recommendations */}
          <div className="space-y-6">
            <MatchAnalysis matchData={matchData} />
            <ResumeRecommendations recommendations={recommendations} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantDashboard;