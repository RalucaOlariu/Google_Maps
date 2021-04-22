
import {Button} from "./interactivity.js";
import {addMarker} from "./drawingUtils";
import {predict2min} from "./calculations";

function getRandomFloat(min: number, max: number) {
    return Math.random() * (max - min) + min;
}



let buttonList: HTMLElement[]=[];
buttonList.push(new Button('Show Coordinates for First Aircraft','btn','btn-01').createButton());
buttonList.push(new Button('Show Coordinates for Second Aircraft','btn','btn-02').createButton());
buttonList.push(new Button('Collision?','btn','btn-03').createButton());

for (let i=0; i<buttonList.length; i++){
    if (i === 0){
        let title1=document.createElement('h2');
        title1.textContent="Coordinate Display"
        document.body.appendChild(title1);
    }
    document.body.appendChild(buttonList[i]);
}

let lat1=getRandomFloat(40,40.5);
let long1=getRandomFloat(15,15.5);
let tk1=Math.floor(getRandomFloat(0,359));
let gs1=Math.floor(getRandomFloat(350,450));
let lat2=getRandomFloat(40,40.5);
let long2=getRandomFloat(15,15.5);
let tk2=Math.floor(getRandomFloat(0,359));
let gs2=Math.floor(getRandomFloat(350,450));

let long2min1:number=0;
let lat2min1:number=0;
let long2min1s:number=0;
let lat2min1s:number=0;
let long2min1d:number=0;
let lat2min1d:number=0;
let long2min2:number=0;
let lat2min2:number=0;
let long2min2s:number=0;
let lat2min2s:number=0;
let long2min2d:number=0;
let lat2min2d:number=0;
let delx:number;
let dely:number;
let DX:number;
let DY:number;
let dist1=gs1*2/60;
let dist2=gs2*2/60;
const Rstar=3445;

let tk1s=tk1-15;
if (tk1s<0) {
    tk1s=tk1s+360;
}
let tk1d=tk1+15;
if (tk1d>360) {
    tk1d=tk1d-360;
}

if (tk1<=90){
    let rad=tk1*3.14/180;
    delx=dist1*Math.cos(rad);
    dely=dist1*Math.sin(rad);
    DX=(delx*180)/(3.14*Rstar);
    DY=(dely*180)/(3.14*Rstar*Math.cos((lat1*3.14/180)));
    lat2min1=lat1+DY;
    long2min1=long1+DX;
}
if (tk1s<=90){
    let rad=tk1s*3.14/180;
    delx=dist1*Math.cos(rad);
    dely=dist1*Math.sin(rad);
    DX=(delx*180)/(3.14*Rstar);
    DY=(dely*180)/(3.14*Rstar*Math.cos((lat1*3.14/180)));
    lat2min1s=lat1+DY;
    long2min1s=long1+DX;
}
if (tk1d<=90){
    let rad=tk1d*3.14/180;
    delx=dist1*Math.cos(rad);
    dely=dist1*Math.sin(rad);
    DX=(delx*180)/(3.14*Rstar);
    DY=(dely*180)/(3.14*Rstar*Math.cos((lat1*3.14/180)));
    lat2min1d=lat1+DY;
    long2min1d=long1+DX;
}

if (tk1>90 && tk1<=180){
    let rad=(tk1-90)*3.14/180;
    delx=dist1*Math.sin(rad);
    dely=dist1*Math.cos(rad);
    DX=(delx*180)/(3.14*Rstar);
    DY=(dely*180)/(3.14*Rstar*Math.cos((lat1*3.14/180)));
    lat2min1=lat1-DX;
    long2min1=long1+DY;
}
if (tk1s>90 && tk1s<=180) {
    let rad = (tk1s - 90) * 3.14 / 180;
    delx = dist1 * Math.sin(rad);
    dely = dist1 * Math.cos(rad);
    DX = (delx * 180) / (3.14 * Rstar);
    DY = (dely * 180) / (3.14 * Rstar * Math.cos((lat1 * 3.14 / 180)));
    lat2min1s = lat1 - DX;
    long2min1s = long1 + DY;
}
if (tk1d>90 && tk1d<=180) {
    let rad = (tk1d - 90) * 3.14 / 180;
    delx = dist1 * Math.sin(rad);
    dely = dist1 * Math.cos(rad);
    DX = (delx * 180) / (3.14 * Rstar);
    DY = (dely * 180) / (3.14 * Rstar * Math.cos((lat1 * 3.14 / 180)));
    lat2min1d = lat1 - DX;
    long2min1d = long1 + DY;
}

