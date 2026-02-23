import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>User Dashboard (Home)</h1>
      <p>You are successfully logged in!</p>
      <button onClick={() => navigate('/')}>Logout</button>
    </div>
  );
}