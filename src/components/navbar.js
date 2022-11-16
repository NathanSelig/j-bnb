/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

//simple navbar with a titile in bold and ontop of nice image newyork
export default function Header() {
    return (
        <div id='hero'className='relative'>
            <img src='https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                className='w-full object-cover h-96' />
            <p className='absolute text-9xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Jew BNB</p>
        </div>
    )
}
