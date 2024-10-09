import React from 'react'
import './FooterTop.css';

const FooterTop = () => {
  return (
    <div className='FooterTop'>
      <div className='FooterTop1'>
        <p>See personalized recommendations</p>
        <button>Sign in</button>
        <div className='NewCus'>
            <p>New Customer ?</p>
            <button>Start here</button>
        </div>
      </div>

      <div className='FooterTop2'>
        <button>Back to top</button>
      </div>
    </div>
  )
}

export default FooterTop
