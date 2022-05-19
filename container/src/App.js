import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { createBrowserHistory } from "history";
import MicroFrontend from "./MicroFrontend";

import "./App.css";

const { REACT_APP_HEADER_HOST: headerHost, REACT_APP_BLOGS_HOST: blogHost } =
  process.env;

function Header({ history }) {
  return <MicroFrontend history={history} host={headerHost} name="Header" />;
}

function Blogs({ history }) {
  return <MicroFrontend history={history} host={blogHost} name="Blogs" />;
}

function BlogDetail({ history }) {
  return (
    <div>
      <MicroFrontend history={history} host={blogHost} name="Blogs" />
    </div>
  );
}

function Layout({ history }) {
  return (
    <div className="container">
      <Header history={history} />
      <Outlet />
    </div>
  );
}

const defaultHistory = createBrowserHistory();

function App({ history = defaultHistory }) {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Routes>
          <Route exact path="/" element={<Layout history={history} />}>
            <Route path="" element={<Blogs history={history} />} />
            <Route
              path="/detail/:blogid"
              element={<BlogDetail history={history} />}
            />
          </Route>
        </Routes>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
