import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $createParagraphNode, $createTextNode, $getRoot, $createLineBreakNode } from "lexical";
import { useEffect } from "react";


const InsertTextPlugin = ({ news }) => {
    const [editor] = useLexicalComposerContext();
    useEffect(() => {
        editor.update(() => {
            const root = $getRoot();
            root.clear();
            const headingNode = $createTextNode(news.title);
            // TODO: heading node as a heading
            const descriptionNode = $createTextNode(news.description);
            const contentNote = $createTextNode(news.content);
            const authorNode = $createTextNode(news.author)
            const paragraphNode = $createParagraphNode();

            paragraphNode.append(headingNode);
            paragraphNode.append($createLineBreakNode());
            paragraphNode.append(descriptionNode);
            paragraphNode.append($createLineBreakNode());
            paragraphNode.append(contentNote);
            paragraphNode.append($createLineBreakNode());
            paragraphNode.append(authorNode);
            root.append(paragraphNode);
        });
    }, [editor, news]);
};

export default InsertTextPlugin;
