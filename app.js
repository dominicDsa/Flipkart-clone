


const login=document.querySelector('#loginInnerContainer');
const loginDropDown=document.querySelector('#loginDropDown');
login.addEventListener("mouseover",()=>{
    login.style.backgroundColor='#59D5E0';
    loginDropDown.style.display='absolute'
})
login.addEventListener("mouseout",()=>{
    login.style.backgroundColor='transparent';
})


const slider = document.querySelectorAll('.slider');
let count =0;

slider.forEach( (slide,index)=>{
    slide.style.left=`${index*100}%`
})

const slideImage =()=>{
    slider.forEach( (slide)=>{
        slide.style.transform= `translateX(-${count*100}%)`
    })
}

const next= document.querySelector('#next');
const pre=document.querySelector("#privious");

const  countKeper=()=>{
    if (count ==11 ) count =0;
    else count++;
    slideImage();
};




// tops Deals
let count1=0;
var width = window.innerWidth;
if(width>770){
    const topDeals=document.querySelectorAll('.deals');

topDeals.forEach((deal,index)=>{
    deal.style.left=`${index*308}px`
});

const topDealsSliderLeft=()=>{
    console.log('left')
    topDeals.forEach((deal)=>{
        deal.style.transform= `translateX(-${count1*100}%)`
    })
}
const topDealsSliderRight=()=>{
    console.log('Right')
    topDeals.forEach((deal)=>{
        deal.style.transform= `translateX(${count1*100}%)`
    })
}

const leftSliderBtn=document.querySelector('#leftSlider');
const rightSliderBtn=document.querySelector('#rightSlider');

rightSliderBtn.addEventListener('click',()=>{
    if (count1<1){
        count1++;
        topDealsSliderLeft();
        rightSliderBtn.style.display="none";
        leftSliderBtn.style.display="block";
    } 
});

leftSliderBtn.addEventListener('click',()=>{
    if(count1>0){
        count1--;
        topDealsSliderRight();
        rightSliderBtn.style.display="block";
        leftSliderBtn.style.display="none";
    }
})
}



setInterval(countKeper,2000);