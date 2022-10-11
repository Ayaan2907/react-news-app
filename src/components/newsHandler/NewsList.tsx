import NewsCard from "./NewsCard";
import { Stack, Pagination } from "@mantine/core";
import { useState } from "react";

export const NewsList = ({ news }) => {
    const [page, setPage] = useState(1);
    const [newsPerPage] = useState(10);
    const indexOfLastNews = page * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = news.slice(indexOfFirstNews, indexOfLastNews);
    const paginate = (pageNumber) => setPage(pageNumber);
    console.log(news.length)
    return (
        <Stack>
            {currentNews.map((news) => (
                <div className="news-preview" key={news.id}>
                    <NewsCard news={news} />
                </div>
            ))}
            {news.length > 10 ? (
                <Pagination
                    total={news.length}
                    // limit={newsPerPage}
                    onChange={paginate}
                    size="lg"
                    data-mantine-composable
                />
            ) : null}
        </Stack>
    );
};
