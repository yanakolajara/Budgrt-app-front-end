import { useNavigate } from "react-router-dom"

export function NotFound(){
    const navigate = useNavigate()
    return(
        <div id="notfoundPage">
            <button
            onClick={(x) => navigate('/')}
            >Home page</button>
            <h2>Transaction not found</h2>
        </div>
    )
}