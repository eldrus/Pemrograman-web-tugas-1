const app = Vue.createApp({
    data(){
        return{ 
            lessons :[ 
            {title : 'pemograman web', teacher :'Ridho Rahman', isFav:true},
            {title : 'Sistem Deteksi Intruksi' , teacher: 'Hatma Surotrisongko',isFav:true},
            {title :'Smart City', teacher :'M Husni', isFav: true},
            {title : 'Internet Of Things', teacher : 'M Husni', isFav:true}
        ],
        
        };
    },
    methods:{
        favFunction(i){
            if(this.lessons[i].isFav === true){
                this.lessons[i].isFav = false;
            }else{
                this.lessons[i].isFav = true;
            }
        },
    },
    computed: {
        filteredLessons() {
          return this.lessons;
        },
      },
});
app.mount("#app");