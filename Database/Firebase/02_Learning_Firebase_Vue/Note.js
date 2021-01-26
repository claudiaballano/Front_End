const url = 'https://vue-test-984e6-default-rtdb.europe-west1.firebasedatabase.app/notes.json'

export default class Note {
    constructor(title, description) {
        this.title = title
        this.description = description      
    }

    save() {
        const postOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({
                title: this.title,
                description: this.description
            })
        }  
        fetch(url, postOptions).
        then
        catch(error => console.error(error)) 
    }
    static fetchAll(cb) {
        fetch(url)
        .then(response => response.json())
        .then(data => cb(data));
    }
}

