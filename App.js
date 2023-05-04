import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="loginContainer">
        <h1>Welcome Back!</h1>
        <label>Username</label>

        <div className="input-container">
          <input type="text" name="username" required/>
        </div>
        
        <label>Password</label>
        <div className="input-container">
          <input type="password" name="password" required/>
        </div>
        <a href="https://">Forgot Password ?</a>
        <a href="https://">Create a new account</a>

        <button className="loginBtn">
          <p>Log in</p>
        </button>

        <button className="signUp">
          <p>Sign up</p>
        </button>
        
      </div>
    </div>
  );
}

export default App;