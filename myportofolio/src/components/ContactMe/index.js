import { Component } from 'react';
import { FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa'; // Importing icons
import Header from '../Header';
import './index.css';

class Contact extends Component {
    state = {
        Email : "", 
        Message : "" ,
        Name : ''
    }

    handleChange = (event) =>{
        const {name, value} = event.target
        this.setState({[name] : value})
        console.log(name)
        console.log(value)
    }

    onClickContactForm = async (event) =>{
        event.preventDefault();
       console.log("clicked")
       const {Name, Message, Email} = this.state
       try{
            const details = {
                Name, 
                Message, 
                Email
            }
            const options = {
                method : "POST", 
                headers : {
                    "Content-Type" : "application/json"
                },
                body : JSON.stringify(details)
            }
            const result = await fetch("http://localhost:3010/send-email-message", options);
            const responseData = await result.json() ;
            if(result.ok){
                this.setState({Email : '', Name : '', Message : ''}, ()=>{
                    console.log("state updated", this.state)
                    alert("Message Sent Successfully...")
                });
                
            }else{
                alert(`Message Was not sent, ${responseData}`);
            }
       } catch(error){
        console.log("Failed to send the message", error)
       }
    }

    render() {
        return (
            <div className='main-container'>
                <Header />
                <div className='contact-container'>
                    <h2 className='contact-heading'>Get in Touch</h2>
                    <p className='contact-description'>
                        I’d love to hear from you! Whether you have a question, a project idea, or just want to connect, feel free to reach out.
                    </p>
                    <div className='contact-details'>
                        <p>
                            <FaEnvelope className='icon' /> 
                            <a href='mailto:naveenjanapati65@gmail.com' className='contact-link'>naveenjanapati65@gmail.com</a>
                        </p>
                        <p>
                            <FaPhoneAlt className='icon' />
                            <a href='tel:+919618795265' className='contact-link'>+91 9618795265</a>
                        </p>
                        <p>
                            <FaLinkedin className='icon' />
                            <a href='https://www.linkedin.com/in/venkata-naveen-kumar-janapati/' target='_blank' rel='noopener noreferrer' className='contact-link'>https://www.linkedin.com/in/....</a>
                        </p>
                    </div>
                    <form className='contact-form' onSubmit={this.onClickContactForm}>
                        <input type='text' placeholder='Your Name' name = "Name" className='form-input' onChange={this.handleChange} required />
                        <input type='email' placeholder='Your Email' name = "Email" className='form-input' onChange={this.handleChange} required />
                        <textarea placeholder='Your Message' name = "Message" className='form-textarea' onChange={this.handleChange} required></textarea>
                        <button type='submit' className='form-button'>Send Message</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;
