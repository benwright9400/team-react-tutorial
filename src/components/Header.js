import { useEffect, useState } from "react";

function Header() {
    const [signedIn, setSignedIn] = useState(true);
    const [names, setNames] = useState(["James", "Ben", "Tilly"]);

    const [count, setCount] = useState(0);
    
    useEffect(() => {
        if(count === 0) {

            setSignedIn(false);

            setCount(count + 1);
        }
    });

    return (<div>
        {
            signedIn ? <button onClick={() => setSignedIn(false)}>Sign out</button>  : <button onClick={() => setSignedIn(true)}>Sign in</button>
        }
        <br></br>
        <br></br>
        {
            names.map((item) => {
                return <p>{item}</p>;
            })
        }
    </div>);
}

export default Header;