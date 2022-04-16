import { PostType } from 'app/types/PostType';
import { LayoutHome } from 'components/Layout/LayoutHome';
import { PostFindById } from 'hooks/Posts/PostFindById';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

type PostFindByIdParams = {
  id: string;
};

const PostFindByIdPage: React.FC = () => {
  const [post, setPodt] = useState<PostType>();
  const { id } = useParams<PostFindByIdParams>();

  useEffect(() => {
    postFindByIdPage();
  }, []);

  const postFindByIdPage = async () => {
    try {
      const response = await PostFindById(`${id}`);
      setPodt(response);
      console.log(response);
    } catch (error) {}
  };

  return (
    <LayoutHome>
      <h1>Find By Id</h1>
      <h2>
        {post?.title} {post?.id}
      </h2>
      <h3>User: {post?.userId}</h3>
      <p>{post?.body}</p>
      <Link className="btn btn-primary text-white" to={'/posts'}>
        Voltar
      </Link>
    </LayoutHome>
  );
};

export default PostFindByIdPage;
