let act1 = [
    {
        image: 'https://i.pinimg.com/236x/5b/7a/e4/5b7ae44ca892c5950db8ef40b483418c.jpg',
        description: 'Movie opens with Bruce savagely chasing a school of fish',
    },
    
    {
        image: 'https://i.pinimg.com/originals/73/63/9c/73639cf8446b7885160524186c383446.jpg',
        description: 'Anchor and Chum are worried about their friend Bruce relapse. ',
    },

    {
        image: 'https://thumbs.gfycat.com/LegalBlondBagworm-max-1mb.gif',
        description: 'Anchor and Chum meet with familiar friends to discuss having an intervention for Bruce',
    },

    {
        image: 'https://justkillingti.me/wp-content/2016/06/nemo-1.jpg',
        description: 'At the intervention Bruce acknolwedges his problem but gets agitated and storms out before discussing getting help',
    },

    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5X54pp7hv12t-RunQnM_dq4bTqo7bdnqc1g&usqp=CAU',
        description: 'Nemo confronts Bruce and warns him something bad could happen to Bruce if he doesnt get help',
    },

    {
        image: 'https://cdn.abcotvs.com/dip/images/10794517_061521-wabc-great-white-shark-img.jpg?w=1600',
        description: 'Bruce attempts to eat a fish but finds it is a fishing lure. He is caught by deep sea fisherman who are thrilled to catch a shark',
    },
]

let act2 = [
    {
        image: '',
        description: '',
    },
    
    {
        image: '',
        description: '',
    },

    {
        image: '',
        description: '',
    },

    {
        image: '',
        description: '',
    },

    {
        image: '',
        description: '',
    },

    {
        image: '',
        description: '',
    },
]

let act3 = [
    {
        image: '',
        description: '',
    },
    
    {
        image: '',
        description: '',
    },

    {
        image: '',
        description: '',
    },

    {
        image: '',
        description: '',
    },

    {
        image: '',
        description: '',
    },

    {
        image: '',
        description: '',
    },
]

const populateBoxes=()=>{
    act1.forEach((object)=>{
        createStoryBox(object)
    })
}

const createStoryBox = (obj) => {
    let mainBox = document.querySelector('.actBoxes1')
    let storyBox = document.createElement('div')
    storyBox.setAttribute('class', 'actbox')
    let image = document.createElement('img')
    image.setAttribute('src', obj.image)
    image.setAttribute('class', 'shark2')
    let sum = document.createElement('div')
    sum.setAttribute('class','description')
    sum.innerHTML = obj.description

storyBox.append(image)
storyBox.append(sum)
mainBox.append(storyBox)
}