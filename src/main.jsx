import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Screen from "./Components/Screen.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ListedBooks from "./Components/ListedBooks";
import BookDetail from "./Components/Books/BookDetail";
import Home from "./Components/Home/Home";
import PagesToRead from "./Components/PagesToRead/PagesToRead";
import Read from "./Components/Read/Read";
import { ReadProvider } from "./Components/ReadContext";
import WishList from "./Components/WishList/WishList";
import Rechart from "./Components/Rechart/Rechart";
import Blogs from "./Components/Blogs/Blogs";
import Fame from "./Components/Fame/Fame";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Screen></Screen>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blogs></Blogs>,
      },
      {
        path: "/fame",
        element: <Fame></Fame>,
      },
      {
        path: "/rechart",
        element: <Rechart></Rechart>,
      },

      {
        path: "/bookDetail/:id",
        element: <BookDetail></BookDetail>,
        loader: () => fetch("/books.json"),
      },

      {
        path: "/chart",
        element: <PagesToRead></PagesToRead>,
      },

      {
        path: "/listed",
        element: <ListedBooks></ListedBooks>,
        children: [
          {
            path: "/listed/read",
            element: <Read></Read>,
          },
          {
            path: "/listed/wish",
            element: <WishList></WishList>,
          },
        ],
      },

      {
        path: "/read",
        element: <Read></Read>,
      },
      {
        path: "/wish",
        element: <WishList></WishList>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReadProvider>
      <RouterProvider router={router} />
    </ReadProvider>
  </React.StrictMode>
);
