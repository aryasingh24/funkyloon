import React from 'react'
function Login() {
  return (
    <div className='min-h-screen bg-green-300 flex items-center justify-center'>
        <div className='bg-white w-[350px] p-6 rounded-lg shadow-md'> 
            <h1 className='text-center text-2xl text-green-700 mb-5'>Login </h1>
            <form action="index.php" method='get'>

         <div className='mb-4'> 
                <label className='block text-sm mb-1'>Email</label>
                <input type='email' placeholder='Enter email'required
                className='w-full px-3 py-2 border border-gray-300 rounded '/>
                </div>


                <div className='mb-4'> 
                <label className='block text-sm mb-1'>Password</label>
                <input type='password' placeholder="Enter password" required
                className='w-full px-3 py-2 border border-gray-300 rounded '/>
                </div>

                <button type='submit' 
                className="w-full py-2 bg-green-700 text-white rounded hover:bg-green-800 transition"
                >Login</button>
            <p className='text-center text-sm-mt-4'> 
                Don't have an account? 
                <a href='#' className='text-green-600 hover:underline'>Register</a>
            </p>
            </form>
        </div>
    </div>
  );
}

export default Login;
