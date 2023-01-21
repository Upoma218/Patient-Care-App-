import { createBrowserRouter } from"react-router-dom";
import Main from "../../Layout/Main";
import AddPatient from "../AddPatient/AddPatient";
import DisplayPatient from "../DisplayPatient/DisplayPatient";
import EditPatientInfo from "../EditPatientInfo/EditPatientInfo";
import Home from "../Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addPatient',
                element: <AddPatient></AddPatient>
            },
            {
                path: '/displayPatient',
                element: <DisplayPatient></DisplayPatient>
            },
            {
                path: '/editInfo/:id',
                element: <EditPatientInfo></EditPatientInfo>,
                loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
            },
        ]
    }
])