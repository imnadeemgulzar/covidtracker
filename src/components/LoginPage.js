import React from 'react'
import { Link } from 'react-router-dom'
const LoginPage = () => {
  return (
    <div className='flex justify-center items-center bg-slate-400 h-screen flex-col'>
        <h1 className='font-bold text-4xl text-black mb-8'>Covid Tracker</h1>
      <div className='bg-blue-300 p-20 flex flex-col justify-center space-y-8 rounded-md'>
        <input type="text" placeholder='username' className='py-2 px-4 rounded-md'/>
        <input type="password" placeholder='password' className='py-2 px-4 rounded-md'/>
        <Link to = {"/StatesPage"} className="px-24">
        <button className=' rounded-md bg-slate-400 text-white text-2xl py-1 px-10'>Click</button>
        </Link>
      </div>
    </div>
  )
}

export default LoginPage
