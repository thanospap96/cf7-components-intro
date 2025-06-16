import { useNavigate} from "react-router";
import {useEffect, useState} from "react";

const AutoRedirectAdvanced = () => {
    const navigate = useNavigate();
    const [secondsLeft, setSecondsLeft] = useState(5);


    useEffect(() => {
        const intevalId:number = setInterval(() => {
            setSecondsLeft((prev:number) => prev - 1);
        }, 1000)

        const timer: number = setTimeout(() => {
            navigate("/examples/name-changer");
        }, 5000);

        return () => {
            clearTimeout(timer);
            clearInterval(intevalId);
        }
    }, []);


    return (
             <>
                <h1 className="text-center-text-2xl mb-4">
                     Redirecting in {secondsLeft} second {secondsLeft !==1 && 1 }...
                </h1>
            </>
        )
};
export default AutoRedirectAdvanced;