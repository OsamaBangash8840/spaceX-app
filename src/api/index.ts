import axios from "axios"

export const getData = async (keyword : string) => {
    const xData = await axios.get(`https://api.spacexdata.com/v4/${keyword}`);
    return xData.data
}

export const getDataById = async (keyword: string, id: string) => {
    const response = await axios.get(`https://api.spacexdata.com/v4/${keyword}/${id}`);
    return response.data;
  };