import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "../redux/features/fetchdata/fetchdataSlice";
import { useEffect } from "react";
const Fetchingapi = () => {
    const users = useSelector((state) => state.fetchdata.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllData());
    }, [dispatch]);
    return (
        <>
            <h2>Fetch Api are comming....</h2>
            
            {/* {
                users.map((user,i)=>{
                    return <h1>{user.category}</h1>
                })
            } */}
        </>
    )
}
export default Fetchingapi;