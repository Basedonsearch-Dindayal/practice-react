function handleFormSubmit(event){
    event.preventDefault();
    console.log("Form was submitted");
}

export default function Form(){
    return(
        <form action="/">
            <input type="Write Something" />
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    );
}