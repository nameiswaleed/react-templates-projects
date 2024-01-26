<template>
    <div class="main-wrapper">
        <layouts></layouts>

        <div class="page-wrapper">
            <breadcrumb :title="title" :name="name" :text="text" :text1="text1" />
            
            <howworks />

            <howitpricing />

            <foot /> 

            <scroll />

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "How it Works",
            text: "Home",
            text1: "How it Works",
            name: "/",
        }
    },
}
</script>