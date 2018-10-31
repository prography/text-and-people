export const getBanners = async () => {
  try {
    const response = await fetch('http://localhost:3000/banners');
    const data = await response.json()
    return data;
  } catch (error) {
    return [];
  }
}

export default {
  getBanners,
}
