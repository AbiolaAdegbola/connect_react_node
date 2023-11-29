import { FaFacebook,FaYoutube } from "react-icons/fa"
export default function SocialLinks(){

    return (
        <div className="SocialLinks">
            <h2>Social networks</h2>

            <ul>
                <li className="flex items-center"><img src="image/favicon.png" className="mr-5" width="20" alt="logo cesam la diagnose" /><a href="http://cesam.ci">cesam La diagnose</a></li>
                <li className="flex items-center"><FaFacebook className="mr-5 text-[blue]"/><a href="http://facebook.com">facebook</a></li>
                <li className="flex items-center"><FaYoutube className="mr-5 text-[red]"/><a href="http://youtube.com">Youtube</a></li>
            </ul>
        </div>
    )
}