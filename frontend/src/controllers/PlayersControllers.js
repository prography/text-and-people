export const getPlayers = async () => {
  try {
    const response = await fetch('http://localhost:3000/team');
    const data = await response.json()
    return data;
  } catch (error) {
    return [];
  }
}

export default {
  getPlayers,
}
