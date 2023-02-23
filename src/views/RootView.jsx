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
        <div className="userpanel">
          <Clipboard strokeWidth={1} />
          <Bell strokeWidth={1} />
          <UserIcon />
          {renderIcon()}
        </div>
      );
    } else {
      return (
        <div className="userpanel">
          <Link to="/login">Log-in</Link>
          or
          <Link to="/register">register</Link>
          {renderIcon()}
        </div>
      );
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">Logo</div>
        {handleAuth()}
      </div>
      <div className={isMenuOpen ? "navbar-overlay show" : "navbar-overlay"}>
        <div className="overlay-wrapper">
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Úvod
              </Link>
            </li>
            <li>
              <Link to="/players" onClick={() => setMenuOpen(false)}>
                Hráči
              </Link>
            </li>
            <li>
              <Link to="/matches" onClick={() => setMenuOpen(false)}>
                Zápasy
              </Link>
            </li>
            <li>
              <Link to="/chat" onClick={() => setMenuOpen(false)}>
                Chat
              </Link>
            </li>
            {isLoggedIn ? (
              <li>
                <Link to="/players" onClick={() => setMenuOpen(false)}>
                  Můj profil
                </Link>
              </li>
            ) : (
              ""
            )}
            {isLoggedIn ? (
              <li>
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
      <div className="main-content">
        <Outlet />
      </div>
    </>
  );
}
