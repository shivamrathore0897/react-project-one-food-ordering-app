import React from "react";

class UserClass extends React.Component {

    constructor(params) {
        super(params);
        this.state = {
            count: 0,
            count2: 2,
            userInfo: {
                name: "dummyData",
                location: "defaultLocation",
            }
        };
    }

    async componentDidMount() {

        // Api call 
        const data = await fetch("https://api.github.com/users/shivamrathore0897");
        const json = await data.json();
        // console.log("🚀 ~ UserClass ~ componentDidMount ~ json:", json);
        this.setState({ userInfo: json })

        this.timer = setInterval(() => {
            // console.log('timer is active from CBC');
        }, 1000);
    }

    componentWillUnmount(){
        // as soon as I leave this page this method calls
        // console.log("componentWillUnmount method calls");
        // console.log('timer is cleared from CBC');
        clearInterval(this.timer);

    }

    render() {
        // console.log(this.state);
        return (
            <div className="user-card">
                <p>-- state variable COUNT -- {this.state.count} </p>
                <p>-- state variable COUNT 2 -- {this.state.count2}</p>
                <button onClick={() => {
                    this.setState(
                        {
                            count: this.state.count + 1,
                            count2: this.state.count2 + 1,
                            count3: this.state.count2 + 1
                        })
                }}>Update Count</button>
                <h2> User Details from Class Component</h2>
                <h3>Name : {this.state.userInfo.login}  </h3>
                <h5>Mail : {this.state.userInfo.login}</h5>
                <h5>URL : {this.state.userInfo.url}</h5>
            </div>
        )
    }
}

export default UserClass