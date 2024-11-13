import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { generateNumber } from "../redux/features/randomnumber/randomnumberSlics";
const RandomNumber = () => {
    const [addnumber,setAddNumber] = useState();
    const randomnumbe = useSelector((state)=>state.randomnumber.randomnumber);
    const dispatch = useDispatch();
    const GenerateValue = ()=>{
        if(!addnumber) return window.alert("Enter number")
        dispatch(generateNumber(addnumber));
    }
    return (
        <>
            <div className="randomnumbe-container">
                <div className="card">
                    <input type="number" value={addnumber} onChange={(e)=>setAddNumber(e.target.value)} />
                    <button  onClick={GenerateValue}>Generate</button>
                </div>
                <h1>{randomnumbe}</h1>
            </div>
            <div className="info">
                <h3> <span>Note : </span> I will be adding a seek-bar to generate a random number after a certain period. 😊  
                </h3>
            </div>
            
        </>
    )
}
export default RandomNumber;