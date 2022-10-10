import NewsCard from "./NewsCard";
export const NewsList = ({news}) => {
    return (
        <div className="news-list">
        {news.map((news) => (
            <div className="news-preview" key={news.id}>
                <NewsCard news={news} />
            </div>
        ))}
        </div>
    );
    }