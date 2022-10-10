// make an api call to newsapi.org to get the news with the input keyword
import axios from "axios";
const BASE_URL = "https://newsapi.org/v2/everything";
// const API_KEY = process.env.REACT_APP_NEWS_API_KEY;
const API_KEY = "c778d4de879349ffa167a3b99e2f04df"
export const SearchNews = async (keyword) => {
    const url = `${BASE_URL}?q=${keyword}&apiKey=${API_KEY}`;
    const response = await axios.get(url);
    return response.data;
};
