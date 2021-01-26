const url = 'https://vue-test-34e11-default-rtdb.europe-west1.firebasedatabase.app/notes.json'

export default class Note {
    constructor(title, description) {
        this.title = title
        this.description = description
        this.created=new Date()      
    }

    save(cb) {
        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                title: this.title,
                description: this.description,
                created:this.created
                
            })
        }  
        fetch(url, postOptions).
        then(data=>{
            console.log("inserción finalizada")
            //en este punta ya podemos asegurar que la inserción en base de datos ha realizado
            cb()
        }).
        catch(error => console.error(error)) 
    }
    static fetchAll(cb) {
        fetch(url)
        .then(response => response.json())
        .then(data => cb(data));
    }
}
