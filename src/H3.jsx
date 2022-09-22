import { memo } from "react"

function H3(props) {
    return (
        <div>
            <h3 className="text-xl text-black font-bold">{props.children}</h3>
        </div>
    )
}
export default memo(H3)