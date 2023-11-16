

const { createApp } = Vue;

const messaggio = {
    data: function () {
        return {
            message: "Vue.js Framework ",
            imageUrl: "vue.jpeg"
        }
    }
};

createApp(messaggio).mount('#app')