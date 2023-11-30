import axios from "axios";
import env from "react-dotenv";
// 요청 보낸 server URL
const BASE_URL = env.BASE_URL;

//
export const httpApi = {
  get: async (data) => {
    const response = await axios.get(BASE_URL + data);

    return response;
  },
};
