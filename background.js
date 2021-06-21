chrome.commands.onCommand.addListener(function(command) {
    console.log('Command:', command);
    const myAudio = new Audio(chrome.runtime.getURL("https://www.cjoint.com/doc/17_04/GDBo22CpPLB_Denis-Brogniart-AH.mp3"));
    myAudio.play();
  });