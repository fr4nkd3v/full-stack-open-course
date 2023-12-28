import axios from 'axios';
const url = 'http://localhost:3000'

const getAll = () => {
  return axios.get(`${url}/persons`).then(response => response.data)
}
const create = personObj => {
  return axios.post(`${url}/persons`, personObj).then(response => response.data)
}

export default { getAll, create }