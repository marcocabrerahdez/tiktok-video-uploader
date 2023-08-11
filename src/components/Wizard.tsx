import React from "react";

export interface WizardProps {
  name: string;
  img: HTMLImageElement;
  description: string;
}

export const Wizard: React.FC<WizardProps> = ({ name, img, description }) => {
  return (
    <div className="wizard">
      <img src={img.src} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default Wizard;
