async function getReposInfo(){
    try {
        //Fetches the list of repositories, sorting by last updated
        let response=await fetch("https://api.github.com/users/Sighi-04/repos?sort=updated")
        //Renders the response body in json format
        let result = await response.json()
        //Fetches the commits for the latest projects
        getCommitsInfo(result[0], result[1])
    }
    catch{
        alert("Impossibile ottenere i progetti recenti")
    }
}

async function getCommitsInfo(proj1, proj2){
    //Defines the 2 projects as objects, which will be used to change the html
    project1 = {
        "name": proj1.name,
        "description": proj1.description,
        "committedAt": null,
        "commitMessage": null
    }
    project2 = {
        "name": proj2.name,
        "description": proj2.description,
        "committedAt": null,
        "commitMessage": null
    }
    try {
        //Fetches the first projects
        let url="https://api.github.com/repos/Sighi-04/"+proj1.name+"/commits/main"
        let response=await fetch(url)
        console.log(url)
        let result = await response.json()
        await console.log(result.commit.message)
    }
    catch {
        alert("Impossibile ottenere i dati sui commit")
    }

}
