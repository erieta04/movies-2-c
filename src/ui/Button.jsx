import "./Button.css";
function Button({ onClick, children }) {
  return (
    <button className="login-btn signup-btn" onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
