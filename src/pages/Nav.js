import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Nav() {
  const [gameLinks, setGameLinks] = useState([]);

  useEffect(() => {
    const games = [
      { name: "Drop Down", path: "/" },
      { name: "Browser History", path: "/browserhistory" },
    ];
    setGameLinks(games);
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">
            Styled with Bootstrap
          </a>
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
            >
              Games List
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              {gameLinks.map((d, i) => (
                <li key={i}>
                  <Link to={d.path}>
                    <button className="dropdown-item" type="button">
                      {d.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
