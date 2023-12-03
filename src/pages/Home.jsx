import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import './Home.scss'

const Home = () => {
    return (  
        <section>
            <div className="bgImage_wrap">
                <Nav />
            </div>
            <div className="inner_content">
                <h2>Welcome to my simple Blog</h2>
                <Link to='/blog'>Go to articles</Link>
            </div>
            
        </section>
    );
}
 
export default Home;