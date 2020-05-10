<template>
    <div class="card col-6">
        <div class="card-body" >
            <h5 class="card-title"><i class="fas fa-compact-disc"></i>-{{song.name}}</h5>
            <h5 class="card-title"><i class="fas fa-star"></i>-{{song.rating}}</h5>
        </div>
    </div>
</template>

<script>
export default {
    props:['song']
}
</script>

<style scoped>
    .card-title{
        color: white;
    }

</style>