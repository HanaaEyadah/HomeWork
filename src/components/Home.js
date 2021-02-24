import {Link} from "react-router-dom";


const Home = (props) => {
    console.log(props);
    return(
        <div>
            
            <h1> This is the Home Page</h1>
            <Link to ="/about"> About Page</Link>
        </div>
    );
}

export default Home;
