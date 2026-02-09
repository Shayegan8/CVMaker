import { useState } from "react"

export default function TopHeader({ value }) {
    const small = window.innerWidth < 616
    return <div className={small ? "topheader-small" : "topheader"}>{value}</div>
}