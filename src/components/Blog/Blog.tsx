import { Link } from 'react-router-dom';
import { blogData } from '../../utils/blogData';
import './Blog.css';
export const Blog = () => {
  return (
    <div className="blog-container">
      {blogData.map((post, index) => (
        <div className="blog-card" key={index}>
          <img src={post.image} alt={post.title} />
          <h2>{post.title}</h2>
          <p>{post.prew}</p>
          <Link to={`/post/${post.id}`}>Read More</Link>
        </div>
      ))}
    </div>
  );
};
