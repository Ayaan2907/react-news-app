import {
    Loader,
    TextInput,
    Text,
    createStyles,
    Card,
    Group,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons";
import { useState } from "react";

import { NewsList } from "./NewsList";
import { SearchNews } from "../../utils/SearchNews";

const useStyles = createStyles((theme) => ({
    card: {
        paddingTop: theme.spacing.sm,
        marginTop: theme.spacing.xl,
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    },

    item: {
        "& + &": {
            paddingTop: theme.spacing.sm,
            marginTop: theme.spacing.xl,
            borderTop: `1px solid ${
                theme.colorScheme === "dark"
                    ? theme.colors.dark[4]
                    : theme.colors.gray[2]
            }`,
        },
    },
    input: {
        lineHeight: 1,
        placeholder: "Search news",
        rightSectionWidth: 42,
        radius: theme.spacing.xs,
        size: theme.spacing.xl,
        paddingBottom: theme.spacing.sm,
        margin: theme.spacing.xl,
        borderBottom: `2px solid ${theme.colors.gray[2]}`,
    },
}));

export default function NewsHandler() {
    const { classes } = useStyles();
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const fetchNews = async () => {
        try {
            setLoading(true);
            const response = await SearchNews(search);
            setNews(response.articles);
        } catch (error: any) {
            console.log(error);
        } finally {
            setLoading(false);
        }
        console.log(news);
    };
    return (
        <Card withBorder radius="md" p="xl" className={classes.card}>
            <TextInput
                icon={<IconSearch size={18} stroke={1.5} />}
                onChange={(e) => {
                    setSearch(e.target.value);
                    onkeydown = (e) => {
                        if (e.key === "Enter") {
                            fetchNews();
                        }
                    };
                }}
                className={classes.input}
            />
            <Group position="center" className={classes.item}>
                {loading && <Loader />}
                <NewsList news={news} />
            </Group>
        </Card>
    );
}
