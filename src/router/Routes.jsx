import { createBrowserRouter } from "react-router-dom";
import {Form, Animal} from '../components'
import App from "../App";
import { AnimalDashboard, Donations, Notifications, About, HomePage } from "../pages";

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
    ],
  },
]);
