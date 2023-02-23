import axios from "axios";

export const fetchProducts = async () => {
    try {
        const response = await axios.get("http://localhost:4000/data/");
        return response.data;
    } catch (e) {
        return {code: e.code, message: e.message};
    }
};
