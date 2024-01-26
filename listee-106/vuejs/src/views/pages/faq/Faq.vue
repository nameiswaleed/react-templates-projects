<template>
    <div class="main-wrapper">
        <layouts></layouts>

        <div class="page-wrapper">
            <breadcrumb :title="title" :name="name" :text="text" :text1="text1" />

            <faqcontent />

            <foot />

            <scroll />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "Frequently Asked Questions",
            text: "Home",
            text1: "FAQ",
            name: "/",
        }
    },
}
</script>