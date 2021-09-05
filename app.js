Vue.createApp({
    data() {
        return {
            query: null,
            movies: []
        }
    },

    methods: {
        fetchMovies() {
            //fetch(`https://jsonplaceholder.typicode.com/posts?search=${this.query}`)
          
            //let promise = fetch('https://jsonplaceholder.typicode.com/posts?search')
            const API_KEY = "20f74523";
            var searchQuery = this.query

            let promise = fetch('http://www.omdbapi.com/?s='+searchQuery+'&apikey='+API_KEY)

            console.log('http://www.omdbapi.com/?s='+searchQuery+'&apikey='+API_KEY)
            let jsonPromise = promise.then(function (response) {
                return response.json()
            })

            jsonPromise.then((jsonData) => {
                console.log(jsonData)
                this.movies = jsonData.Search
            })

        }
    }

}).mount('#app');
