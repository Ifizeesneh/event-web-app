import React from "react";

interface PetFilterProps {
  onToggle: (petsAllowed: boolean) => void;
}

const PetFilter: React.FC<PetFilterProps> = ({ onToggle }) => {
  return (
    <div>
      <label>
        <input type="checkbox" onChange={(e) => onToggle(e.target.checked)} />
        Show only events where pets are allowed
      </label>
    </div>
  );
};

export default PetFilter;
