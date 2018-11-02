import Cookies from 'js-cookie';

export const signUp = async ({
  email,
  nickname,
  password,
  username,
}) => {
  try {
    if (!username) {
      throw new Error('username is required');
    }
    if (!username) {
      throw new Error('password is required');
    }

    const response = await fetch('http://localhost:3000/users', {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        email,
        nickname,
        username,
        password,
        token: 'ecca6ccc274ff08c9adf9163b53487279bef8d38',
      }),
    });
    const data = await response.json();
    if (data.token) {
      Cookies.set('pad-token', `Token ${data.token}`, {
        expires: 7
      });
    }
    delete data['password'];
    return {
      message: '',
      data,
    };
  } catch (error) {
    return {
      message: error,
      data: {},
    }
  }
}

export const signIn = async ({
  username,
  password,
}) => {
  try {
    if (!username) {
      throw new Error('username is required');
    }
    if (!password) {
      throw new Error('password is required');
    }
    const response = await fetch(
      `http://localhost:3000/users?username=${username}`, {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: 'GET',
      }
    );
    const data = await response.json();
    if (data.length === 0) {
      return {
        message: '유저가 없습니다.',
        data: {},
      };
    }
    if (password !== data[0].password) {
      return {
        message: '비밀번호가 일치하지 않습니다.',
        data: {},
      };
    }
    delete data[0]['password'];
    return {
      message: '',
      data: data[0],
    };
  } catch (error) {
    return {
      message: '에러가 발생하였습니다.',
      data: {},
    };
  }
}

export default {
  signIn,
  signUp,
}
