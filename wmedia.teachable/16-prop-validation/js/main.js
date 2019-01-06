Vue.component('candidato', {
    /* props: ['nombre', 'correoe', 'imagen'], */
    //Usemos un objeto en lugar de un array
    props: {
        nombre: {
          type: [String, Array],
          required: true  
        },
        correoe: {
            type: String,
            default: 'mail: n/a'
        }, 
        imagen: String,
        location: {
            type: Object,
            default(){
                return {
                    ciudad: 'Capital Federal',
                }
            }
        }
    },
    template: '#candidato-template',
});

new Vue({
    el: 'main',
    mounted() {
        this.obtenerCandidatos();
    },
    data: {
        candidatos: [],
    },
    methods: {
        obtenerCandidatos() {
            axios.get('https://randomuser.me/api/?results=50')
                .then( (response) => {
                    this.candidatos = response.data.results;
                });
        }
    }
});