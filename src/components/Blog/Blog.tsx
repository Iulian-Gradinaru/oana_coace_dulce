import { Link } from 'react-router-dom';
import { blogData } from '../../utils/blogData';
// import './Blog.css';
import {
  BlogCard,
  BlogContainer,
  BlogImage,
  BlogLink,
  BlogParagraph,
  BlogTitle,
  DateText,
} from './Blog.styles';
// export const Blog = () => {
//   return (
//     <div className="blog-container">
//       {blogData.map((post, index) => (
//         <div className="blog-card" key={index}>
//           <img src={post.image} alt={post.title} />
//           <h2>{post.title}</h2>
//           <p>{post.prew}</p>
//           <Link to={`/post/${post.id}`}>Read More</Link>
//         </div>
//       ))}
//     </div>
//   );
// };

export const Blog = () => {
  return (
    <BlogContainer className="blog-container">
      {blogData.map((post, index) => (
        <BlogCard className="blog-card" key={index}>
          <BlogImage className="blog-image" src={post.image} alt={post.title} />
          <BlogTitle className="blog-title">{post.title}</BlogTitle>
          <BlogParagraph className='"blog-paragraph'>{post.prew}</BlogParagraph>
          <BlogLink className="blog-link" to={`/post/${post.id}`}>
            Read More
          </BlogLink>
          <DateText>{post.date}</DateText>
        </BlogCard>
      ))}
    </BlogContainer>
  );
};
