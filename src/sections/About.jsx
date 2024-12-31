import React, { useState } from 'react';
import Globe from 'react-globe.gl';

const About = () => {
  const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)], ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]]
  }));
  const [hascopied,sethascopied]= useState(false);

  const handleCopy = ()=>{
    navigator.clipboard.writeText(
      "vishalkuamr918@gmail.com"
    )
    sethascopied(true)
    setTimeout(()=>{
      sethascopied(false)
    },2000)
  }
  return (
    <section id='about' className='c-space my-20'> 
        <div className='grid xl:grid-cols-3
         xl:grid-rows-6
         md:grid-cols-2
         md:grid-rows-1
         gap-5 h-full'>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                  <img src="/assets/grid1.png" alt='grid'
                  className='w-full sm:h-[276] h-fit object-contain'
                  />
                  <div>
                    <p className='grid-headtext'>
                      Hi,I'm Vishal</p>
                      <p className='grid-subtext'>
                        I'm a fresher Who have a passion
                         for coding and learning new things.
                      </p>
                  </div>
                </div>
            </div>
            <div className='col-span-1 xl:row-span-3'>
              <div className='grid-container'>
                <img src="/assets/grid2.png" alt='grid-2'
                className='w-full sm:w-[276px] h-fit object-contain'
                />
                 
                <div>
                  <p className='grid-headtext'>
                    TECH STACK
                  </p>
                  <p className='grid-subtext'>
                    I specialize in Javascript/Node.js with a foucs on React and MongoDB.
                    alot of <b>JS</b> Libary.                  </p>
                </div>

              </div>

            </div>
            <div className='col-span-1 xl:row-span-3'>
              <div className='grid-container'>
                <div className='rounded-3xl w-full sm:h-[326] h-fit
                 flex justify-center items-center '>
                  <Globe 
                  height={326}
                  width={326}
                  animateIn={true}
                  atmosphereColor="lightskyblue"
                   globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                   arcsData={arcsData}
                   arcColor={'color'}
                   arcDashLength={() => Math.random()}
                   arcDashGap={() => Math.random()}
                   arcDashAnimateTime={() => Math.random() * 4000 + 500}
                  />
                 </div>
                 <div>
                  <p className='grid-headtext'>
                    I work remotely across the globe
                  </p>
                  <p className='grid-subtext'>
                    I'm based from in India and work with clients from all over the world.
                  </p>
                  {/* <button name="Contact Me" 
                  isBeam containerClass="w-full mt-10" /> */}
                 </div>
              </div>
            </div>

            <div className='col-span-2 xl:row-span-3'>
              <div className='grid-container'>
                <img src='/assets/grid3.png' alt='grid-3'
                className='w-full sm:w-[276px] h-fit object-contain'
                />
                <div>
                  <p className='grid-headtext'>
                    My passion for coding and Engineering
                  </p>
                  <p className='grid-subtext'>
                    I love Solving problems and building new things. 
                    I'm always looking for new challenges and ways to improve my skills
                -Enginnering is my passion and I love to learn new things.
                  </p>
                </div>
              </div>
            </div>

            <div id='contact' className='xl:col-span-1 xl:row-span-2'>
              <div className='grid-container'>
                <img src='/assets/grid4.png' alt='grid-4'
                className='w-full md:w-[126px] sm:w-[276] sm:object-top h-fit object-contain'
                />
                <div className='space-y-2'>
                  <p className='grid-subtext text-center'>Contact me</p>
                  <div className='copy-container' onClick={handleCopy}>
                       <img src={hascopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt='copy' />
                       <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>vishalkuamr918@gmail.com</p>

                  </div>
                </div>
              </div>

            </div>

        </div>
      
    </section>
  );
}

export default About;
