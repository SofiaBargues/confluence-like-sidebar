import DATA from "./data.tsx";
import MenuItemComponent from "./MenuItemComponent.tsx";

function Sidebar() {
  return (
    <button>
      <MenuItemComponent item={DATA[0]} />
    </button>
  );
}

export default Sidebar;