if (tk1>180 && tk1<=270){
    let rad=(tk1-180)*3.14/180;
    delx=dist1*Math.cos(rad);
    dely=dist1*Math.sin(rad);
    DX=(delx*180)/(3.14*Rstar);
    DY=(dely*180)/(3.14*Rstar*Math.cos((lat1*3.14/180)));
    lat2min1=lat1-DX;
    long2min1=long1-DY;
}
if (tk1s>180 && tk1s<=270) {
    let rad = (tk1s - 180) * 3.14 / 180;
    delx = dist1 * Math.sin(rad);
    dely = dist1 * Math.cos(rad);
    DX = (delx * 180) / (3.14 * Rstar);
    DY = (dely * 180) / (3.14 * Rstar * Math.cos((lat1 * 3.14 / 180)));
    lat2min1s = lat1 - DX;
    long2min1s = long1 + DY;
}
if (tk1d>180 && tk1d<=270) {
    let rad = (tk1d - 180) * 3.14 / 180;
    delx = dist1 * Math.sin(rad);
    dely = dist1 * Math.cos(rad);
    DX = (delx * 180) / (3.14 * Rstar);
    DY = (dely * 180) / (3.14 * Rstar * Math.cos((lat1 * 3.14 / 180)));
    lat2min1d = lat1 - DX;
    long2min1d = long1 + DY;
}

if (tk1>270){
    let rad=(tk1-270)*3.14/180;
    delx=dist1*Math.sin(rad);
    dely=dist1*Math.cos(rad);
    DX=(delx*180)/(3.14*Rstar);
    DY=(dely*180)/(3.14*Rstar*Math.cos((lat1*3.14/180)));
    lat2min1=lat1+DX;
    long2min1=long1-DY;
}
if (tk1s>270){
    let rad=(tk1s-270)*3.14/180;
    delx=dist1*Math.sin(rad);
    dely=dist1*Math.cos(rad);
    DX=(delx*180)/(3.14*Rstar);
    DY=(dely*180)/(3.14*Rstar*Math.cos((lat1*3.14/180)));
    lat2min1s=lat1+DX;
    long2min1s=long1-DY;
}
if (tk1d>270){
    let rad=(tk1d-270)*3.14/180;
    delx=dist1*Math.sin(rad);
    dely=dist1*Math.cos(rad);
    DX=(delx*180)/(3.14*Rstar);
    DY=(dely*180)/(3.14*Rstar*Math.cos((lat1*3.14/180)));
    lat2min1d=lat1+DX;
    long2min1d=long1-DY;
}

let tk2s=tk2-15;
if (tk2s<0) {
    tk2s=tk2s+360;
}
let tk2d=tk2+15;
if (tk2d>360) {
    tk2d=tk2d-360;
}

if (tk2<=90){
    let rad=tk2*3.14/180;
    delx=dist2*Math.cos(rad);
    dely=dist2*Math.sin(rad);
    DX=(delx*180)/(3.14*Rstar);
    DY=(dely*180)/(3.14*Rstar*Math.cos((lat2*3.14/180)));
    lat2min2=lat2+DY;
    long2min2=long2+DX;
}
if (tk2s<=90){
    let rad=tk2s*3.14/180;
    delx=dist2*Math.cos(rad);
    dely=dist2*Math.sin(rad);
    DX=(delx*180)/(3.14*Rstar);
    DY=(dely*180)/(3.14*Rstar*Math.cos((lat2*3.14/180)));
    lat2min2s=lat2+DY;
    long2min2s=long2+DX;
}
if (tk2d<=90){
    let rad=tk2d*3.14/180;
    delx=dist2*Math.cos(rad);
    dely=dist2*Math.sin(rad);
    DX=(delx*180)/(3.14*Rstar);
    DY=(dely*180)/(3.14*Rstar*Math.cos((lat2*3.14/180)));
    lat2min2d=lat2+DY;
    long2min2d=long2+DX;
}

