// This components renders a video

import React from 'react'

export interface VideoProps {
  name?: string
  src: string
  description?: string
}

export const Video: React.FC<VideoProps> = ({ src }) => {
  return (
    <div className='video'>
      <video src={src} controls />
    </div>
  )
}

export default Video;