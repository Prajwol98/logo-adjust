import { Button } from "./ui/button";
import { Download } from "lucide-react";

const Header = () => {
  return (
    <div className="p-2 flex items-center justify-between border-b-2 border-black">
      <div className="flex items-center">
        <img src="logo.svg" alt="logo" className="h-[50px] w-[50px]" />
        <span className="text-[20px] font-bold ">Logo Adjust </span>
      </div>
      <Button className="bg-destructive">
        <Download className="mr-2">Download</Download>
      </Button>
    </div>
  );
};

export default Header;
