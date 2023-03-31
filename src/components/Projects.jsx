import React from 'react';
import Projectitem from './Projectitem';
import COURAGEHOUSE2Img from '../assets/COURAGEHOUSE2.png'
import orb01redImg from '../assets/orb01red.png'
import snowglobe2Img from '../assets/snowglobe2.png'
import snobeglobefff4Img from '../assets/snowglobefff4.png'


const Projects = () => {
    return (
        
            <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-5 py-16 '>
                <h1 className='text-4xl text-center font-bold text-[#001b5e] '>Projects</h1>
                <p className='text-center py-8'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum odit ipsum quam sed a eligendi iure rem perferendis ullam saepe, unde quae magni quisquam rerum eius natus iste assumenda? Aliquam.
                </p>
                <div className='grid sm:grid-cols-2 gap-12'>
                    <Projectitem img={COURAGEHOUSE2Img} title='Courage House' />
                    <Projectitem img={orb01redImg} title='Magic orb' />
                    <Projectitem img={snowglobe2Img} title='Snowman' />
                    <Projectitem img={snobeglobefff4Img} title='Snow Globe' />
                </div>

            </div>


       
    );
}
 
export default Projects