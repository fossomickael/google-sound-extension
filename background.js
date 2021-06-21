chrome.commands.onCommand.addListener(function(command) {
  getAllRepos().then((repos) => {
      const randomRepo = oneRepo(repos);
      repoUrl = randomRepo["html_url"];
      chrome.tabs.create({ url: repoUrl });
  });
  
   
   
});

async function getAllRepos() {
  url = "https://api.github.com/users/fossomickael/repos"
  const response = await fetch(url);
  const repos = await response.json();
  return repos;
}

const oneRepo = (repos) => {
  return repos[Math.floor(Math.random()*repos.length)];
 
}