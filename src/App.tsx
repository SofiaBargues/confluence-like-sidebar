import { useState } from "react";
import DATA from "./data.tsx";
import Menu from "./Menu.tsx";

function Sidebar() {
  // const [count, setCount] = useState(0);
  // console.log(DATA[0].children[0].label);
  return (
    <div>
      <div>{DATA[0].label}</div>
      {/* <div>{DATA[0].children[0].label}</div>
      <div>
        <div>{DATA[0].children[0].children[0].label}</div>
        <div>{DATA[0].children[0].children[1].label}</div>
        <div>{DATA[0].children[0].children[2].label}</div>
      </div> */}
      <Menu items={DATA[0]} />
    </div>
  );
}

export default Sidebar;
