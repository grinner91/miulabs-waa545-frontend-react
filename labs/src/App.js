import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./containers/Dashboard";
import PageRoutes from "./containers/PageRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <div>
          <Link to="/"> Posts</Link>
          <Link to="/new-post"> New Post</Link>
        </div> */}
        <Dashboard></Dashboard>
        <PageRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
