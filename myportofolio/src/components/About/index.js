import { Component } from 'react';
import Header from '../Header';
import './index.css';

class About extends Component {
    render() {
        return (
            <div className='main-container'>
                <Header />
                <div className='about-container'>
                    <h2 className='about-heading'>About Me</h2>

                    <p className='about-summary'>
                        I am a B.Tech 3rd-year student at Vasireddy Venkatadri Institute of Technology, Guntur, with a passion for full-stack development. My journey reflects dedication, curiosity, and a drive to build impactful web applications.
                    </p>

                    <div className='academic-journey'>
                        <h3 className='journey-heading'>Academic Journey</h3>
                        <ul className='journey-list'>
                            <li><strong>Native Place:</strong> Ongole, famous for its Ongole bulls.</li>
                            <li><strong>10+2:</strong> Completed in Ongole.</li>
                            <li><strong>EAPCET Rank:</strong> Secured 10,025 and joined VVIT through counseling.</li>
                        </ul>
                    </div>

                    <div className='interests-section'>
                        <h3 className='interests-heading'>Interests and Aspirations</h3>
                        <p>
                            I am highly passionate about full-stack development and continuously strive to improve my skills. Currently, I am seeking internship opportunities to apply my knowledge and contribute to impactful projects.
                        </p>
                    </div>

                    <div className='cta-container'>
                        <button className='cta-button' onClick={() => window.open('https://www.linkedin.com', '_blank')}>Connect with Me</button>
                        <button className='cta-button' onClick={() => window.open('/certificates/resume2.pdf')}>Check Resume</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
