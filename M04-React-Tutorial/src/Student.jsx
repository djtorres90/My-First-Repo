export default function Student({ name = 'Guest', age = 0, isStudent = false }) {
  return (
    <article className="card">
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? 'Yes' : 'No'}</p>
    </article>
  );
}
