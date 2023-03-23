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

const siginIn = async data => {
  const sigiInUrl = serviceConfig.BASE_URL.USER_SERVICE_URL + serviceConfig.apiEndPoints.USER_API.SIGN_IN;
  try {
    const response = await axiosInstance.post(sigiInUrl, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

const siginUp = async data => {
  const sigiUpUrl = serviceConfig.BASE_URL.USER_SERVICE_URL + serviceConfig.apiEndPoints.USER_API.SIGN_UP;
  try {
    const response = await axiosInstance.post(sigiUpUrl, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

const forgotPassword = async email => {
  const forgotPasswordUrl =
    serviceConfig.BASE_URL.USER_SERVICE_URL + serviceConfig.apiEndPoints.USER_API.FORGOT_PASSWORD;
  try {
    const response = await axiosInstance.post(forgotPasswordUrl, email);
    return response.data;
  } catch (error) {
    return error;
  }
};

export { createRequestDemo, siginIn, siginUp, forgotPassword };
