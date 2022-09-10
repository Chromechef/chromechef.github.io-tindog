// Remember to import the data and Dog class
import { dogs, cats } from './data.js'
import Dog from './Dog.js'

document.getElementById("like-button").addEventListener("click", like)
document.getElementById("reject-button").addEventListener("click", reject)
// document.getElementById("profile-id").addEventListener("click", previousLike)
// document.getElementById("sidebar").addEventListener("click", closeModal)


function like() {
    document.getElementById("image-like").classList.add("display-image-block")
    setTimeout(() => {
        document.getElementById("image-like").classList.remove("display-image-block")
    }, 1500)
    // fillProfileBox()
    renderNextDog()

}

function reject() {
    document.getElementById("image-reject").classList.add("display-image-block")
    setTimeout(() => {
        document.getElementById("image-reject").classList.remove("display-image-block")
    }, 1500)

    renderNextDog()
}

let nextDogData

const dogArray = dogs.map(dog => new Dog(dog))

function getNextDog() {
    nextDogData = dogArray.shift()
    return nextDogData ? new Dog(nextDogData) : {}
}

function render() {
    document.getElementById("main-content-id").innerHTML = dog.getDogHtml()
}

let likedDogArray = []

function renderNextDog() {
    likedDogArray.push(dog)
    if (dogArray.length > 0) {
        setTimeout(() => {
            dog = getNextDog()
            render()
        }, 1500)
    } else {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = cats
        setTimeout(() => {
            document.getElementById("main-content-id").innerHTML =
                `
            <div class="main-inner-flex-text height-70 flex">
                    <img class="main-image" src="${avatar}" alt="Teddy giving you the swipe right eye's">
                    <h1 class="z-index">${name}, <span>${age}</span></h1>
                    <p class="z-index">${bio}</p>
                </div>
            `
        }, 1500)

    }
}
console.log(likedDogArray)

let dog = getNextDog()
render()



























// function renderNextDog() {
//     if (dogArray.length > 0) {
//         setTimeout(() => {
//             dog = getNextDog()
//             render()
//         }, 1500)

//     }
// }

// const dogArray = dogs.map(dog => new Dog(dog))

// let nextDogData

// function getNextDog() {
//     nextDogData = dogArray.shift()
//     return nextDogData ? new Dog(nextDogData) : {}
// }

// function previousLike() {
//     document.getElementById("sidebar").classList.add("display-image-block")
// }
// function closeModal() {
//     document.getElementById("sidebar").classList.remove("display-image-block")
// }

// let profileHtml = []
// Object.assign({}, profileHtml)

// const likedDogs = new Dog(profileHtml).getLikedDogHtml()

// function fillProfileBox() {
//     let profileBox = {}
//     if (!Object.keys(profileBox).length) {
//     }
//     Object.assign(profileBox, nextDogData)
//     document.getElementById("sidebar").innerHTML = dog.getLikedDogHtml()
//     profileHtml.push(profileBox)
//     console.log(profileHtml)
// }


// function render() {
//     document.getElementById("main-content-id").innerHTML = dog.getDogHtml()
// }

// let dog = getNextDog()
// render()