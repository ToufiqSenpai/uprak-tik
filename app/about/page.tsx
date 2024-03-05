import React from 'react'

function AboutPage() {
  return (
    <div className='pt-10 grid grid-cols-2'>
      <div className='space-y-7 text-base text-zinc-600 text-justify'>
        <h1 className='text-4xl font-bold text-start'>{"I'm Muhammad Taufiqurrahman. I live in Jakarta, where I design the future."}</h1>
        <p>
          {"I’ve loved making things for as long as I can remember, and wrote my first program when I was 6 years old, just two weeks after my mom brought home the brand new Macintosh LC 550 that I taught myself to type on."}
        </p>
        <p>
         {"The only thing I loved more than computers as a kid was space. When I was 8, I climbed the 40-foot oak tree at the back of our yard while wearing my older sister’s motorcycle helmet, counted down from three, and jumped — hoping the tree was tall enough that with just a bit of momentum I’d be able to get to orbit."}
        </p>
        <p>
          {"I spent the next few summers indoors working on a rocket design, while I recovered from the multiple surgeries it took to fix my badly broken legs. It took nine iterations, but when I was 15 I sent my dad’s Blackberry into orbit and was able to transmit a photo back down to our family computer from space."}
        </p>
        <p>
          {"Today, I’m the founder of Planetaria, where we’re working on civilian space suits and manned shuttle kits you can assemble at home so that the next generation of kids really can make it to orbit — from the comfort of their own backyards."}
        </p>
      </div>
      <div className='max-w-xs px-2.5 lg:max-w-none ml-8'>
        <img className='aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800' src='https://source.unsplash.com/person-sitting-on-gaming-chair-while-playing-video-game-Mf23RF8xArY' />
      </div>
    </div>
  )
}

export default AboutPage