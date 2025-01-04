import React,{ useState } from "react";

export default function Signup() {
  const [isWriter, setIsWriter] = useState(false);

  const toggleForm = () => {
    setIsWriter(!isWriter); // Toggle between the user and writer forms
  };

  return (
    <div className=" mx-auto p-6 bg-gray-100 border rounded-lg shadow-md" >
      <div className="flex justify-center mb-6">
        
        {/* Toggle Buttons */}
        <button
          onClick={toggleForm}
          className={`py-2 px-4 w-1/2 text-white font-semibold rounded-l-lg ${
            !isWriter ? 'bg-blue-500' : 'bg-gray-300'
          }`}
        >
          User
        </button>
        <button
          onClick={toggleForm}
          className={`py-2 px-4 w-1/2 text-white font-semibold rounded-r-lg ${
            isWriter ? 'bg-blue-500' : 'bg-gray-300'
          }`}
        >
          Writer
        </button>
      </div>

      {/* Form Container */}
      <div>
        {isWriter ? (
          <div className="flex flex-col md:flex-row h-screen ">
          <div className="flex-1 flex flex-col justify-top px-6 sm:px-10 py-6">
            <div className="max-w-md w-full mx-auto">
              <button className="text-gray-400 mb-6"></button>
            
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Nom
                  </label>
                  <input
                    type="text"
                    placeholder="Enter votre nom"
                    className="text-sm w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Prenom
                    </label>
                    <input
                      type="prenom"
                      placeholder="Enter votre prenom"
                      className="text-sm w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter votre email"
                    className="text-sm w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    placeholder="Enter votre mot de passe"
                    className="text-sm w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Selectioné votre nationalité:
                  </p>
                  <select
                    className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="nationality"
                  >
                    <option  value="" disabled selected>
                      votre nationalité
                    </option>
                    <option value="american">American</option>
                    <option value="canadian">Canadian</option>
                    <option value="french">French</option>
                    <option value="algerian">Algerian</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col md:flex-row space-x-4">
                <div className="mb-4">
                  <label
                    htmlFor="impo"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Upload CV
                  </label>
                  <input
                    type="file"
                    id="fileUpload"
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:text-blue-600 file:bg-gray-50 hover:file:bg-gray-100"
                    multiple
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="impo"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Upload Certificate
                  </label>
                  <input
                    type="file"
                    id="fileUpload"
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border file:border-gray-300 file:text-blue-600 file:bg-gray-50 hover:file:bg-gray-100"
                    multiple
                  />
                </div>
                </div>
                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Are you in the medical field?
                  </p>
                  <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="cvReady"
                        value="yes"
                        className="h-4 w-4 text-blue-600 border-gray-300"
                      />
                      <span className="text-sm text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="cvReady"
                        value="no"
                        className="h-4 w-4 text-blue-600 border-gray-300"
                      />
                      <span className="text-sm text-gray-700">No</span>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white p-2 border rounded-lg font-medium hover:bg-blue-700 shadow-md"
                >
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
        ) : (
          <div className="flex flex-col md:flex-row h-screen ">
          <div className="flex-1 flex flex-col  px-6 sm:px-10 py-6">
            <div className="max-w-md w-full mx-auto">
              <button className="text-gray-400 mb-6"></button>
              
              <form>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Nom
                  </label>
                  <input
                    type="text"
                    placeholder="Enter votre nom"
                    className="text-sm w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">
                      Prenom
                    </label>
                    <input
                      type="prenom"
                      placeholder="Enter votre prenom"
                      className="text-sm w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter votre email"
                    className="text-sm w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700">
                    Mot de passe
                  </label>
                  <input
                    type="password"
                    placeholder="Enter votre mot de passe"
                    className="text-sm w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-700 text-white p-2 border rounded-lg font-medium hover:bg-blue-700 shadow-md"
                >
                  Signup
                </button>
              </form>
              
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  );
}