<template>
    <div id="container">
        <div class="title">
            这是一个标题
        </div>
        <div class="content">
            <p>Lorem ipsum dolor sit ame
                t, consectetur adipisicing el
                it. Beatae corporis eum except
                uri expedita id, illum ipsam, natu
                s nobis pariatur perspiciatis sunt vo
                luptates voluptatum? Dicta eum ipsa moll
                itia nesciunt placeat, rerum?</p>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    #container {
        max-width: 1200px;
        margin: 20px auto;
        border: 1px solid #f6f4f0;
        .title {
            font-size: 1.5em;
            font-weight: bold;
            text-align: center;
        }
        .content {
            margin: 30px 100px;
        }
    }
    @media screen and (max-width:768px){
        #container{
            .content {
                margin: 50px 20px;
            }
        }
    }
</style>