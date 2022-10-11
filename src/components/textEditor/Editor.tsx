import { $getRoot, $getSelection } from "lexical";
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
// import TreeViewPlugin from "./plugins/TreeViewPlugin";
// import ListMaxIndentLevelPlugin from "./plugins/ListMaxIndentLevelPlugin";

import editorConfig from "./EditorConfig";
import { Text } from "@mantine/core";
import { useEffect, useState } from "react";

const Placeholder = () => {
    return <Text className="editor-placeholder">Enter some rich text...</Text>;
};

export default function Editor() {
    const [value, setValue] = useState("");
    const [editor, setEditor] = useState(null);

    // TODO: add a way to dispatch the addText command to insert the news text into editor
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
                    {/* <InsertTextPlugin text={"hello"} /> */}
                    <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
                    {/* <TreeViewPlugin /> */}
                    {/* <ListMaxIndentLevelPlugin maxDepth={7} /> */}
                </div>
            </div>
        </LexicalComposer>
    );
}
