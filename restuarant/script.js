const searchicon1=document.querySelector("#searchicon1");
const srchicon1=document.querySelector("#srchicon1");
const search1=document.querySelector("#searchinput1");

searchicon1.addEventListener('click',function(){
    search1.style.display="flex";
    searchicon1.style.display="none";
})


const searchicon2=document.querySelector("#searchicon2");
const srchicon2=document.querySelector("#srchicon2");
const search2=document.querySelector("#searchinput2");

searchicon2.addEventListener('click',function(){
    search2.style.display="flex";
    searchicon2.style.display="none";
})

const bar=document.querySelector('.fa-bars');
const cross=document.querySelector('#hd_cross');
const headerbar=document.querySelector('.headerbar');

bar.addEventListener('click', function(){
    console.log("Bars icon clicked");
    setTimeout(() => {
        cross.style.display = 'block'; // Display the cross mark
    }, 100);
    headerbar.style.right = '0%';
});

cross.addEventListener('click',function(){
    cross.style.display='block';
    headerbar.style.right='-100%';
})

const homeid=document.querySelector("#home");
const aboutusid=document.querySelector("#aboutus");
const foodmenuid=document.querySelector("#foodmenu");
const booktableid=document.querySelector("#booktable");

function home(){
    homeid.style.display="block";
    aboutusid.style.display="none";
    foodmenuid.style.display="none";
    booktableid.style.display="none";
    profileid.style.display="none";
    signinid.style.display="none";
}
function aboutus(){
    homeid.style.display="none";
    aboutusid.style.display="block";
    foodmenuid.style.display="none";
    booktableid.style.display="none";
    profileid.style.display="none";
    signinid.style.display="none";

}
function foodmenu(){
    homeid.style.display="none";
    aboutusid.style.display="none";
    foodmenuid.style.display="block";
    booktableid.style.display="none";
    profileid.style.display="none";
    signinid.style.display="none";
}
function booktable(){
    homeid.style.display="none";
    aboutusid.style.display="none";
    foodmenuid.style.display="none";
    booktableid.style.display="block";
    profileid.style.display="none";
    signinid.style.display="none";
}
const homepageid=document.querySelector("#home");
function homepage(){
    homepageid.style.display="block";
    aboutusid.style.display="none";
    foodmenuid.style.display="none";
    foodmenuid.style.display="none";
    booktableid.style.display="none";
    profileid.style.display="none";
    signinid.style.display="none";
}
const profileid=document.querySelector("#profilesignup");
function profile(){
    homeid.style.display="none";
    aboutusid.style.display="none";
    foodmenuid.style.display="none";
    booktableid.style.display="none";
    profileid.style.display="block";
    signinid.style.display="none";
}
const signinid=document.querySelector("#profilesignin");
function signin(){
    homeid.style.display="none";
    aboutusid.style.display="none";
    foodmenuid.style.display="none";
    booktableid.style.display="none";
    profileid.style.display="none";
    signinid.style.display="block";
}