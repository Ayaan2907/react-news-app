import { Button, Title, Text, Paper } from "@mantine/core";
import { useState } from "react";
import { createStyles } from "@mantine/core";
import { useSelector, useDispatch } from "react-redux";
import { updateNews } from "../../redux/newsSlice";

const useStyles = createStyles((theme) => ({
    card: {
        padding: "1rem",
        width: "100%",
        height: "100%",
        backgroundColor: theme.colors.gray[1],
    },
    title: {
        borderBottom: `1px solid ${theme.colors.gray[2]}`,
    },
    body: {
        padding: theme.spacing.sm,
        marginTop: theme.spacing.xl,
        shadow: "xl",
    },
    footer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "1rem",
    },
}));

export default function NewsCard({ news }) {
    const { classes } = useStyles();
    const dispatch = useDispatch();
    // const newsState = useSelector((state: any) => state.news);
    // console.log(newsState);
    // const handleNewsUpdate = (news) => {
    //     dispatch(updateNews(news));
    //     console.log(newsState);

    // };
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className={classes.card}>

                <Title order={3} className={classes.title}>{news.title}</Title>
                    
                <Paper className={classes.body}>
                    <Text>{news.description}</Text>
                    {toggle && <Text>{news.content}</Text>}
                </Paper>

                <div className={classes.footer}>

                    <Button onClick={() => setToggle(!toggle)}>
                        {toggle ? "Show less" : "Show more"}
                    </Button>
                    <Button
                        onClick={() => {
                            dispatch(updateNews(news));
                        }}
                    >
                        Export to text editor
                    </Button>
                </div>
            </div>
        </>
    );
}
