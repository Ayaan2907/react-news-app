import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $createParagraphNode, $createTextNode, $getRoot } from "lexical";
import { useEffect } from "react";


const InsertTextPlugin = ({ text }) => {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
        editor.update(() => {
            const root = $getRoot();
            root.clear();
            const textNode = $createTextNode(text);
            const paragraphNode = $createParagraphNode();
            paragraphNode.append(textNode);
            root.append(paragraphNode);
        });
    }, [editor, text]);
};

export default InsertTextPlugin;
