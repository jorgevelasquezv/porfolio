import React from 'react'

export const SlideBar = () => {
  return (
      <aside className="bd-sidebar">
          <ul className="navbar-nav">
              <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                      Home
                  </a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">
                      Features
                  </a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#">
                      Pricing
                  </a>
              </li>
              <li className="nav-item">
                  <a className="nav-link">Disabled</a>
              </li>
          </ul>
      </aside>
  );
}

