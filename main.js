

const { createApp } = Vue;

const messaggio = {
    data: function () {
        return {
            message: "Vue.js Framework ",
            imageUrl: "https://www.renzocappelli.com/wp-content/uploads/2020/05/vue.jpg"
        }
    }
};

createApp(messaggio).mount('#app')