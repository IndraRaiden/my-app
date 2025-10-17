"use client";

import Navbar from "@/components/overall/navbar";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-teal-500/10 to-transparent"></div>
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-emerald-500/30 rounded-full blur-[120px] animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-400/20 rounded-full blur-[100px]"></div>
      
      {/* Navigation */}
      <Navbar />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col pt-20">
        <section className="py-24 px-8">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium mb-6">
                About Us
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                We Build{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                  Digital Experiences
                </span>
              </h1>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Crafting innovative solutions that transform ideas into reality
                with cutting-edge technology and creative excellence.
              </p>
            </div>

            {/* About Content Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Mission Card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
                <p className="text-gray-400 leading-relaxed">
                  We're dedicated to pushing the boundaries of what's possible in
                  digital innovation. Our mission is to empower businesses with
                  transformative technology solutions that drive growth and success.
                </p>
              </div>

              {/* Vision Card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 group">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
                <p className="text-gray-400 leading-relaxed">
                  To be the leading force in digital transformation, creating
                  intuitive and powerful solutions that shape the future of
                  technology and enhance the way people interact with digital products.
                </p>
              </div>
            </div>

            {/* Values Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12">
                Our Core{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                  Values
                </span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Innovation */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-4xl mb-4">🚀</div>
                  <h4 className="text-xl font-semibold text-white mb-2">Innovation</h4>
                  <p className="text-gray-400 text-sm">
                    Constantly pushing boundaries and exploring new possibilities
                    to deliver cutting-edge solutions.
                  </p>
                </div>

                {/* Excellence */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-4xl mb-4">⭐</div>
                  <h4 className="text-xl font-semibold text-white mb-2">Excellence</h4>
                  <p className="text-gray-400 text-sm">
                    Committed to the highest standards of quality in everything
                    we create and deliver.
                  </p>
                </div>

                {/* Collaboration */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-emerald-500/30 transition-all duration-300 hover:transform hover:scale-105">
                  <div className="text-4xl mb-4">🤝</div>
                  <h4 className="text-xl font-semibold text-white mb-2">Collaboration</h4>
                  <p className="text-gray-400 text-sm">
                    Working together with our clients to achieve shared goals
                    and mutual success.
                  </p>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-6">
                Meet Our{" "}
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-500 bg-clip-text text-transparent">
                  Team
                </span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                A diverse group of talented individuals passionate about creating
                exceptional digital experiences and driving innovation forward.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300 hover:scale-105">
                Join Our Team
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
