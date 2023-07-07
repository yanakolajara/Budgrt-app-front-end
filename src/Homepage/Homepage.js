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
    function showTransaction(transactionID){
        navigate(`/show/${transactionID}`)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return(
        <>
        {data.map(x => {
            return(
                <div class="transactionBox" id={x.id}>
                    <p class="transactionDate">{x.date}</p>
                    <p class="transactionItem" onClick={x => showTransaction(x.target.parentNode.id)}>{x.item}</p>
                    <p class="transactionName">{x.amount}</p>
                </div>
            )
        })}
        </>
    )
}