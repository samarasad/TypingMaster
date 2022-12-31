window.addEventListener('load',init)

const crntword=document.querySelector('#current-word');
const inptword=document.querySelector('#word-input')
const msg=document.querySelector('#message');
const time=document.querySelector('#time');
const score=document.querySelector('#score');
const seconds=document.querySelector('#seconds')

// Array of words 
const words=
[
    'hat',
'river',
'lucky',
'statue',
'stubborn',
'cocktail',
'runaway',
'joke',
'developer',
'establishment',
'hero',
'javascript',
'nutrition',
'revolver',
'echo',
'siblings',
'investigate',
'horrendous',
'symptom',
'laughter',
'magic',
'master',
'space',
'defintion'
]
//global variable
let score1=0;
let time1=0;
let currentLevel=5;
time1=currentLevel;
let isPlaying
// initialize game 

function init()
{
    
showWords(words)
inptword.addEventListener('input',startMatch)
setInterval(countdown, 1000);
setInterval(checkstatus,50);
}


function showWords(words)
{
const wordsIndex=Math.floor(Math.random()*words.length)
crntword.innerHTML=words[wordsIndex];

}

function startMatch(){
	if(matchWords())
    {
     
        showWords(words);
        inptword.value=''
        score.innerHTML=score1=score1+2;
        time1=currentLevel+1;

        
	}
	
	else
	{
    
    }

}
// Match CurrentWord to wordInput
function matchWords(){
if(inptword.value === crntword.innerHTML){
		message.innerHTML = "Correct !!!";
        
        
		return true;	
		}
		else
        {
		message.innerHTML='';
		return false
		}
}

function countdown()
{
    
    if(time1>0)
    {
        time1--;
    }
    else if(time ==0)
		// Game is over
	// isPlaying = false;

	
    time.innerHTML=time1;
}
function checkstatus()
{
    if(time1==0)
    {
        msg.innerHTML='GAME OVER!!!'
        
        score.innerHTML=score1=0;
    }
}