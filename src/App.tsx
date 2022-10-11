import "./App.css";
import {  Grid } from "@mantine/core";
import NewsHandler from "./components/newsHandler/NewsHandler";
import Editor from "./components/textEditor/Editor";

function App() {
    return (
        <div className="App">
            <div>Docustack Assignment</div>
            <Grid>
                <Grid.Col span={6}>
                    <Editor />
                </Grid.Col>
                <Grid.Col span={6}>
                    <NewsHandler />
                </Grid.Col>
            </Grid>
        </div>
    );
}

export default App;
