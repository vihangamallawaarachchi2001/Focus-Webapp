const HowToFocus = () => {
    return (
      <section className="py-16 bg-transparent" id="how-to-use">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How to Use <span className="text-[#a47ccf]">Focus</span>
          </h2>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex items-center justify-center flex-col">
              <div className="w-14 h-14 bg-[#a47ccf] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Download the App
              </h3>
              <p className="text-gray-600">
                Get Focus from the Google Play Store
              </p>
            </div>
  
            {/* Step 2 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow  flex items-center justify-center flex-col">
              <div className="w-14 h-14 bg-[#a47ccf] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Create Your Account
              </h3>
              <p className="text-gray-600">
                Sign up and personalize your profile
              </p>
            </div>
  
            {/* Step 3 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow  flex items-center justify-center flex-col">
              <div className="w-14 h-14 bg-[#a47ccf] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Add Your Tasks
              </h3>
              <p className="text-gray-600">
                Start adding your to-dos and set priorities
              </p>
            </div>
  
            {/* Step 4 */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow  flex items-center justify-center flex-col">
              <div className="w-14 h-14 bg-[#a47ccf] text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Stay Focused
              </h3>
              <p className="text-gray-600">
                Complete tasks and track your progress
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default HowToFocus