let executeButton = document.getElementById('executeButton');
let bkg = chrome.extension.getBackgroundPage();

executeButton.onclick = function() {
  bkg.console.log('clicked');
  let collection = document.getElementsByClassName("ytd-menu-service-item-renderer");
  bkg.console.log(collection);
  let target;
  for(let i=0; i<collection.length; i++){
    bkg.console.log('looping');
    bkg.console.log(collection.textContent);
    if(collection.textContent == '文字起こしを開く'){
      target = collection;
    }
  }
  bkg.console.log(target);
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    chrome.tabs.executeScript(
      tabs[0].id,
      {code: target + ".click()"});
      bkg.console.log('executedScript');
  });
};

//<yt-formatted-string class="style-scope ytd-menu-service-item-renderer">文字起こしを開く</yt-formatted-string>