import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import userContext from "./utils/userContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
// import Cart from "./components/Cart";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"))
const Cart = lazy(() => import("./components/Cart"))

let AppLayout = () => {

  let [userInfo, setUserInfo] = useState();

  // authentication
  useEffect(() => {

    // make an API call and send User name and passoword, it will return you user details like user name .....
    const data = {
      name: "Shivam Rathore"
    }
    setUserInfo(data.name)
  }, [])

  return (

    <Provider store={appStore}>
    {/* // default value for those components which are on this level */}
      <userContext.Provider value={{ loggedInUser: userInfo, setUserInfo }}>
        {/* Shivam Rathore for those components which are inside this block */}
        <div className="app">
          <userContext.Provider value={{ loggedInUser: "Elon Musk", setUserInfo }}>
            {/* Elon Musk only for header and it's children */}
            <Header />
          </userContext.Provider>
          <Outlet />
        </div>
      </userContext.Provider>
    </Provider>
  );
};

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <ContactUs />
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      },
      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}> <Grocery /></Suspense>
      },
      {
        path: "/cart",
        element: <Suspense fallback={<h1>Loading...</h1>}> <Cart /></Suspense>
      },
    ],
    errorElement: <Error />
  }
]);

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
