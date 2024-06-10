let slider=document.querySelector('#slider');
let slidervalue=document.querySelector('#slidervalue');
slidervalue.innerHTML=slider.value;
slider.addEventListener('input',(e)=>{slidervalue.innerHTML=e.target.value})

let inputtext=document.querySelector('#inputtext');
let copybtn=document.querySelector('#copybtn');
let generatePassword=document.querySelector('#generate-password');
let circle=document.querySelector('#circle');
let cbox1=document.querySelector('#uppercase');
let cbox2=document.querySelector('#lowercase');
let cbox3=document.querySelector('#number');
let cbox4=document.querySelector('#symbol');

let min =10,max=90;
function randomNumberGenerator(min,max){
    let temp=Math.floor(Math.random()*(max-min+1)+min)
        if(min===32&&max===126)
            while(true){
                if(temp>=48&&temp<=57 ||temp>=97&&temp<=122|| temp>=65&&temp<=90 ){
                temp=Math.floor(Math.random()*(max-min+1)+min) 
                continue;
                }
               break;
            }
        return temp;   
}
//console.log(String.fromCharCode(randomNumberGenerator(65,90)));


generatePassword.addEventListener('click',()=>{
    if(cbox1.checked==true||cbox2.checked==true||cbox3.checked==true||cbox4.checked==true)
        {
    let passwordStr="";
    let sliderval=Number(slidervalue.innerHTML);
    let cpysliderval=sliderval
    //console.log(typeof sliderval);
        if(cbox1.checked===true&&sliderval>0){
            passwordStr+=String.fromCharCode(randomNumberGenerator(65,90));
            sliderval--;
        }
        if(cbox2.checked===true&&sliderval>0){
            passwordStr+=String.fromCharCode(randomNumberGenerator(97,122));
            sliderval--;
        }
        if(cbox3.checked===true&&sliderval>0){
            passwordStr+=String.fromCharCode(randomNumberGenerator(48,57));
            sliderval--;
        }
        if(cbox4.checked===true&&sliderval>0){
            passwordStr+=String.fromCharCode(randomNumberGenerator(32,126));
            sliderval--;
        }
           
    while(sliderval>0)
            {
                let random=Math.floor((Math.random()*4)+1);
                switch(random)
                {
                    case 1:
                        if(cbox1.checked===true){
                            passwordStr+=String.fromCharCode(randomNumberGenerator(65,90));
                            break;
                        }else continue;
                    case 2:
                        if(cbox2.checked===true){
                            passwordStr+=String.fromCharCode(randomNumberGenerator(97,122));
                            break;
                        }else continue;
                    case 3:
                        if(cbox3.checked===true){
                            passwordStr+=String.fromCharCode(randomNumberGenerator(48,57));
                            break;
                        }else continue;
                    case 4:
                        if(cbox4.checked===true){
                            passwordStr+=String.fromCharCode(randomNumberGenerator(32,126));
                        }else continue;
                        
                }
                //console.log(sliderval); 
                sliderval--;
            }
            inputtext.value=passwordStr
        console.log(passwordStr); 
        console.log(passwordStr.length); 
           if(cbox1.checked==true||cbox2.checked==true||cbox3.checked==true||cbox4.checked==true||
               cbox1.checked==true&&cbox2.checked==true||cbox1.checked==true&&cbox3.checked==true||
            cbox1.checked==true&&cbox4.checked==true||cbox2.checked==true&&cbox3.checked==true||
            cbox2.checked==true&&cbox4.checked==true||cbox3.checked==true&&cbox4.checked==true
           )
           {
            if(cpysliderval>6){
                console.log("In circle");
                circle.classList.remove('bg-[#e7d2d2]','drop-shadow-[0_0_0.50rem_#ffffff]')
                circle.classList.remove('bg-red-600','drop-shadow-[0_0_0.50rem_red]')
                circle.classList.add('bg-green-600','drop-shadow-[0_0_0.50rem_green]')
            }
            else {
                 circle.classList.remove('bg-[#e7d2d2]','drop-shadow-[0_0_0.50rem_#ffffff]')
           circle.classList.remove('bg-green-600','drop-shadow-[0_0_0.50rem_#00ff00]')
                circle.classList.remove('bg-green-600','drop-shadow-[0_0_0.50rem_green]')
            }
           }
        }
})
