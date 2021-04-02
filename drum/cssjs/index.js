console.log("hello");

    let a1 = document.getElementsByClassName("key")[0];
    a1.addEventListener("click", ()=>{
        let udio = document.querySelectorAll("audio")[0];

        let keyy = document.querySelector(`.key[data-key="${a1.attributes[0].nodeValue}"]`);
        keyy.classList.add("pressed");

        udio.currentTime = 0;
        udio.play();
    } );


    let a2 = document.getElementsByClassName("key")[1];
    a2.addEventListener("click", ()=>{
        let udio = document.querySelectorAll("audio")[1];

        let keyy = document.querySelector(`.key[data-key="${a2.attributes[0].nodeValue}"]`);
        keyy.classList.add("pressed");


        udio.currentTime = 0;
        udio.play();
    } );


    let a3 = document.getElementsByClassName("key")[2];
    a3.addEventListener("click", ()=>{
        let udio = document.querySelectorAll("audio")[2];

        let keyy = document.querySelector(`.key[data-key="${a3.attributes[0].nodeValue}"]`);
        keyy.classList.add("pressed");


        udio.currentTime = 0;
        udio.play();
    } );


    let a4 = document.getElementsByClassName("key")[3];
    a4.addEventListener("click", ()=>{
        let udio = document.querySelectorAll("audio")[3];

        let keyy = document.querySelector(`.key[data-key="${a4.attributes[0].nodeValue}"]`);
        keyy.classList.add("pressed");


        udio.currentTime = 0;
        udio.play();
    } );

    let a5 = document.getElementsByClassName("key")[4];
    a5.addEventListener("click", ()=>{
        let udio = document.querySelectorAll("audio")[4];

        let keyy = document.querySelector(`.key[data-key="${a5.attributes[0].nodeValue}"]`);
        keyy.classList.add("pressed");


        udio.currentTime = 0;
        udio.play();
    } );

    let a6 = document.getElementsByClassName("key")[5];
    a6.addEventListener("click", ()=>{
        let udio = document.querySelectorAll("audio")[5];

        let keyy = document.querySelector(`.key[data-key="${a6.attributes[0].nodeValue}"]`);
        keyy.classList.add("pressed");


        udio.currentTime = 0;
        udio.play();
    } );

    let a7 = document.getElementsByClassName("key")[6];
    a7.addEventListener("click", ()=>{
        let udio = document.querySelectorAll("audio")[6];

        let keyy = document.querySelector(`.key[data-key="${a7.attributes[0].nodeValue}"]`);
        keyy.classList.add("pressed");


        udio.currentTime = 0;
        udio.play();
    } );

    let a8 = document.getElementsByClassName("key")[7];
    a8.addEventListener("click", ()=>{
        let udio = document.querySelectorAll("audio")[7];
        
        let keyy = document.querySelector(`.key[data-key="${a8.attributes[0].nodeValue}"]`);
        keyy.classList.add("pressed");


        udio.currentTime = 0;
        udio.play();
    } );

    let a9 = document.getElementsByClassName("key")[8];
    a9.addEventListener("click", ()=>{
        let udio = document.querySelectorAll("audio")[8];

        let keyy = document.querySelector(`.key[data-key="${a9.attributes[0].nodeValue}"]`);
        keyy.classList.add("pressed");


        udio.currentTime = 0;
        udio.play();
    } )


    window.addEventListener("keydown",(e)=>{
     let udio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
     let keyy = document.querySelector(`.key[data-key="${e.keyCode}"]`);
     if(!udio) return;
     udio.currentTime = 0;
     udio.play();
     keyy.classList.add("pressed");
    })

    let keys = document.querySelectorAll(".key");

    function removeTransition(e){
        if(e.propertyName !== "transform") return;
        this.classList.remove("pressed");
    }

    keys.forEach(key => key.addEventListener("transitionend",removeTransition));