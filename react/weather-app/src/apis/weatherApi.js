import axiosInstance from "../configs/axiosConfig";

export const realtime = async (queryParams) => {
	try {
		const response = await axiosInstance.get(
			`https://weatherapi-com.p.rapidapi.com/current.json?q=${queryParams}`
		);

        console.log(response);
        return response;
	} catch (error) {
		console.error(error);
	}
};


export const searchAutoComplete = async (queryParams) => {
	try {
		const response = await axiosInstance.get(
			`https://weatherapi-com.p.rapidapi.com/search.json?q=${queryParams}`
		);

        console.log(response);
        return response;
	} catch (error) {
		console.error(error);
	}
};

