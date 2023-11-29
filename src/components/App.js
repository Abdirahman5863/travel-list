import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: false },
//   { id: 3, description: "Books", quantity: 12, packed: false },
// ];

export default function App() {
  const [items, setitems] = useState([]);
  function Handleitem(item) {
    setitems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setitems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setitems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function HandleClearList() {
    const conformed = window.confirm("Are sure you want to delete all items ?");
    if (conformed) setitems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form Additem={Handleitem} />
      <PackingList
        items={items}
        OnDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearlist={HandleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
