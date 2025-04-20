import {Container, Input, Button} from "./components"
import { useId, useState } from "react"
import axios from 'axios';

const App = () => {
  const nameId = useId()
  const emailId = useId()
  const passwordId = useId()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  return (
    <main className="h-screen flex flex-col justify-between">
      <h1 className="text-center text-[3vw] font-bold">Form</h1>
      <Container styles="mb-[35vh]">
        <Input type="text" text="Name" id={nameId} value={name} setValue={setName} />
        <Input type="email" text="Email" id={emailId} value={email} setValue={setEmail}/>
        <Input type="password" text="Password" id={passwordId} value={password} setValue={setPassword}/>
        <Button type="submit" text="Submit" func={e=>{
          e.preventDefault();
          
          axios.post("http://localhost:3000/", {name, email, password})
          .then(res => console.log(res.data))
          .catch(err => console.error(err))
          .finally(()=>{
            setName("")
            setEmail("")
            setPassword("")
          })
        }}/>
      </Container>
    </main>
  )
}

export default App