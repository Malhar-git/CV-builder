import { StrictMode } from "react";

export function PersonalInformation(){
    return <form>
        <input type="text" id="name" placeholder="Candidate Name" required></input>
        <input type="email" id="email" placeholder="email"></input>
        <input type="number" id="contactNumber" placeholder="Contact Number" requied></input>
    </form>
}