export default function Icons({ editor }) {
    if (!editor) return null

    return (<>
        <div className="icons">
            <ul>
                <li id="bold" onClick={() => editor.chain().focus().toggleBold().run()}>
                    B
                </li>
                <li id="italic" onClick={() => editor.chain().focus().toggleItalic().run()}>
                    I
                </li>
            </ul>
        </div>
    </>
    )
}