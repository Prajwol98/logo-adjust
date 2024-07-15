import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const Header = () => {
  return (
    <div className="flex items-center ">
      <img src="logo.svg" alt="logo" className="h-20 w-20" />
      <Button className="bg-destructive">
        <Download></Download>Download
      </Button>
    </div>
  );
};

export default Header;
