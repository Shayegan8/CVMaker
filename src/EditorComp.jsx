import { EditorContent, useEditor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Icons from "./Icons"

export default function EditorComp() {
    const editor = useEditor({
        extensions: [StarterKit],
        content: ""
    })

    return (<>
        <EditorContent id="textshit" className="textbar" editor={editor} />
        <Icons editor={editor} /></>
    )

}
