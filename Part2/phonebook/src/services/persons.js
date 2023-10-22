import axios from 'axios'
const baseURL = 'http://localhost:3001/persons'

const getAll = () => {
    return (axios
        .get(baseURL)
    )
}
const addNumber = (newPerson) => {
    return (axios
        .post(baseURL, newPerson)
    )
}
const deleteNumber = (id) => {
    const deleteURL = `${baseURL}/${id}`
    //console.log(`we would be deleting personrom this url ${deleteURL}`)
    return (axios  
        .delete(deleteURL)
    )
}
const updateNumber = (id, newPerson) => {
    return (axios
        .put(`${baseURL}/${id}`, newPerson)
    )

}

export default {getAll, addNumber, deleteNumber, updateNumber}
