import { Image, PencilRuler, ShieldPlus } from "lucide-react";
import { useState } from "react";

const SideNav = ({ selectedIndex }) => {
  const menuLists = [
    { id: 1, name: "Icon", icon: PencilRuler },
    { id: 2, name: "Background", icon: Image },
    { id: 3, name: "Upgrade", icon: ShieldPlus },
  ];

  const [active, setActive] = useState(0);
  function handleClick(index) {
    setActive(index);
    selectedIndex(index);
  }

  return (
    <div className="border-r-[1px] border-black h-screen">
      <ul className="ml-2 text-xl ">
        {menuLists.map((menuList, index) => (
          <li
            onClick={() => handleClick(index)}
            key={menuList.id}
            className={`hover:bg-orange-700 hover:text-white cursor-pointer mb-2 ${
              active === index && "bg-orange-700 text-white"
            }`}
          >
            <menuList.icon className="inline-block mr-2 " />
            {menuList.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideNav;
