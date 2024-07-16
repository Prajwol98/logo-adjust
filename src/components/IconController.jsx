import { Smile } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const IconController = () => {
  const [index, setIndex] = useState(150);
  function handleSliderChange(value) {
    setIndex(value);
  }

  const [changeDegree, setChangeDegree] = useState(150);
  function handleSliderChangeDegree(value) {
    setChangeDegree(value);
  }
  return (
    <div className="ml-[10px] mt-[10px]">
      <div>
        <span>Icon</span>
        <Smile className="bg-slate-200 p-2 h-[50px] w-[50px] rounded-[5px]"></Smile>
      </div>
      <div className="mt-[10px]">
        <div className="flex justify-between">
          <label className="text-xl">size</label>
          <span>{index} px</span>
        </div>
        <Slider
          defaultValue={[0]}
          max={500}
          step={1}
          onValueChange={handleSliderChange}
        ></Slider>
      </div>
      <div className="mt-[10px]">
        <div className="flex justify-between">
          <label className="text-xl">size</label>
          <span>{changeDegree} d</span>
        </div>
        <Slider
          defaultValue={[0]}
          max={500}
          step={1}
          onValueChange={handleSliderChangeDegree}
        ></Slider>
      </div>
    </div>
  );
};

export default IconController;
