import React from 'react';
import Workitem from './Workitem';

const data = [
    {
        year: 2015,
        title: 'Blender',
        duration: '3 years',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi erat, lacinia aliquet lacus non, iaculis dapibus leo. Morbi enim sapien, pharetra vel mi at, iaculis tincidunt mauris. Mauris hendrerit erat ac congue sollicitudin. '
    },
    {
        year: 2015,
        title: 'Blender',
        duration: '3 years',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi erat, lacinia aliquet lacus non, iaculis dapibus leo. Morbi enim sapien, pharetra vel mi at, iaculis tincidunt mauris. Mauris hendrerit erat ac congue sollicitudin. '
    },
    {
        year: 2015,
        title: 'Blender',
        duration: '3 years',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi erat, lacinia aliquet lacus non, iaculis dapibus leo. Morbi enim sapien, pharetra vel mi at, iaculis tincidunt mauris. Mauris hendrerit erat ac congue sollicitudin. '
    },
    {
        year: 2015,
        title: 'Blender',
        duration: '3 years',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mi erat, lacinia aliquet lacus non, iaculis dapibus leo. Morbi enim sapien, pharetra vel mi at, iaculis tincidunt mauris. Mauris hendrerit erat ac congue sollicitudin. '
    }
]
const Work = () => {
    return (<div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>

        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx) => (
            <Workitem key={idx} year={item.year} title={item.title} duration={item.duration} details={item.details} />

        ))}

    </div>);
}

export default Work;