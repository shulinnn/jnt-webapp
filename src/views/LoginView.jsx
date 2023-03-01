import ButtonComponent from "../components/ButtonComponent";

export default function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 px-0 py-8">
        <div className="flex flex-col gap-y-4">
          <label className="font-light text-base">Uživatelské jméno</label>
          <input
            type="text"
            className="shadow-inner bg-secondary outline-none border-none p-4 text-white placeholder:text-white"
            placeholder="Uživatelské jméno"
            autoComplete="true"
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <label className="font-light text-base">Heslo</label>
          <input
            className="shadow-inner bg-secondary outline-none border-none p-4 text-white placeholder:text-white"
            type="password"
            placeholder="Heslo"
            autoComplete="true"
          />
        </div>
        <ButtonComponent text="PŘIHLÁSIT SE" />
      </form>
    </>
  );
}
