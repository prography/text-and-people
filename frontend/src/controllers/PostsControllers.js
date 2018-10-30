export const getPosts = async () => {
  try {
    const response = await fetch('http://localhost:3000/posts');
    const data = await response.json()
    return data;
  } catch (error) {
    return [];
  }
}

export default {
  getPosts,
}
