import Cookie from 'js-cookie';

export const getPosts = async () => {
  try {
    const response = await fetch('http://localhost:3000/posts');
    const data = await response.json()
    return data;
  } catch (error) {
    return [];
  }
}

export const getPost = async (postId) => {
  try {
    const response = await fetch(`http://localhost:3000/posts/${postId}`);
    const data = await response.json()
    return data;
  } catch (error) {
    return {};
  }
}

export const createPost = async ({
  title,
  content,
}) => {
  try {
    const response = await fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'Authentication': Cookie.get('pad-token'),
      },
      body: {
        title,
        content,
      }
    });
    const data = await response.json()
    return data;
  } catch (error) {
    return {};
  }
}

export const updatePost = async ({
  postId,
  title,
  content,
}) => {
  try {
    const response = await fetch(`http://localhost:3000/posts/${postId}`, {
      method: 'PUT',
      headers: {
        'Authentication': Cookie.get('pad-token'),
      },
      body: {
        title,
        content,
      }
    });
    const data = await response.json()
    return data;
  } catch (error) {
    return {};
  }
}
