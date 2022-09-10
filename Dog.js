// Create the Dog class here
import { dogs, cats } from './data.js'

class Dog {
    constructor(data) {

        Object.assign(this, data)
    }
    getDogHtml() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this

        return `
            <div class="main-inner-flex-text height-70 flex">
                    <img class="main-image" src="${avatar}" alt="Teddy giving you the swipe right eye's">
                    <h1 class="z-index">${name}, <span>${age}</span></h1>
                    <p class="z-index">${bio}</p>
                </div>
            `
    }
    getLikedDogHtml() {
        const { name, avatar, age, bio, hasBeenSwiped, hasBeenLiked } = this

        return `
        
                <div class="sidebar-widget">
                    <img src="${avatar}" alt="${name}" class="widget-image">
                    <div class="widget-side-content">
                        <h2 class="widget-title">${name}</h2>
                        <p class="widget-body">${bio}</p>
                    </div>
                </div>
            `
    }


}

export default Dog 