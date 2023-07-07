import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export function Homepage(){
    const navigate = useNavigate()
    const [data, setData] = useState([])
    async function fetchData(){
        try{
            const fetch = await axios.get('http://localhost:3002/transactions')
            setData(fetch.data)
        }catch(e){
            console.log(e)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return(
        <>
        {data.map(x => {
            return(
                <div class="transactionBox">
                    <p class="transactionDate">{x.date}</p>
                    <a class="transactionItem" href="">{x.item}</a>
                    <p class="transactionName">{x.amount}</p>
                </div>
            )
        })}
        </>
    )
}