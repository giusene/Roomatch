import { backend_URL } from "./functions";

const httpGET = resource =>
  fetch(backend_URL + resource).then(response => {
    if (response.status > 399) {
      console.warn("Server Error!!!");
      return [];
    } else {
      return response.json();
    }
  });

const httpPOST = (resource, data) =>
  fetch(backend_URL + resource, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(response => response.json());

const httpPATCH = (resource, data) =>
  fetch(backend_URL + resource, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  }).then(response => {
    if (response.status > 399) {
      console.warn("Server Error!!!");
      return [];
    } else {
      return response.json();
    }
  });

const dataConvert = data => {
  let formData = new FormData();
  formData.append("image", data);
  return formData;
};

const uploadImg = data =>
  fetch(process.env.REACT_APP_IMG_UPLOAD_ENDPOINT, {
    method: "POST",
    body: dataConvert(data),
  }).then(response => {
    if (response.status > 399) {
      console.warn("Server Error!!!");
      return [];
    } else {
      return response.json();
    }
  });

export { httpGET, httpPOST, httpPATCH, uploadImg };
