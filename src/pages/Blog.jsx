import BlogPreview from "../components/BlogPreview";
import Nav from "../components/Nav";
import blogData from "../data/blogData";
import { v4 as uuidv4 } from 'uuid';
import './Blog.scss'
import { Link } from "react-router-dom";

const Blog = () => {
    return (  
        <section>
            <Nav />
            <section className="blogPreviewItems_wrap">

                
                {blogData.map((blogObj) => {
                    return (
                        <article key={uuidv4()}>
                            <BlogPreview
                            img={blogObj.img_url}
                            author={blogObj.author}
                            title={blogObj.title}
                        />
                        <Link to={`/details/${blogObj.id}`}>Read more</Link>
                        </article>
                        
                    )
                })}
            </section>
            
        </section>
    );
}
 
export default Blog;