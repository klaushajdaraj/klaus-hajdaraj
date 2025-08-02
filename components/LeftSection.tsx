"use client";
import Badge3D from './Badge3D';

export default function LeftSection() {
  return (
    <div className="flex-1 bg-black text-custom-green p-8 flex flex-col">
      {/* Name and Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-custom-green mb-2">
          Klaus Hajdaraj
        </h1>
        <p className="text-lg text-custom-green/90">
          Data Scientist
        </p>
      </div>

      {/* 3D Badge */}
      <div className="flex-1 flex items-center justify-center w-full">
        <div className="w-full h-[600px] max-w-[600px]">
          <Badge3D />
        </div>
      </div>
    </div>
  );
} 