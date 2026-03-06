AI Website Generator 

An intelligent web application that generates fully functional websites from natural language prompts. Built with React.js frontend and Node.js backend, this tool leverages AI to transform user descriptions into ready-to-deploy websites.

✨ Features

Prompt-to-Website Conversion: 
Generate complete websites by simply describing what you want

Real-time Preview: 
See your website come to life as you type your prompt

AI-Powered Revisions: 
Make changes through natural conversation

Version Control: 
Track and revert to previous versions of your generated sites

Responsive Designs: 
Preview your website on different devices (mobile, tablet, desktop)

Code Export: 
Download generated websites as HTML files

Community Gallery: 
Browse and get inspired by published projects

User Authentication: 
Secure login with email/password

Credit System: 
Manage usage with credits (5 credits per generation)

🛠️ Tech Stack

Frontend
React.js with TypeScript

Tailwind CSS for styling

Lucide React for icons

React Router DOM for navigation

Axios for API calls

Sonner for toast notifications

Better Auth for authentication

Backend
Node.js with Express

TypeScript for type safety

Prisma ORM with PostgreSQL (NeonDB)

OpenRouter API for AI model access (Stepfun 3.5 Flash)

Better Auth for authentication

Serverless-http for Netlify deployment

📋 Prerequisites
Node.js (v18.14.0 or later)

PostgreSQL database (NeonDB recommended)

OpenRouter API key

GitHub account (for deployment)

🚀 Getting Started
1. Clone the Repository git clone https://github.com/yourusername/ai-website-generator.git
cd ai-website-generator
2. Install Dependencies
Backend:

bash
cd server
npm install
Frontend:

bash
cd ../client
npm install
3. Set Up Environment Variables
Backend (.env in server folder):

env
# Database
DATABASE_URL="postgresql://username:password@ep-your-project.us-east-2.aws.neon.tech/database?sslmode=require"

# Better Auth
BETTER_AUTH_SECRET="your-super-secret-key-at-least-32-chars"
BETTER_AUTH_URL="http://localhost:3001"

# CORS
TRUSTED_ORIGINS="http://localhost:5173"

# AI API (OpenRouter)
AI_API_KEY="your-openrouter-api-key"

# Node Environment
NODE_ENV="development"
Frontend (.env in client folder):

env
VITE_API_URL="http://localhost:3001"
4. Set Up Database
bash
cd server
npx prisma generate
npx prisma db push
5. Run Locally
Start Backend:

bash
cd server
npm run dev
Start Frontend (new terminal):

bash
cd client
npm run dev
Visit http://localhost:5173 to see the application.

📁 Project Structure
text
ai-website-generator/
├── client/                    # Frontend React app
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   │   ├── ProjectPreview.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   ├── EditorPanel.tsx
│   │   │   └── LoaderSteps.tsx
│   │   ├── pages/            # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Preview.tsx
│   │   │   ├── View.tsx
│   │   │   ├── Community.tsx
│   │   │   └── Pricing.tsx
│   │   ├── lib/              # Utilities
│   │   │   ├── auth-client.ts
│   │   │   └── axios.ts
│   │   └── types/            # TypeScript types
│   │       └── index.ts
│   └── package.json
│
├── server/                    # Backend Express app
│   ├── controllers/           # Route controllers
│   │   ├── projectController.ts
│   │   └── userController.ts
│   ├── routes/                # API routes
│   │   └── projectRoutes.ts
│   ├── middlewares/           # Custom middleware
│   │   └── auth.ts
│   ├── lib/                   # Utilities
│   │   ├── auth.ts           # Better Auth config
│   │   └── prisma.ts         # Prisma client
│   ├── configs/               # Configurations
│   │   └── openai.ts         # OpenRouter config
│   ├── prisma/                # Prisma schema
│   │   └── schema.prisma
│   ├── netlify/               # Netlify functions
│   │   └── functions/
│   │       └── api.js
│   ├── app.js                 # Express app (exported)
│   ├── server-local.js        # Local development server
│   └── package.json
│
├
└── README.md                  # This file


🎯 Core Features Explained

1. AI Website Generation
Users describe their desired website in natural language

AI enhances the prompt and generates complete HTML/CSS/JS code

All styling uses Tailwind CSS for consistency

2. Real-time Preview
Live preview of generated website

Device emulation (mobile, tablet, desktop)

Element selection and inline editing

3. Version Control
Every revision creates a new version

Browse version history

Rollback to any previous version

4. Community Gallery
Browse published projects from other users

View source code and get inspiration

Share your own creations

🌐 Deployment
Deploy to Netlify (Recommended)
Push your code to GitHub

Connect to Netlify

Log in to app.netlify.com

Click "Add new site" → "Import an existing project"

Connect to GitHub and select your repository

Configure build settings

Base directory: server

Build command: npm install && npx prisma generate

Publish directory: Leave empty

Add environment variables in Netlify dashboard

Deploy! Netlify will automatically deploy your serverless functions

Deploy Frontend Separately (Optional)
You can also deploy the frontend to Vercel or Netlify:

bash
cd client
npm run build
Then upload the dist folder to your hosting provider.


🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

Fork the repository

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📝 License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments

OpenRouter for providing AI model access

NeonDB for serverless PostgreSQL

Better Auth for authentication

Tailwind CSS for styling

All contributors and users

📧 Contact
Masum - masumbilla0895@gmail.com

Project Link: https://github.com/yourusername/ai-website-generator

⭐ Star this repository if you find it useful!
