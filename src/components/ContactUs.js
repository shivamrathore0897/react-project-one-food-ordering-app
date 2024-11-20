import React from 'react'

const ContactUs = () => {
    return (
        <div className='contact-container'>
            <h1>Contact Us</h1>
            <form>
                <input type="text" className='' placeholder='name'></input>
                <input type="text" className='' placeholder='message'></input>
                <button>SUBMIT</button>
            </form>
        </div>
    )
}

export default ContactUs