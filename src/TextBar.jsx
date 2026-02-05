export default function TextBar({ children }) {

    return (
        <div className="textbar">
            <textarea id="textshit" placeholder={"Write your CV..."}></textarea>
            {children}
        </div>
    )
}