import React, {Component} from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="bg-black">
        <div className="container text-white">
          <div className="d-flex justify-content-between align-items-center">
            <div className="header__left">Start Bootstrap</div>
            <div className="header__right">
              <ul className="nav">
                <li className="nav-item">
                  <a
                    className="nav-link active text-white"
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link text-white">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
