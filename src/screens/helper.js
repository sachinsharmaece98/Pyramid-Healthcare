import DefaultImage from '../assets/images/defaultImg.jpg'
// const baseURL = `http://localhost:8080/`;
// const baseURL = `http://103.81.118.226:8080/`;
const baseURL = import.meta.env.VITE_NODE_API_URI;
export function getDefaultImg(e) {
    e.target.src = DefaultImage
}

export function getSrcImgs(val) {
    return `${baseURL}/${val}`;
}