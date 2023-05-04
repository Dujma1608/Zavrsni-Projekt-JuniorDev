import { createBrowserRouter } from "react-router-dom";
import Donations from '../pages/Donations'
import Notifications from '../pages/Notifications'
import Form from "../components/form/Form";
import About from "../pages/About";
import App from "../App";
import AnimalDashboard from "../pages/AnimalDashboard";
import HomePage from "../pages/HomePage";
import Animal from "../pages/Animal";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "animals", element: <AnimalDashboard /> },
      { path: "createAnimal", element: <Form /> },
      { path: "animals/:id", element: <Animal /> },
      { path: "donations", element: <Donations /> },
      { path: "information", element: <Notifications /> },
      { path: "about", element: <About /> },
      { path: "newAnimal", element: <Form /> },
    ],
  },
]);
