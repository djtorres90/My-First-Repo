import Card from './Card.jsx';
import FoodList from './FoodList.jsx';
import Student from './Student.jsx';
import UserGreeting from './UserGreeting.jsx';
import { fruits, vegetables } from './foods.js';

export default function App() {
  const lighterFruits = fruits
    .filter((fruit) => fruit.calories < 100)
    .sort((first, second) => first.calories - second.calories);

  return (
    <>
      <header className="page-header">
        <p>Module 4</p>
        <h1>Intro to React</h1>
        <nav aria-label="Tutorial examples">
          <a href="#components">Components</a>
          <a href="#props">Props</a>
          <a href="#lists">Lists</a>
        </nav>
      </header>

      <main>
        <section id="components">
          <h2>Components and styling</h2>
          <div className="grid">
            <Card title="JSX">Combine markup and JavaScript expressions in a component.</Card>
            <Card title="CSS">Apply a shared stylesheet with the className attribute.</Card>
          </div>
        </section>

        <section id="props">
          <h2>Props and conditional rendering</h2>
          <div className="grid">
            <Student name="Maya" age={21} isStudent />
            <Student name="Jordan" age={24} />
          </div>
          <UserGreeting name="Maya" isLoggedIn />
          <UserGreeting />
        </section>

        <section id="lists">
          <h2>Rendering lists</h2>
          <p>Calorie values are sample data for the rendering exercise.</p>
          <div className="grid">
            <FoodList category="Fruits" items={fruits} />
            <FoodList category="Vegetables" items={vegetables} />
            <FoodList category="Fruits under 100 calories" items={lighterFruits} />
          </div>
        </section>
      </main>

      <footer>
        <a href="https://www.youtube.com/watch?v=CgkZ7MvWUAA">Bro Code React tutorial</a>
      </footer>
    </>
  );
}
