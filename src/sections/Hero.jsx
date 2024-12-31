import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense } from 'react';
import HackerRoom from '../components/HackerRoom';
import CanvasLoader from '../components/CanvasLoader';
import Target from '../components/Target';
import ReactLogo from '../components/ReactLogo';
import Cube from '../components/Cube';
import Rings from '../components/Ring';

export default function Hero() {
    
    
  return (
    <section id='home' className='min-h-screen w-full flex flex-col relative'>
        <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm:text-3xl text-xl font-medium text-white text-center
             font-generalsans'>
                Hi! I'm Vishal <span className='waving-hand'>👋</span></p>
                <p className='hero_tag text-gray_gradient'>Building Ideas & Solutions</p>
        </div>
        <div className='w-full h-full absolute inset-0'>
        
            <Canvas className='w-full h-full'>
                <Suspense fallback={<CanvasLoader/>}>
                <PerspectiveCamera makeDefault position={[0,0,30]} />
                <HackerRoom
                 scale={0.1} 
                position={[1.9,-8.5,-1.3]}
                 rotation={[0.3,-3.3,-6.3]}
                />

                <group>
                   <Target position={[-16,-10,-4]} />
                   <ReactLogo />
                   <Cube position={[12,-8,1]} />
                   <Rings position={[-20,16,1]}/>
                </group>
        
                <ambientLight intensity={1} />
                <directionalLight position={[10,10,10]} intensity={0.5}/>                </Suspense>
            </Canvas>
        </div>
    </section>
  );
}
