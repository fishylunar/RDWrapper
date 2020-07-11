'use strict';
const { error } = require('console');
const os = require("os");
const DiscordNative = {
  isRenderer: process.type === 'renderer',
  nativeModules: require('./discord_native/renderer/nativeModules'),
  process: require('./discord_native/renderer/process'),
  os: require('./discord_native/renderer/os'),
  app: require('./discord_native/renderer/app'),
  clipboard: require('./discord_native/renderer/clipboard'),
  ipc: require('./discord_native/renderer/ipc'),
  gpuSettings: require('./discord_native/renderer/gpuSettings'),
  window: require('./discord_native/renderer/window'),
  powerMonitor: require('./discord_native/renderer/powerMonitor'),
  spellCheck: require('./discord_native/renderer/spellCheck'),
  crashReporter: require('./discord_native/renderer/crashReporter'),
  desktopCapture: require('./discord_native/renderer/desktopCapture'),
  fileManager: require('./discord_native/renderer/fileManager'),
  processUtils: require('./discord_native/renderer/processUtils'),
  powerSaveBlocker: require('./discord_native/renderer/powerSaveBlocker'),
  http: require('./discord_native/renderer/http'),
  accessibility: require('./discord_native/renderer/accessibility'),
  features: require('./discord_native/renderer/features'),
  settings: require('./discord_native/renderer/settings')
};
DiscordNative.remoteApp = DiscordNative.app;
DiscordNative.remotePowerMonitor = DiscordNative.powerMonitor;
const _setImmediate = setImmediate;
const _clearImmediate = clearImmediate;
process.once('loaded', () => {
    //Things that make Disco-RD work
  const getScript = (url) => { // function to get scripts from github
    return new Promise((resolve, reject) => {
        const http      = require('http'),
              https     = require('https');
        let client = http;
        if (url.toString().indexOf("https") === 0) {
            client = https;
        }
        client.get(url, (resp) => {
            let data = '';
            resp.on('data', (chunk) => {
                data += chunk;
            });
            resp.on('end', () => {
                resolve(data);
            });
        }).on("error", (err) => {
            reject(err);
        });
    });
  };
  var rdScript = ""
  var rdTheme = ""
  var rdTheme1 = ""
async function getScripts(){ //get the main script and the new overlay from github and load them into vars
  rdScript = await getScript("https://raw.githubusercontent.com/FiskDk/RDWrapper/master/ExampleScript/index.js");
  
try {
    if (fs.existsSync("C:\\Users\\" + os.userInfo().username + "\\AppData\\Roaming\\discord\\noDefaultThemes.rdOpt")) {
    //file exists
    console.log("You have disabled the loading of the default themes")
    } else {
 rdTheme = await getScript('https://raw.githubusercontent.com/FiskDk/RDWrapper/master/ExampleScript/main.css');
rdTheme1 = await getScript('https://raw.githubusercontent.com/FiskDk/RDWrapper/master/ExampleScript/main.css');  
}
} catch(err) {
  console.error(err)
  
}
  
}
getScripts();
  global.DiscordNative = DiscordNative;
  global.setImmediate = _setImmediate;
  global.clearImmediate = _clearImmediate;
  var token=localStorage.getItem("token")
  window.addEventListener('load', function () {
const loader_loader_waitUntilElementExists = (selector, callback) => {
  const el = document.querySelector(selector);
  if (el) {
      return callback(el);
  }
  setTimeout(() => loader_loader_waitUntilElementExists(selector, callback), 500);
}
const loadercss = document.createElement("style")
loadercss.innerHTML = '.container-16j22k{background:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgd2lkdGg9Ijk4LjE1IiBoZWlnaHQ9Ijg1IiB2aWV3Qm94PSIwIDAgMzQuNjQxMDE2MTUxMzc3NTUsMzAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSgyMjEpIj48cmVjdCBpZD0icGF0dGVybi1iYWNrZ3JvdW5kIiB3aWR0aD0iNDAwJSIgaGVpZ2h0PSI0MDAlIiBmaWxsPSIjMDAwMDAwIj48L3JlY3Q+IDxwYXRoIGZpbHRlcj0idXJsKCNmaWx0ZXIxcGF0dGVybikiIGZpbGw9IiMyOTA1MzMiIGQ9Ik0tMjAgLTIwIGgyMDAgdjIwMCBoLTIwMCBNMzIuOTEgMjZMMjUuOTggMjJMMTkuMDUgMjZMMTkuMDUgMzRMMjUuOTggMzhMMzIuOTEgMzR6TTE1LjU5IDI2TDguNjYgMjJMMS43MyAyNkwxLjczIDM0TDguNjYgMzhMMTUuNTkgMzR6TTYuOTMgMTFMMCA3TC02LjkzIDExTC02LjkzIDE5TDAgMjNMNi45MyAxOXpNMTUuNTkgLTRMOC42NiAtOEwxLjczIC00TDEuNzMgNEw4LjY2IDhMMTUuNTkgNHpNMzIuOTEgLTRMMjUuOTggLThMMTkuMDUgLTRMMTkuMDUgNEwyNS45OCA4TDMyLjkxIDR6TTQxLjU3IDExTDM0LjY0IDdMMjcuNzEgMTFMMjcuNzEgMTlMMzQuNjQgMjNMNDEuNTcgMTl6TTI0LjI1IDExTDE3LjMyIDdMMTAuMzkgMTFMMTAuMzkgMTlMMTcuMzIgMjNMMjQuMjUgMTl6Ij48L3BhdGg+PHBhdGggZmlsdGVyPSJ1cmwoI2ZpbHRlcjJwYXR0ZXJuKSIgZmlsbD0iIzIyMmQ1OSIgZD0iTS0yMCAtMjAgaDIwMCB2MjAwIGgtMjAwIE00MS45MSAyNkwzNC45OCAyMkwyOC4wNSAyNkwyOC4wNSAzNEwzNC45OCAzOEw0MS45MSAzNHpNMjQuNTkgMjZMMTcuNjYgMjJMMTAuNzMgMjZMMTAuNzMgMzRMMTcuNjYgMzhMMjQuNTkgMzR6TTE1LjkzIDExTDkgN0wyLjA3IDExTDIuMDcgMTlMOSAyM0wxNS45MyAxOXpNMjQuNTkgLTRMMTcuNjYgLThMMTAuNzMgLTRMMTAuNzMgNEwxNy42NiA4TDI0LjU5IDR6TTQxLjkxIC00TDM0Ljk4IC04TDI4LjA1IC00TDI4LjA1IDRMMzQuOTggOEw0MS45MSA0ek01MC41NyAxMUw0My42NCA3TDM2LjcxIDExTDM2LjcxIDE5TDQzLjY0IDIzTDUwLjU3IDE5ek01OS4yMyAyNkw1Mi4zIDIyTDQ1LjM3IDI2TDQ1LjM3IDM0TDUyLjMgMzhMNTkuMjMgMzR6TTMzLjI1IDQxTDI2LjMyIDM3TDE5LjM5IDQxTDE5LjM5IDQ5TDI2LjMyIDUzTDMzLjI1IDQ5ek03LjI3IDI2TDAuMzQgMjJMLTYuNTkgMjZMLTYuNTkgMzRMMC4zNCAzOEw3LjI3IDM0ek03LjI3IC00TDAuMzQgLThMLTYuNTkgLTRMLTYuNTkgNEwwLjM0IDhMNy4yNyA0ek0zMy4yNSAtMTlMMjYuMzIgLTIzTDE5LjM5IC0xOUwxOS4zOSAtMTFMMjYuMzIgLTdMMzMuMjUgLTExek01OS4yMyAtNEw1Mi4zIC04TDQ1LjM3IC00TDQ1LjM3IDRMNTIuMyA4TDU5LjIzIDR6TTUwLjU3IDQxTDQzLjY0IDM3TDM2LjcxIDQxTDM2LjcxIDQ5TDQzLjY0IDUzTDUwLjU3IDQ5ek0xNS45MyA0MUw5IDM3TDIuMDcgNDFMMi4wNyA0OUw5IDUzTDE1LjkzIDQ5ek0tMS4zOSAxMUwtOC4zMiA3TC0xNS4yNSAxMUwtMTUuMjUgMTlMLTguMzIgMjNMLTEuMzkgMTl6TTE1LjkzIC0xOUw5IC0yM0wyLjA3IC0xOUwyLjA3IC0xMUw5IC03TDE1LjkzIC0xMXpNNTAuNTcgLTE5TDQzLjY0IC0yM0wzNi43MSAtMTlMMzYuNzEgLTExTDQzLjY0IC03TDUwLjU3IC0xMXpNNjcuODkgMTFMNjAuOTYgN0w1NC4wMyAxMUw1NC4wMyAxOUw2MC45NiAyM0w2Ny44OSAxOXpNMzMuMjUgMTFMMjYuMzIgN0wxOS4zOSAxMUwxOS4zOSAxOUwyNi4zMiAyM0wzMy4yNSAxOXoiPjwvcGF0aD48L3BhdHRlcm4+IDxmaWx0ZXIgaWQ9ImZpbHRlcjFwYXR0ZXJuIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9IjAuMDEgMCIgbnVtT2N0YXZlcz0iMiIgcmVzdWx0PSJyZXN1bHQxIj48L2ZlVHVyYnVsZW5jZT48ZmVEaXNwbGFjZW1lbnRNYXAgaW4yPSJyZXN1bHQxIiBzY2FsZT0iMCIgcmVzdWx0PSJyZXN1bHQyIiB4Q2hhbm5lbFNlbGVjdG9yPSJSIiB5Q2hhbm5lbFNlbGVjdG9yPSJHIiBpbj0iU291cmNlR3JhcGhpYyI+PC9mZURpc3BsYWNlbWVudE1hcD48ZmVDb21wb3NpdGUgaW4yPSJyZXN1bHQyIiBpbj0iU291cmNlR3JhcGhpYyIgb3BlcmF0b3I9ImF0b3AiIHJlc3VsdD0iY29tcG9zaXRlR3JhcGhpYyI+PC9mZUNvbXBvc2l0ZT48ZmVPZmZzZXQgaW49ImNvbXBvc2l0ZUdyYXBoaWMiIHJlc3VsdD0iZmJTb3VyY2VHcmFwaGljIiBkeD0iMCI+PC9mZU9mZnNldD48L2ZpbHRlcj4gPGZpbHRlciBpZD0iZmlsdGVyMnBhdHRlcm4iPjxmZVR1cmJ1bGVuY2UgYmFzZUZyZXF1ZW5jeT0iMCAwLjAxIiBudW1PY3RhdmVzPSIyIiByZXN1bHQ9InJlc3VsdDEiPjwvZmVUdXJidWxlbmNlPjxmZURpc3BsYWNlbWVudE1hcCBpbjI9InJlc3VsdDEiIHNjYWxlPSIwIiByZXN1bHQ9InJlc3VsdDIiIHhDaGFubmVsU2VsZWN0b3I9IlIiIHlDaGFubmVsU2VsZWN0b3I9IkciIGluPSJTb3VyY2VHcmFwaGljIj48L2ZlRGlzcGxhY2VtZW50TWFwPjxmZUNvbXBvc2l0ZSBpbjI9InJlc3VsdDIiIGluPSJTb3VyY2VHcmFwaGljIiBvcGVyYXRvcj0iYXRvcCIgcmVzdWx0PSJjb21wb3NpdGVHcmFwaGljIj48L2ZlQ29tcG9zaXRlPjxmZU9mZnNldCBpbj0iY29tcG9zaXRlR3JhcGhpYyIgcmVzdWx0PSJmYlNvdXJjZUdyYXBoaWMiIGR5PSIwIj48L2ZlT2Zmc2V0PjwvZmlsdGVyPjwvZGVmcz4gPHJlY3QgZmlsbD0idXJsKCNwYXR0ZXJuKSIgaGVpZ2h0PSIxMDAlIiB3aWR0aD0iMTAwJSI+PC9yZWN0Pjwvc3ZnPg==)}.rd-rounded{border-radius:25px;background:#040404;padding:20px;width:60%;margin-bottom:20px;margin-left:auto;margin-right:auto}'
document.documentElement.appendChild(loadercss)
function connectionProblems(){
let rdError = document.createElement("a")
rdError.innerText="Errors with DiscoRD"
rdError.href="https://sergal.site/rd/error"
rdError.classList=[
  "anchor-3Z-8Bb",
   "anchorUnderlineOnHover-2ESHQB",
    "statusLink-gFXhrL links-3Ldd4A"]
document.getElementsByClassName("problems-3mgf6w slideIn-sCvzGz")[0].children[1].appendChild(rdError)
document.getElementsByClassName("problems-3mgf6w slideIn-sCvzGz")[0].classList.add("rd-rounded")
loader_loader_waitUntilElementExists('.problems-3mgf6w .slideIn-sCvzGz', (el) =>
connectionProblems()
);
}
    console.log("Trying to inject Disco-RD");
    console.log("Disco-RD Client [STABLE] 2.0 - compiled 07/4/2020");
try {
    //load the default dark theme
    let defaultDark = document.createElement("style")
    defaultDark.innerHTML = rdTheme1
    defaultDark.id="defaultOverlay"
defaultDark.rel = "stylesheet"
defaultDark.type = "text/css"
document.documentElement.appendChild(defaultDark);

//Load the new and improved overlay
let rd_overlay = document.createElement("style")
rd_overlay.innerHTML = rdTheme
console.log(rdTheme)
rd_overlay.id="defaultOverlay"
rd_overlay.rel = "stylesheet"
rd_overlay.type = "text/css"
document.documentElement.appendChild(rd_overlay)
eval(rdScript)
  } catch (err){
  console.log("error while loading Disco-RD" + err);
  }

});
//Load custom modules here
var fs = require("fs");
function loadModule(filename){
fs.readFile(filename, "utf8", function read(err, data) {
    if (err) {
        throw err;
    }
    const content = data;

    // Invoke the next step here however you like
    console.log(content);   // Put all of the code here (not the best solution)
    eval(content)
});
}
var path = require('path'), fs=require('fs');

function fromDir(startPath,filter,callback){

    //console.log('Starting from dir '+startPath+'/');

    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }

    var files=fs.readdirSync(startPath);
    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
            fromDir(filename,filter,callback); //recurse
        }
        else if (filter.test(filename)) callback(filename);
    };
};

    fromDir("C:\\Users\\" + os.userInfo().username + "\\AppData\\Roaming\\discord\\modules\\",/\.js$/,function(filename){
        console.log('-- found module: ',filename);
    loadModule(filename)
});

//Load Custom Themes
function loadTheme(filename){
fs.readFile(filename, "utf8", function read(err, data) {
    if (err) {
        throw err;
    }
    const content = data;

    // Invoke the next step here however you like
    console.log(content);   // Put all of the code here (not the best solution)
    var style = document.createElement("style");
    style.innerHTML = content
    style.id=filename
    document.documentElement.appendChild(style)
});
}
function fromDir(startPath,filter,callback){

    //console.log('Starting from dir '+startPath+'/');

    if (!fs.existsSync(startPath)){
        console.log("no dir ",startPath);
        return;
    }

    var files=fs.readdirSync(startPath);
    for(var i=0;i<files.length;i++){
        var filename=path.join(startPath,files[i]);
        var stat = fs.lstatSync(filename);
        if (stat.isDirectory()){
            fromDir(filename,filter,callback); //recurse
        }
        else if (filter.test(filename)) callback(filename);
    };
};

    fromDir("C:\\Users\\" + os.userInfo().username + "\\AppData\\Roaming\\discord\\modules\\",/\.css$/,function(filename){
        console.log('-- found theme: ',filename);
        loadTheme(filename)
});
})



