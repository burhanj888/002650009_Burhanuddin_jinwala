import React from "react";
import "./toggleSwitch.css";
  
const ToggleSwitch = ({ label, isOn, handleToggle }) => {
  return (
    <div className="toggle-container">
      {label}{" "}
      <div className="toggle-switch">
        <input checked={isOn}
        onChange={handleToggle} type="checkbox" className="checkbox" 
               name={label} id={label} />
        <label style={{ background: !isOn && '#DC143C' }} className="label" htmlFor={label}>
          <span className="inner" />
          <span className="switch" />
        </label>
      </div>
    </div>
  );
};
  
export default ToggleSwitch;