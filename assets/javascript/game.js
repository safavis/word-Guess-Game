let word=["apple","orange","strawberry","pear"]
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '_']

let index= Math.floor(Math.random()*word.length)
let word_length=word[index].length
let already=[]
let remaining=20
let word_incomplete=true
let guesses_letters=0

for (let i=0; i<word_length;i++){
    let location=document.createElement("div")
    location.classList="label"
    document.querySelector('.guessing_chamber').append(location)

}
console.log(index)
console.log(word_length)
console.log(word[index][0])
console.log(document.querySelector('.guessing_chamber').children)

var resetting=function(){
    index= Math.floor(Math.random()*word.length)
    word_length=word[index].length
    for (let i=0; i<word_length;i++){
        let location=document.createElement("div")
        location.classList="label"
        document.querySelector('.guessing_chamber').append(location)
    }
   already=[]
   remaining=20
   word_incomplete=true
   guessed_letters=0
   document.querySelector(".image").style.backgroundImage='url(./assets/images/guess_init.png)'
   return [already,remaining,word_length,index,word_incomplete,guessed_letters]
}

document.onkeyup=event=>{
    console.log('ratfimtoo')
    already.push(event.key)
    if(word_incomplete===true){   
        remaining=remaining-1
        document.querySelector(".already").textContent=`The already guessed alphabets:`+already
        document.querySelector(".remain_num").textContent=`the remining number of guesses:`+remaining
         for(let i=0; i<word_length; i++){
            if(event.key===word[index][i]){
                console.log('yeki peida shod')
                document.querySelector('.guessing_chamber').children[i].textContent=event.key
                guesses_letters=guesses_letters+1
              }
            if( guesses_letters===word_length)
              {
                word_incomplete=false
              }
           }
     }
  
    if(remaining===0 || word_incomplete===false ){
        document.querySelector(".image").style.backgroundImage='url(./assets/images/'+word[index]+'.png)'
    }
}
document.addEventListener('click',event=>{
    if(event.target.className.split(' ').indexOf("button")!==-1)
    {
        document.querySelector('.guessing_chamber').innerHTML=''

       
        console.log('tamoom shod')
        var_value=resetting()
        already=var_value[0]
        remaining=var_value[1]
        word_length=var_value[2]
        index=var_value[3]
        word_incomplete=var_value[4]
        guesses_letters=var_value[5]
        document.querySelector(".already").textContent=`The already guessed alphabets:`+already
        document.querySelector(".remain_num").textContent=`the remining number of guesses:`+remaining
       
    }
})

