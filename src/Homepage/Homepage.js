import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export function Homepage(){
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(true)
    async function fetchData(){
        try{
            const fetch = await axios.get('https://budgrt-back-end.onrender.com/transactions')
            setLoading(false)
            setData(fetch.data)
            let newTotal = 0
            for(const x of fetch.data){
                newTotal += Number(x.amount)
                console.log(`total value: ${total}\nnewTotal: ${newTotal}`)
            }
            setTotal(newTotal)
        }catch(e){
            console.log(e)
        }
    }
    function showTransaction(transactionID){
        navigate(`/show/${transactionID}`)
    }
    function numberColor(x){
        if(x > 0){
            return 'greenNumber'
        }else if(x === 0){
            return 'yellowNumber'
        }else{
            return 'redNumber'
        }
    }
    function totalColor(x){
        if(x > 100){
            return 'greenNumber'
        }else if(x > 0 && x <= 100){
            return 'yellowNumber'
        }else{
            return 'redNumber'
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    if(loading){
        return(
            <div id="homepage">
                <p>Loading...</p>
            </div>
        )
    }

    
    return(
        <div id="homepage">
            <div id="currBalanceDiv">
                <h1>Current balance: </h1>
                <h1 class="totalText" id={totalColor(total)}>${total.toLocaleString("en-US")}</h1>
            </div>
            <div class="allTransactions">
                {data.map(x => {
                    return(
                        <>
                        <div class="transactionBox" id={x.id}>
                            <p class="transactionDate">{x.date}</p>
                            <p class="transactionItem" onClick={x => showTransaction(x.target.parentNode.id)}>{x.item}</p>
                            <div class="amountBox">
                                <p
                                class="transactionAmount"
                                id={numberColor(x.amount)}
                                >${Number(x.amount).toLocaleString("en-US")}</p>
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