import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./components/Layout.jsx";
import Homepage from "./pages/Homepage.jsx";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/portfolio" element={<Layout />}>
        <Route index element={<Homepage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
