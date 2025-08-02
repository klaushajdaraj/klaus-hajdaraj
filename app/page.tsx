"use client";
import Badge3D from '@/components/Badge3D';
import Terminal from '@/components/Terminal';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col w-full h-screen bg-black text-white overflow-hidden">
      {/* Header */}
      <header className="p-4 border-b border-custom-green text-center md:text-left">
        <h1 className="text-2xl font-bold text-custom-green font-mono">Klaus Hajdaraj</h1>
        <p className="text-sm text-gray-400 font-mono">Data Scientist</p>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* 3D Section - Left side (Hidden on mobile) */}
        <div className="w-2/5 hidden md:block border-custom-green border-r relative z-10">
          <div className="relative w-full h-full">
            <Badge3D />
          </div>
        </div>
        
        {/* Terminal Section - Right side (Full width on mobile) */}
        <div className="w-full md:w-3/5 overflow-auto relative">
          <Terminal />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
