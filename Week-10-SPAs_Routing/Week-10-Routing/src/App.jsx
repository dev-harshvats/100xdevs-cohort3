import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />} />
          <Route path="/neet/online-coaching-class-12" element={<Class12Program />} />
          <Route path="*" element={<ErrorPage />} />  {/* if none of the above routes are used */}
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
}

function Layout() {
  return <div style={{ height: "100vh" }}>
    <Header />

    {/* Main Page */}
    <div style={{ height: "90vh" }}>
      <Outlet />
    </div>

    {/* Footer */}
    footer
  </div>
}

function Header() {
  return <div>
    <Link to="/">Allen</Link>
    |
    <Link to="/neet/online-coaching-class-11">Class 11</Link>
    |
    <Link to="/neet/online-coaching-class-12">Class12</Link>
  </div>
}

function Landing() {
  return <div>
    Welcome to ALLEN
  </div>
}


function Class11Program() {
  const navigate = useNavigate();

  function redirectToLanding() {
    navigate("/");
  }

  return <div>
    NEET Programs for Class 11
    <div>
      <button onClick={redirectToLanding}>Go back to Landing Page</button>
    </div>
  </div>
}

function Class12Program() {
  const navigate = useNavigate();

  function redirectToLanding() {
    navigate("/");
  }

  return <div>
    NEET Programs for Class 12
    <div>
      <button onClick={redirectToLanding}>Go back to Landing Page</button>
    </div>
  </div>
}

function ErrorPage() {
  return <div>
    Sorry, page not found!
  </div>
}

export default App
