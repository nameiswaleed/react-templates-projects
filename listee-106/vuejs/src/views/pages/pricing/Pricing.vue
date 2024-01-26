<template>
    <div class="main-wrapper">
        <layouts></layouts>

            <div class="page-wrapper">
                <breadcrumb :title="title" :name="name" :text="text" :text1="text1" />
                
                <pricingplan />

                <foot />

                <scroll />
            </div>
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: "Pricing Plan",
            text: "Home",
            text1: "Pricing Plan",
            name: "/",
        }
    },
}
</script>