import {backend_URL} from './functions'

const httpPOST = (resource, data) =>
fetch(backend_URL + resource, {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(data),
}).then(response => response.json());

export { httpPOST }