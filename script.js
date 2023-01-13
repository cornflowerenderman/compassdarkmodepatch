// ==UserScript==
// @name     CompassDarkModePatch
// @version  1
// @grant    none
// ==/UserScript==

searchPlaceholder = "Discord: cornflowerenderman6669#1316";
welcomeBackMsg = "Welcome back!";
versionNumberText = "Who even reads this text anyway";
myTasksInnerHTML = "<h5><a href=\"https://youtu.be/dQw4w9WgXcQ\">My Tasks</a></h5>";
userProfileIconURL = "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-c" +
        "ontent%2Fuploads%2F2016%2F06%2FBiohazard-Symbol-PNG-Pic.png&f=1&nofb=1&ipt=53a74" +
        "3d392ceb72d7965f6b25bf8d480823d19b498f5c3ac5e0515d6345e9739&ipo=images";
function GM_addStyle(cssStr) {
    var D = document;
    var newNode = D.createElement('style');
    newNode.textContent = cssStr;
    var targ = D.getElementsByTagName('head')[0] || D.body || D.documentElement;
    targ.appendChild(newNode)
}
GM_addStyle(`
    html {filter: invert(100%);}
    img {filter: invert(100%);}
#productNavBar.newLNF {background-color: #E9E9E9;}
.newLNF .home-schoolNameContainer {background-color: #E9E9E9;}
.ext-cal-dayview .ext-cal-hd-days-tbl{background-color: #fff;}
.newLNF .newsfeed-newsItemsAndToolbarContainer {background-color: #E9E9E9;}
.x-toolbar-default, .x-toolbar-blue-toolbar {background-color: #e9e9e9;}
.home-schoolLogo {background-image: url("https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F2016%2F06%2FBiohazard-Symbol-PNG-Pic.png&f=1&nofb=1&ipt=53a743d392ceb72d7965f6b25bf8d480823d19b498f5c3ac5e0515d6345e9739&ipo=images") !important;}
.teacherContainer__profileImage{filter:invert();}
`);
window.addEventListener('load', function () {
    setTimeout(function () {
        document
            .getElementById("search")
            .placeholder = searchPlaceholder;
        document.getElementsByClassName("home-pageWelcome")[0].innerHTML = welcomeBackMsg;
        document
            .getElementById("c_ftr")
            .getElementsByTagName("div")[0]
            .innerHTML = versionNumberText;
        document
            .getElementById("label-1036")
            .innerHTML = myTasksInnerHTML;
        document
            .getElementById("mnu_right")
            .getElementsByTagName("li")[0]
            .innerHTML = '<a href="/Records/User.aspx#dsh" style="f' +
                'ilter:invert();"><img src="' + userProfileIconURL + '" style="width: 40px;"></a>'
    }, 3)
}, false);
