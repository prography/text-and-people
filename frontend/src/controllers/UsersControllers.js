export const getUsers = async () => {
  try {
    const response = await fetch('http://localhost:3000/users');
    const data = await response.json()
    const deletedPasswordData = data.map((user) => {
      delete user['password']
      return user;
    })
    return {
      message: '',
      data: deletedPasswordData
    };
  } catch (error) {
    return {
      message: error,
      data: []
    };
  }
}

export const getUserByName = async (username) => {
  try {
    const response = await fetch(`http://localhost:3000/users?username=${username}`);
    const data = await response.json()
    if (data.length !== 0) {
      delete data['password'];
      return {
        message: '이미 존재합니다',
        data: data[0],
      };
    }
    return {
      message: '',
      data: {}
    };
  } catch (error) {
    return {
      message: error,
      data: {}
    };
  }
}

export default {
  getUsers,
  getUserByName,
}
