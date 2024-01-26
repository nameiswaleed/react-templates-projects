<template>
    <div class="main-wrapper">
        <usernavbar></usernavbar>

        <div class="page-wrapper">
            <breadcrumb :title="title" :name="name" :text="text" :text1="text1" />
            
            <dashboardcontent />

            <foot />

            <scroll />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "Dashboard",
            text: "Home",
            text1: "Dashboard",
            name: "/",
        }
    },
    name: 'dashboard',
}
</script>