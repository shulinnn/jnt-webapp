import { useState } from "react";
import { Bell, Menu, X, Clipboard } from "react-feather";
import { Outlet, Link } from "react-router-dom";
import UserIcon from "../components/UserIconComponent";

export default function Root() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Probably better than using inline ternary inside the return
  const renderIcon = () => {
    if (!isMenuOpen) {
      return <Menu strokeWidth={1} onClick={() => setMenuOpen(true)} />;
    } else return <X strokeWidth={1} onClick={() => setMenuOpen(false)} />;
  };

  /// Only usable before we implement JWT login
  const handleAuth = () => {
    if (isLoggedIn) {
      return (
        <div className="flex flex-row items-center gap-x-2">
          <Clipboard strokeWidth={1} />
          <Bell strokeWidth={1} />
          <UserIcon />
          {renderIcon()}
        </div>
      );
    } else {
      return (
        <div className="flex flex-row gap-x-2">
          <Link to="/login">Login</Link>
          or
          <Link to="/register">Register</Link>
        </div>
      );
    }
  };

  return (
    <>
      <div className="bg-secondary p-4 flex flex-row items-center relative justify-between z-10 shadow-md">
        <div className="text-2xl font-normal">
          <Link to="/">Logo</Link>
        </div>
        {handleAuth()}
      </div>
      <div
        className={
          isMenuOpen
            ? "h-auto fixed w-screen transition-all duration-300 ease-in-out top-20 bottom-0 z-0 transform -translate-y-0"
            : "h-auto fixed w-screen transition-all duration-300 ease-in-out top-20 bottom-0 z-0 transform -translate-y-[100vh]"
        }
      >
        <div className="p-4 h-auto bg-secondary">
          <ul className="flex flex-col gap-y-4">
            <li className="text-lg font-medium">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Úvod
              </Link>
            </li>
            <li className="text-lg font-medium">
              <Link to="/players" onClick={() => setMenuOpen(false)}>
                Hráči
              </Link>
            </li>
            <li className="text-lg font-medium">
              <Link to="/matches" onClick={() => setMenuOpen(false)}>
                Zápasy
              </Link>
            </li>
            <li className="text-lg font-medium">
              <Link to="/chat" onClick={() => setMenuOpen(false)}>
                Chat
              </Link>
            </li>
            {isLoggedIn ? (
              <li className="text-lg font-medium">
                <Link to="/players" onClick={() => setMenuOpen(false)}>
                  Můj profil
                </Link>
              </li>
            ) : (
              ""
            )}
            {isLoggedIn ? (
              <li className="text-lg font-medium">
                <Link to="/players" onClick={() => setMenuOpen(false)}>
                  Odhlásit se
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
      <div className="px-8 py-4">
        <Outlet />
      </div>
    </>
  );
}
