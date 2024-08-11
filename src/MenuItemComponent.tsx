import { useState } from "react";
import { MenuItem } from "./data";

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
    <div className="text-left">
      <button onClick={handleClick}>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-chevron-down"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </div>
        <p>{item.label}</p>
      </button>
      <ul className="ml-7">{extend ? listItems : " "}</ul>
    </div>
  );
}
