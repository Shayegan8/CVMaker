import dompurify from 'dompurify'
import Left from './assets/left.svg?react'
import Middle from './assets/middle.svg?react'
import Right from './assets/right.svg?react'
import html2pdf from 'html2pdf.js'

export default function Icons({ editor }) {
    if (!editor) return null

    const convert2Pdf = () => {
        const sanitizedText = dompurify.sanitize(editor.getHTML(), {
            ALLOWED_TAGS: ['b', 'i', 'u', 's', 'p', 'br', 'div', 'span', 'strong', 'em', 'strike', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
            ALLOWED_ATTR: ['style'],
            FORCE_BODY: [true]
        })

        const options = {
            margin: 10,
            filename: 'cv.pdf',
            html2canvas: { scale: 5 },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        }
        const fonted = `<div style="font-family: 'Roboto Condensed', sans-serif;" />`
        html2pdf().set(options).from(fonted + sanitizedText).save()
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
            <div className="submit" onClick={() => convert2Pdf()}>
                <div>Submit</div>
            </div>
        </div>
    </>
    )
}