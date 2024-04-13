import React from 'react'
import storyBanner from '../../assets/images/about-01-theme-min1668533426.jpg'
import Container from '../../components/shared/Container'
const OurStory = () => {
  return (
<div className='mt-14 md:mt-24'>
<Container>
        <div className='flex flex-col md:flex-row gap-0 items-center justify-between'>
            <div className='flex-1'>
                <img className='w-full mb-10 md:mb-0 lg:w-[90%]' src={storyBanner} alt="" />
            </div>
            <div className='flex-1'>
                <h1 className='text-5xl font-medium text-heading mb-7'>Our Story</h1>
                <p className='text-base font-normal text-pera'>
                Mutley, you snickering, floppy eared hound. When courage is needed, you’re never around. Those medals you wear on your moth-eaten chest should be there for bungling at which you are best. So, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon. Howwww! Nab him, jab him, tab him, grab him, stop that pigeon now. Mutley, you snickering, floppy eared hound. When courage is needed, you’re never around. Those medals you wear on your moth-eaten chest should be there for bungling at which you are best. So, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon, stop that pigeon. Howwww! Nab him, jab him, tab him, grab him, stop that pigeon now.
                </p>
            </div>

        </div>
    </Container>
</div>
  )
}

export default OurStory