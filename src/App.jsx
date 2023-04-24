import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import Expenses from "./components/Expenses";

function App() {
  return (
    <>
      <div>
        <ChakraProvider>
          <Expenses />
        </ChakraProvider>
      </div>
    </>
  );
}

export default App;
