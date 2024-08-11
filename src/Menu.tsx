import { MenuItem } from "./data";
import { useState } from "react";

export default function MenuItemComponent({ item }: { item: MenuItem }) {
  const [extend, setExtend] = useState(false);

  function handleClick() {
    setExtend(!extend);
  }

  const listItems = item.children?.map((childItem) => (
    <li>
      {" "}
      <MenuItemComponent item={childItem} />
    </li>
  ));

  return (
    <>
      <button onClick={handleClick}>
        <p>{item.label}</p>
      </button>
      <ul>{extend ? listItems : " "}</ul>
    </>
  );
}
