import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddExpense from "./Components/AddExpense";
import AddTrip from "./Components/AddTrip";
import ViewExpense from "./Components/ViewExpense";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AddExpense />,
    },
    {
      path: "/addTrip",
      element: <AddTrip />,
    },
    {
      path: "/addExpense",
      element: <AddExpense />,
    },
    {
      path: "/viewExpense",
      element: <ViewExpense />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
