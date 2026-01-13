import "./index.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AppRoutes from "./routes/AppRoutes";
import Container from "./components/layout/Container";

function App() {
  return (
    <>
      <Header />
      <Container>
        <AppRoutes />
      </Container>
      <Footer />
    </>
  );
}

export default App;
