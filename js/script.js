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
                {
                    text: "Cosa da fare2",
                    done: false,
                },
                {
                    text: "Cosa da fare3",
                    done: false,
                },
                {
                    text: "Cosa da fare4",
                    done: false,
                },
            ]

        };
    },

    created(){
        
    },

    mounted(){},

    methods: {

    }

}).mount("#app");