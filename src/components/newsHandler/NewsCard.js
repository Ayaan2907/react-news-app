import { Button } from "@mantine/core";
import React from "react";

export default function NewsCard({ news }) {
    return (
        <>
            <div className="news-card">
                <h2>{news.title}</h2>
                <h5>Written by {news.author}</h5>
                <p>{news.description}</p>
            </div>
            <Button
                variant="outline"
                color="red"
                onClick={() => {
                    console.log("exporting to text editor");
                }}
            >
                Export to text editor
            </Button>
        </>
    );
}
