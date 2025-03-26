import { Component, use } from 'react';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import Header from '../Header';
import './index.css';
import TechStack from '../TechStack';


class Home extends Component {
    render() {
        const text = "Hi, I’m Naveen Janapati, a full-stack developer who loves building useful and user-friendly web applications. I enjoy turning ideas into real projects with clean and efficient code. I always look for new things to learn and ways to improve my skills. Let’s create something great together!";

        return (
            <div className='main-container'>
            <Header />         
                <div className='profile-con'>
                    <img
                        src="https://res.cloudinary.com/dmsebahwn/image/upload/v1735579457/profilepic_wpocch.jpg"
                        alt="Profile"
                        className='profile'
                    />
                    <div className='text-con'>
                        <h1 className='description'>
                            {text.split("").map((char, index) => (
                                <span key={index} style={{ animationDelay: `${index * 50}ms` }}>{char}</span>
                            ))}
                        </h1>
                        <button className='cta-button' >
                            <Link to = "/projects" className='link-btn'>View My Work</Link>
                        </button>
                    </div>
                </div>
            <TechStack />
            </div>
        );
    }
}

export default Home;


