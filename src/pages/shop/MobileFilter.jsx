import React from 'react'

const MobileFilter = ({ menuOpen }) => {
    return (
        <div className={`border absolute lg:hidden z-10 bg-white mt-3 w-[50%] md:w-[35%] -left-80 ${menuOpen ? 'left-0.5 md:left-0' : ''} transition-all duration-500 border-[#dddddd] rounded-sm p-6`}>
            MobileFilter</div>
    )
}

export default MobileFilter