import { Button } from '@/components/ui/button'
import React from 'react'

function WelcomeBanner() {
  return (
     <div className='p-5 bg-gradient-to-r from-[#BE575F] via-[#A338E3] to-[#AC76D6] rounded-xl'>
  <h2 className='font-bold text-2xl text-white'>AI Career Coach Agent</h2>
  <p className='text-white'>Get started with your AI career today!</p>
  <Button variant={'outline'} className='mt-3'>Let's get started</Button>
</div>

  )
}


export default WelcomeBanner