# JobMatch AI 🚀

A modern, AI-powered job matching platform that connects job seekers with their perfect opportunities and helps recruiters find ideal candidates through intelligent resume-job matching.

![JobMatch AI](https://img.shields.io/badge/React-19.2.0-blue)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4.0-38B2AC)
![Vite](https://img.shields.io/badge/Vite-6.4.0-646CFF)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

### For Job Seekers
- 📄 **Smart Resume Upload**: PDF/DOCX support with instant processing
- 🎯 **AI-Powered Matching**: Get percentage-based job compatibility scores
- 📊 **Detailed Analysis**: See exactly why you match (skills, experience, education)
- 💡 **Personalized Recommendations**: Get specific advice to improve your resume
- 🔍 **Job Discovery**: Browse and apply to relevant positions

### For Recruiters
- 🛠️ **Interactive Job Builder**: Create job postings with clickable options
- 📸 **Image Upload**: Extract job descriptions from images using OCR
- 👥 **Candidate Management**: View all applicants with detailed match breakdowns
- 📈 **Smart Sorting**: Sort candidates by overall match, skills, or experience
- 👀 **Resume Viewer**: Full-screen resume analysis with match overlay

### Technical Features
- 🎨 **Modern Dark Theme**: Professional, eye-friendly interface
- ⚡ **Smooth Animations**: Polished user experience with CSS animations
- 📱 **Responsive Design**: Works perfectly on all devices
- 🔐 **Secure Authentication**: Separate login flows for applicants and recruiters
- 🚀 **Fast Performance**: Built with Vite for lightning-fast development

## 🛠️ Tech Stack

- **Frontend**: React 19.2.0 with JSX
- **Routing**: React Router DOM 7.9.4
- **Styling**: Tailwind CSS 3.4.0
- **Build Tool**: Vite 6.4.0
- **Testing**: React Testing Library
- **Animations**: Custom CSS keyframes

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/jobmatch-ai.git
cd jobmatch-ai
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - Choose "I'm an Applicant" or "I'm a Recruiter"
   - Use any email/password to login (demo mode)

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── CandidateCard.jsx    # Recruiter candidate display
│   ├── ErrorBoundary.jsx    # Error handling
│   ├── JobCard.jsx          # Job posting display
│   ├── Login.jsx            # Authentication form
│   ├── MatchAnalysis.jsx    # Resume-job matching display
│   ├── Navbar.jsx           # Navigation header
│   ├── ResumeRecommendations.jsx  # Improvement suggestions
│   └── ResumeViewer.jsx     # Resume modal viewer
├── pages/                # Main application pages
│   ├── ApplicantDashboard.jsx   # Job seeker interface
│   ├── LandingPage.jsx          # Welcome/login selection
│   └── RecruiterDashboard.jsx   # Recruiter interface
├── App.jsx               # Main app component & routing
├── index.css            # Global styles & animations
└── main.jsx             # React app entry point
```

## 🎯 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint (if configured)
```

## 🎨 Key Features Demo

### Applicant Flow
1. **Login** → Choose "I'm an Applicant"
2. **Upload Resume** → Drag & drop PDF/DOCX files
3. **Browse Jobs** → See available positions
4. **Apply** → Click "Apply Now" on any job
5. **View Match** → See detailed compatibility analysis
6. **Get Recommendations** → Receive personalized improvement tips

### Recruiter Flow
1. **Login** → Choose "I'm a Recruiter"
2. **Post Job** → Use interactive job builder or upload image
3. **View Candidates** → See all applicants with match scores
4. **Analyze Resumes** → Click "View Resume" for detailed analysis
5. **Sort & Filter** → Organize candidates by match criteria

## 🔮 Future Enhancements

- 🤖 **Real AI Integration**: Connect with OpenAI/Hugging Face APIs
- 🗄️ **Database Integration**: PostgreSQL/MongoDB for data persistence
- 🔍 **Advanced Search**: Elasticsearch for powerful job/candidate search
- 📧 **Email Notifications**: Automated matching alerts
- 📊 **Analytics Dashboard**: Detailed insights and reporting
- 🌐 **Multi-language Support**: Internationalization

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ using React and Tailwind CSS
- Inspired by modern job platforms like LinkedIn and Indeed
- UI/UX designed for optimal user experience

---

**Made with 💻 and ☕ by Samarth**
