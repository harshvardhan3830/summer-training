import axios from "axios";

const HEADERS = {
	"x-rapidapi-key": "e4cbe7bac2msh60a93da40695f20p1a15a3jsna1526bc09b76",
	"x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
};

const axiosInstance = axios.create({
	headers: HEADERS,
});

export default axiosInstance;
