import reactLogo from "./assets/react.svg";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import StackContainer from "./components/StackContainer";
import stackInfo from "./data/stackInfo";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Hero />
      <StackContainer id="stack" inputData={stackInfo} title="Mein Stack" />
      <StackContainer
        id="projekte"
        inputData={stackInfo}
        title="Meine Projekte"
      />
    </div>
  );
}

export default App;
