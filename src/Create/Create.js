import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function Create(){
    const navigate = useNavigate()
    const [item, setItem] = useState('')
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState('')
    const [from, setFrom] = useState('')
    const [category, setCategory] = useState('')

    async function formSubmited(x){
        x.preventDefault()
        let dateFormat = ''
        const monthNumber = date.split('-')[1]
        const dayNumber = date.split('-')[2]
        switch(monthNumber){
            case "01":
                dateFormat = `January ${dayNumber}`;
                break;
            case "02":
                dateFormat = `February ${dayNumber}`;
                break;
            case "03":
                dateFormat = `March ${dayNumber}`;
                break;
            case "04":
                dateFormat = `April ${dayNumber}`;
                break;
            case "05":
                dateFormat = `May ${dayNumber}`;
                break;
            case "06":
                dateFormat = `June ${dayNumber}`;
                break;
            case "07":
                dateFormat = `July ${dayNumber}`;
                break;
            case "08":
                dateFormat = `August ${dayNumber}`;
                break;
            case "09":
                dateFormat = `September ${dayNumber}`;
                break;
            case "10":
                dateFormat = `October ${dayNumber}`;
                    break;
            case "11":
                dateFormat = `November ${dayNumber}`;
                    break;
            case "12":
                dateFormat = `December ${dayNumber}`;
                    break;
        }
        try{
            const fetch = await axios.post('https://budgrt-back-end.onrender.com/transactions',{
                id: '',
                item: item,
                amount: amount,
                date: dateFormat,
                from: from,
                category: category,
            })
            navigate('/')
        }catch(e){
            console.log(e)
        }
        console.log(`item: ${item} \namount: ${amount} \n Date: ${date}`)
    }
    return(
        <div id="create">
            <form>
                <label>Item</label>
                <input
                type="text"
                value={item}
                onChange={(x) => setItem(x.target.value)}
                required
                />
                <label>Amount</label>
                <input
                type="number"
                value={amount}
                onChange={(x) => setAmount(x.target.value)}
                required
                />
                <label>Date</label>
                <input
                type="date"
                value={date}
                onChange={(x) => setDate(x.target.value)}
                required
                />
                <label>From</label>
                <input
                type="text"
                value={from}
                onChange={(x) => setFrom(x.target.value)}
                required
                />
                <label>Category</label>
                <input
                type="text"
                value={category}
                onChange={(x) => setCategory(x.target.value)}
                required
                />
                <input
                type="submit"
                onClick={(x) => formSubmited(x)}
                />
            </form>
        </div>
    )
}