import { Loader } from "@mantine/core";
import React, { useEffect, useState } from "react";
import { NewsList } from "./NewsList";
import { SearchNews } from "../../utils/SearchNews";
export default function NewsHandler() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState("");

    const fetchNews = async () => {
        try {
            setLoading(true);
            const response = await SearchNews(search);
            setNews(response.articles);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
        console.log(news);
    };

    return (
        <>
            {/* search bar */}
            <input
                type="text"
                placeholder="Search News"
                onChange={(e) => {
                    setSearch(e.target.value);
                    onkeydown = (e) => {
                        if (e.key === "Enter") {
                            fetchNews();
                        }
                    };
                }}
            />
            {loading && <Loader/>}
            <NewsList news={news}/>
        </>
    );
}
