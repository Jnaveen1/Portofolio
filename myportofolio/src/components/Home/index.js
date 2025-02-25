import { Component, use } from 'react';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import Header from '../Header';
import './index.css';

class Home extends Component {
    render() {
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
                            Hi, I’m <span className='highlight'>Naveen Janapati</span>, a passionate full-stack developer dedicated to building impactful and user-centric web applications.
                        </h1>
                        <button className='cta-button' >
                            <Link to = "/projects" className='link-btn'>View My Work</Link>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;


