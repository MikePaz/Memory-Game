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
   while(cardArray.length<=8){
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
  const easyBtn= document.querySelector(".easy")
  const mediumBtn= document.querySelector(".medium")
  const hardBtn= document.querySelector(".hard")
  easyBtn.addEventListener('click',function(){
    tries_index=5
    let cards = document.querySelectorAll("img")

    if (images){
      for (let i = 0; i < 10;  i++) {
        // cards[i].setAttribute("src", "white.png");
        cards[i].remove()
        }} 
     
    ArrayCreation()
  })
   
  mediumBtn.addEventListener('click',function(){
    tries_index=4
    let cards = document.querySelectorAll("img")
    if (images){
      for (let i = 0; i < 10;  i++) {
        // cards[i].setAttribute("src", "white.png");
        cards[i].remove()
        }} 
    ArrayCreation()
  })
   
  hardBtn.addEventListener('click',function(){
    tries_index=3
    let cards = document.querySelectorAll("img")
    if (images){
      for (let i = 0; i < 10;  i++) {
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
      alert('You have clicked the same image!')
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
      setTimeout(checkForMatch, 200)
    }
  }
// 6 losing condition
  function lost() {
    let cards = document.querySelectorAll("img")
    for (let i = 0; i < 10;  i++) {
      // cards[i].setAttribute("src", "white.png");
      cards[i].remove()
      }
    images=false  
     
    messages.textContent="Im sorry,you lost"
  }
 
})