import axios from 'axios';

export default axios.create({
	baseURL: `https://du.uipath.com/`,
	headers: {
	"Content-Type": "application/json",
		"X-UIPATH-License": "7H5G5RrLGrX3KfaFEtmRwkpCinwNCG9OSnerz31WhgGZo7luWlXUxCMVjUUJOOf1zgxsVohSKLof48iUFwBd2A==",
		"X-UIPATH-Version": "1"
	}
});