import Nav from "../components/Nav";
import './SingleBlog.scss'
import blogData from "../data/blogData";
import { Link, useParams } from 'react-router-dom';

const SingleBlogPets = () => {
    const idParams = useParams();
    const pfad = idParams.id;
    console.log(pfad);

    const gefilterterBlog = blogData.filter((blog) => {
        return blog.id.toString() === pfad.toString();
    })
    return (  
        <section>
            <Nav />
                <div className="singleBlog_wrap">
                <img src={gefilterterBlog[0].img_url} alt={gefilterterBlog[0].title}/>
                <div>
                    <h2>{gefilterterBlog[0].title}</h2>
                    <h3>{gefilterterBlog[0].published_date}</h3>
                </div>
                <p>{gefilterterBlog[0].description}</p>
                <h4>{gefilterterBlog[0].author}</h4>
            </div>
        </section>
    );
}
 
export default SingleBlogPets;