function isFlush(cards) {
    let suit = cards[0].substr(-1)
    
    return cards.every(card => {
      let currentSuit = card.substr(-1)
      console.log(currentSuit)
      return suit == currentSuit
    })
    
  }
  
  isFlush([  "AS", "3S",  "9S", "KS", "4S" ])