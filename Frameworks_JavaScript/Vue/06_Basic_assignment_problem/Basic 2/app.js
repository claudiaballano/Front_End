const app = Vue.createApp({
    data() {
        return {
           color1:false,
           color2:false,
           isActive: false,
           style:{
            backgroundColor:"" 
           }
        };
    },
    methods: {
        color(event) {
            console.log(event.target.value)
            if(event.target.value==="user1"){
              this.color1=true
            }else if(event.target.value==="user2"){
              this.color2=true
            }else{
                this.color1=false
                this.color2=false
            }
        },
        effect(){
            this.isActive = !this.isActive;
        },
        personalize(event){
            console.log(event.target.value)
            this.style.backgroudColor=event.target.value
            console.log(this.style.backgroudColor)
           
        }
    },
    // watch: {
    //     personalize(value) {
    //         console.log(value)
    //         // this.style.backgroudColor=value
    //         // console.log(backgroudColor)
    //     }
    // },
    
});

app.mount('#assignment');

// const app = Vue.createApp({
//     data() {
//         return {
//            color:"",
//            color1:false,
//            color2:false
//         };

//     },
//     watch: {
//         color(value) {
//             if(value=="user1"){
//               this.color1=true
//             }else if(value=="user2"){
//                 this.color2=true 
//             }else{
//             this.color1=false
//             this.color2=false
//             }
//         }
//     },
// });

// app.mount('#assignment');
