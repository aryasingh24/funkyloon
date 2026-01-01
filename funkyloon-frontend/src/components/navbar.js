import React from 'react'
class Navbar extends React.Component {
    state = {  } 
    render() { 
        return(
           

<>  

<nav className="font-maple bg-white border-b text-green-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16 items-center">

    

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center ">
            <a href="#" className="font-medium">
              Home
            </a>
            <a href="#" className=" hover:text-green-700">
              About 
            </a>

            <div className=" hover:text-green-700">
            Contact  
            </div>


            {/* Dropdown */}
            <div className="relative group">
              <button className=" hover:text-green-700">
                T-shirts
              </button>

              <div className="absolute hidden group-hover:block bg-white shadow-md rounded mt-2 w-40">
                <a href="#" className="block px-4 py-2 hover:bg-green-700">
                  Plain
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-green-700">
                  Straps
                </a>
                <hr />
                <a href="#" className="block px-4 py-2 hover:bg-green-700">
                  colourful
                </a>
              </div>
            </div>

           
          </div>
      {/* Logo */}
          <a href="#" className=" text-3xl font-bold  text-green-950">
          Funkyloon
          </a>


          {/* Search */}
          <div className="hidden md:flex">
            <input
              type="text"
              placeholder="Search"
              className="border rounded-l px-3 py-1"
            />
            <button className="border border-l-0 px-3 py-1 rounded-r  hover:bg-green-700 bg-green-950 text-white">
              Search
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden ">
            ☰
          </button>

        </div>
      </div>
    </nav>


{/* bg-color*/ }
<div>
</div>

</>
        );

    }
}
 
export default Navbar
