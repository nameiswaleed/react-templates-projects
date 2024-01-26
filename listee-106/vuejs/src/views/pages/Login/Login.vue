<template>
    <div class="main-wrapper">
        <layouts></layouts>

        <div class="page-wrapper">
            <breadcrumb :title="title" :name="name" :text="text" :text1="text1" />
            
            <loginform />

            <foot />

            <scroll />
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            title: "Login",
            text: "Home",
            text1: "Login",
            name: "/",
        }
    },
}
</script>