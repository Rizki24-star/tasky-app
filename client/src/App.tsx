import { Header } from "./components";
import Home from "./pages/Home";
import { ThemeProvider } from "./context/ThemeContext";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <main>
        <Header />
        <Home />
      </main>
    </ThemeProvider>
  );
};

export default App;
