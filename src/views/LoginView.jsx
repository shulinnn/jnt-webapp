import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ButtonComponent from "../components/ButtonComponent";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, redirect } from "react-router-dom";

export default function Login() {
  const [loginName, setLoginName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("username", loginName);
    formData.append("password", loginPassword);

    fetch("http://jnt.wbgl.eu/api/login", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          response
            .json()
            .then(
              (body) => localStorage.setItem("user_data", JSON.stringify(body)),
              window.location.assign("/")
            );
        } else {
          toast.error(
            "Zadaná kombinace uživatelského jména a hesla neexistuje.",
            {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            }
          );
          throw new Error("HTTP Error, status = " + response.status);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <ToastContainer />
      <h1>Login</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-y-4 px-0 py-8">
        <div className="flex flex-col gap-y-4">
          <label className="font-light text-base">Uživatelské jméno</label>
          <input
            type="text"
            className="shadow-inner bg-secondary outline-none border-none p-4 text-white placeholder:text-white"
            placeholder="Uživatelské jméno"
            autoComplete="true"
            onChange={(event) => {
              setLoginName(event.target.value);
            }}
            required
          />
        </div>
        <div className="flex flex-col gap-y-4">
          <label className="font-light text-base">Heslo</label>
          <input
            className="shadow-inner bg-secondary outline-none border-none p-4 text-white placeholder:text-white"
            type="password"
            onChange={(event) => {
              setLoginPassword(event.target.value);
            }}
            placeholder="Heslo"
            autoComplete="true"
            required
          />
        </div>
        <ButtonComponent text="PŘIHLÁSIT SE" />
      </form>
    </>
  );
}
