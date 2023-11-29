export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start Adding Some items to your PackingList🚀</em>
      </p>
    );
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentageNum = Math.round((numPacked / numItems) * 100);
  // if (!numacked)
  return (
    <footer className="stats">
      <em>
        {percentageNum === 100
          ? "You got everthing Ready to go ✈️"
          : `👜You have ${numItems} items on your list, and you already packed ${numPacked}
        (${percentageNum}%)`}
      </em>
    </footer>
  );
}
