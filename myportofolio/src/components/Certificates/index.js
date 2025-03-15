import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Header from "../Header";
import './index.css'
const photos = [
  { src: "/certificates/staticCerti.jpg", alt: "Certificate 1" },
  { src: "/certificates/python.jpg", alt: "Certificate 1" },
  { src: "/certificates/responsivewebsite.jpg", alt: "Certificate 1" },
  { src: "/certificates/dynamicwebsite.jpg", alt: "Certificate 1" },
  { src: "/certificates/sqlDB.jpg", alt: "Certificate 1" },
  { src: "/certificates/JSEssential.jpg", alt: "Certificate 1" },
  { src: "/certificates/flexbox.jpg", alt: "Certificate 1" },
  { src: "/certificates/developerfoundations.jpg", alt: "Certificate 1" },
  { src: "/certificates/NodeJS.jpg", alt: "Certificate 1" },
  { src: "/certificates/ReactJs.jpg", alt: "Certificate 1" },
  {src: "/certificates/pyhtonForDataScience.jpg", alt: "Certificate 1" } ,
  {src: "/certificates/PythonForDataScience2.jpg", alt: "Certificate 1" }

];

const workshops = [
  {
    name : 'Gen AI Mega Workshop', 
    organized_By : 'NxtWave', 
    date : '7-08-2023',
    skills:'General Concepts of Gen Ai, LLMs',
    participation : '/certificates/GenAiMegaParticipation.jpg',
    projectCompletion : "/certificates/GenAiMegaProjectCompletion.jpg"
  }, 
  {
    name : 'Ethical Hacking Mega Workshop', 
    organized_By : 'NxtWave', 
    date : '5-10-2023',
    skills:'General Concepts of Gen Ai',
    participation : '/certificates/EthicalHackParticipation.jpg',
    projectCompletion : "/certificates/EthicalHackProject.jpg"
  }, 
  {
    name : 'Data Analytics Mega Workshop', 
    organized_By : 'NxtWave', 
    date : '31-01-2024',
    skills:'Learn the things about Data Analyst and the tool Power BI',
    participation : '/certificates/DataAnalyticsParticipation.jpg',
    projectCompletion : "/certificates/DataAnalyticsProject.jpg"
  }, 
  {
    name : 'AWS Mega Workshop', 
    organized_By : 'NxtWave', 
    date : '13-06-2024',
    skills:'Key Components of Cloud computing, Key Services of AWS',
    participation : '/certificates/AWSParticipation.jpg',
    projectCompletion : "/certificates/AWSProject.jpg"
  }, 
  {
    name : 'Generative AI Mega Workshop 2.o', 
    organized_By : 'NxtWave', 
    date : '18-09-2024',
    skills:'General Concepts of Gen Ai',
    participation : '/certificates/GenerativeAi2participation.jpg',
    projectCompletion : "/certificates/GenerativeAi2Project.jpg"
  }, 
  {
    name : 'UI/UX Mega Workshop 2.o', 
    organized_By : 'NxtWave', 
    date : '22-10-2024',
    skills:'UI/UX Fundamentals , Figma Expertise ',
    participation : '/certificates/UIUXParticipation.jpg',
    projectCompletion : "/certificates/UIUXProject.jpg"
  }, 
]


const Certificates = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="certificate-main-container">
        <Header />
      <h2 className="cer-heading">My Certifications</h2>
      <div className="certificates-container gap-4">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={photo.alt}
            className="certificate-image"
            onClick={() => {
              setCurrentIndex(index);
              setOpen(true);
            }}
          />
        ))}
      </div>
      <h1>Workshops</h1>
      <ul className="workshop-unordered-list">
      {
        workshops.map((eachWorkShop, index)=>{
          return <li key = {index} className="certificate-box-list">
              <h2>{eachWorkShop.name}</h2>
              <p><strong>Organized by:</strong>{eachWorkShop.organized_By}</p>
              <p><strong>Date:</strong> {eachWorkShop.date}</p>
              <p><strong>Skills Learned:</strong>{eachWorkShop.skills}</p>
              
              <div className="certificates">
                      <img src={eachWorkShop.participation} className="certificate" alt="Participation Certificate"/>
                      <img src={eachWorkShop.projectCompletion}  className="certificate" alt="Project Completion Certificate"/>
              </div>
          </li>
        })
      }
    </ul>
      


      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={photos}
        index={currentIndex}
      />
    </div>
  );
};

export default Certificates;
