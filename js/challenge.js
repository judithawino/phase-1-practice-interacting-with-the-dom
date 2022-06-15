"use strict";
function _toConsumableArray(a){
    if(Array.isArray(a)){
        for(var b=0,c=Array(a.length);b<a.length;b++)
        c[b]=a[b];
        return c
    }
    return Array.from(a)
}
var playing=!0, timer=function(){
    return setInterval(function(){
        var a=document.getElementById("counter"),
        b=parseInt(a.innerText);
        a.innerText=b+1},1e3)
    },
        interval=timer(),
        minus=document.getElementById("minus"),
        plus=document.getElementById("plus"),
        heart=document.getElementById("heart"),
        pause=document.getElementById("pause"),
        commentForm=document.getElementsByTagName("form")[0];

        //adding ane event listener to initate the manual decrementing upon clicking the minus button
        minus.addEventListener("click",function(){
            var a=document.getElementById("counter"),
            b=parseInt(a.innerText);
            a.innerText=b-1
        }),
        //adding ane event listener to initate the manual incrementing upon clicking the plus button
            plus.addEventListener("click",function(){
                var a=document.getElementById("counter"),
                b=parseInt(a.innerText);a.innerText=b+1
            }),

            //adding ane event listener to initate the "Liking" of an individual number of the counter upon clicking the like button
            heart.addEventListener("click",function(){
                var a=document.getElementById("counter"),
                b=parseInt(a.innerText),
                c=document.querySelector(".likes"),
                d=void 0;
                if([].concat(_toConsumableArray(c.children))
                .map(function(a){
                    return parseInt(a.dataset.num)
                })
                .includes(b)){
                    d=document.querySelector('[data-num="'+b+'"]');
                    var e=parseInt(d.children[0].innerText);
                    d.innerHTML=b+" has been liked <span>"+(e+1)+"</span> times"
                }
                else
                (d=document.createElement("li"))
                .setAttribute("data-num",b),
                d.innerHTML=b+" has been liked <span>1</span> time",
                c.appendChild(d)
            }),

            //adding ane event listener to pause the counter upon clicking the pause button
            pause.addEventListener("click",function(){
                //using a ternary statement
                playing?
                (playing=!1,clearInterval(interval),this.innerText="resume"):(playing=!0,interval=timer(),this.innerText="pause"),
                [].concat(_toConsumableArray(document.getElementsByTagName("button")))
                .forEach(function(a){
                    "pause"!==a.id&&(a.disabled=!playing)
                })
            }),

            //adding an event listener to allow users submit their comments/feedback upon clicking the submit button
            commentForm.addEventListener("submit",function(a){
                //stop refreshing the page after submit
                a.preventDefault();
                var b=this.children[0],c=b.value;
                b.value="";
                var d=document.querySelector(".comments"),
                e=document.createElement("p");
                e.innerText=c,d.appendChild(e)
            });