import React, { useState } from "react";

export const FeatureModal = ({ isOpen, onClose, category, images, folder }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen) return null;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const currentImage = images[currentIndex];
  const imageSrc =
    typeof currentImage === "string" ? currentImage : currentImage.filename;
  const imageTitle = typeof currentImage === "string" ? "" : currentImage.title;

  return (
    <div className="feature-modal-overlay" onClick={onClose}>
      <div
        className="feature-modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="feature-modal-close" onClick={onClose}>
          <i className="fa fa-times"></i>
        </button>

        <div className="feature-modal-header">
          <h2>{category}</h2>
          <p>
            {currentIndex + 1} / {images.length}
          </p>
        </div>

        <div className="feature-carousel">
          <button className="carousel-btn prev" onClick={prevSlide}>
            <i className="fa fa-chevron-left"></i>
          </button>

          <div className="carousel-image-container">
            <img
              src={`img/${folder}/${imageSrc}`}
              alt={imageTitle || `${category} - ${currentIndex + 1}`}
              className="carousel-image"
            />
            {imageTitle && (
              <div className="carousel-image-title">{imageTitle}</div>
            )}
          </div>

          <button className="carousel-btn next" onClick={nextSlide}>
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>

        <div className="carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? "active" : ""}`}
              onClick={() => goToSlide(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};
