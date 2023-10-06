import { blogData } from '../../utils/blogData';

import {
  BlogCard,
  BlogContainer,
  BlogImage,
  BlogLink,
  BlogParagraph,
  BlogTitle,
  DateText,
} from './Blog.styles';

export const Blog = () => {
  return (
    <BlogContainer className="blog-container">
      {blogData.map((post, index) => (
        <BlogCard className="blog-card" key={index}>
          <BlogImage className="blog-image" src={post.image} alt={post.title} />
          <BlogTitle className="blog-title">{post.title}</BlogTitle>
          <BlogParagraph className='"blog-paragraph'>{post.prew}</BlogParagraph>
          <BlogLink className="blog-link" to={`/post/${post.id}`}>
            Citeste mai mult
          </BlogLink>
          <DateText>{post.date}</DateText>
        </BlogCard>
      ))}
    </BlogContainer>
  );
};
