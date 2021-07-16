async function getRoba(){
    const response=await fetch("https://api.github.com/users/Sighi-04/repos")
    const result = await response.json()
}