import { useState } from "react";
import { MenuItem } from "./data";
import { arrow } from "./arrow";

export default function MenuItemComponent({ item }: { item: MenuItem }) {
  const [extend, setExtend] = useState(false);

  function handleClick() {
    setExtend(!extend);
  }

  const listItems = item.children?.map((childItem) => (
    <li>
      <MenuItemComponent item={childItem} />
    </li>
  ));

  return (
    <div className="text-left">
      <button onClick={handleClick} className="flex items-center gap-2">
        <div className="text-white">
          {!item.children ? "•" : extend ? arrow : "›"}
        </div>
        <p>{item.label}</p>
      </button>
      <ul className="ml-7"> {extend ? listItems : " "}</ul>
    </div>
  );
}
