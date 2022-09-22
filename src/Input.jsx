import { memo } from "react"

function Input(props) {
    return (

        <input className="px-2 py-1 border-b-2 text-xl text-bold text-stone-700  capitalize bg-indigo-300
             hover:border-green-500 outline-none w-9/12 rounded-lg" placeholder={props.placeholder} type={props.type}></input>

    )
}
export default memo(Input)
