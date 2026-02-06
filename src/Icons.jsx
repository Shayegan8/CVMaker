import dompurify from 'dompurify'
import Left from './assets/left.svg?react'
import Middle from './assets/middle.svg?react'
import Right from './assets/right.svg?react'

export default function Icons({ editor }) {
    if (!editor) return null

    const sanitizedText = dompurify.sanitize(editor.getHTML(), {
        ALLOWED_TAGS: ['b', 'i', 'u', 's', 'p', 'br', 'div', 'span'],
        ALLOWED_ATTR: ['style'],
        FORCE_BODY: [true]
    })

    const options = {
        margin: 10,
        filename: 'cv.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 }, // Higher scale = better quality
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    }

    return (<>
        <div className="icons">
            <ul>
                <li id="bold" onClick={() => editor.chain().focus().toggleBold().run()}>
                    B
                </li>
                <li id="italic" onClick={() => editor.chain().focus().toggleItalic().run()}>
                    I
                </li>
                <li>
                    <Left id="left" onClick={() => editor.chain().focus().setTextAlign('left').run()} />
                </li>
                <li>
                    <Middle id="middle" onClick={() => editor.chain().focus().setTextAlign('center').run()} />
                </li>
                <li>
                    <Right id="right" onClick={() => editor.chain().focus().setTextAlign('right').run()} />
                </li>
            </ul>
        </div>
    </>
    )
}