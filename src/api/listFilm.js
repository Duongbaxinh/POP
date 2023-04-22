import axiousClinet from '../api/axiouClient';

const listFilm = {
    getList: async () => {
        try {
            const url = "http://localhost:3000/book"
            return axiousClinet.get(url)
        } catch (error) {
            console.log(error)
        }

    },
    getList: async () => {
        try {
            const url = "http://localhost:3000/book"
            return axiousClinet.get(url)
        } catch (error) {
            console.log(error)
        }

    }
}
export default listFilm;