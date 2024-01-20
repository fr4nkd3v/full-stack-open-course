import axios from 'axios';
const url = 'http://localhost:3001/api'

const getAll = () => {
  return axios.get(`${url}/persons`).then(response => response.data)
}
const create = personObj => {
  return axios.post(`${url}/persons`, personObj).then(response => response.data)
}
const update = (id, personObj) => {
  return axios.put(`${url}/persons/${id}`, personObj).then(response => response.data)
}
const remove = id => {
  return axios.delete(`${url}/persons/${id}`)
}

export default { getAll, create, update, remove }