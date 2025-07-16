import Card from "../components/Card/Card";
import "./home.css"
export default function Home() {
  let proyectos = [
    "1", "2", "3"
  ]
  return <div ><h1>Inicio</h1>
    <div className="home">
      {proyectos.map((proyecto, index) => (
        <Card key={index} proyecto={proyecto} />
      ))}</div>
  </div>;
}