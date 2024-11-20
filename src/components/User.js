import { useEffect, useState } from "react";

const User = (props) => {

    [count, setCount] = useState(0);
    [count2, setCount2] = useState(2);

    useEffect(() => {

        const timer = setInterval(() => {
            // console.log('timer is active from FC');
        }, 1000);

        // componentWillUnmount like functionality
        return () => {
            // console.log('timer is cleared from FC');
            clearInterval(timer);
        }

    }, []);

    return (
        <div className="user-card">
            <p>-- state variable COUNT -- {count}</p>
            <p>-- state variable COUNT 2 -- {count2}</p>
            <h2>Name : {props.name} </h2>
            <h5>Location : India</h5>
            <h5>Mail : abc@gmail.com</h5>
        </div>
    )
}
export default User;