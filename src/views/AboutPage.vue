<template>

<div class="content">
<h1>simpel game</h1>

<p>score :{{score}}</p>

<button v-if="!test" @click="tree">incriment</button>
<h2 v-else>its🤷‍♀️ over😂</h2>

</div>


</template>



<script>




export default {
    data(){
        return {
            score:0,
            test:false
        }
    },
    methods: {
    
        
        tree() {
            this.score++
            if(this.score>=5){
                this.test=true;
            }
        }
    }
}
</script>
