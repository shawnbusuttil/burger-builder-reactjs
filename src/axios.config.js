import axios from "axios";

const httpConfig = axios.create({
	baseURL: "https://burger-builder-bc2eb.firebaseio.com/"
});

export default httpConfig;