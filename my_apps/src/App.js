import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Profile1 from "./Profile1/Profile1";
const App = () => {
  return (
    <div className="app-wrapper">
      <Header/>
      <Navigation/>
      <Profile1/>
    </div>
  );
};

export default App;
