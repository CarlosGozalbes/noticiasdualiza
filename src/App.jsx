import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from 'react'
import HomePage from "./pages/HomePage";
import ProtectedRoute from "./components/utils/ProtectedRoute";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      errorElement: <HomePage />,
      children: [
        {
          element: <ProtectedRoute redirectPath="/" />,
          children: [
            { index: true, element: <HomePage /> },
            {
              path: "/productos/:idproduct",
              element: <HomePage />,
            },
            {
              path: "/payment/",
              element: <HomePage />,
            },
          ],
        },
        {
          path: "/login",
          element: <HomePage />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
