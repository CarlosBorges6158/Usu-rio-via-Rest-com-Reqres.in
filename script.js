var app = new Vue({
    el: '#usuarios',
    data: {
        users: []
    },
    mounted: function () {
        this.loadUsers();
    },
    methods: {
        loadUsers: function () {

            fetch('https://reqres.in/api/users?per_page=10')
                .then(response => response.json())
                .then(data => {
                    this.users = data.data;
                })
                .catch(error => {
                    console.error('Erro ao carregar os usuários:', error);
                });
        }
    }
});


