import { Container } from "react-bootstrap";
import { Store } from "./pages/Store";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (

      <ShoppingCartProvider>
        <Container>
          <Store />
        </Container>
      </ShoppingCartProvider>

  );
}

export default App;
