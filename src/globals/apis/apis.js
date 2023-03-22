// export const requestDemo = () => {
//   return fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(json => json)
//     .catch(error => Promise.reject(error));
// };

import axios from 'axios';

export const requestDemo = async data => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', data);
    return response.data;
  } catch (error) {
    return error;
  }
};
