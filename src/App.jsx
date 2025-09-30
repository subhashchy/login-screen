import React from "react";
import LoginForm from "@/components/LoginForm.jsx";

export default function App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background bg-login-bg bg-cover bg-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/70 via-background/80 to-accent/60 backdrop-blur-sm" aria-hidden="true"></div>
      <div className="relative z-10 flex flex-col items-center w-full px-4 py-12">
        <div className="mb-8 flex flex-col items-center animate-in fade-in slide-in-from-top-8 duration-700">
          <div className="flex items-center gap-2 mb-2">
            <svg width="36" height="36" viewBox="002424" fill="none" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" fill="#3B82F6" />
              <path d="M812h8M128v8" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <span className="text-2xl font-extrabold text-white drop-shadow">Secure Portal</span>
          </div>
          <span className="text-base text-white/80 font-medium">Welcome back! Please sign in to continue.</span>
        </div>
        <LoginForm />
        <footer className="mt-12 text-center text-xs text-white/80 animate-in fade-in slide-in-from-bottom-8 duration-700">
          &copy; {new Date().getFullYear()} Secure Portal. All rights reserved.
        </footer>
      </div>
    </main>
  );
}
