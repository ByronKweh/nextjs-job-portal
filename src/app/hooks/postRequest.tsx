// useAxios.js
import { useState, useEffect } from "react";
import axiosInstance from "../utils/axios"; // Import your Axios singleton instance

async function postRequest(url: string, payload?: any, headers?: any) {
  // Define your HTTP request logic here
  try {
    const response = await axiosInstance.post(url, payload, headers);
    return response;
  } catch (err) {
    alert(err);
    console.error(err);
  }
}

export default postRequest;
