
// Llamar un método estático de Vue que nos va a devolver una instancia de la aplicación Vue


const app=Vue.createApp({
    //Siempre tiene que devolver un objeto
    //En el objeto devuelto, van todos los datos que queremos para "gobernar" nuestra app
    data(){
        return{
            name:'Claudia Ballano!',
            age:22,
            vueImg: 'https://i.pinimg.com/originals/39/dd/63/39dd637ade2a7f5d4a3b74c0664be29a.jpg',
            valueInput: 'Holi',
            // formatoHTML:'<span style="color:red">Yo tengo formato HTML</span>'

        }
    },
    methods: {
        futureAge(){
            return this.age+5
        },
        randomNumber(){
            return Math.random()
        }
    }
})

// Informar a Vue sobre que elemento del DOM queremos convertir en una app Vue. En este caso elegimos id=user-goal porque queremos que se monte en la section

app.mount("#assignment")


//La interpolacion nos permite mapear uno de los datos gobernados por VUE en nuestro objetivo