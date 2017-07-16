const API_URL = "http://localhost:8080/api/todos";

function headers() {
    return {
	Accept: 'application/json',
	'Content-Type': 'application/json'
    };
}

function parseResponse(response) {
    console.log("in parseResponse");
    return response.json().then((json) => {
	if (!response.ok) {
	    console.log("The response was not ok!");
	    return Promise.reject(json);
	}
	return json;
    });
}

export default {
    fetch() {
	console.log("In fetch");
	return fetch(`${API_URL}`, {
	    method: 'GET',
	    headers: headers(),
	}).then(parseResponse);
    },

    post(data) {
	console.log("In post");
	return fetch(`${API_URL}`, {
	    method: 'POST',
	    headers: headers(),
	    body: JSON.stringify(data)
	}).then(parseResponse);
    },

    delete(data) {
	return fetch(`${API_URL}/${data}`, {
	    method: 'DELETE'
	})//.then(parseResponse);
    },

    complete(id) {
	return fetch(`${API_URL}/${id}`, {
	    method: 'PUT',
	    headers: headers(),
	    body: JSON.stringify({"todo": {"completed": "true"}})
	}).then(parseResponse);
    }
};
