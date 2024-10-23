import { useNavigate } from "react-router-dom";
import { PageContent } from "./PageContent";

export function NotFound(){
    const navigate = useNavigate()

    setTimeout( () => {
        navigate('/')
    }, 3000
    )
    return(
        <PageContent page="Ups, this page does not exist. You will be redirected to home." />
    )
}