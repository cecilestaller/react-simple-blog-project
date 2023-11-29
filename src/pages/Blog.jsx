import BlogPreview from "../components/BlogPreview";
import Nav from "../components/Nav";
import blogData from "../data/blogData";
import { v4 as uuidv4 } from 'uuid';
import './Blog.scss'
import Button from "../components/Button";
import { Link } from "react-router-dom";

const Blog = () => {
    return (  
        <section>
            <Nav />
            <article>
                <p>beispiel einer statische weiterleitung auf blogpostseite:</p>
                <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1498&q=80" alt="doggo" />
                <h3>My Pets</h3>
                <Link to="/blog/mypets">Read more</Link>
            </article>
            <section className="blogPreviewItems_wrap">

                
                {blogData.map((blogObj) => {
                    return (
                        <BlogPreview
                            key={uuidv4()}
                            img={blogObj.img_url}
                            author={blogObj.author}
                            title={blogObj.title}
                        />
                    )
                })}
            </section>
            
        </section>
    );
}
 
export default Blog;