import { Component } from 'react';
import Header from '../Header';
import './index.css';

class Projects extends Component {
    render() {
        const projects1 = [
            {
                title: 'EvenOdd App',
                description: 'This is the application, which generates the random number between 1 to 100 and add to the current number then shows the resultant number is even or odd.',
                githubLink: 'https://github.com/Jnaveen1/evenoddApp.git',
                liveDemo: 'https://jvnevenoddapp.ccbp.tech/'
            },
            {
                title: 'Destination Search App',
                description: 'This app, Destination Search, allows users to search for destinations dynamically from a provided list using a search bar. It features a responsive, case-insensitive search that updates results in real-time as users type.',
                githubLink: 'https://github.com/Jnaveen1/destinationSearch.git',
                liveDemo: 'https://jvnsearchapp.ccbp.tech/'
            },
            {
                title: 'Gallery App',
                description: 'This app, Destination Search, allows users to search for destinations dynamically from a provided list using a search bar. It features a responsive, case-insensitive search that updates results in real-time as users type.',
                githubLink: 'https://github.com/Jnaveen1/GalleryApp.git',
                liveDemo: 'https://jvnGallery.ccbp.tech'
            },
            {
                title: 'App Store',
                description: 'This app, Destination Search, allows users to search for destinations dynamically from a provided list using a search bar. It features a responsive, case-insensitive search that updates results in real-time as users type.',
                githubLink: 'https://github.com/Jnaveen1/AppStore.git',
                liveDemo: 'https://jvnAppStore.ccbp.tech'
            },
            {
                title: 'Coin Toss Game',
                description: 'This is the application, which generates the random number between 1 to 100 and add to the current number then shows the resultant number is even or odd.',
                githubLink: 'https://github.com/Jnaveen1/coinTossGame.git',
                liveDemo: 'https://jvncointossgame.ccbp.tech/'
            },
            {
                title: 'Appointment App',
                description: 'This is the application, which generates the random number between 1 to 100 and add to the current number then shows the resultant number is even or odd.',
                githubLink: 'https://github.com/Jnaveen1/AppointmentApp.git',
                liveDemo: 'https://jvnappointments.ccbp.tech/'
            },
            {
                title: 'Money Manager App',
                description: 'This is the application, which generates the random number between 1 to 100 and add to the current number then shows the resultant number is even or odd.',
                githubLink: 'https://github.com/Jnaveen1/MoneyManagerApp.git',
                liveDemo: 'https://jvnMoneyManager.ccbp.tech'
            },
            {
                title: 'Emoji Game',
                description: 'This is the application, which generates the random number between 1 to 100 and add to the current number then shows the resultant number is even or odd.',
                githubLink: 'https://github.com/Jnaveen1/EmojiGame.git',
                liveDemo: 'https://naveenemoji61.ccbp.tech/'
            },
            {
                title: 'Match Game',
                description: 'This is the application, which generates the random number between 1 to 100 and add to the current number then shows the resultant number is even or odd.',
                githubLink: 'https://github.com/Jnaveen1/MatchGame.git',
                liveDemo: 'https://jvnmathgame.ccbp.tech/'
            },
            {
                title: 'IPL DashBoard',
                description: 'This is the application, which generates the random number between 1 to 100 and add to the current number then shows the resultant number is even or odd.',
                githubLink: 'https://github.com/Jnaveen1/IPLDashboard.git',
                liveDemo: 'https://jvnIPLDashboard.ccbp.tech'
            },
            {
                title: 'Meme Generator',
                description: 'This is the application, which generates the random number between 1 to 100 and add to the current number then shows the resultant number is even or odd.',
                githubLink: 'https://github.com/Jnaveen1/MemeGenerator.git',
                liveDemo: 'https://jvnMemeGenerate.ccbp.tech'
            },
            {
                title: 'Rock Paper Scissor Game',
                description: 'This is the application, which generates the random number between 1 to 100 and add to the current number then shows the resultant number is even or odd.',
                githubLink: 'https://github.com/Jnaveen1/rockPaperscissors.git',
                liveDemo: 'https://jvnRPSgame.ccbp.tech'
            },
            {
                title: 'NXT Watch',
                description: 'This is the application, which generates the random number between 1 to 100 and add to the current number then shows the resultant number is even or odd.',
                githubLink: 'https://github.com/Jnaveen1/Nxtwatch.git',
                liveDemo: 'https://naveen1261app.ccbp.tech/'
            },
            {
                title: 'NxtAssessment App',
                description: 'A responsive React application with features like a timed assessment, result submission, and reattempt options.',
                githubLink: 'https://github.com/Jnaveen1/Nxt-Assess-App.git',
                liveDemo: 'https://naveenexam.ccbp.tech/login'
            },
            {
                title: 'Jobby App',
                description: 'A job search platform with routing, login, and job details pages implemented in React.',
                githubLink: 'https://github.com/Jnaveen1/Jobby.git',
                liveDemo: 'https://naveen1261jobby.ccbp.tech/login'
            },
        ]


        return (
            <div className='main-container'>
                <Header />
                <div className='projects-container'>
                    <h2 className='projects-heading'>My Projects</h2>
                    <div className='projects-grid'>
                        {projects1.map((project, index) => (
                            <div key={index} className='project-card'>
                                <h3 className='project-title'>{project.title}</h3>
                                <p className='project-description'>{project.description}</p>
                                <div className='project-links'>
                                    <a href={project.githubLink} target='_blank' rel='noopener noreferrer' className='project-link'>GitHub</a>
                                    <a href={project.liveDemo} target='_blank' rel='noopener noreferrer' className='project-link'>Live Demo</a>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
        );
    }
}

export default Projects;
