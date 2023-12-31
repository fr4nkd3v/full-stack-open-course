import axios from 'axios';

const url = 'https://studies.cs.helsinki.fi/restcountries/'

const getAll = () => {
  return axios.get(`${url}/api/all`).then(response => response.data)
}

const getCountrie = name => {
  return axios.get(`${url}/api/name/${name}`).then(response => response.data)
}

export default { getAll, getCountrie }