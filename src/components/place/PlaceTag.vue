<template>
    <el-tag type="primary"> {{tag}} </el-tag>

</template>

<script>
export default {
    name: 'place-tag',
    props: ['tag', 'edit'],
    methods: {

    }
}
</script>

<style scoped>
    /*span {
        background: lightgray;
        border: 1px solid black;
        border-radius: 2px;
        text-align: center;
        margin: 5px;
        padding: 5px;
    }*/
</style>
