import { memo } from "react"

function Button(props) {
    let themeClass = "bg-yellow-500 hover:bg-green-500";
    if (props.theme === "cancle") {
        themeClass = "bg-blue-500 hover:bg-gray-500 "
    }
    return (
        <div>
            <buton className={"px-2 py-1 rounded-lg  text-white text-xl " + themeClass}>{props.children}</buton>
        </div>
    )
}
export default memo(Button)
