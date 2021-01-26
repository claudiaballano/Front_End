import Note from '/note.js'


const app = Vue.createApp({
    data() {
        return {
            notes: [],
            title: "",
            description: "",
            showNote: false
        }
    },
    // En el hook que se ejecuta cuando creamos la aplicación, invocamos al método estático fetchAll de la clase Note
    //El mounted sirve para cuando ya está la aplicación renderizada
    created() {
        console.log('created')
        this.getAllNotesFromBBDD()
        
    },
    methods: {
        getAllNotesFromBBDD(){
            Note.fetchAll((data) => {
                this.notes = data
                //Paso por parámetro la función 'fetchAll" a mi misma que también resulto ser una función). Cuando fetchAll tenga los datos, me va a invocar de vuelta pasándomelos por
            })
        },
        createNote() {
            this.showNote = !this.showNote
        },
        addNote() {
            if (!this.title || !this.description) {
              alert ("Tienes campos incompletos")
              return  
            }
            // Como utilizariamos la clase Note para instanciar un nuevo objeto y salvarlo en la base datos?
            const note = new Note(this.title, this.description)
            // Salvar los datos de la instancia en la BBDD firebird
            note.save(()=>{
                this.getAllNotesFromBBDD()

            })
            this.title= ""
            this.description= ""
            console.log(note.lastModified)
        }
    },

})

app.mount('#app')