import { Link } from "react-router-dom";

export function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="http://cnn.com">
            NavBar
          </a>
          <div className="btn-group">
            <button type="button" className="btn btn-primary dropdown-toggle">
              Action
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <Link to="/">
                  <button className="dropdown-item" type="button">
                    LiveStream
                  </button>
                </Link>
              </li>
              <li>
                <Link to="/browserhistory">
                  <button className="dropdown-item" type="button">
                    BrowserHistory
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
