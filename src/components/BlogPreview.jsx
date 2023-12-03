
import './BlogPreview.scss'

const BlogPreview = (props) => {
    return (  
        <article>
            <img src={props.img} alt={props.author} />
            <h3>{props.title}</h3>
        </article>
    );
}
 
export default BlogPreview;