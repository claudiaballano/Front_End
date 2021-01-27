const app = Vue.createApp({
    data() {
        return {
            score:0,
            result:"",
            numberOfGames:6,
            computerOptions:["paper","rock","scissors"],
            showMainOptions:true,
            userSelects:"",
            computerSelects:"",
            showReadyToPlay:true,
            showChoices:false,
            showNumberOfAttempts:false,
            //Player options
            showPaper:false,
            showRock:false,
            showScissors:false,
            //Computer options
            showPaperComputer:false,
            showScissorsComputer:false,
            showRockComputer:false,
            showPlayAgain:false,


        }
    },
    mounted() {
    },
    methods: {
        playerSelect(event){
            if(event.target.alt=="rock"){
                this.showRock=true
                this.userSelects="Rock"
            }else if(event.target.alt=="paper"){
                this.showPaper=true
                this.userSelects="Paper"
            }
            else {
                this.showScissors=true
                this.userSelects="Scissors"
            }
            this.numberOfGames--
            this.getRandomValueFromArray()
            this.showMainOptions=false
            this.updateScore()
            this.showPlayAgain=true
            this.showReadyToPlay=false
            this.showChoices=true
            this.showNumberOfAttempts=false
        
        },
        getRandomValueFromArray() {
            let numElements = this.computerOptions.length
            let randomIndex = Math.floor(Math.random() * numElements)
            console.log("Computer choose: ",this.computerOptions[randomIndex])
            if(this.computerOptions[randomIndex]=="rock"){
                this.showRockComputer=true
                this.computerSelects="Rock"
            }else if(this.computerOptions[randomIndex]=="paper"){
                this.showPaperComputer=true
                this.computerSelects="Paper"
            }
            else{
                this.showScissorsComputer=true
                this.computerSelects="Scissors"
            }
        },
        updateScore(){
            if(this.showPaper && this.showScissorsComputer ){
                this.score--
                
            }else if (this.showPaper && this.showRockComputer ){
                this.score--
            }
            else if (this.showRock && this.showPaperComputer ){
                this.score++
            }
            else if (this.showRock && this.showScissorsComputer ){
                this.score++
            }
            else if (this.showScissors && this.showPaperComputer ){
                this.score++
            }
            else if (this.showScissors && this.showRockComputer ){
                this.score--
            }
            //añadir mensaje: empate! 
        },
        playAgain(){
            this.showMainOptions=true
            this.showPaper=false
            this.showRock=false
            this.showScissors=false
            this.showPaperComputer=false
            this.showScissorsComputer=false
            this.showRockComputer=false
            this.showPlayAgain=false
            this.userSelects=""
            this.computerSelects=""
            this.showChoices=false
            this.showNumberOfAttempts=true

        }
    },
    watch: {
        numberOfGames(value){
            if(value==0){
                console.log("ya no puedes jugar más")
            }
        }
    }
})

app.mount('#app')