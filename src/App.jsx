import "./App.css";
import CustomErrorBoundary from "./components/molecules/CustomErrorBoundary/CustomErrorBoundary";
import { AppRoutes } from "./routes";

function App() {
  return (
    <>
      <CustomErrorBoundary>
        <AppRoutes />
      </CustomErrorBoundary>
    </>
  );
}

export default App;
