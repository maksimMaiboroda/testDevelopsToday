import axios from 'axios';

const apiClient = axios.create({
    baseURL: `https://simple-blog-api.crew.red/posts`,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
    },
});

export async function getPostsData() {
    const res = await apiClient.get('/');

    return res.data;
}

export async function dellPost(id) {
    const res = await apiClient.delete(`${id}`);
}

export async function addPost(postData) {
    const res = await axios.post(`https://simple-blog-api.crew.red/posts`, { ...postData });
}
