import { Dog } from "./Dog.js";
import { dogs } from "./data.js";

const noBtn = document.querySelector('#no-btn')
const yesBtn = document.querySelector('#yes-btn')
const profiles = document.querySelector('.profile-pictures')
const likeImg = document.getElementById('liked-text')
const nopeImg = document.getElementById('noped-text')
const allDogsArray = []
getAllDogs()

function getAllDogs() {
    dogs.map( dog => {
        allDogsArray.push(dog.name)
    } )
}

let newDog = getNextDog()
let upNextDog = new Dog(newDog)
render()

function getNextDog(){
        console.log(allDogsArray)
        const nextProfile = allDogsArray.shift()
        let nextObj = {}
        dogs.forEach((obj)=>{
            if (nextProfile === obj.name){
                nextObj = obj
            }
        })
        return nextObj
}

function render(){
    profiles.innerHTML = upNextDog.getDogHtml()
}

noBtn.addEventListener('click', ()=>{
    if (allDogsArray.length > 0) {
        noBtn.disabled = true;
        yesBtn.disabled = true;
        nopeImg.style.display = 'block'
        setTimeout(()=> {
            newDog = getNextDog()
            upNextDog = new Dog(newDog)
            render()
            nopeImg.style.display = 'none'
            yesBtn.disabled = false;
            noBtn.disabled = false;
        }, 1200)
    } else {
        noBtn.disabled = true;
        yesBtn.disabled = true;
        nopeImg.style.display = 'block'
        setTimeout(()=> {
        nopeImg.style.display = 'none'
        profiles.innerHTML = `
            <img src="/images/4791941-200.png" alt="People-nearby-graphic" id="error-msg-graphic">
            <h1 class='error-message'>Sorry, no more profiles nearby.</h1>
        `}, 1500)
    }   
})

yesBtn.addEventListener('click', ()=>{
    if (allDogsArray.length > 0) {
        noBtn.disabled = true;
        yesBtn.disabled = true;
        likeImg.style.display = 'block'
        setTimeout(()=> {
            newDog = getNextDog()
            upNextDog = new Dog(newDog)
            render()
            likeImg.style.display = 'none'
            yesBtn.disabled = false;
            noBtn.disabled = false;
        }, 1200)
    } else {
        noBtn.disabled = true;
        yesBtn.disabled = true;
        likeImg.style.display = 'block'
        setTimeout(()=> {
        likeImg.style.display = 'none'
        profiles.innerHTML = `
            <img src='/images/4791941-200.png' alt='People-nearby-graphic' id='error-msg-graphic'>
            <h1 class='error-message'>Sorry, no more profiles nearby.</h1>
        `}, 1500)
    }
})

