import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "../redux/features/fetchdata/fetchdataSlice";
import { useEffect } from "react";
import ShoppingCard from "./ShoppingCard";
const Fetchingapi = () => {
    const users = useSelector((state) => state.fetchdata.users);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllData());
    }, [dispatch]);
    return (
        <>
        <div className="info">
                <h3>
                    <span>Note : </span> I will be adding filter and sorting feature after a certain period. 😊  
                </h3>
            </div>
            <div className="fetching-container">
                {
                    users.map((item, i)=>{
                        return <ShoppingCard key={i} image={item.image} category={item.category} price={item.price} rate={item.rating.rate}/>
                    })
                }
                
                
            </div>
        </>
    )
}
export default Fetchingapi;