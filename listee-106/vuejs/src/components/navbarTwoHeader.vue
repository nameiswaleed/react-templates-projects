<template>
     <div class="header-top">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-md-4">
                    <div class="selection-list">
                        <div class="lang-select">
                            <span class="select-icon"><i class="feather-globe"></i> </span>
                            <vue-select 
                            class="select"
                            :options="India"
                            placeholder="India"/>
                            
                        </div>
                        <div class="currency-select">
                            <vue-select
                            class="select"
                            :options="Currency"  
                            placeholder="USD"/>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <ul class="d-flex justify-content-end">
                        <li class="d-flex align-items-center"><i class="feather-map-pin me-1"></i> 4998 Elk Creek Road Canton GA 30114</li>
                        <li class="d-flex align-items-center"><i class="feather-mail me-1"></i> admin@example.com</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                India: ["India", "UK", "Japan"],
                Currency: ["USD", "Euro"]
            }
        },
        mounted() {
            $('body').append('<div class="sidebar-overlay"></div>');
            $(document).on('click', '#mobile_btn', function () {
                $('main-wrapper').toggleClass('slide-nav');
                $('.sidebar-overlay').toggleClass('opened');
                $('html').addClass('menu-opened');
                return false;
            });

            $(document).on('click', '.sidebar-overlay', function () {
                $('html').removeClass('menu-opened');
                $(this).removeClass('opened');
                $('main-wrapper').removeClass('slide-nav');
            });

            $(document).on('click', '#menu_close', function () {
                $('html').removeClass('menu-opened');
                $('.sidebar-overlay').removeClass('opened');
                $('main-wrapper').removeClass('slide-nav');
            });
        },  
    }
</script>