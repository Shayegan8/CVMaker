import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Icons from "./Icons"
import { TextStyle } from "@tiptap/extension-text-style"
import { FontFamily } from "@tiptap/extension-text-style"
import FontSize from "tiptap-extension-font-size"
import TextAlign from "@tiptap/extension-text-align"

export default function EditorComp() {
    const editor = useEditor({
        extensions: [StarterKit, TextStyle, FontFamily, FontSize, TextAlign.configure({
            types: ['heading', 'paragraph'],
            alignments: ['left', 'center', 'right'],
            defaultAlignment: ['left']
        })],
        content: ""
    })

    return (<>
        <EditorContent id="textshit" editor={editor} />
        <Icons editor={editor} /></>
    )

}
