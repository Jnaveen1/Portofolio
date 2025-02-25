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
];

const Certificates = () => {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="certificate-main-container">
        <Header />
      <h2 className="heading">My Certifications</h2>
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
