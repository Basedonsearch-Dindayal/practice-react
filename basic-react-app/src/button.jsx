function printHello(){
    console.log("Hello!");
}


export default function Buttton(){
    return(
        <div>
            <button onClick={printHello}>Click me</button>
        </div>
    )
}