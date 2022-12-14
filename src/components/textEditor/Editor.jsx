import "./styles.css";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { AutoFocusPlugin } from "@lexical/react/LexicalAutoFocusPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { MarkdownShortcutPlugin } from "@lexical/react/LexicalMarkdownShortcutPlugin";
import { TRANSFORMERS } from "@lexical/markdown";

import ToolbarPlugin from "./plugins/ToolbarPlugin";
import CodeHighlightPlugin from "./plugins/CodeHighlightPlugin";
import AutoLinkPlugin from "./plugins/AutoLinkPlugin";
import InsertTextPlugin from "./plugins/InsertTextPlugin";

import editorConfig from "./EditorConfig";
import { Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";


const Placeholder = () => {
    return <Text className="editor-placeholder">Enter some rich text...</Text>;
};

export default function Editor() {
    const newsItem = useSelector((state) => state.news);
    const [newsToDisplay, setNewsToDisplay] = useState({
        title: newsItem.title,
        description: newsItem.description,
        content: newsItem.content,
        author: newsItem.author,
    });
    useEffect(() => {
        setNewsToDisplay({
            title: newsItem.title,
            description: newsItem.description,
            content: newsItem.content,
        });
    }, [newsItem]);

    return (
        <LexicalComposer initialConfig={editorConfig}>
            <div className="editor-container">
                <ToolbarPlugin />
                <div className="editor-inner">
                    <RichTextPlugin
                        contentEditable={
                            <ContentEditable className="editor-input" />
                        }
                        placeholder={<Placeholder />}
                    />
                    <HistoryPlugin />
                    <AutoFocusPlugin />
                    <CodeHighlightPlugin />
                    <ListPlugin />
                    <LinkPlugin />
                    <AutoLinkPlugin />
                    <InsertTextPlugin news={ newsToDisplay } />
                    <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
                </div>
            </div>
        </LexicalComposer>
    );
}
