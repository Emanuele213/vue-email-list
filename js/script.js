new Vue({
    el: '#app',
    data: {
        arrEmail: [],
    },
    methods: {
        showEmail() {
			this.arrEmail = [];
			for (let i = 0; i < 10; i++) {
				axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then(emailResponse => this.arrEmail.push(emailResponse.data.response));
			}
		},
    },
    computed: {

    },
    created() {
		this.showEmail();
	},
});