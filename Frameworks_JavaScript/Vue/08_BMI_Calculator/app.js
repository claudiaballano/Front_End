const app = Vue.createApp({
    data() {
        return {
            imc:"",
            show:false,
            red: 'red',
            green: 'green',
        };
    },
    methods: {
        calculate(event){
            this.show=true
            this.imc=(event.target[1].value / ((event.target[0].value*event.target[0].value)/10000))  
        }
    },
});

app.mount('#assignment');
