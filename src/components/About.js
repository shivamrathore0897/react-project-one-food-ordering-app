import userContext from "../utils/userContext"
import User from "./User"
import UserClass from "./UserClass"


const About = () => {
    return (
        <div>
            <h1>About Component</h1>
            <h2>decription decription decription decription decription decription decription decription decription decription decription </h2>
            <div>
                <userContext.Consumer>
                    {(data) => <span>older way of using context, It is generally used in Class Based Components" : <br /> Logged In User :  <b>{data.loggedInUser}</b></span>}
                </userContext.Consumer>
            </div>
            <div className="about-file">
                <User name={"name comes as a param"} />
                <UserClass name={"name comes as a param"} />
            </div>
        </div>
    )
}

export default About