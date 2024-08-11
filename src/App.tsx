import DATA from "./data.tsx";
import MenuItemComponent from "./MenuItemComponent.tsx";
import { arrow } from "./arrow.tsx";

function Sidebar() {
  return (
    <div className="bg-[#2e363e] h-screen font-semibold text-[#178fd2]">
      <MenuItemComponent item={DATA[0]} />
    </div>
  );
}

export default Sidebar;
