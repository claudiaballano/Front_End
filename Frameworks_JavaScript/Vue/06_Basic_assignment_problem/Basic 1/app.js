const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            mensajeAlerta:"Not there yet"
        };
    },
    methods: {
        updateCounter(valor) {
            this.counter += valor
        },    
    },
    watch: {
        counter(value){
            console.log(value)
            if(value>37){
                this.mensajeAlerta='Too much!'
                setTimeout(() => this.counter = 0, 5000)
            }
            else{
                this.mensajeAlerta='Not there yet'
            }
            
        }
    }
});

app.mount('#assignment');
