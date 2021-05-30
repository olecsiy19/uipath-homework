import axios from 'axios';

export default axios.create({
	baseURL: `https://du.uipath.com/`,
	headers: {
	"Content-Type": "application/json",
		"X-UIPATH-License": process.env.REACT_APP_API_KEY,
		"X-UIPATH-Version": "1"
	}
});