if (tk2>90 && tk2<=180){
    let rad=(tk2-90)*3.14/180;
    delx=dist2*Math.sin(rad);
    dely=dist2*Math.cos(rad);
    DX=(delx*180)/(3.14*Rstar);
    DY=(dely*180)/(3.14*Rstar*Math.cos((lat2*3.14/180)));
    lat2min2=lat2-DX;
    long2min2=long2+DY;
}
if (tk2s>90 && tk2s<=180) {
    let rad = (tk2s - 90) * 3.14 / 180;
    delx = dist2 * Math.sin(rad);
    dely = dist2 * Math.cos(rad);
    DX = (delx * 180) / (3.14 * Rstar);
    DY = (dely * 180) / (3.14 * Rstar * Math.cos((lat2 * 3.14 / 180)));
    lat2min2s = lat2 - DX;
    long2min2s = long2 + DY;
}
if (tk2d>90 && tk2d<=180) {
    let rad = (tk2d - 90) * 3.14 / 180;
    delx = dist2 * Math.sin(rad);
    dely = dist2 * Math.cos(rad);
    DX = (delx * 180) / (3.14 * Rstar);
    DY = (dely * 180) / (3.14 * Rstar * Math.cos((lat2 * 3.14 / 180)));
    lat2min2d = lat2 - DX;
    long2min2d = long2 + DY;
}

if (tk2>180 && tk2<=270){
    let rad=(tk2-180)*3.14/180;
    delx=dist2*Math.cos(rad);
    dely=dist2*Math.sin(rad);
    DX=(delx*180)/(3.14*Rstar);
    DY=(dely*180)/(3.14*Rstar*Math.cos((lat2*3.14/180)));
    lat2min2=lat2-DX;
    long2min2=long2-DY;
}
if (tk2s>180 && tk2s<=270) {
    let rad = (tk2s - 180) * 3.14 / 180;
    delx = dist2 * Math.sin(rad);
    dely = dist2 * Math.cos(rad);
    DX = (delx * 180) / (3.14 * Rstar);
    DY = (dely * 180) / (3.14 * Rstar * Math.cos((lat2 * 3.14 / 180)));
    lat2min2s = lat2 - DX;
    long2min2s = long2 + DY;
}
if (tk2d>180 && tk2d<=270) {
    let rad = (tk2d - 180) * 3.14 / 180;
    delx = dist2 * Math.sin(rad);
    dely = dist2 * Math.cos(rad);
    DX = (delx * 180) / (3.14 * Rstar);
    DY = (dely * 180) / (3.14 * Rstar * Math.cos((lat2 * 3.14 / 180)));
    lat2min2d = lat2 - DX;
    long2min2d = long2 + DY;
}

if (tk2>270){
    let rad=(tk2-270)*3.14/180;
    delx=dist2*Math.sin(rad);
    dely=dist2*Math.cos(rad);
    DX=(delx*180)/(3.14*Rstar);
    DY=(dely*180)/(3.14*Rstar*Math.cos((lat2*3.14/180)));
    lat2min2=lat2+DX;
    long2min2=long2-DY;
}
if (tk2s>270){
    let rad=(tk2s-270)*3.14/180;
    delx=dist2*Math.sin(rad);
    dely=dist2*Math.cos(rad);
    DX=(delx*180)/(3.14*Rstar);
    DY=(dely*180)/(3.14*Rstar*Math.cos((lat2*3.14/180)));
    lat2min2s=lat2+DX;
    long2min2s=long2-DY;
}
if (tk2d>270){
    let rad=(tk2d-270)*3.14/180;
    delx=dist2*Math.sin(rad);
    dely=dist2*Math.cos(rad);
    DX=(delx*180)/(3.14*Rstar);
    DY=(dely*180)/(3.14*Rstar*Math.cos((lat2*3.14/180)));
    lat2min2d=lat2+DX;
    long2min2d=long2-DY;
}

