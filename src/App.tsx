import "./App.css";
import { Grid } from "@mantine/core";
import NewsHandler from "./components/newsHandler/NewsHandler";
import Editor from "./components/textEditor/Editor";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
    editor: {
        backgroundColor:
            theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
        margin: "auto",
    },
    header: {
        padding: theme.spacing.lg,
        marginBottom: theme.spacing.md,
        borderBottom: `3px solid ${theme.colors.gray[2]}`,
    },
}));
function App() {
    const { classes } = useStyles();
    return (
        <div className="App">
            <div className={classes.header}>Docustack Assignment</div>
            <Grid>
                <Grid.Col span={6}>
                    <div className={classes.editor}>
                        <Editor />
                    </div>
                </Grid.Col>
                <Grid.Col span={6}>
                    <NewsHandler />
                </Grid.Col>
            </Grid>
        </div>
    );
}

export default App;
