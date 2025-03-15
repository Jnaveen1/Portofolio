import {Link} from 'react-router-dom'
import './index.css' ;

const Header = () => {
    return(
        <div className="header-con">
            <h1> <Link to = "/" className='portfolio-link'>Portofolio</Link></h1>
            <div className="links-con">
                <Link to = "/"  className='link'>
                    <p>Home</p>
                </Link>
                <Link to = "/about"  className='link'>
                    <p>About</p>
                </Link>
                <Link to = "/projects"  className='link'>
                    <p>Projects</p>
                </Link>
                <Link to = "/certificates" className='link'>
                    <p>Certificates</p>
                </Link>
                <Link to = "/contactme"  className='link'>
                    <p>Contact Me</p>
                </Link>
            </div>
        </div>
    )
}

export default Header ;