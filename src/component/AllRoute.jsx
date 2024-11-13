import { Route, Routes } from "react-router-dom"
import Home from "./Home";
import Todos from "./Todos";
import RandomNumber from "./RandomNumber";
import Fetchingapi from "./Fetchingapi";
import UserId from "./UserId";
const AllRoute = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/fetching" element={<Fetchingapi/>}/>
                <Route path="/generatenumber" element={<RandomNumber/>}/>
                <Route path="/todos" element={<Todos/>}/>
                <Route path="/todos/:id" element={<UserId/>}/>
            </Routes>
        </>
    )
}
export default AllRoute;