import { nanoid } from 'https://cdn.jsdelivr.net/npm/nanoid/nanoid.js'

const app = Vue.createApp({
    data() {
        return {
            name: '',
            flashCards: [
            ],
            showCard: false,
            isActive: false,
            question: "",
            answer: "",
            id:0,
            fieldsEmpty: true,
            showCardData: true,
            showAnswer: false

        }
    },
    mounted() {
        if (localStorage.getItem('flash')) {
          try {
            this.flashCards = JSON.parse(localStorage.getItem('flash'));
          } catch(e) {
            localStorage.removeItem('flash');
          }
        }
      },
    methods: {
        addQuestion() {
            this.isActive = true
            this.showCard = true
        },
        removeQuestion() {
            this.showCard = false
        },
        submitFlashCard() {
            if (this.answer=="" || this.question=="") {
                this.fieldsEmpty = true
            }else{
                this.fieldsEmpty = false
                this.showCard = false
                this.flashCards.unshift({
                    answer: this.answer,
                    question: this.question,
                    id:this.id
                })
                this.id++
                this.showCardData = true
                console.log(this.flashCards)
                this.saveCard();
                
            }
            
        },
        showFlashCardAnswer() {
            this.showAnswer = !this.showAnswer;
        },
        edit() {
            this.showCard = true
        },
        deleteItem(id){
            this.flashCards = this.flashCards.filter(item =>{

                return item.id != id
            })
            this.saveCard();
        },
        saveCard() {
            const parsed = JSON.stringify(this.flashCards);
            localStorage.setItem('flash', parsed);
        }
        
    },
    watch: {
        answer(value) {
            if (value) {
                this.fieldsEmpty = false

            } else {
                this.fieldsEmpty = true
            }
        },
        question(value) {
            if (value) {
                this.fieldsEmpty = false
            } else {
                this.fieldsEmpty = true
            }
        },

    }
})

app.mount('#app')