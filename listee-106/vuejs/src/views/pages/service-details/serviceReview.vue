<template>
    <!--Review  Section-->
    <div class="card review-sec  mb-0">
        <div class="card-header  align-items-center">
            <i class="fa-regular fa-comment-dots"></i>
            <h4>Write a Review</h4>
        </div>
        <div class="card-body">
            <div class="review-list">
                <ul class="">
                    <li class="review-box ">
                        <div class="review-profile">
                            <div class="review-img">
                                <img src="../../../assets/img/profiles/avatar-11.jpg" class="img-fluid" alt="img">
                            </div>
                        </div>
                        <div class="review-details">
                            <h6>Joseph</h6>
                            <div class="rating">
                                <div class="rating-star">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fa-regular fa-star rating-overall"></i>
                                </div>
                                <div><i class="fa-sharp fa-solid fa-calendar-days"></i> 4 months ago</div>
                                <div>by: Demo Test</div>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type specimen book.</p>
                            <div class="row">
                                <div class="col-lg-3  col-md-3 col-sm-3"  v-for="(src, index) in imgs" :key="index" @click="() => showImg(index)">
                                    <div class="review-gallery">
                                        <img class="img-fluid" alt="Image" :src="require(`../../../assets/img/gallery/${src.src}`)">
                                    </div>
                                </div>
                                <vue-easy-lightbox
                                    :visible="visible"
                                    :imgs="img"
                                    :index="index"
                                    @hide="handleHide"
							    ></vue-easy-lightbox>
                            </div>
                            <div class="reply-box ">
                                <p>Was This Review...? <a href="#" class="thumbsup"><i class="feather-thumbs-up"></i> Like
                                    </a>
                                    <a href="#" class="thumbsdown"><i class="feather-thumbs-down"></i> Dislike </a>
                                </p>
                                <a href="#" class="replylink"><i class="feather-corner-up-left"></i> Reply</a>
                            </div>
                        </div>
                    </li>
                    <li class="review-box">
                        <div class="review-profile">
                            <div class="review-img">
                                <img src="../../../assets/img/profiles/avatar-02.jpg" class="img-fluid" alt="img">
                            </div>
                        </div>
                        <div class="review-details">
                            <h6>Dev</h6>
                            <div class="rating">
                                <div class="rating-star">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fa-regular fa-star rating-overall"></i>
                                </div>
                                <div><i class="fa-sharp fa-solid fa-calendar-days"></i> 4 months ago</div>
                                <div>by: Demo Test</div>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </li>
                    <li class="review-box">
                        <div class="review-profile">
                            <div class="review-img">
                                <img src="../../../assets/img/profiles/avatar-01.jpg" class="img-fluid" alt="img">
                            </div>
                        </div>
                        <div class="review-details">
                            <h6>Johnson</h6>
                            <div class="rating">
                                <div class="rating-star">
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fas fa-star filled"></i>
                                    <i class="fa-regular fa-star rating-overall"></i>
                                </div>
                                <div><i class="fa-sharp fa-solid fa-calendar-days"></i> 4 months ago</div>
                                <div>by: Demo Test</div>
                            </div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                                been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type specimen book.</p>
                            <div class="reply-box ">
                                <p>Was This Review...? <a href="#" class="thumbsup"><i class="feather-thumbs-up"></i> Like
                                    </a>
                                    <a href="#" class="thumbsdown"><i class="feather-thumbs-down"></i> Dislike </a>
                                </p>
                                <a href="#" class="replylink"><i class="feather-corner-up-left"></i> Reply</a>
                            </div>
                        </div>
                    </li>
                    <li class="review-box feedbackbox mb-0">
                        <div class="review-details">
                            <h6>Leave feedback about this</h6>
                        </div>
                        <div class="card-body">
                            <b-form class="">
                                <div class="form-group">
                                    <b-form-input type="text" class="form-control" placeholder="Title" />
                                </div>
                                <div class="namefield">
                                    <div class="form-group">
                                        <b-form-input type="text" class="form-control" placeholder="Name*" required />
                                    </div>
                                    <div class="form-group me-0">
                                        <b-form-input type="email" class="form-control" placeholder="Email*" required />
                                    </div>
                                </div>
                                <div class="form-group">
                                    <textarea rows="4" class="form-control" placeholder="Write a Review*"
                                        required></textarea>
                                </div>
                                <div class="reviewbox-rating">
                                    <p><span> Rating</span>
                                        <i class="fas fa-star filled me-1"></i>
                                        <i class="fas fa-star filled me-1"></i>
                                        <i class="fas fa-star filled me-1"></i>
                                        <i class="fas fa-star filled me-1"></i>
                                        <i class="fas fa-star filled me-1"></i>
                                    </p>
                                </div>
                                <div class="submit-section">
                                    <b-button variant="primary submit-btn" type="submit"> Submit Review</b-button>
                                </div>
                            </b-form>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
			index: 0, // default: 0
			imgs: [
					{
					src: "galleryimg-1.jpg",
					},
					{
					src: "galleryimg-2.jpg",
					},
					{
					src: "galleryimg-3.jpg"
					},
					{
					src: "galleryimg-9.jpg"
					}
				],
				img: [
					{
					src: "https://picsum.photos/785/501",
					},
					{
					src: "https://picsum.photos/785/502",
					},
					{
					src: "https://picsum.photos/785/503",
					},
					{
					src: "https://picsum.photos/785/504",
					}
				],
            }
        },
        methods: {
			showImg(index) {
			this.index = index;
			this.visible = true;
			},
			handleHide() {
			this.visible = false;
		},
	},
}
</script>