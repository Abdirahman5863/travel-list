import { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  OnDeleteItem,
  onToggleItem,
  onClearlist,
}) {
  const [sortedBy, setsortedBy] = useState("input");
  let Itemsorted;
  if (sortedBy === "input") Itemsorted = items;
  if (sortedBy === "description")
    Itemsorted = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortedBy === "packed")
    Itemsorted = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {Itemsorted.map((item) => (
          <Item
            item={item}
            key={item.id}
            OnDeleteItem={OnDeleteItem}
            onToggleItem={onToggleItem}
            onClearlist={onClearlist}
          />
        ))}
      </ul>
      <div className="action">
        <select value={sortedBy} onChange={(e) => setsortedBy(e.target.value)}>
          <option value="input">Sorted by Input</option>
          <option value="description">sorted by description</option>
          <option value="packed">Sorted by packed status</option>
        </select>
        <button onClick={onClearlist}>Clear list</button>
      </div>
    </div>
  );
}
