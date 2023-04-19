let cardOne = Math.floor(Math.random()*11)
let cardTwo = Math.floor(Math.random()*11)
let sum = cardOne+cardTwo
let elSum= document.getElementById('sumel')
let cardnum = document.getElementById('cards')


function newgame(){
    elSum.textContent="sum:"
    cardnum.textContent="card:"
    cardOne = Math.floor(Math.random()*13)
    cardTwo = Math.floor(Math.random()*13)
    elSum.textContent+=sum
    cardnum.textContent+=cardOne

}

let cardarray= [cardOne,cardTwo]
