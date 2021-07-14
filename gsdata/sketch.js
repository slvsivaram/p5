var data ;
function setup() {
  createCanvas(400, 400);
  Tabletop.init( { key: "1ZCMFzxa0QVDryxzf4AiPTv9NsD1NDxdrHy0Kbs77aA8",
                     callback: showInfo,
                     simpleSheet: true } )
}

function showInfo(data,tabletop){
  
  console.log(data);
}

