import axiousClinet from "./axiouClient";

const author = {
    register: async (body) => {
        const url = `http://localhost:8080/api/v1/users/register`
        return axiousClinet.post(url, { body })
    }
}

export default author