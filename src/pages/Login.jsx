import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    // Logic for auth would go here
    navigate('/home');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <input type="text" placeholder="Username" />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}