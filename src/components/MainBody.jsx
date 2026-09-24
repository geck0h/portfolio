import TextSection from './TextSection.jsx';
import Hyperlink from './Hyperlink.jsx';

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";


const MainBody = () => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText("pvl.martin@proton.me");
  };

  return(
    <div className='flex max-md:flex-col w-full font-p'>
      <div className='absolute top-0 left-0 z-10 border-b-2 border-black w-full h-55 max-sm:h-50'></div>
      <div className='flex-1 max-lg:flex-0 h-dvh' />
      <div className='flex-3 h-dvh pt-30 max-lg:pl-2'>
        <h1 className='relative -left-2 text-8xl max-sm:text-7xl mb-5 text-gray-400 tracking-widest font-light font-main-heading select-none'>Martin</h1>
        <p className='text-xl font-bold'>I learn and use any technologies to create what I'm passionate for.</p>
        <p className='text-xl mb-2'>I'm currently a second year software engeneering student @ <Hyperlink src='https://finki.ukim.mk/en/'>FINKI</Hyperlink>, Skopje MK.</p>
        <div className='flex gap-4 items-center justify-start justify-items-evenly w-auto h-20'>
          <a href='https://github.com/geck0h' target='_blank'rel='noopener noreferrer'><FaGithub className='transition-all ease mb-5 h-10 w-10 hover:scale-110 text-blue-400 hover:text-blue-600' /></a>
          <a onClick={handleCopy} rel='noopener noreferrer'><IoMail className='transition-all ease mb-5 h-10 w-10 hover:scale-110 text-blue-400 hover:text-blue-600' /></a>
          <a href='https://github.com/geck0h' target='blank' rel='noopener noreferrer'><FaLinkedin className='transition-all ease mb-5 h-10 w-10 hover:scale-110 text-blue-400 hover:text-blue-600' /></a>
        </div>
        <TextSection title='About'>Hello! <br />I'm Martin. In my free time I like to read books, enhance my programming skills and go to the gym. My philosophy is that working hard all the time gives you the most enjoyment in life, so that's what I strive to do.</TextSection>
        <TextSection title='Expirience'>I work on both back and front end. Some of the technologies I use in my web projects are <Hyperlink src='https://react.dev/'>React</Hyperlink>, <Hyperlink src='https://tailwindcss.com/'>TailwindCSS</Hyperlink>, <Hyperlink src='https://ui.shadcn.com/'>shadcn ui</Hyperlink> and <Hyperlink src='https://nginx.org/'>nginx</Hyperlink>.<br /> I also like to poke around at C++ game development using <Hyperlink src='https://www.opengl.org/'>OpenGL</Hyperlink>.</TextSection>
      </div>
      <div className='flex-2 max-md:flex-1 max-sm:w-full flex flex-col h-dvh min-h-dvh bg-linear-to-br from-white to-blue-400'>
      </div>
      <div className='flex-1 max-lg:flex-0' />
    </div>
  );
};

export default MainBody;