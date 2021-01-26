const app = Vue.createApp({
    data() {
        return {
            guesses: 10,
            numberofGuesses: "",
            previousGuesses: "",
            numberToGuess: "",
            space: " ",
            show:false
        };
    },
    mounted() {
        return this.getNumber()
    },
    methods: {
        guessANumber(event) {
            this.guesses--
            this.numberofGuesses = event.target[0].value
            this.previousGuesses = this.previousGuesses + this.space + event.target[0].value
            console.log(this.numberToGuess)
            this.show=true
        },
        getNumber: function () {
            return this.numberToGuess = Math.floor(Math.random() * (100 - 1 + 1)) + 1
        },
    },
    watch: {
        guesses(value) {
            console.log(value)
            if (value == -2) {
                this.guesses=10
                this.numberofGuesses=""
                this.previousGuesses= ""
                this.getNumber()
            }
        }

    }

});

app.mount('#wrapper');
