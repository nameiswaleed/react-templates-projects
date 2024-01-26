<template>
    <div class="main-wrapper">
        <layouts></layouts>

        <div class="page-wrapper">
            <breadcrumb :title="title" :name="name" :text="text" :text1="text1" />
            
            <privacypolicy />

            <foot />

            <scroll />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "Privacy Policy",
            text: "Home",
            text1: "Privacy Policy",
            name: "/",
        }
    },
}
</script>