async function getData(){
    try {
        const response=await fetch("https://api.github.com/users/Sighi-04/repos")
        const result = await response.json()
        console.log("I tuoi respositoy sono:")
        await result.forEach(element => {
            console.log(element.name)
        });
    }
    catch{
        alert("Impossibile ottenere i progetti recenti")
    }
}