var data ;
function setup() {
  createCanvas(400, 400);
  background(220);
  Tabletop.init( { key: "1ZCMFzxa0QVDryxzf4AiPTv9NsD1NDxdrHy0Kbs77aA8",
                     callback: showInfo,
                     simpleSheet: true } )
}

function showInfo(data,tabletop){
  for(var i=0;i<data.length;i++){
    text(data[i].Name,10,30+i*10);
  }
  console.log(data);
}

