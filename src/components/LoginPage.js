import React from 'react'
import { Link } from 'react-router-dom'
const LoginPage = () => {
  return (
    <div className='flex justify-center items-center bg-stone-700 h-screen flex-col'>
        <h1 className='font-bold text-4xl text-stone-700 mb-2 bg-green-100 px-24 py-2 rounded-t-3xl'>Live Covid Tracker</h1>
      <div className='bg-green-200 p-20 flex flex-col justify-center space-y-8 rounded-md'>
        <input type="text" placeholder='username' className='py-2 px-4 rounded-md' autoComplete='off'/>
        <input type="password" placeholder='password' className='py-2 px-4 rounded-md'/>
        <Link to = {"/StatesPage"} className="px-24">
        <button className=' rounded-md bg-stone-700 text-white text-2xl py-1 px-10'>CLICK</button>
        </Link>
      </div>
    </div>
  )
}

export default LoginPage
