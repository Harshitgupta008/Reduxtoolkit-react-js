import Card from "./Card";
import todoimage from "../image/todo-image.jpg"
import fetchimage from "../image/fetchApi.jpg"
import generatenumber from "../image/randomimage.jpeg"
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <div className="home-container">
                <Link  className="homelink" to={"/todos"}><Card image={todoimage} title={"To-Do Using Redux"} /></Link>
                <Link  className="homelink" to={"/fetching"}><Card image={fetchimage} title={"Fetch Fake Api Using Redux"} /></Link>
                <Link  className="homelink" to={"/generatenumber"}><Card image={generatenumber} title={"Geneate Number Using Redux"} /></Link>
            </div>
        </>
    )
}
export default Home;