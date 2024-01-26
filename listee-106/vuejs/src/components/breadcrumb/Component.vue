<template>
    		<!-- Breadscrumb Section -->
		<div class="breadcrumb-bar">
			<div class="container">
				<div class="row align-items-center text-center">
		    		<div class="col-md-12 col-12">
			    	    <h2 class="breadcrumb-title">{{ title }}</h2>
				    	<nav aria-label="breadcrumb" class="page-breadcrumb">
							<ol class="breadcrumb">
								<li class="breadcrumb-item"><router-link :to="name">{{ text }}</router-link></li>
								<li class="breadcrumb-item active" aria-current="page">{{ text1 }}</li>
							</ol>
						</nav>							
					</div>
				</div>
			</div>
		</div>
		<!-- /Breadscrumb Section -->
    
</template>

<script>
    export default {
        component: {},
        props: {
            title: {
                type: String,
                default: "",
            },
            text: {
                type: String,
                default: "",
            },
            text1: {
                type: String,
                default: "",
            },
            name: {
                type: Array,
                default: ()=> {
                    return [];
                },
            },
        },
    };
</script>