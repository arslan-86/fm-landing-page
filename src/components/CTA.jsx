import React from 'react'

function CTA() {
  return (
    <section className=' bg-brightRed mt-24'>
      <div className='container px-6 py-24 mx-auto flex flex-col items-center justify-between space-y-12 md:py-12 md:flex-row md:space-y-0 '>
      <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
         Simplify how your team works today
      </h2>

      <a href="#"
         className='p-4 px-6 text-brightRed bg-white rounded-full shadow-2xl hover:bg-gray-300'
         >Get Started</a>
      </div>
      
    </section>
  )
}

export default CTA