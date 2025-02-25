import { FaReact, FaNodeJs, FaPython, FaDatabase, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa"; 
import './index.css';

const TechStack = () => {
    return (
        <div className="tech-stack">
            <h2 className="tech-title">Tech Stack</h2>
            <div className="tech-grid">
                <FaReact className="tech-icon react" title="React" />
                <FaNodeJs className="tech-icon node" title="Node.js" />
                <FaPython className="tech-icon python" title="Python" />
                <FaDatabase className="tech-icon database" title="SQL & NoSQL" />
                <FaHtml5 className="tech-icon html" title="HTML" />
                <FaCss3Alt className="tech-icon css" title="CSS" />
                <FaJs className="tech-icon js" title="JavaScript" />
            </div>
        </div>
    );
}

export default TechStack;


