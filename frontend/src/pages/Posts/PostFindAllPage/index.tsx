import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoaderDefault } from 'app/common/LoaderDefault';
import { PostType, PostCreateType } from 'app/types/PostType';
import { LayoutHome } from 'components/Layout/LayoutHome';
import { PostFindAll } from 'hooks/Posts/PostFindAll';
import { PostCreate } from 'hooks/Posts/PostCreate';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const PostFindAllPage: React.FC = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');

  const navigate = useNavigate();

  const handleLoadingPosts = async () => {
    try {
      setLoading(true);
      const response = await PostFindAll();
      setPosts(response.data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setPosts([]);
      console.log(error);
    }
  };

  const handleOnChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleOnChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBody(event.target.value);
  };

  const handleCreatePost = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      if (title && body) {
        const post: PostCreateType = {
          userId: 1,
          title,
          body,
        };

        const data = await PostCreate(post);
        console.log(data);

        toast.success('Post create com success!');

        navigate('/');

        return data;
      } else {
        toast.error('Preencha dos dados!');
      }
    } catch (error) {
      toast.error('Preencha dos dados!');
      console.log(error);
    }
  };

  useEffect(() => {
    handleLoadingPosts();
  }, []);

  return (
    <LayoutHome>
      <form onSubmit={handleCreatePost}>
        <div className="mb-3">
          <label htmlFor="title" className="col-form-label">
            Títutlo:
          </label>
          <input
            onChange={handleOnChangeTitle}
            value={title}
            name="title"
            type="text"
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="col-form-label">
            Conteudo:
          </label>
          <textarea
            onChange={handleOnChangeContent}
            value={body}
            className="form-control"
            id="body"
          ></textarea>
        </div>
        <button className="btn btn-primary text-white" type="submit">
          Enviar
        </button>
      </form>
      <h1>Posts</h1>
      {posts.length ? (
        <span> Total Post: {posts.length}</span>
      ) : (
        <LoaderDefault show={loading} size={6} />
      )}
      <LoaderDefault show={loading} size={6} />
      {posts.map(post => (
        <Link to={`${post.id}`} key={post.id}>
          <span>
            # {post.id} User: {post.userId}
          </span>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </Link>
      ))}

      {!loading && posts.length === 0 && <div>Não há posts</div>}
    </LayoutHome>
  );
};

export default PostFindAllPage;
