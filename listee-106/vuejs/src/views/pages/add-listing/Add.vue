<template>
    <div class="main-wrapper">
        <usernavbar />
   

        <div class="page-wrapper">
            <breadcrumb :title="title" :name="name" :text="text" :text1="text1" />
            
            <addlisting />

            <foot />

            <scroll />
        </div>
     </div>
</template>

<script>
export default {
    data() {
        return {
            title: "Add Listing",
            text: "Home",
            text1: "Add Listing",
            name: "/",
        }
    },
}
</script>
