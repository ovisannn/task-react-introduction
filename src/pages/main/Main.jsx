import Header from "./components/Header"
import Button from "./components/Button"

export default function Main({varDataList}) {
    return (
        <div>
            <Header/>
            {varDataList.map((x)=> <Button data={x} />) }
        </div>

    )
}