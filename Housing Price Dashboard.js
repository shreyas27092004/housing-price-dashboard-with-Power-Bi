import React from 'react';

// --- Helper Components for SVGs ---

const EmailIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
  </svg>
);

const GitHubIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"></path>
  </svg>
);


// --- Main Components ---

const Header = () => (
  <header className="text-center w-full max-w-7xl mx-auto mb-6">
    <h1 className="text-3xl md:text-4xl font-bold text-white">
      House Price Visualization & Prediction in India
    </h1>
    <p className="text-md md:text-lg text-gray-400 mt-2">
      An interactive dashboard for real estate market analysis using PowerBi .
    </p>
  </header>
);

const PowerBiDashboard = () => {
  // INSTRUCTION: Paste your "Publish to web" URL from Power BI here.
  const powerBiEmbedUrl = ""; // <-- PASTE YOUR POWER BI URL HERE

  return (
    <main className="w-full max-w-7xl mx-auto">
      <div className="bg-gray-800/50 rounded-xl shadow-2xl shadow-blue-500/10 ring-1 ring-white/10">
        {powerBiEmbedUrl ? (
          <iframe
            title="House Price Visualization and Prediction"
            className="w-full h-[85vh] rounded-lg border border-gray-700"
            src={powerBiEmbedUrl}
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        ) : (
          <div className="w-full h-[85vh] rounded-lg border border-gray-700">
            {/* This space is reserved for the Power BI dashboard. 
                It will load here once you paste the embed URL above. */}
          </div>
        )}
      </div>
    </main>
  );
};

const Footer = () => (
  <footer className="text-center w-full max-w-7xl mx-auto mt-8 pt-6 border-t border-gray-700">
    <p className="text-gray-400">Developed by Shreyas V</p>
    <div className="flex items-center justify-center space-x-6 mt-4">
      <a href="mailto:shreyasshreyu405@gmail.com" className="text-gray-400 hover:text-white transition-colors">
        <EmailIcon />
      </a>
      <a href="https://www.linkedin.com/in/shreyas-v2709/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
        <LinkedInIcon />
      </a>
      <a href="https://github.com/shreyas27092004" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
        <GitHubIcon />
      </a>
    </div>
    <p className="text-xs text-gray-500 mt-4">&copy; 2025 Housing Price Prediction. All Rights Reserved.</p>
  </footer>
);


// --- App Component ---

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300 font-sans flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
      <Header />
      <PowerBiDashboard />
      <Footer />
    </div>
  );
}
