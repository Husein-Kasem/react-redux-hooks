import React from "react";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="nav-wrapper container">
          <a href="#!" className="brand-logo">
            Awesome TODO's
          </a>
          <a href="/" data-target="slide-out" className="sidenav-trigger">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            <li>
              <a href="https://github.com/Husein-Kasem/react-redux-hooks">
                <i className="fa fa-github fa-2x"> Github repo of this app</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <ul id="slide-out" className="sidenav">
        <li>
          <div className="user-view">
            <div className="background">
              <img
                src="./assets/images/books-background.jpg"
                alt="background"
              />
            </div>
            <a href="/">
              <img
                className="circle"
                src="./assets/images/user.png"
                alt="user"
              />
            </a>
            <a href="/">
              <span className="white-text name">Husein Kasem</span>
            </a>
            <a href="/">
              <span className="white-text email">
                husein.kasem.90@gmail.com
              </span>
            </a>
          </div>
        </li>
        <li>
          <a href="https://github.com/Husein-Kasem/react-redux-hooks">
            <i className="fa fa-github fa-2x"></i> Github repo of this app
          </a>
        </li>
      </ul>
    </div>
  );
}
