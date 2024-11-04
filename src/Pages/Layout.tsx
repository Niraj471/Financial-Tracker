import Navbar from '@/components/molecule/Navbar'
import { auth } from '@/firebase/firebase'
import { useEffect} from 'react'
import {  Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
  const navigate =useNavigate()
  useEffect(()=>{
    if(!auth.currentUser){

      navigate('/login')
    }
  },[auth.currentUser])

  return (
    <> 
    <main className='sm:grid grid-cols-[200px_minmax(900px,_1fr)] '>
    <Navbar></Navbar>
    <div className='w-full p-8 relative z-10'>
    <Outlet></Outlet>
    </div>
    </main>
    </>
  )
}

export default Layout
