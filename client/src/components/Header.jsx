import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='bg-slate-500'>
        <div className='flex justify-between items-center max-w-6xl mx-auto p-3'>
            <Link to='/'>
            <h1 className='font-bold'>Auth APP</h1>
            </Link>
            <ul className='flex gap-4 '>
              <Link to='/'>
                <li>Home</li>
              </Link>
              <Link to='/about'>
                <li>About</li>
              </Link>
              <Link to='/sign-in'>
                <li>Sign In</li>
              </Link>
              <Link to='/sign-up'>
                <li>Sign Up</li>
              </Link>
            </ul>
        </div>
    </div>
  )
}
