import Button from "./Button";
import './BlogPreview.scss'

const BlogPreview = (props) => {
    return (  
        <article>
            <img src={props.img} alt={props.author} />
            <h3>{props.title}</h3>
            <Button 
            content={'Read more'}
            />
        </article>
    );
}
 
export default BlogPreview;