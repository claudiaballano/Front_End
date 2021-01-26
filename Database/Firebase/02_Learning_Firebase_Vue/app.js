import Note from './Note.js'

const app = Vue.createApp({
    data() {
        return {
            notes: []
        }
    },
    // En el hook que se ejecuta cuando creamos la aplicación, invocamos al método estático fetchAll de la clase Note
    created() {
        console.log('created')
       Note.fetchAll((data)=>{
           this.notes = data
       })
    },
    methods: {
        addNote() {
            // Como utilizariamos la clase Note para instanciar un nuevo objeto y salvarlo en la base datos?
            const note = new Note('comprar kellogs!', 'Pero no de del Aldi!')
            // Salvar los datos de la instancia en la BBDD firebird
            note.save()
        }
    }
})

app.mount('#app')