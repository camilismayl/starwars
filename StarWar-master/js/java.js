var userName = "";
var selectHero = 0;
var secildi = 1;
var secildi2 = 1;
var userLife = 1000;
var computerLife = 1000;
var attackScore = 0;
var lvl =1;
var computerRandom = 400;

            var bgSound = document.getElementById("bg");
            function playAudio() { 
                bgSound.play(); 
            } 
            playAudio();

document.querySelector('.solHealthCount').innerHTML = userLife;
document.querySelector('.sagHealthCount').innerHTML = computerLife;


document.querySelector(".delete").onclick = function(){
    userName = "";
    document.querySelector('.userlogininput').innerHTML = "_";
}

document.querySelector(".backs").onclick = function(){
    userName = userName.substring(0, userName.length - 1);
    if(userName.length !=0){
        document.querySelector('.userlogininput').innerHTML = userName;
    }
    else{
        document.querySelector('.userlogininput').innerHTML = "_";
    }
}

window.onkeypress = function(e){
    if("ABCDEFGHIJKLMNOPQRSTVUWXYZ".indexOf(e.key.toUpperCase()) !=-1 ){
        userName +=e.key.toUpperCase();
        document.querySelector('.userlogininput').innerHTML = userName;
    }else{
        console.log(e.key);
    }
}


    document.getElementById("h1").onclick = function(){
        secildi2=secildi;
        secildi = parseInt(document.getElementById("h1").dataset.hero);
        seciliHeroIcon();
    };

    document.getElementById("h2").onclick = function(){
        secildi2=secildi;
        secildi = parseInt(document.getElementById("h2").dataset.hero);
        seciliHeroIcon();
        
    };

    document.getElementById("h3").onclick = function(){
        secildi2=secildi;
        secildi = parseInt(document.getElementById("h3").dataset.hero);
        seciliHeroIcon();
    };

    document.getElementById("h4").onclick = function(){
        secildi2=secildi;
        secildi = parseInt(document.getElementById("h4").dataset.hero);
        seciliHeroIcon();
    };



    function seciliHeroIcon(){
        console.log(secildi);
        document.getElementById("h"+secildi2).style.boxShadow = "0px 0px 0px 0px white";
        document.getElementById("h"+secildi).style.boxShadow = "1px 0px 10px 1px red";
    }

    document.querySelector('.userstartbtn').onclick = function(){
        if(userName.length >=3 && secildi != 0){

            if(userName == "ELSHAD"){
                alert("Xos gelmisiniz " +userName +" muellim");
            }else{
                alert("Xos gelmisiniz " +userName);
            }

            
            document.querySelector('.startcont').style.display = "none";
            anaSehifeStart();
        }else{
            if(userName.length < 3){
                alert("IStifadeci adi minimum 3 simvol olmalidir");
            }
            else if(secildi === 0){
                alert("Select your hero");
            }
        }
    }

function anaSehifeStart(){
    document.querySelector('.solUserName').innerHTML = userName;
    console.log(secildi);
    switch(secildi){
        case 1:
            document.querySelector('.homePageImage').setAttribute('src', '../images/hero1.jpg');
            document.querySelector('.yourHeroIcon').setAttribute('src', '../images/hero1.jpg');
        break;
        case 2:
            document.querySelector('.homePageImage').setAttribute('src', '../images/hero2.jpg');
            document.querySelector('.yourHeroIcon').setAttribute('src', '../images/hero2.jpg');
        break;
        case 3:
            document.querySelector('.homePageImage').setAttribute('src', '../images/hero3.png');
            document.querySelector('.yourHeroIcon').setAttribute('src', '../images/hero3.png');
        break;
        case 4:
            document.querySelector('.homePageImage').setAttribute('src', '../images/hero 4.jpg');
            document.querySelector('.yourHeroIcon').setAttribute('src', '../images/hero 4.jpg');
        break;
    }
    
}

