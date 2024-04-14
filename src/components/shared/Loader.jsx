import React from 'react'
import { BallTriangle } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className='flex items-center justify-center h-screen'>
            <BallTriangle
                height={100}
                width={100}
                radius={5}
                color="#599A8D"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Loader