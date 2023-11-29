import axios from "axios"
import { useEffect, useState } from "react"
import { FaFacebook, FaYoutube, FaGoogle, FaMicrosoft } from "react-icons/fa"

export default function Services() {

    const [inscrit, setInscrit] = useState([{}])

    useEffect(() => {

        const fetchGet = async () => {

            const response = await axios.get('http://localhost:5050/api/v1/utilisateurs')

            console.log(response.data)
            setInscrit(response.data)

        }

        fetchGet()

    }, [])

    return (<div className="Services">

        <h3 className="mt-10 text-2xl font-extrabold">Liste des inscrits</h3>

        <table style={{marginTop:"10px", marginBottom:"10px"}}>
            {
                inscrit.map((list) => {
                    return (
                        <tr key={list._id}>
                            <td>{list.nom}</td>
                            <td>{list.email}</td>
                            <td>{list.telephone}</td>
                            <td>{list.message}</td>
                        </tr>
                    )
                })
            }
        </table>


        <ul>
            <li className="flex items-center"><FaFacebook className="mr-5 text-[blue]" /><a href="http://facebook.com" className="hover:text-[blue]">facebook</a></li>
            <li className="flex items-center"><FaYoutube className="mr-5 text-[red]" /><a href="http://youtube.com" className="hover:text-[red]">youtube</a></li>
            <li className="flex items-center"><FaGoogle className="mr-5 text-[cadetblue] " /><a href="http://google.com" className="hover:text-[cadetblue]">google</a></li>
            <li className="flex items-center"><FaMicrosoft className="mr-5 text-[#C8FFE0] " /><a href="http://bing.com" className="hover:text-[#C8FFE0]">bing</a></li>
        </ul>

    </div>)
}
