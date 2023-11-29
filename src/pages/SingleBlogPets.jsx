import Nav from "../components/Nav";
import './SingleBlog.scss'


const SingleBlogPets = () => {
    return (  
        <section>
            <Nav />
            <div className="singleBlog_wrap">
                <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80" alt="doggo" />
                <div>
                    <h2>My Pets</h2>
                    <h3>18.03.21</h3>
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, inventore!</p>
                <h4>Jane Doe</h4>
            </div>
        </section>
    );
}
 
export default SingleBlogPets;