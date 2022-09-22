import { memo } from "react"
import { Link } from "react-router-dom"

function TopBar() {
    return (
        <div className="bg-black w-screen fixed top-0 px-8 py-4 text-white">
            <h1>HELLO WORLD</h1>
            <div className="flex space-x-8 absolute top-4 right-4 justify-end">
                <Link to="/form">HOME</Link>
                <Link to="/form">FORM</Link>
                <Link to="/list">LIST</Link>
            </div>
        </div>
    )
}
export default memo(TopBar)