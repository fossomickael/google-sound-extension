chrome.commands.onCommand.addListener(function(command) {
    getRandomRepo;
  });


async const getRandomRepo = () => {
    url = "https://api.github.com/users/fossomickael/repos"
    let response = await fetch(url);
    console.log(response);
}