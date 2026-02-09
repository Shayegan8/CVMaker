import { useState } from "react"

export default function TopHeader({ value }) {
    const [content, setContent] = useState(null)
    if (window.innerWidth < 616) {
        setContent(<div className="topheader-small">
            {value}
        </div >)
    } else
        setContent(
            <div className="topheader">
                {value}
            </div >
        )
    return content
}