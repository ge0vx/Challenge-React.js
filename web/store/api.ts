import axios from "axios";

interface AxiosResponse<T = never> {
  data: T;
  status: number;
  statusText: string;
  headers: Record<string, string>;
  config: any;
  request?: any;
}

interface Reponse {
  success: boolean;
  payload: any;
  message: string;
}

const RESPONSE_SUCCESS = 200;
const reponse = { success: false, payload: null, message: "" };

async function logIn(payload): Promise<Reponse> {
  try {
    const res = await axios.get("http://localhost:3000/users");
    if (res.status === RESPONSE_SUCCESS) {
      const { user, password } = payload;
      const userFound = res.data.find(
        (i) => i.user === user && i.password === password
      );

      if (userFound) {
        return {
          ...reponse,
          success: true,
          payload: userFound,
        };
      }
    }
    return { ...reponse, message: "user not found" };
  } catch (error: unknown) {
    console.error(error);
    return { ...reponse, message: "error in request" };
  }
}

async function searchItems(payload): Promise<Reponse> {
  const { itemToSearch } = payload;
  try {
    const res = await axios.get(
      `http://universities.hipolabs.com/search?name=${itemToSearch}`
    );

    if (res.status === RESPONSE_SUCCESS) {
      return {
        ...reponse,
        success: true,
        payload: res.data,
      };
    }
    return { ...reponse, message: "no results" };
  } catch (error: unknown) {
    console.error(error);
    return { ...reponse, message: "error in request" };
  }
}

const api = {
  logIn,
  searchItems,
};

export default api;
