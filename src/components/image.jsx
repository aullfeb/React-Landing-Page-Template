import React, { useState, useEffect } from "react";

export const Image = ({ title, largeImage, smallImage }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close on ESC key press
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when lightbox is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const openLightbox = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  // Handle click on overlay (outside image)
  const handleOverlayClick = (e) => {
    // Only close if clicking directly on the overlay, not on the image
    if (e.target === e.currentTarget) {
      closeLightbox();
    }
  };

  return (
    <>
      <div className="portfolio-item">
        <div className="hover-bg">
          {" "}
          <a href={largeImage} title={title} onClick={openLightbox}>
            <div className="hover-text">
              <h4>{title}</h4>
            </div>
            <img src={smallImage} className="img-responsive" alt={title} />{" "}
          </a>{" "}
        </div>
      </div>

      {/* Lightbox Modal */}
      {isOpen && (
        <div
          className="lightbox-overlay"
          onClick={handleOverlayClick}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.95)",
            backdropFilter: "blur(10px)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            padding: "20px",
          }}
        >
          <button
            onClick={closeLightbox}
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              borderRadius: "50%",
              color: "white",
              fontSize: "28px",
              cursor: "pointer",
              zIndex: 10000,
              width: "50px",
              height: "50px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.3s ease",
              lineHeight: "1",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(255, 255, 255, 0.2)";
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(255, 255, 255, 0.1)";
              e.target.style.transform = "scale(1)";
            }}
            aria-label="Close"
          >
            &times;
          </button>
          <div
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              cursor: "default",
              overflowY: "auto",
              overflowX: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(255, 255, 255, 0.3) transparent",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={largeImage}
              alt={title}
              style={{
                maxWidth: "100%",
                height: "auto",
                objectFit: "contain",
                display: "block",
                borderRadius: "8px",
                boxShadow: "0 10px 40px rgba(0, 0, 0, 0.5)",
              }}
            />
            {title && (
              <div
                style={{
                  color: "rgba(255, 255, 255, 0.95)",
                  textAlign: "center",
                  marginTop: "20px",
                  marginBottom: "20px",
                  fontSize: "18px",
                  fontWeight: "300",
                  padding: "15px 30px",
                  wordWrap: "break-word",
                  maxWidth: "100%",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "8px",
                  backdropFilter: "blur(10px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  letterSpacing: "0.5px",
                  lineHeight: "1.6",
                }}
              >
                {title}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};
