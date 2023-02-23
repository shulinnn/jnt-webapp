import ButtonComponent from "../components/ButtonComponent";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit} className="login">
        <div className="input-group">
          <label>Uživatelské Jméno</label>
          <input
            type="text"
            placeholder="Uživatelské jméno"
            autoComplete="true"
          />
        </div>
        <div className="input-group">
          <label>Heslo</label>
          <input type="password" placeholder="Heslo" autoComplete="true" />
        </div>
        <ButtonComponent text="PŘIHLÁSIT SE" />
      </form>
    </>
  );
}
