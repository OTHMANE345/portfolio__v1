import {createBrowserRouter} from "react-router-dom";



 
import Navbar from "./components/Navbar/Navbar";

import DefaultLayout from './components/DefaultLayout';


const router =  createBrowserRouter([
    {
        path:'/',
        element:<DefaultLayout/>,
        children:[

                {
                    path:'/login',
                    element:<Navbar/>
                },
              
        ]
    },
   

    // {
    //     path:'/',
    //     element:<GuestLayout/>,
    //      children:[

    //             {
    //                 path:'/signup',
    //                 element:<Form/>
    //             },

    //     ]
    // },


])


 export default router;
