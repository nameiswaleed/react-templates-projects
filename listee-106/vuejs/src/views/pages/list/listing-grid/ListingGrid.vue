<template>
    <div class="main-wrapper">
        <layouts></layouts>

        <div class="page-wrapper">
            <breadcrumb :title="title" :name="name" :text="text" :text1="text1" />
            
            <listgrid />

            <foot /> 

            <scroll />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "Listings-Grid",
            text: "Home",
            text1: "Grid",
            name: "/",
        }
    },
}
</script>