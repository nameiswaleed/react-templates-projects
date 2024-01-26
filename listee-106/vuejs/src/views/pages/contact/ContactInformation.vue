<template>
    <!--contact Information-->	
    <div class="contactus-info">
			<div class="container">
				<div class="row">
					<div class="col-lg-6 contactus-img col-md-12">
						<div class="contactleft-info">
							<img src="../../../assets/img/contactleftimg.jpg" class="img-fluid" alt="">
							<div class="contactinfo-content">
								<div class="contact-hours">
									 <h6>Hours</h6>
									 <ul>
										 <li>Tuesday - Saturday : 9am - 5pm</li>
										 <li>Monday: 10:30am - 3pm Closed on Sunday</li>								 
									 </ul>
								</div>
								<div class="contact-hours">
									 <h6>Contact Us</h6>
									 <ul>
										 <li>132, My Street, Kingston, New York 12401</li>
										 <li>Tel : +088 01562 1452</li>								 
										 <li> Email : support@listee.com</li>								 
									 </ul>
								</div>						
							</div>
						</div>
					</div>
					<div class="col-lg-6 contactright-map col-md-12">
						 <div class="google-maps">
						     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2967.8862835683544!2d-73.98256668525309!3d41.93829486962529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89dd0ee3286615b7%3A0x42bfa96cc2ce4381!2s132%20Kingston%20St%2C%20Kingston%2C%20NY%2012401%2C%20USA!5e0!3m2!1sen!2sin!4v1670922579281!5m2!1sen!2sin" width="600" height="544" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
						 </div>
					</div>				
				</div>		
			</div>		
		</div>		
		<!--/contact Information-->	
		
		<!--contact Form-->	
        <section class="contactusform-section">
		       <div class="container">	
                    <div class="contact-info">
					   <h2>Contact <span>Us</span></h2> 
					   <p>We are here to help you</p>
				   </div>		       
                   <div class="row align-items-center">
				        <div class="col-lg-5 col-md-5">
						    <div class="contactform-img">
							     <img src="../../../assets/img/contactform-img.svg" class="img-fluid"  alt="">
							</div>
						</div>
						<div class="col-lg-7 col-md-7">
						    
							<div class="contactus-form">
							    <b-form class="">
									<div class="form-group">
									   <b-form-input type="text" class="form-control" placeholder="Name*" required />
									</div>
									<div class="form-group me-0">
									   <b-form-input type="email" class="form-control" placeholder="Email*" required />
									</div>
									<div class="form-group">
										<b-form-input type="text" class="form-control" placeholder="Subject" />
									</div>
									<div class="form-group">
       									<textarea rows="4" class="form-control" placeholder="Write a Message*" required></textarea>
									</div>
									<div class="submit-section">
										<b-button variant="primary submit-btn" type="submit"> Submit </b-button>
									</div>
								</b-form>
							
							</div>
						</div>
				   </div>				   
			   </div>		
		</section>		
		<!--/contact Form-->	
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
}
</script>