const {createApp} = Vue;

createApp({
    data(){
        return {
            todoContainer: [
                {
                    text: "Cosa da fare",
                    done: false,
                }
            ]

        };
    },

    created(){
        console.log(this.todoContainer[0]);
    },

    mounted(){},

    methods: {

    }

}).mount("#app");