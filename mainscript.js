async function getData(){
    try {
        //Fetches the list of repositories, sorting by last updated
        const response=await fetch("https://api.github.com/users/Sighi-04/repos?sort=updated")
        //Renders the response body in json format
        const result = await response.json()
        //Logs to console every repository's name
        console.log("I tuoi respositoy sono:")
        await result.forEach(element => {
            console.log(element.name)
        })
        //Fetches the commits for the latest 
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
