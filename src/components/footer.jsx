import React from "react";

export const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          {/* Logo Section */}
          <div className="footer-logo">
            <img
              src={
                props.data ? props.data.logo : "img/logo_red_transparent.png"
              }
              alt="Jaya Beton Logo"
              className="footer-logo-img"
            />
            <h3>{props.data ? props.data.companyName : "JAYA BETON"}</h3>
            <p>
              {props.data
                ? props.data.description
                : "Official account of PT Jaya Beton Indonesia"}
            </p>
            {/* Social Media Icons */}
            <div className="footer-social">
              <a
                href={props.data ? props.data.social.facebook : "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a
                href={props.data ? props.data.social.twitter : "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a
                href={props.data ? props.data.social.youtube : "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-youtube"></i>
              </a>
              <a
                href={props.data ? props.data.social.instagram : "#"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
          {/* Get in Touch Section */}
          <div className="footer-section">
            <h4>Get in touch</h4>
            <ul>
              <li>
                <i className="fa fa-map-marker"></i>
                <span>{props.data ? props.data.address : "Loading..."}</span>
              </li>
              <li>
                <i className="fa fa-envelope"></i>
                <span>{props.data ? props.data.email : "Loading..."}</span>
              </li>
              <li>
                <i className="fa fa-phone"></i>
                <span>{props.data ? props.data.phone : "Loading..."}</span>
              </li>
              <li>
                <i className="fa fa-fax"></i>
                <span>{props.data ? props.data.fax : "Loading..."}</span>
              </li>
            </ul>
          </div>
          {/* Business Hours Section */}
          <div className="footer-section">
            <h4>Business Hours</h4>
            <div className="business-hours">
              <p className="factory-title">Production Factory :</p>
              <ul className="factory-list">
                {props.data
                  ? props.data.factoryLocations.map((location, index) => (
                      <li key={index}>
                        <i className="fa fa-building"></i> {location}
                      </li>
                    ))
                  : "Loading..."}
              </ul>
              <p className="hours-title">We available at :</p>
              <p className="hours-text">
                {props.data ? props.data.businessHours.weekday : "Loading..."}
              </p>
              <p className="hours-text">
                {props.data ? props.data.businessHours.saturday : "Loading..."}
              </p>
            </div>
          </div>
          {/* Download Section */}
          <div className="footer-section">
            <h4>Download</h4>
            <div className="download-section">
              <i className="fa fa-file-pdf-o download-icon"></i>
              <p>{props.data ? props.data.downloadText : "Loading..."}</p>
              <a href={props.data ? props.data.downloadLink : "#"}
                className="download-btn"
                download>
                <i className="fa fa-download"></i> Download
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>
            {props.data
              ? props.data.copyright
              : "Copyright © 2022 - PT Jaya Beton Indonesia. All rights reserved."}
          </p>
        </div>
      </div>
    </footer>
  );
};
