import React from 'react'
import Buttonlist from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className=' flex flex-col'>
      <Buttonlist></Buttonlist>
      <VideoContainer></VideoContainer>
    </div>
  )
}

export default MainContainer
