import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaFacebook ,FaInstagram,FaLinkedinIn,FaTwitter} from 'react-icons/fa'
const Main = () => {
    return (<div id='main'>
        <img className='w-full h-screen object-cover object-left scale-x-[-1]' src="https://images.unsplash.com/photo-1679768041002-eae8f0e60094?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fENEd3V3WEpBYkV3fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/20'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center '>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Siddh Ahire</h1>
                <h2 className='flex sm:text-3xl text-2xl'> I'm a
                    <TypeAnimation
                        sequence={[
                            'Developer', // Types 'One'
                            2000, // Waits 1s
                            '3D Artist', // Deletes 'One' and types 'Two'
                            2000, // Waits 2s

                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ fontSize: '1em', display: 'inline-block', paddingLeft: '5px' }}
                    />
                </h2>
                <div className='flex justify-between pt-6 max-w-[170px] w-full'>
                    <FaInstagram  className='cursor-pointer' size={20}/>
                    <FaFacebook className='cursor-pointer' size={20} />
                    <FaTwitter  className='cursor-pointer' size={20} />
                    <FaLinkedinIn   className='cursor-pointer' size={20}/>
                </div>
            </div>

        </div>
    </div>);
}

export default Main;