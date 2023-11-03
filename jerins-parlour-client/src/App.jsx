import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/PublicRoutes/PublicRoutes";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
