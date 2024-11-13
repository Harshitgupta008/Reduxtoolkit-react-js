import { useSelector } from "react-redux";

const UserList = () => {
    const todo = useSelector((state) => state.todo.todo)
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