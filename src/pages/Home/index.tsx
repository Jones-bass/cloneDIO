import { Button } from "../../components/Button";


export default function Home() {

  return (
    <div>
      <h1>Home</h1>
      <Button title="Começar agora" variant="secondary" onClick={() => (console.log('teste'))} />
    </div>
  )
}

