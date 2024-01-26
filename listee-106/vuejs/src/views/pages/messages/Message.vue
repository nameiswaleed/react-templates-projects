<template>
    <div class="main-wrapper">
        <usernavbar />

        <div class="page-wrapper">
            <breadcrumb :title="title" :name="name" :text="text" :text1="text1" />

            <messagecontent />

            <foot />

            <scroll />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "Messages",
            text: "Home",
            text1: "Messages",
            name: "/",
        }
    },
}
</script>