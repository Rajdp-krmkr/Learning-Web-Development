import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/navbar";
import CustomButton from "./components/CustomButton";


function App() {
  const name = "google";
  return (
    <div>
      <NavBar companyName={name} />
      hello {name}
      <CustomButton />
    </div>
  );
}

export default App;
