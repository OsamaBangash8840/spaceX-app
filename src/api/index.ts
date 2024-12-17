import axios from "axios"

export const getData = async (keyword : string) => {
    const xData = await axios.get(`https://api.spacexdata.com/v4/${keyword}`);
    return xData.data
}