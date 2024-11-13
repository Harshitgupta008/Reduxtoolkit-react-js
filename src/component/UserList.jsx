import { useSelector, useDispatch } from "react-redux";
import { RemoveData } from "../redux/features/todos/todoSlice";
import { useNavigate } from "react-router-dom";

const UserList = () => {
    const todo = useSelector((state) => state.todo.todo);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const DeleteData = (id)=>{
        dispatch(RemoveData(id));
    }
    const ViewsData = (id)=>{
        return navigate(`/todos/${id}`)
    }
    return (
        <>
            <div className="userlist-container">
                {
                    Array.isArray(todo) && todo.length > 0 ? (
                        todo.map((item, id) => (

                            <div key={id} className="userlist-card">
                                <div className="userlist-name">
                                    <h2>::</h2>
                                    <h4>{item.name}</h4>
                                </div>
                                <h2>&#8942;</h2>
                                <div className="userlist-hidecard">
                                    <ul>
                                        <li onClick={()=>ViewsData(id)}>View</li>
                                        <li onClick={()=>DeleteData(id)}>Delete</li>
                                        <li>Update</li>
                                    </ul>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h1 style={{ marginTop: "80px" }}>The List is Empty</h1>
                    )
                }
            </div>
        </>
    )
}
export default UserList;