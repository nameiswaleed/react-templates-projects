<template>
    <div class="main-wrapper">
        <usernavbar />

        <div class="page-wrapper">
            <breadcrumb :title="title" :name="name" :text="text" :text1="text1" />
            
            <reviewdashboard />

            <foot />

            <scroll />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "Reviews",
            text: "Home",
            text1: "Reviews",
            name: "/",
        }
    },
}
</script>