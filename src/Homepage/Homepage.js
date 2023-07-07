import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export function Homepage(){
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [total, setTotal] = useState(0)
    async function fetchData(){
        try{
            const fetch = await axios.get('http://localhost:3002/transactions')
            setData(fetch.data)
            //FIXME: Total logic not working
            //! setTotal(data.reduce((x,y) => Number(x.amount) + Number(y.amount), 0))
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
        <div id="homepage">
            {total}
            <div class="allTransactions">
                {data.map(x => {
                    return(
                        <>
                        <div class="transactionBox" id={x.id}>
                            <p class="transactionDate">{x.date}</p>
                            <p class="transactionItem" onClick={x => showTransaction(x.target.parentNode.id)}>{x.item}</p>
                            <div class="amountBox">
                                <p class="transactionAmount">${x.amount}</p>
                            </div>
                        </div>
                        <hr/>
                        </>
                    )
                })}
            </div>
        </div>
    )
}