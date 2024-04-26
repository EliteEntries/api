import axios, { AxiosResponse, AxiosError } from 'axios';
import { DeleteReqData, OrderReqData } from './index.d';

// Place Order Functon
export const placeOrder = async (data: OrderReqData) => {
    const funcUrl = "https://placeorder-6ikqnahfla-uc.a.run.app";
    try {
        const resp: AxiosResponse = await axios.post(funcUrl, data);
        return resp.data;
    } catch (e) {
        return (e as AxiosError).response;
    }
}

// Cancel Order Function
export const cancelOrder = async (data: DeleteReqData) => {
    const funcUrl = "https://cancelorder-6ikqnahfla-uc.a.run.app";
    try {
        const resp: AxiosResponse = await axios.post(funcUrl, data);
        return resp.data;
    } catch (e) {
        return (e as AxiosError).response;
    }
}

export default {
    placeOrder,
    cancelOrder
}
