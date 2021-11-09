function checkMobile(){
 
    var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기
 
    if ( varUA.indexOf('android') > -1) {
        //안드로이드
        return "android";
    } else if ( varUA.indexOf("iphone") > -1||varUA.indexOf("ipad") > -1||varUA.indexOf("ipod") > -1 ) {
        //IOS
        return "ios";
    } else {
        //아이폰, 안드로이드 외
        return "other";
    }   
}

function getDownloadUrl() {
    let url = "https://apps.apple.com/us/app/hut/id1593293986";
    if (checkMobile() === "android") {
        url = "https://play.google.com/store/apps/details?id=io.github.unbap.handong_ut";
    }
    else if (checkMobile() === "other") {
        document.getElementById("urlbutton").style.display = "none";
    }
    return url;
}

function openDownloadUrl() {
    window.open(getDownloadUrl(), '_blank');
}

const url = getDownloadUrl();

console.log(checkMobile() )

document.getElementById("url").setAttribute("href", url);
