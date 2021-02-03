const app = Vue.createApp({
    data() {
        return {
            inputNumber: "",
        }
    },
    methods: {
        clearAll(){
            this.inputNumber= "" 
        },
        divButton(event){
            let clickedButton=event.target.dataset.num 
            this.inputNumber = `${this.inputNumber}${clickedButton}`
            // event.stopPropagation();
        },          
        equal(){
            return this.inputNumber = eval(this.inputNumber)
        }
    }
})
app.mount("#app") 
