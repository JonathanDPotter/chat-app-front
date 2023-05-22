import Home from "./pages/Home.tsx";
import LoginForm from "./components/LoginForm.tsx";
import { useAppSelector } from "./store/hooks.ts";

const App = () => {
  const token = useAppSelector((state) => state.auth.user?.token) || null;
  return token ? <Home /> : <LoginForm />;
};
export default App;
