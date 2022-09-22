import { memo } from "react"
import { Link } from "react-router-dom"

function Home() {
    return (
        <div className="flex justify-center items-center h-screen bg-hero-pattern bg-cover">
            <div>
                <h1 className="text-5xl font-extrabold text-yellow-600">Welcome To TechVihan World</h1>
                <div className="text-white text-2xl font-extrabold">
                    <p>Let’s go invent tomorrow instead of worrying about what happened yesterday.</p>
                    <p>कल जो हुआ उसके बारे में चिंता करने के बजाय कल का आविष्कार करें।</p>
                </div>
                <div className="flex justify-end">
                    <Link to="/form" className="px-4 py-2 bg-yellow-500 mt-10 text-white rounded-lg hover:bg-green-500">Form</Link>
                </div>
            </div>

        </div>
    )
}
export default memo(Home)