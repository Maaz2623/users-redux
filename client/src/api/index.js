import axios from 'axios'

const url = 'http://127.0.0.1:5000/users'

export const createUser = (newUser) => axios.post(url, newUser)
export const fetchUsers = () => axios.get(url)
export const deleteUser = (id) => axios.delete(`${url}/${id}`)
export const likeUser = (id) => axios.patch(`${url}/like/${id}`)