import axios from 'axios'
const baseURL = '/api/notes'

const getAll = () => {
    const request = axios.get(baseURL)
    return request.then(response => response.data)
}
const create = (newNote) => {
    const request = axios.post(baseURL, newNote)
    return request.then(response => response.data)
}
const update = (id, newObject ) => {
    const request = axios.put(`${baseURL}/${id}`, newObject)
    return request.then(response => response.data)
}

export default {
    getAll, create, update
}
