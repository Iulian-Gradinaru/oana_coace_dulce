import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { blogData } from '../../utils/blogData';
import { ContainerPost, CustomButton, Image, Paragraph } from './Post.styles';

export const Post: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = blogData.find((p) => p.id === parseInt(postId, 10));

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <ContainerPost className="post-container">
      <h2 className="title">{post.title}</h2>
      <Image className="post-image" src={post.image} alt={post.title} />
      <Paragraph className="post-text">{post.text}</Paragraph>
      {/* Afișează alte detalii despre post, dacă este cazul */}
      <Link to={'/blog'}>
        <CustomButton className="custom-button">Inapoi la blog</CustomButton>
      </Link>
    </ContainerPost>
  );
};
