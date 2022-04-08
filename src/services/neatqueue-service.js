import axios from 'axios';

const API_BASE = process.env.REACT_APP_NEATQUEUE_API;

export const getStats = async () => {
    const resp = await axios.get(`${API_BASE}/stats`)
    return resp.data;
}
