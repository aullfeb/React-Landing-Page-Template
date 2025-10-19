import React, { useState } from "react";
import { FeatureModal } from "./featureModal";

export const Features = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState(null);

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedFeature(null);
  };

  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Products</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-xs-6 col-md-3 feature-item"
                  onClick={() => handleFeatureClick(d)}
                >
                  {" "}
                  <i className={d.icon}></i>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>

      {selectedFeature && (
        <FeatureModal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          category={selectedFeature.title}
          images={selectedFeature.images}
          folder={selectedFeature.folder}
        />
      )}
    </div>
  );
};
