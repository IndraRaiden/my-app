export default function Two() {
  return (
    <section className="py-20 px-8 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-sm font-semibold text-emerald-400 mb-4 tracking-wider uppercase">
              About Us
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              We Create Digital Experiences That Matter
            </h3>
            <p className="text-lg text-gray-400 mb-6 leading-relaxed">
              With over a decade of experience, we specialize in crafting innovative digital solutions 
              that drive results. Our team combines creativity with technical expertise to deliver 
              exceptional experiences for businesses of all sizes.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              From startups to enterprises, we've helped hundreds of clients transform their vision 
              into reality through cutting-edge design and development.
            </p>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300">
                Our Story
              </button>
              <button className="px-6 py-3 bg-white/5 backdrop-blur-sm text-white rounded-full font-semibold border border-white/10 hover:bg-white/10 transition-all duration-300">
                Meet the Team
              </button>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="grid gap-6">
            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Innovation First</h4>
              <p className="text-gray-400">
                Leveraging the latest technologies to build future-proof solutions
              </p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Client-Centered</h4>
              <p className="text-gray-400">
                Your success is our priority. We work closely with you every step of the way
              </p>
            </div>

            <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Quality Assured</h4>
              <p className="text-gray-400">
                Rigorous testing and attention to detail in everything we deliver
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">500+</div>
              <div className="text-sm text-gray-500">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400 mb-2">50+</div>
              <div className="text-sm text-gray-500">Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">10+</div>
              <div className="text-sm text-gray-500">Years</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400 mb-2">100%</div>
              <div className="text-sm text-gray-500">Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