var POS12MIN:number[]=[lat2min1s,long2min1s,lat2min1,long2min1,lat2min1d,long2min1d];
var POS22MIN:number[]=[lat2min2s,long2min2s,lat2min2,long2min2,lat2min2d,long2min2d];

const latm=(lat1+lat2)/2;
const longm=(long1+long2)/2;
let lats:string;

buttonList[0].onclick=function (){
    lats=lat1.toString();
    lats=lats.concat("N ");
    lats=lats.concat(long1.toString());
    lats=lats.concat("E");
    lats = lats.concat("TK=");
    lats = lats.concat(tk1.toString());
    lats = lats.concat(" GS=");
    lats = lats.concat(gs1.toString());
    lats = lats.concat(" KTS");
    alert(lats)
}
buttonList[1].onclick=function () {
    lats = lat2.toString();
    lats = lats.concat("N ");
    lats = lats.concat(long2.toString());
    lats = lats.concat("E ");
    lats = lats.concat("TK=");
    lats = lats.concat(tk2.toString());
    lats = lats.concat(" GS=");
    lats = lats.concat(gs2.toString());
    lats = lats.concat(" KTS");
    alert(lats)
}
buttonList[2].onclick=function () {
    var i:number;
    var end:number=POS12MIN.length;
    var checki:boolean=false;
    var check:boolean=false;
    let disti=Math.sqrt(Math.pow((long2-long1)*Rstar*Math.cos(latm*3.14/180)*3.14/180,2)+Math.pow((lat2-lat1)*Rstar*3.14/180,2));
    if (disti<=5){
        checki=true;
    }
    for (i=0;i<end;i=i+2){
        for (var j:number=0;j<end;j=j+2){
            let dist=Math.sqrt(Math.pow((POS22MIN[j+1]-POS12MIN[i+1])*Rstar*Math.cos(latm*3.14/180)*3.14/180,2)+Math.pow((POS22MIN[j]-POS12MIN[i])*Rstar*3.14/180,2));
            if (dist<5){
                check=true;
            }
        }
    }
    if(checki==true || check==true){
        let mess:string;
        mess=disti.toString();
        alert(mess.concat(' CONFLICT'));
    }
    else {
        let mess:string;
        mess=disti.toString();
        alert(mess.concat(" NO CONFLICT"));
    }
}


let map: google.maps.Map;
function init(){
    map=new google.maps.Map(document.getElementById("map") as Element,
        {center:{lat:latm, lng:longm},
        zoom: 5,
    });
    const myLatLng1={lat: lat1, lng: long1};
    const myLatLng2={lat: lat2, lng: long2};
    const myLatLng12min={lat: lat2min1, lng: long2min1};
    const myLatLng22min={lat: lat2min2, lng: long2min2};

    new google.maps.Marker({
        position: myLatLng1,
        map,
        title:"Aircraft #1",
    });
    new google.maps.Marker({
        position: myLatLng2,
        map,
        title:"Aircraft #2",
    })
    const flightPlanCoordinate1=[myLatLng1,myLatLng12min];
    const flightPath1 = new google.maps.Polyline({
        path: flightPlanCoordinate1,
        geodesic: true,
        strokeColor: "#00FFFF",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });

    const flightPlanCoordinate2=[myLatLng2,myLatLng22min];
    const flightPath2 = new google.maps.Polyline({
        path: flightPlanCoordinate2,
        geodesic: true,
        strokeColor: "#00FFFF",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });

    flightPath1.setMap(map);
    flightPath2.setMap(map);

}
(window as any).init=init();


