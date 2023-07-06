export function Login() {
  const handleLogin = () => {
    console.log("Logged in");
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
