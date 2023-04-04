import React, { Children } from 'react'

export default function Features() {
  return (
    <section>
      <div className="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:flex-row md:space-y-0">

        {/* What's the difference section */}
        <div className='flex flex-col space-y-12 md:w-1/2'>
          <h1 className='max-w-md text-4xl font-bold text-center md:text-left'>
            What’s different about Manage?
          </h1>

          <p className='max-w-sm text-center text-darkGrayishBlue md:text-left'>
            Manage provides all the functionality your team needs, without
            the complexity. Our software is tailor-made for modern digital
            product teams.
          </p>
        </div>

        {/* Numbered List Section */}
        <div className='flex flex-col space-y-8 md:w-1/2'>

          {/* List 1 */}

          <Testom title='Track Company-wide progess' no='01'>
            See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.
          </Testom>



          {/* list 2 */}
          <Testom title='Advanced built-in reports' no='02'>
            Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.
          </Testom>


          {/* list 3 */}
          <Testom title='Everything you need in one place' no='03'>
            Stop jumping from one service to another to communicate, store files,
            Manage offers an all-in-one team
            productivity solution.
          </Testom>





        </div>
      </div>

    </section>
  )
}

function Testom(props) {
  return (
    <div className='flex flex-col space-y-4'>
      <div className='flex  items-center space-x-4 rounded-l-full bg-brightRedSupLight md:bg-transparent'>
        <div className='rounded-full bg-brightRed px-4 py-2 text-white'>{props.no}</div>
        <h3 className='text-base font-bold text-center'>{props.title}</h3>
      </div>

      <p className='max-w-md text-darkGrayishBlue md:text-left md:pl-16'>
        {props.children}
      </p>
    </div>
  )
}


