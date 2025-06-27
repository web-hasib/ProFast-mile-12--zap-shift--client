import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Authentication/Login/Login";
import Register from "../pages/Authentication/Register/Register";
import Coverage from "../pages/Coverage/Coverage";
import PrivateRoute from "../routes/PrivateRoute";
import SendParcel from "../pages/SendParcel/SendParcel";
import DashboardLayout from "../layouts/DashboardLayout";
import MyParcels from "../pages/Dashboard/MyParcels";
import Payment from "../pages/Dashboard/Payment/Payment";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import TrackParcel from "../pages/Dashboard/TrackParcel/TrackParcel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
        {
            index: true,
            Component: Home
        },
        {
          path:'coverage',
          Component:Coverage,
          loader:()=>fetch('./serviceCenter.json')
        },
        {
          path:'sendParcel',
          element:<PrivateRoute><SendParcel></SendParcel></PrivateRoute>,
          loader:()=>fetch('./serviceCenter.json')
        }
    ]
  },
  {
    path:'/',
    Component:AuthLayout,
    children:[
      {
        path:'login',
        element:<Login></Login>
      },
      {
        path:'register',
        element:<Register></Register>
      }
    ]
  },
  {
    path:'/dashboard',
   element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children:[
      {
        path:'myParcels',
        element:<MyParcels></MyParcels>
      },
      {
        path:'payment/:parcelId',
        Component:Payment
      }
      ,
      {
        path:'paymentHistory',
        Component:PaymentHistory
      },
      {
        path:'track',
        Component:TrackParcel
      }
    ]
  }
]);