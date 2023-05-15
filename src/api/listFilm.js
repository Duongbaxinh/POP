import axiousClinet from '../api/axiouClient';

const listFilm = {
    getList: async () => {
        try {
            const url = `http://localhost:8080/api/v1/movies`
            return axiousClinet.get(url)
        } catch (error) {
            console.log(error)
        }

    },
    getDetai: async (id) => {
        try {
            const url = `http://localhost:8080/api/v1/movies/${id}`
            return axiousClinet.get(url)
        } catch (error) {
            console.log(error)
        }

    },
    getQueryMove: async (param) => {
        try {
            const url = `http://localhost:8080/api/v1/search`
            return axiousClinet.get(url, { params: param })
        } catch (error) {
            console.log(error)
        }
    }
}
export default listFilm;