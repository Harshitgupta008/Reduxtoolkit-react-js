import { useState } from "react";
import {  useDispatch } from "react-redux";
import { AddData } from "../redux/features/todos/todoSlice";
const AddList = ({ CloseMolde }) => {
    const [userData, setUserData] = useState({
        name: "", email: "", number: "", place: ""
    })
    const dispatch = useDispatch();
    const handleInput = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    }
    const submitForm = (e) => {
        e.preventDefault();
        const { name, email, number, place } = userData;
        if (!name || !email || !number || !place){
            return window.alert("all field are mendetory");
        }
        dispatch(AddData(userData))
        setUserData({ name: "", email: "", number: "", place: ""})
        return CloseMolde();
    }
    return (
        <>
            <div className="modle-wraper" onClick={CloseMolde}></div>
            <div className="addlist-container" >
                <form className="addlist-container2">
                    <h3 className="cancle-todo-inp" onClick={CloseMolde}>&#x2715;</h3>
                    <div className="inp-div">
                        <lable htmlFor="name">Name</lable>
                        <input type="text" name="name" id="name" value={userData.name} onChange={handleInput} />
                    </div>
                    <div className="inp-div">
                        <lable htmlFor="place">Place</lable>
                        <input type="text" name="place" id="place" value={userData.place} onChange={handleInput} />
                    </div>
                    <div className="inp-div">
                        <lable htmlFor="number">Number</lable>
                        <input type="number" name="number" id="number" value={userData.number} onChange={handleInput} />
                    </div>
                    <div className="inp-div">
                        <lable htmlFor="email">Email</lable>
                        <input type="email" name="email" id="email" value={userData.email} onChange={handleInput} />
                    </div>
                    <button onClick={submitForm}>Add Detail</button>
                </form>
            </div>
        </>
    )
}
export default AddList;