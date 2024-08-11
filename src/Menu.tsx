import { MenuItem } from "./data";

export default function Menu({ items }: { items: MenuItem }) {
  const listItems = items.children?.map((item) => <li>{item.label}</li>);
  return <ul>{listItems}</ul>;
}
