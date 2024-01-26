<template>
    <div class="main-wrapper">
        <usernavbar />

        <div class="page-wrapper">
            <breadcrumb :title="title" :name="name" :text="text" :text1="text1" />

            <bookmarkcontent />

            <foot />

            <scroll />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "Bookmarks",
            text: "Home",
            text1: "Bookmarks",
            name: "/",
        }
    },
}
</script>