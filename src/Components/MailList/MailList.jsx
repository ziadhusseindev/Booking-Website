import React from 'react'
import "./MailList.css"

const MailList = () => {
  return (
    <div className="mail">
      <h1 className="mailTitle">Save time, save money</h1>
      <span className='mailDesc'>Sign up and we'll send the best deals</span>
      <div className="mailInputContainer">
        <input
          type="text"
          placeholder="Your Email"
          className="mailInput"
        />
        <button className="mailButton">Subscribe</button>
      </div>
    </div>
  )
}

export default MailList