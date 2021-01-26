const app = Vue.createApp({
    data() {
        return {
            filtroActivo: '', //Suele ser adecuado que los valores iniciales del estado de nuestra aplicación sean equivalente a una valor que "No haga nada"
            filterText:""
            
        };
    },
    methods: {
        filter(tipoDulce){
            this.filtroActivo=tipoDulce
        },
        mustShowItem(tipoDulce){
            if (this.filterText){
                return tipoDulce.includes(this.filterText)
            }
            return !this.filtroActivo || tipoDulce==this.filtroActivo

        }
    },
});

app.mount('#store');
