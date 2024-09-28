import React from 'react';

const HomeServices = () => {
  return (
    <>


      <section className="bg-gray-100 py-10">
        <div className="container px-5 mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
              Our Services
            </h2>
            <div className="flex flex-wrap -m-4">
              
              {/* Card 1 */}
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl relative">
                  <img
                    alt="gallery"
                    className="w-full h-64 object-cover object-center rounded-t-2xl"
                    src="https://media.licdn.com/dms/image/v2/C4E0BAQGMkpd7khJwXA/company-logo_200_200/company-logo_200_200/0/1630443963930/jsgroupinternational_logo?e=2147483647&v=beta&t=mfovMkt0AqYjZzfCscTMAv1yzJxGENJdLzfZ9HvA1-Q"
                  />
                  <div className="p-6 absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-0 hover:bg-opacity-70 transition-opacity duration-300 opacity-0 hover:opacity-100 rounded-2xl">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                      THE SUBTITLE
                    </h2>
                    <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">
                      Shooting Stars
                    </h1>
                    <p className="leading-relaxed mb-3 text-center">
                      Explore the beauty of the stars with an incredible night view of the sky.
                    </p>
                    <button className="text-indigo-500 inline-flex items-center hover:text-indigo-700 transition duration-300 ease-in-out">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl relative">
                  <img
                    alt="gallery"
                    className="w-full h-64 object-cover object-center rounded-t-2xl"
                    src="https://d2jdgazzki9vjm.cloudfront.net/images/javascript/javascript_logo.png"
                  />
                  <div className="p-6 absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-0 hover:bg-opacity-70 transition-opacity duration-300 opacity-0 hover:opacity-100 rounded-2xl">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                      THE SUBTITLE
                    </h2>
                    <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">
                      Shooting Stars
                    </h1>
                    <p className="leading-relaxed mb-3 text-center">
                      Explore the beauty of the stars with an incredible night view of the sky.
                    </p>
                    <button className="text-indigo-500 inline-flex items-center hover:text-indigo-700 transition duration-300 ease-in-out">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl relative">
                  <img
                    alt="gallery"
                    className="w-full h-64 object-cover object-center rounded-t-2xl"
                    src="https://umbrellajs.com/umbrella.png?1"
                  />
                  <div className="p-6 absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-0 hover:bg-opacity-70 transition-opacity duration-300 opacity-0 hover:opacity-100 rounded-2xl">
                    <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                      THE SUBTITLE
                    </h2>
                    <h1 className="title-font text-lg font-semibold text-gray-900 mb-3">
                      Shooting Stars
                    </h1>
                    <p className="leading-relaxed mb-3 text-center">
                      Explore the beauty of the stars with an incredible night view of the sky.
                    </p>
                    <button className="text-indigo-500 inline-flex items-center hover:text-indigo-700 transition duration-300 ease-in-out">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8">
  <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
    Explore More Services
  </button>
</div>

          </div>
        </div>
      </section>
    </>
  );
};

export default HomeServices;
