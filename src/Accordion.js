import React, { useState } from "react";
import "./styles.css";

export default function Accordion({
  accordions,
  isMultiSelect,
  isDefaultOpen,
}) {
  // State to track which accordion(s) are open
  const [openAccordions, setOpenAccordions] = useState(
    isDefaultOpen ? accordions.map((accordion) => accordion.id) : []
  );

  const handleToggle = (id) => {
    if (isMultiSelect) {
      // Toggle the current accordion in multi-select mode
      setOpenAccordions((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      // Single-select mode
      setOpenAccordions((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="accordionContainer">
      {accordions.map((accordion) => {
        const isOpen = openAccordions.includes(accordion.id);
        return (
          <div key={accordion.id} className="accordion">
            {/* Header */}
            <div className="accordionHeader">
              <label>{accordion.header}</label>
              <button
                className={`button ${isOpen ? "open" : ""}`}
                onClick={() => handleToggle(accordion.id)}
              >
                ^
              </button>
            </div>
            {/* Content */}
            <div className={`accordionDesc ${isOpen ? "open" : ""}`}>
              {accordion.description}
            </div>
          </div>
        );
      })}
    </div>
  );
}
