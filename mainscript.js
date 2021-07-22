async function getData(){
    try {
        const response=await fetch("https://api.github.com/users/Sighi-04/repos")
        const result = await response.json()
        console.log("I tuoi respositoy sono:")
        await result.forEach(element => {
            console.log(element.name)
        });
        await console.log(result)
        changeData(result[0].name, result[1].name)
    }
    catch{
        alert("Impossibile ottenere i progetti recenti")
    }
}
function changeData(proj1, proj2){
    const pj1=document.getElementById("proj1")
    const pj2=document.getElementById("proj2")
    pj1.innerHTML=proj1
    pj2.innerHTML=proj2
}