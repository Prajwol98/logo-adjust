import React, { useState } from "react";
import ColorPicker from "react-best-gradient-color-picker";

const GradientColorPicker = () => {
  const [color, setColor] = useState("#965c5c");
  return (
    <div>
      <ColorPicker
        value={color}
        onChange={setColor}
        hideControls
        hideColorTypeBtns
        hidePresets
        hideColorGuide
        hideInputType
        hideGradientControls
      ></ColorPicker>
    </div>
  );
};

export default GradientColorPicker;
