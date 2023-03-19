import { useEffect, useState } from "react";
import { Bell, Menu, X, Clipboard, DollarSign } from "react-feather";
import { Outlet, Link } from "react-router-dom";
import UserIcon from "../components/UserIconComponent";

export default function Root() {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("user_data") != null) setLoggedIn(true);
    else setLoggedIn(false);
  }, []);

  // Probably better than using inline ternary inside the return
  const renderIcon = () => {
    if (!isMenuOpen) {
      return <Menu strokeWidth={1} onClick={() => setMenuOpen(true)} />;
    } else return <X strokeWidth={1} onClick={() => setMenuOpen(false)} />;
  };

  const handleLogout = () => {
    localStorage.removeItem("user_data");
    window.location.assign("/login");
    setMenuOpen(false);
  };

  const handleAuth = () => {
    if (isLoggedIn) {
      return (
        <div className="flex flex-row items-center gap-x-2">
          <div className="flex flex-row gap-x-2">
            <DollarSign width={20} />
            <span>
              {JSON.parse(localStorage.getItem("user_data")).betting_points}
            </span>
          </div>
          <UserIcon onClick={() => console.log("XD")} />
          {renderIcon()}
        </div>
      );
    } else {
      return (
        <div className="flex flex-row gap-x-2">
          <Link to="/login">Login</Link>/<Link to="/register">Register</Link>
        </div>
      );
    }
  };

  return (
    <>
      <div className="fixed z-20">
        <div className="bg-secondary p-4 flex flex-row w-screen items-center relative justify-between z-10 shadow-md">
          <div className="text-2xl font-normal">
            <Link to="/">JNT</Link>
          </div>
          {handleAuth()}
        </div>
      </div>
      <div
        className={
          isMenuOpen
            ? "h-auto fixed w-screen transition-all duration-300 ease-in-out top-16 bottom-0 z-10 transform -translate-y-0"
            : "h-auto fixed w-screen transition-all duration-300 ease-in-out top-16 bottom-0 z-10 transform -translate-y-[100vh]"
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
            <li className="text-lg font-medium">
              <Link to="/my-bets" onClick={() => setMenuOpen(false)}>
                Moje sázky
              </Link>
            </li>
            {isLoggedIn ? (
              <li className="text-lg font-medium">
                <Link
                  to={
                    "/profile/" +
                    JSON.parse(localStorage.getItem("user_data")).id
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  Můj profil
                </Link>
              </li>
            ) : (
              ""
            )}
            {isLoggedIn ? (
              <li className="text-lg font-medium">
                <Link to="/" onClick={() => handleLogout()}>
                  Odhlásit se
                </Link>
              </li>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
      <div className="p-4 relative top-16">
        <Outlet />
      </div>
    </>
  );
}
