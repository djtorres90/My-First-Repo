export default function FoodList({ category = 'Foods', items = [] }) {
  if (items.length === 0) {
    return null;
  }

  return (
    <article className="card">
      <h3>{category}</h3>
      <ol className="food-list">
        {items.map(({ id, name, calories }) => (
          <li key={id}>{name} <span>{calories} cal</span></li>
        ))}
      </ol>
    </article>
  );
}
