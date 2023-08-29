import { Container } from "react-bootstrap";

import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="py-3"></main>
      <Container>
        <h1>Welcom To ProShop</h1>
      </Container>
      <Footer />

    </>
  );
};

export default App;
