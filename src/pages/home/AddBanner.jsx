import React from 'react'
import Container from '../../components/shared/Container'
import Peragraph from '../../components/shared/Peragraph'
import OutlineButton from '../../components/shared/OutlineButton'
import Banner from '../../assets/images/arrival11669021970.png'
const AddBanner = () => {
    return (
        <div className='mt-16'>
            <Container>
                <div className='flex flex-col md:flex-row justify-between items-center gap-10 bg-bg px-10 py-12'>
                    <div className='flex-1'>
                    <img src={Banner} alt="" />
                    </div>

                    <div className='flex-1'>
                      <h1 className='text-6xl font-normal text-heading'>New Arrival 2022</h1>
                        <div className='my-8'>
                        <Peragraph pera='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat pulvinar enim hendrerit pellentesque Pharetra consectetur quam.'/>
                        </div>
                        <OutlineButton lable='Shop Now'/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AddBanner