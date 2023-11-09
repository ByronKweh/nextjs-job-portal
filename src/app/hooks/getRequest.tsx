// useAxios.js
import { useState, useEffect } from "react";
import axiosInstance from "../utils/axios"; // Import your Axios singleton instance

async function getRequest(url: string, payload: any) {
  // Define your HTTP request logic here
  try {
    const response = await axiosInstance.get(url, payload);
    return response;
  } catch (err) {
    console.error(err);
  }
}

export default getRequest;
