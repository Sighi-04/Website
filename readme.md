## What is this?
This is the source code (HTML, CSS, JavaScript) of my website, which is not yet online.

My idea was for the website to be able to show my 2 most recent projects from my GitHub profile, in order to accomplish this I needed to learn the basics of JavaScript, JSON, and GitHub's REST API.

## How it works
As for now, there's a TEST button, that when clicked makes a request to GitHub's users API, fetching the list of my repositories, sorted by last updated. The response is then parsed as JSON and used to get the repository's name and description. Then, using the names from this response, a call is made to GitHub's repos API, this time used to get the project's commit message and commit timestamp. The gathered information is saved in a JSON in memory, which then gets "applied" to the html page.

## To do list
- [X] Learn JavaScript basics
- [X] Learn JSON basics
- [X] Learned how to interact with GitHub's REST API for simple requests
- [X] Desktop CSS design
- [ ] Responsive CSS design
- [ ] Redesign the recent projects section