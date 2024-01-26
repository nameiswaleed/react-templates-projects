<template>
    <div class="main-wrapper">
        <usernavbar />

        <div class="page-wrapper">
            <breadcrumb :title="title" :name="name" :text="text" :text1="text1" />
            
            <mylisting /> 

            <foot />

            <scroll />
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
          
            title: "My Listing",
            text: "Home",
            text1: "My Listing",
            name: "/",
        }
    },
}
</script>