import React from 'react'
import githubico from '../assets/github.svg'

const Footer = () => {
  return (
    <div className="absolute flex justify-between bottom-0 items-center w-full h-8 border-t border-gray-500/25">
        <div className="text-gray-500/70 pl-5">Created by
        <a href="https://gary-song.com" className="cursor-pointer hover:text-black duration-1000"> Gary Song</a> |
        <a href="https://github.com/garydsong/Death-Valley-Weather" className="cursor-pointer hover:text-black duration-1000"> GitHub</a> |
        <a href="https://www.linkedin.com/in/song-gary/" className="cursor-pointer hover:text-black duration-1000"> LinkedIn</a>
        </div>
        <div className="text-gray-500/70 pr-5">Tech stack: Next.js / Tailwind CSS / TypeScript</div>
    </div>
  )
}

export default Footer
