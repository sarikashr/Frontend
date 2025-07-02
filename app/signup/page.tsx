// app/signup/page.tsx
"use client"; // This is a client component

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function SignupPage() {
  // State to manage whether it's an 'investor' or 'startup' signup
  const [signupType, setSignupType] = useState<"investor" | "startup">(
    "investor"
  );

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(`Submitting ${signupType} account details...`);
    // Here you would typically send data to your backend API
    // For example:
    // const formData = new FormData(e.currentTarget);
    // const data = Object.fromEntries(formData.entries());
    // console.log(data);
    alert(`Successfully created ${signupType} account! (Check console for data)`);
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-4">
      {/* Header with logo - Positioned at the top */}
      
      

      {/* Main Signup Form Card */}
      <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8 sm:p-12 w-full max-w-2xl mx-auto my-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Create Your Account
          </h1>
          <p className="text-gray-600">
            Join the premier investment platform
          </p>
        </div>

        {/* Investor/Startup Toggle Buttons */}
        <div className="flex justify-center mb-8 bg-gray-100 rounded-full p-1 shadow-inner">
          <button
            type="button"
            onClick={() => setSignupType("investor")}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300
              ${
                signupType === "investor"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-blue-100"
              }`}
          >
            <span className="mr-2">👤</span> Investor
          </button>
          <button
            type="button"
            onClick={() => setSignupType("startup")}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-all duration-300
              ${
                signupType === "startup"
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-700 hover:bg-blue-100"
              }`}
          >
            <span className="mr-2">🚀</span> Startup
          </button>
        </div>

        {/* The Signup Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Common Fields */}
          <div>
            <label htmlFor="email" className="block text-sm font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
              required
            />
          </div>

          {/* Conditional Fields for Investor */}
          {signupType === "investor" && (
            <>
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="Enter your first name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                  required
                />
              </div>
              <div>
                <label htmlFor="investmentFirm" className="block text-sm font-semibold mb-2">
                  Investment Firm
                </label>
                <input
                  type="text"
                  id="investmentFirm"
                  name="investmentFirm"
                  placeholder="e.g., Venture Capital Inc."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="investmentRange" className="block text-sm font-semibold mb-2">
                  Investment Range
                </label>
                <input
                  type="text"
                  id="investmentRange"
                  name="investmentRange"
                  placeholder="e.g., $100k - $1M"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                />
              </div>
              <div className="md:col-span-2"> {/* Make this span both columns */}
                <label htmlFor="preferredSectors" className="block text-sm font-semibold mb-2">
                  Preferred Sectors
                </label>
                <input
                  type="text"
                  id="preferredSectors"
                  name="preferredSectors"
                  placeholder="e.g., AI, Fintech, Healthcare (comma-separated)"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                />
              </div>
            </>
          )}

          {/* Conditional Fields for Startup */}
          {signupType === "startup" && (
            <>
              <div>
                <label htmlFor="founderName" className="block text-sm font-semibold mb-2">
                  Founder Name
                </label>
                <input
                  type="text"
                  id="founderName"
                  name="founderName"
                  placeholder="Enter founder's name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                  required
                />
              </div>
              <div>
                <label htmlFor="startupName" className="block text-sm font-semibold mb-2">
                  Startup Name
                </label>
                <input
                  type="text"
                  id="startupName"
                  name="startupName"
                  placeholder="Enter startup's name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                  required
                />
              </div>
              <div>
                <label htmlFor="industrySector" className="block text-sm font-semibold mb-2">
                  Industry Sector
                </label>
                <input
                  type="text"
                  id="industrySector"
                  name="industrySector"
                  placeholder="e.g., SaaS, E-commerce, Biotech"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                />
              </div>
              <div>
                <label htmlFor="fundingStage" className="block text-sm font-semibold mb-2">
                  Funding Stage
                </label>
                <input
                  type="text"
                  id="fundingStage"
                  name="fundingStage"
                  placeholder="e.g., Seed, Series A, Growth"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
                />
              </div>
              <div className="md:col-span-2"> {/* Make this span both columns */}
                <label htmlFor="companyDescription" className="block text-sm font-semibold mb-2">
                  Company Description
                </label>
                <textarea
                  id="companyDescription"
                  name="companyDescription"
                  placeholder="Briefly describe your company (max 200 words)"
                  rows={3}
                  maxLength={200}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow resize-y"
                ></textarea>
              </div>
            </>
          )}

          {/* Submit Button - Spans full width */}
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all shadow-md hover:shadow-lg"
            >
              Create {signupType === "investor" ? "Investor" : "Startup"} Account
            </button>
          </div>
        </form>

        {/* Already have an account? Sign in */}
        <p className="text-center text-gray-600 mt-8">
          Already have an account?{" "}
          <Link
            href="/login" // Link to your login page
            className="text-blue-500 hover:text-blue-600 font-medium transition-colors"
          >
            Sign in
          </Link>
        </p>
      </div>
    </main>
  );
}