import {useEffect} from "react";

const AutoRedirectPage = () => {
    useEffect(() => {
        document.title = "CF-7 Auto Redirect Example";
    }, []);

    return (
        <>
            <AutoRedirectPage />
        </>
    )
}

export default AutoRedirectPage;