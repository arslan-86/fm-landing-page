import React  from 'react'
import Anisha from '../assets/avatar-anisha.png';
import Ali from '../assets/avatar-ali.png';
import Richard from '../assets/avatar-richard.png';

function Testomonials() {
  return (
    <section className='max-w-6xl mt-32 mx-auto'>
      <h2 className='text-4xl font-bold text-center'>
        What's Different About Manage?
      </h2>

      <div className='flex flex-col space-y-12 mt-24 md:space-y-0 md:flex-row md:space-x-6'>
        <Card avatar={Anisha} name='Anisha Li'>
          “Manage has supercharged our team’s workflow. The ability to maintain
          visibility on larger milestones at all times keeps everyone motivated.”
        </Card>
        <Card avatar={Ali} name='Ali Bravo'>
          “We have been able to cancel so many other subscriptions since using
          Manage. There is no more cross-channel confusion and everyone is much
          more focused.”
        </Card>
        <Card avatar={Richard} name='Richard Watts'>
          “Manage allows us to provide structure and process. It keeps us organized
          and focused. I can’t stop recommending them to everyone I talk to!”
        </Card>

      </div>
    </section>
  )
}

function Card(props) {
  return (
    <div className="flex flex-col items-center p-6 space-y-6 rounded-lg bg-veryLightGray md:w-1/3">
      <img src={props.avatar} className='w-16 -mt-14' alt="" />
      <h5 className='text-lg font-bold'>{props.name}</h5>
      <p className="text-sm text-center text-darkGrayishBlue">
        {props.children}
      </p>

    </div>
  )
}

export default Testomonials