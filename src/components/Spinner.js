import React from 'react'
import Loding from './Loding.gif'
const Spinner = ()=>{

    return (
      <div className='text-center'>
        <img className='my-3' src={Loding} alt="Loding" />
      </div>
    )

}

export default Spinner
