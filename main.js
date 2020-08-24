document.addEventListener('DOMContentLoaded', () => {
 
  // 1  data that could be in a json file

  let data = [
    {
      "name": "weed",
      "img": "https://images.unsplash.com/photo-1558010089-ff6fd29ea39a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      
  },
  
  {
      "name": "coding",
      "img" : "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  },
   
  {
      "name": "basketball",
      "img" : "https://images.unsplash.com/photo-1519834230732-5256fdb7c0d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
  },
   
  {
      "name":"smile",
      "img":"https://images.unsplash.com/photo-1590698933947-a202b069a861?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=375&q=80"
  },
   
  {
      "name":"ballons",
      "img" : "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
  },
   
  {
      "name": "gaming",
      "img" : "https://images.unsplash.com/photo-1592931920802-ccc9410d825b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
  },
  
  {
      "name":"love",
      "img": "https://images.unsplash.com/photo-1504196877113-b6ec66380c41?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80"
  },
  {
      "name":"dr1",
      "img": "https://scontent.fath3-3.fna.fbcdn.net/v/t1.0-9/48417337_2189046587813722_8680532803940515840_o.jpg?_nc_cat=105&_nc_sid=8bfeb9&_nc_ohc=LeaMhcvdQM8AX-AB2jo&_nc_ht=scontent.fath3-3.fna&oh=033a382ab9778421f9c6c80834a2e697&oe=5F691ED4 "
  },
  {
      "name":"dr2",
      "img": " https://scontent.fath3-4.fna.fbcdn.net/v/t1.0-9/47455472_10210654790079630_1602872702421434368_o.jpg?_nc_cat=101&_nc_sid=e3f864&_nc_ohc=LMLK6hPN7oMAX-NPi0Q&_nc_ht=scontent.fath3-4.fna&oh=f74296b9213870d47359101e553f9a5e&oe=5F69A996"
  },
  {
      "name":"dr3",
      "img": "https://scontent.fath3-3.fna.fbcdn.net/v/t1.0-9/11902424_998320323553027_2621536523660519571_n.jpg?_nc_cat=111&_nc_sid=19026a&_nc_ohc=JDGbOI6WvUYAX-uhxxa&_nc_ht=scontent.fath3-3.fna&oh=a5d234320bf65cbe6104a7cab76c60ab&oe=5F688FF7 "
  },
  {
      "name":"dr4",
      "img": "dr4.png"
  },
  {
      "name":"dr5",
      "img": "dr5.png"
  },
  {
      "name":"dr6",
      "img": "dr6.png"
  },
  {
      "name":"dr7",
      "img": "dr7.png"
  },
   
  {
      "name":"theater",
      "img": "https://images.unsplash.com/photo-1545129139-1beb780cf337?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
  }
   
  ]
  
  // 2 creating the Arrays
 
let cardArray= []

  function ArrayCreation(){
   cardsChosen = []
   cardsChosenId = []
   cardsWon = [] 
   while(cardArray.length<=10){
      let x=Math.floor(Math.random()*data.length)
     
     
      if (!include(cardArray, data[x])){
       
        cardArray.push(data[x])
        cardArray.push(data[x])
    }
  }
  console.log(cardArray)

  function include(arr, obj) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == obj) return true;
    }
  }
  cardArray.sort(() => 0.5 - Math.random())
  createBoard()

  
}


  let messages = document.querySelector(".messages")
  const easyBtn= document.querySelector("#easy")
  const mediumBtn= document.querySelector("#medium")
  const hardBtn= document.querySelector("#hard")
  easyBtn.addEventListener('click',function(){
    tries_index=8
    let cards = document.querySelectorAll("img")

    if (images){
      for (let i = 0; i < 12;  i++) {
        // cards[i].setAttribute("src", "white.png");
        cards[i].remove()
        }} 
     
    ArrayCreation()
  })
   
  mediumBtn.addEventListener('click',function(){
    tries_index=6
    let cards = document.querySelectorAll("img")
    if (images){
      for (let i = 0; i < 12;  i++) {
        // cards[i].setAttribute("src", "white.png");
        cards[i].remove()
        }} 
    ArrayCreation()
  })
   
  hardBtn.addEventListener('click',function(){
    tries_index=5
    let cards = document.querySelectorAll("img")
    if (images){
      for (let i = 0; i < 12;  i++) {
        // cards[i].setAttribute("src", "white.png");
        cards[i].remove()
        }} 
      
      ArrayCreation()
  })


  const grid = document.querySelector('.grid')
  const tries = document.querySelector('#Tries')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []
  let tries_index= 5
  images =false

  // 3 creating your board
  function createBoard() {
    messages.textContent="Have Fun!"
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement('img')
      card.setAttribute('src', "back.jpg")
      card.setAttribute('id', i)
      card.addEventListener('click', turnCard)
      grid.appendChild(card)
      tries.textContent=tries_index
    }
    images=true
  }

//   //4 checking for matches
  function checkForMatch() {
    let cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', "back.jpg")
      cards[optionTwoId].setAttribute('src', "back.jpg")
       messages.textContent=('You have clicked the same image!')
      tries_index-=1
      tries.textContent=tries_index
      if (tries_index==0){
        lost()
      }
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      messages.textContent="Good job, you found a match!"
      // cards[optionOneId].setAttribute('src', "white.png")
      // cards[optionTwoId].setAttribute('src', "white.png")
      cards[optionOneId].style.visibility="hidden"
      cards[optionTwoId].style.visibility="hidden"
      cards[optionOneId].removeEventListener('click', turnCard)
      cards[optionTwoId].removeEventListener('click', turnCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', "back.jpg")
      cards[optionTwoId].setAttribute('src', "back.jpg")
      messages.textContent="Sorry, try again!"
      tries_index-=1
      tries.textContent=tries_index
      if (tries_index==0){
        lost()
      }

    }
     cardsChosen = []
    cardsChosenId = []
     if  (cardsWon.length === cardArray.length/2) {
       messages.textContent='Congratulations! You found them all!'
    }
  }

 //5 turning the cards
  
  function turnCard() {
    var cardId = this.getAttribute('id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 300)
    }
  }
// 6 losing condition
  function lost() {
    let cards = document.querySelectorAll("img")
    for (let i = 0; i < 12;  i++) {
      // cards[i].setAttribute("src", "white.png");
      cards[i].remove()
      }
    images=false  
     
    messages.textContent="Im sorry, you lost"
  }
 
})