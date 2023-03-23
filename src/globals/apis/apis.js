import { serviceConfig } from '../config/serviceConfig';
import { axiosInstance } from '../../index';

const createRequestDemo = async data => {
  const demoUrl = serviceConfig.BASE_URL.USER_SERVICE_URL + serviceConfig.apiEndPoints.USER_API.REQUEST_DEMO;
  try {
    const response = await axiosInstance.post(demoUrl, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export { createRequestDemo };
