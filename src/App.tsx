import { ThemeProvider } from "./components/ThemeProvider";
import ChatBoard from "./components/chat/ChatBoard";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ChatBoard />
    </ThemeProvider>
  );
}

export default App;
