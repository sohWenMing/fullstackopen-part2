import axios from 'axios'

const baseUrl = "https://studies.cs.helsinki.fi/restcountries/"

function getAll() {
    return (
        axios.get(`${baseUrl}/api/all`)
    )
}

function searchCountry(country) {
    return (
        axios.get(`${baseUrl}api/name/${country}`)
    )
}

export default {getAll, searchCountry}