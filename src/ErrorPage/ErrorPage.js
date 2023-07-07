import { useNavigate } from "react-router-dom"

export function ErrorPage(){
    const navigate = useNavigate()
    return(
        <div id="notfoundPage">
            <button
            onClick={(x) => navigate('/')}
            >Home page</button>
            <h1>Error 404</h1>
            <h2>Page not found</h2>
        </div>
    )
}