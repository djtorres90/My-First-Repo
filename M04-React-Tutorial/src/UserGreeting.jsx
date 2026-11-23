export default function UserGreeting({ name = 'Guest', isLoggedIn = false }) {
  return isLoggedIn
    ? <p className="greeting success">Welcome, {name}!</p>
    : <p className="greeting">Please log in to continue.</p>;
}
