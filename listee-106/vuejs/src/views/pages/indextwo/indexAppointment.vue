<template>
    <section class="appointment-section">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="appointment-sec aos" data-aos="fade-up">
                        <div class="wedding-form">
                            <b-form>
                                <div class="row">
                                    <div class="col-12 col-md-12">
                                        <div class="section-heading-two text-center">
                                            <p>Try This</p>
                                            <h2>Are You Attending?</h2>
                                            <img src="../../../assets/img/title-img.png" class="img-fluid" alt="title-img">
                                        </div>
                                        <div class="form-group">
                                            <b-form-input type="text" class="form-control" placeholder="Name" />
                                        </div>
                                        <div class="form-group">
                                            <b-form-input type="email" class="form-control" placeholder="Email Address" />
                                        </div>
                                        <div class="form-group">
                                            <vue-select 
                                                class="select"
                                                :options="Service"
												placeholder="Service" />
                                        </div>
                                        <div class="form-group">
                                            <vue-select 
                                                class="select"
                                                :options="Guest"
                                                placeholder="Number of Guest" />
                                        </div>
                                        <div class="form-group">
                                            <vue-select 
                                                class="select"
                                                :options="Meal"
                                                placeholder="Meal preference" />
                                        </div>
                                        <div class="form-group">
                                            <textarea class="form-control" placeholder="Message" rows="4"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div class="submit-section">
                                    <b-button type="submit" variant="primary">Search</b-button>
                                </div>
                            </b-form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Vendor Section -->
    <section class="vendor-section">
        <div class="container">
            <div class="vendor-sec">
                <div class="vendor-info aos" data-aos="fade-up">
                    <h3>Grow your Business with “DreamsWedding”</h3>
                    <router-link to="/signup" class="btn btn-grey">Register as a Vendor</router-link>
                </div>
            </div>
        </div>
    </section>
<!-- /Vendor Section -->
</template>

<script>
    export default {
        data(){
            return{
                Service: ["Service", "Hall", "Decoration"], 
                Guest: ["Number of Guest", "100", "500"],
                Meal: ["Meal preference", "Veg", "Non veg"]
            };
        },
    };
</script>