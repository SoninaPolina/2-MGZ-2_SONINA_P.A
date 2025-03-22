const App = {
    data() {
        return {
            placeHolderText: "Введите значение",
            ValueKPH: "",
            ValueMPS: "",
        }
    },
    methods: {
        inputChangeHandlerKPH(event) {
            this.ValueKPH = event.target.value;
            this.ValueMPS = event.target.value * 1000 / 3600;
        },
        inputChangeHandlerMPS(event) {
            this.ValueMPS = event.target.value;
            this.ValueKPH = event.target.value * 3600 / 1000;
        }
    }
}

Vue.createApp(App).mount("#app")