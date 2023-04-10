var a = 0;
var att = document.querySelector('.attack');
var updateattack =0;



document.querySelector('.pause').onclick = function(){
        att.style.animationPlayState = 'paused';
        setTimeout(function() { 
            var c = document.querySelector('.range').getBoundingClientRect().x
            b = document.querySelector('.attack').getBoundingClientRect().x;
            var zz = Math.ceil(b-c);
            if( zz > 200){
                attackScore = 400-zz;
            }else{
                attackScore = zz;
            }
            
            var computerScore = Math.ceil(Math.random() * computerRandom);
            document.querySelector('.scoreUser').innerHTML = attackScore;
            document.querySelector('.scoreComp').innerHTML = computerScore;

            userLife  -= computerScore;
            computerLife -=attackScore;
            

            att.style.animationPlayState = 'running';
            
            if(computerLife < 1 ){
                var x = document.getElementById("trueAudio");
                function playAudio() { 
                x.play(); 
            } 
        playAudio();
                levelUp();
            }
            else if(userLife < 1){
                var x = document.getElementById("falseAudio");
            function playAudio() { 
                x.play(); 
            } 
            playAudio();
                levelLose();
            }
                document.querySelector('.solHealthCount').innerHTML = userLife;
                document.querySelector('.sagHealthCount').innerHTML = computerLife;

                var computerMeter2 = document.querySelector('.sagMeter');
                computerMeter2.setAttribute('max', lvl*1000);
                computerMeter2.setAttribute('value', computerLife);

                var userMeter2 = document.querySelector('.solMeter');
                userMeter2.setAttribute('max', lvl*1000);
                userMeter2.setAttribute('value', userLife);

                
                

         }, 500);
        
    };

 


    function levelUp(){
        
        
        alert("YOU WIN !!!");
        lvl ++;
        document.querySelector('.level').innerHTML = "LEVEL: " +lvl;
        userLife = lvl *1000;
        computerLife = lvl *1000;
                document.querySelector('.scoreUser').innerHTML = "-";
                document.querySelector('.scoreComp').innerHTML = "-";
    }

    function levelLose(){
        
        
        alert("YOU LOSE !!!");
        userLife = lvl *1000;
        computerLife = lvl *1000;
                document.querySelector('.scoreUser').innerHTML = "-";
                document.querySelector('.scoreComp').innerHTML = "-";
    }
