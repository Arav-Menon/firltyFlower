import React from 'react'

function Header() {
  return (
    <section id='header_container' className='relative '  >
        <ul id="header_menu" className='absolute left-0 top-14 tracking-wide text-post1color font-bold uppercases ml-16 text-1xl ' >
        <li className="uppercase font-black font-Font_1" >Intro</li>
        <li className='uppercase font-black font-Font_1' >About</li>
        <li className='uppercase font-black font-Font_1' >Featured</li>
        </ul>
        <div id="header_text" className='relative' >
            <h1 className='text-[17vw] font-bold text-center uppercase font-Font_2 leading-[250px] mt-15 text-post2color  ' >art <br/> objects</h1>
        </div> 
    </section>
  )
}

export default Header