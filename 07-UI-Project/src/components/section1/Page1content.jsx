import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = (props) => {
  console.log(props.user);
  
  return (
    <div className='pt-6 pb-16 px-10 flex items-center gap-10 h-[90vh] '>
        <Leftcontent />
        <Rightcontent users={props.users}/>
    </div>
  )
}

export default Page1content
