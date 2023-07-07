import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export function Show(){
    const transactionID = Object.values(useParams())[0]
    const [data, setData] = useState([])

    async function fetchData(){
        try{
            const fetch = await axios.get(`http://localhost:3002/transactions/${transactionID}`)
            setData(fetch.data)
        }catch(e){
            console.log(e)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])

    return(
        <div id="show">
            <button>BACK</button>
            <div id="displayTransaction">
                <h2 class="showTransItem">{data.item}</h2>
                <button>EDIT</button>
                <p class="showTransDate">{data.date}</p>
                <p class="showTransAmount">{data.amount}</p>
                <p class="showTransFrom">{data.from}</p>
                <p class="showTransCategory">{data.category}</p>
            </div>
        </div>
    )
}