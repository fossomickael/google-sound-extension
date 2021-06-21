chrome.commands.onCommand.addListener(function(command) {
    console.log('Command:', command);
    const newURL = "http://stackoverflow.com/";
    chrome.tabs.create({ url: newURL });
  });