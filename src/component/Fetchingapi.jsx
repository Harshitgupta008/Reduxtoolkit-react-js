import { useSelector, useDispatch } from "react-redux";
import { getAllData } from "../redux/features/fetchdata/fetchdataSlice";
import { useEffect, useState } from "react";
import ShoppingCard from "./ShoppingCard";
const Fetchingapi = () => {
    const users = useSelector((state) => state.fetchdata.users);
    const [category, setCategory] = useState("");
    const [userdata, setUserdata] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllData());
        if (category) {
            const newData = users.filter((item) => item.category === category);
            setUserdata(newData);
        } else {
            setUserdata(users);
        }
    }, [dispatch, users, category]);
    return (
        <>

            <div className="fetching-container">
                <div className="fetching-filtercontainer">
                    <select className="fetching-select" onChange={(e) => setCategory(e.target.value)}>
                        <option value="">All</option>
                        {Array.from(new Set(users.map((item, i) => item.category))).map((category, i) => (
                            <option key={i} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="fetching-mapcontainer">
                    {
                        userdata.map((item, i) => {
                            return <ShoppingCard key={i} image={item.image} category={item.category} price={item.price} rate={item.rating.rate} />
                        })
                    }
                </div>
            </div>
        </>
    )
}
export default Fetchingapi;