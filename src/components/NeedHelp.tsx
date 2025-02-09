const NeedHelp = () => {
    return (
      <section className="py-16 bg-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need Help?
            </h2>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Our support team is here to assist you with any questions or issues you may have.
            </p>
            
            <div className="space-y-2 mb-8">
              <a 
                href="mailto:support@focusapp.com" 
                className="text-[#a47ccf] hover:text-[#9f71cf] text-lg font-medium transition-colors"
              >
                vihanganethusara00@gmail.com.com
              </a>
            </div>
  
            <button className="bg-[#a47ccf] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#9e6fcf] transition-colors shadow-sm">
              Contact Support
            </button>
          </div>
        </div>
      </section>
    )
  }
  
  export default NeedHelp