import { useParams } from "react-router-dom"
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
const UserId = () => {
    const todo = useSelector((state) => state.todo.todo);
    const [userDetail, setUserDetail] = useState(null);
    const { id } = useParams();
    useEffect(() => {

        const user = todo.find((data, i) => {
            return i === parseInt(id);
        })
        setUserDetail(user);
    }, [id, todo])
    if (!userDetail) {
        return <p>Loading...</p>;
    }
    return (
        <>
            <div className="userid-container">
                <div className="userid-card">
                    <h3>{userDetail.name}</h3>
                    <p><strong>Email : </strong>{userDetail.email}</p>
                    <p><strong>Phone Number : </strong>{userDetail.number}</p>
                    <p><strong>Place : </strong>{userDetail.place}</p>
                </div>
            </div>
        </>
    )
}
export default UserId;