import { useNavigate } from "react-router-dom";
import AddList from "./AddList";
import { useState } from "react";
import UserList from "./UserList";

const Todos = () => {
    const [myModle,setMyModle] = useState(false);
    const Nevigate = useNavigate();
    const BackHome = () => {
        return Nevigate("/home");
    }

    const CloseMolde = ()=>{
        return setMyModle(false);
    }
    
    return (
        <>
            <div className="todo-nav">
                <h4 onClick={BackHome}>To-Do</h4>
                <button onClick={()=>setMyModle(true)}>Add</button>
            </div>
            { myModle && <AddList CloseMolde={CloseMolde} /> }
            <UserList/>

        </>
    )
}
export default Todos;