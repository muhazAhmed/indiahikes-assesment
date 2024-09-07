import axios from 'axios';
import { API_URL } from './API_URL';
import { Toast } from './utils';

export const postMethodAPI = async (url: string, data: any, setLoading: any) => {
    try {
        setLoading(true)
        const response = await axios.post(API_URL + url, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return { data: response.data, status: response.status };
    } catch (error: any) {
        console.error('Error:', error.response ? error.response.data : error.message);
        Toast(error?.response?.data?.error, "error")
    } finally {
        setLoading(false)
    }
};
