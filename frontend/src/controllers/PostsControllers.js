import Cookie from 'js-cookie';

export const getPosts = async (page = 0, limit = 20) => {
  try {
    const response = await fetch(`http://localhost:3000/posts?_page=${page}&_limit=${limit}`);
    const data = await response.json()
    return data;
  } catch (error) {
    return [];
  }
}

export const getPupularPosts = async (page = 0, limit = 20) => {
  try {
    const response = await fetch(`http://localhost:3000/popular-posts?_page=${page}&_limit=${limit}`);
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
