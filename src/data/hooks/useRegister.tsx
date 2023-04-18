import { MeteriologicalData } from "../types/MeteriologicalData"
import { useState } from "react"


export function UserRegister(){
    const [meteriologicalData, setmeteriologicalData] = useState <MeteriologicalData>()

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState();
}