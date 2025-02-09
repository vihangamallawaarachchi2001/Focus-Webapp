const Hero = () => {
    return (
      <section className="bg-transparent py-16 md:py-24" id="download">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center md:text-left grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Stay Focused with <span className="text-[#a47ccf]">Focus</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                A simple and elegant to-do list app to boost your productivity and help you stay on track.
              </p>
  
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button 
                  type="button" 
                  className="bg-[#a47ccf] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#825bac] transition-colors shadow-sm"
                >
                  Download for Android
                </button>
                <button 
                  type="button" 
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:border-[#825bac] hover:text-[#825bac] transition-colors"
                >
                  iOS Coming Soon
                </button>
              </div>
            </div>
  
            {/* Video & QR Section */}
            <div className="relative">
              <div className="bg-gray-100 rounded-xl shadow-lg aspect-video overflow-hidden">
                <video 
                  src="/demo-video.mp4" 
                  className="w-full h-full object-cover"
                  controls
                />
              </div>
  
              {/* QR Code Container */}
              <div className="absolute -bottom-8 right-0 bg-white p-4 rounded-lg shadow-md border border-gray-100">
                <div className="text-center space-y-2">
                  <img 
                    src="/qr-code-placeholder.png" 
                    alt="Download QR Code" 
                    className="w-32 h-32 mx-auto border-2 border-dashed border-gray-200 rounded-lg" 
                  />
                  <p className="text-sm text-gray-600 font-medium">Scan to Download</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Hero