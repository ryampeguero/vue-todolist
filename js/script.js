const {createApp} = Vue;

createApp({
    data(){
        return {
            todoCont: this.setItemList(),

            tempTodo: {
                text: "",
                done: false,
            }

        };
    },

    created(){
        this.setJson();
    },

    mounted(){},

    methods: {
        addTask: function(){
            if(this.tempTodo.text != ""){
                this.todoCont.push(this.tempTodo);
                this.tempTodo = "";
            }
            this.setJson();
        },

        deleteTask: function(index){
            this.todoCont.splice(index,1);
        },

        setToDone: function(index){
            if(this.todoCont[index]){
                this.todoCont[index].done = !this.todoCont[index].done;
                this.setJson();
            }
        },

        setJson: function(){
            const itemsJson = JSON.stringify(this.todoCont);
            console.log(itemsJson);
            localStorage.setItem("todoList", itemsJson);
        
        },

        setItemList: function(){
            const holder = [
                {
                    text: "Cosa da fare",
                    done: false,
                },
                {
                    text: "Cosa da fare1",
                    done: true,
                },
            ];

            if(localStorage.getItem("todoList")){
                return JSON.parse(localStorage.getItem("todoList"));
            }else{
                return holder;
            }
        }
    }

}).mount("#app");