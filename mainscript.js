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
        "Name": proj1.name,
        "Description": proj1.description,
        "CommittedAt": null,
        "CommitMessage": null
    }
    project2 = {
        "Name": proj2.name,
        "Description": proj2.description,
        "CommittedAt": null,
        "CommitMessage": null
    }
    try {
        //Fetches the first project's commit info
        let url="https://api.github.com/repos/Sighi-04/"+proj1.name+"/commits/main"
        let response=await fetch(url)
        let result = await response.json()
        project1.CommitMessage= await result.commit.message
        project1.CommittedAt= await result.commit.author.date
        
        //Fetches the second project's commit info
        url="https://api.github.com/repos/Sighi-04/"+proj2.name+"/commits/main"
        response=await fetch(url)
        result = await response.json()
        project2.CommitMessage= await result.commit.message
        project2.CommittedAt= await result.commit.author.date

        changeData(project1, project2)
        
    }
    catch {
        alert("Impossibile ottenere i dati sui commit")
    }

}

function changeData(proj1, proj2) {
    projects = ["proj1", "proj2"]
    details = ["Name", "Desc", "CommitMessage", "CommittedAt"]
    projects.forEach(project => {
        details.forEach(detail => {
            let temp = document.getElementById(project+detail)
            temp.innerHTML = project1.detail
        })
    });
}