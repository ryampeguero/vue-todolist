const {createApp} = Vue;

createApp({
    data(){
        return {
            todoCont: [
                {
                    text: "Cosa da fare",
                    done: false,
                },
                {
                    text: "Cosa da fare1",
                    done: true,
                },
            ],

            tempTodo: {
                text: "",
                done: false,
            }

        };
    },

    created(){
        
    },

    mounted(){},

    methods: {
        addTask: function(){
            if(this.tempTodo.text != ""){
                this.todoCont.push(this.tempTodo);
                this.tempTodo = "";
            }
        },

        deleteTask: function(index){
            this.todoCont.splice(index,1);
        },

        setToDone: function(index){
            this.todoCont[index].done = !this.todoCont[index].done;
        }
    }

}).mount("#app");