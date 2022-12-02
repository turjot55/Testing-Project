import React from "react";
import { useNavigate } from "react-router-dom";

const Sections = ({sections}) => {
  const navigate = useNavigate();
  const handleEditSection = (section) => {
    navigate(`/edit-section/${section.id}`, {
      state: section
    });
  }
  return (
    <div>
      <ol>
        {sections.map((section) => (
          <li className="" key={section.id} onClick={ () => handleEditSection(section)}>
            <span>{section.name}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Sections;
