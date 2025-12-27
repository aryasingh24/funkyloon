import React from 'react'
class Navbar extends React.Component {
    state = {  } 
    render() { 
        return(
           


<nav className="font-maple bg-blue-400 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">

    

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="#" className="text-blue-600 font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Link
            </a>

            {/* Dropdown */}
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600">
                Dropdown
              </button>

              <div className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2 w-40">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Action
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Another action
                </a>
                <hr />
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Something else
                </a>
              </div>
            </div>

            <span className="text-gray-400 cursor-not-allowed">
              Disabled
            </span>
          </div>
      {/* Logo */}
          <a href="#" className="font-logo text-3xl font-bold  text-indigo-800">
          Funkyloon
          </a>
          {/* Search */}
          <div className="hidden md:flex">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-l px-3 py-1"
            />
            <button className="border border-l-0 px-3 py-1 rounded-r text-blue-600 hover:bg-green-50">
              Search
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden">
            ☰
          </button>

        </div>
      </div>
    </nav>

        );

    }
}
 
export default Navbar
