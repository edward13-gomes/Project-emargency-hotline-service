let heartCount=0;
let coinCount=100;
let copyCount=0;
const transactionData=[];

function getID(id){
   return document.getElementById(id);
    
}

const heartCountEl=getID("heart-count");
const coinCountEl=getID("coin-count");
const copyCountEl=getID("copy-count");
const historyContainer=getID("history-container");
const clearBtn=getID("clear-btn");

// for heart icon
const heartIcon = document.getElementsByClassName("heart-icon");
for(const icon of heartIcon){
    icon.addEventListener('click', function(){
        if(this.classList.contains('fa-regular')){
            this.classList.remove('fa-regular','text-gray-500');
            this.classList.add('fa-solid','text-red-500');

            heartCount++;
            heartCountEl.innerText=heartCount;
        }
        else{
               this.classList.add('fa-regular','text-gray-500');
            this.classList.remove('fa-solid','text-red-500');

              heartCount--;
            heartCountEl.innerText=heartCount;


        }
    })

}

// for copy 
const copyBtn= document.getElementsByClassName('copy-btn')
for(const btn of copyBtn){
    btn.addEventListener('click',function(e){
        e.preventDefault();

        const num=this.getAttribute('data-number');
        navigator.clipboard.writeText(num).then(()=>{
            alert(`Hotline number ${num} has been copied!`);
            copyCount++;
            copyCountEl.innerText=copyCount;
        })

    })
}

// for call
const callBtn=document.getElementsByClassName('call-btn');
for(const btn of callBtn){
    btn.addEventListener('click',function(e){
        e.preventDefault();

        const serviceName=this.getAttribute("data-name");
        const serviceNum=this.getAttribute("data-number");

        if(coinCount<20){
            alert(`Sorry! You don't have enough coins to make a call. A minimum of 20 coins is required.`)
            return;
        }
         else{
            alert(`Connecting to ${serviceName} ${serviceNum}.......`)

            coinCount-=20;
            coinCountEl.innerText=coinCount;

            const currTime=new Date().toLocaleTimeString();

            const data={
                name: serviceName,
                num : serviceNum,
                time : currTime,

            }
            transactionData.push(data);
         }


        
    })
}

