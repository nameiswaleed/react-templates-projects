<template>
    <!-- Profile Content -->
    <div class="dashboard-content">		
			<div class="container">
				<div class="">			        
					<ul class="dashborad-menus">
						<li>
							<router-link to="dashboard">
								<i class="feather-grid"></i> <span>Dashboard</span>
                            </router-link>
						</li>
						<li>
							<router-link to="profile">
								<i class="fa-solid fa-user"></i> <span>Profile</span>
                            </router-link>
						</li>
						<li>
							<router-link to="my-listing">
								<i class="feather-list"></i> <span>My Listing</span>
                            </router-link>
						</li>
						<li>
							<router-link to="bookmarks">
								<i class="fas fa-solid fa-heart"></i> <span>Bookmarks</span>
                            </router-link>
						</li>
						<li class="active">
							<router-link to="messages">
								<i class="fa-solid fa-comment-dots"></i> <span>Messages</span>
                            </router-link>
						</li>
						<li>
							<router-link to="reviews">
								<i class="fas fa-solid fa-star"></i> <span>Reviews</span>
                            </router-link>
						</li>
						<li>
							<router-link to="login">
								<i class="fas fa-light fa-circle-arrow-left"></i> <span>Logout</span>
                            </router-link>
						</li>
					</ul>											
				</div>
				<div class="profile-content">
				     <div class="row dashboard-info chat-window">
					    <div class="col-lg-4">
						     <div class="chat-cont-left">
							    <b-form class="chat-search">
									<div class="form-group">
										<div class="group-img">
											<img src="../../../assets/img/chatsearch.svg" alt="">
											<b-form-input type="text" class="form-control" placeholder="Search" />
									    </div>
									</div>
								</b-form>
								<div class="chat-users-list">
									<div class="chat-scroll">
										<a href="javascript:void(0);" class="media d-flex active">
											<div class="media-img-wrap flex-shrink-0">
												<div class="avatar avatar-online">
												<img src="../../../assets/img/profiles/avatar-03.jpg" alt="User Image" class="avatar-img rounded-circle">
												</div>
											</div>
											<div class="media-body flex-grow-1">
												<div>
												<div class="user-name">Marvin Downey </div>
												<div class="user-last-chat">Hey, How are you?</div>
												</div>
												<div>
												<div class="last-chat-time block">2 min</div>
												<div class="badge badge-success rounded-pill">15</div>
												</div>
											</div>
										</a>
										<a href="javascript:void(0);" class="media d-flex">
											<div class="media-img-wrap flex-shrink-0">
												<div class="avatar avatar-away">
												<img src="../../../assets/img/profiles/avatar-04.jpg" alt="User Image" class="avatar-img rounded-circle">
												</div>
											</div>
											<div class="media-body flex-grow-1">
												<div>
												<div class="user-name">Charlene Reed</div>
												<div class="user-last-chat">I'll Call you later</div>
												</div>
												<div>
												<div class="last-chat-time block">2 min</div>
												</div>
											</div>
										</a>
										<a href="javascript:void(0);" class="media d-flex">
											<div class="media-img-wrap flex-shrink-0">
												<div class="avatar avatar-online">
												<img src="../../../assets/img/profiles/avatar-05.jpg" alt="User Image" class="avatar-img rounded-circle">
												</div>
											</div>
											<div class="media-body flex-grow-1">
												<div>
												<div class="user-name">Travis Trimmble</div>
												<div class="user-last-chat">Give me a full explain...</div>
												</div>
												<div>
												<div class="last-chat-time block">2 min</div>
												<div class="badge badge-success rounded-pill">15</div>
												</div>
											</div>
										</a>
										<a href="javascript:void(0);" class="media d-flex">
											<div class="media-img-wrap flex-shrink-0">
												<div class="avatar avatar-away">
												<img src="../../../assets/img/profiles/avatar-03.jpg" alt="User Image" class="avatar-img rounded-circle">
												</div>
											</div>
											<div class="media-body flex-grow-1">
												<div>
												<div class="user-name">Marvin Dorway</div>
												<div class="user-last-chat">Hey, How are you?</div>
												</div>
												<div>
												<div class="last-chat-time block">2 min</div>
												<div class="badge badge-success rounded-pill">15</div>
												</div>
											</div>
										</a>
										<a href="javascript:void(0);" class="media d-flex">
											<div class="media-img-wrap flex-shrink-0">
												<div class="avatar avatar-offline">
												<img src="../../../assets/img/profiles/avatar-04.jpg" alt="User Image" class="avatar-img rounded-circle">
												</div>
											</div>
											<div class="media-body flex-grow-1">
												<div>
												<div class="user-name">Charlene Reed</div>
												<div class="user-last-chat">I'll Call you later</div>
												</div>
												<div>
												<div class="last-chat-time block">2 min</div>
												</div>
											</div>
										</a>
										<a href="javascript:void(0);" class="media d-flex">
											<div class="media-img-wrap flex-shrink-0">
												<div class="avatar avatar-online">
												<img src="../../../assets/img/profiles/avatar-05.jpg" alt="User Image" class="avatar-img rounded-circle">
												</div>
											</div>
											<div class="media-body flex-grow-1">
												<div>
												<div class="user-name">Travis Trimmble</div>
												<div class="user-last-chat">Give me a full explain...</div>
												</div>
												<div>
												<div class="last-chat-time block">2 min</div>
												<div class="badge badge-success rounded-pill">15</div>
												</div>
											</div>
										</a>
										<a href="javascript:void(0);" class="media d-flex">
											<div class="media-img-wrap flex-shrink-0">
												<div class="avatar avatar-offline">
												<img src="../../../assets/img/profiles/avatar-04.jpg" alt="User Image" class="avatar-img rounded-circle">
												</div>
											</div>
											<div class="media-body flex-grow-1">
												<div>
												<div class="user-name">Charlene Reed</div>
												<div class="user-last-chat">I'll Call you later</div>
												</div>
												<div>
												<div class="last-chat-time block">2 min</div>
												</div>
											</div>
										</a>
										<a href="javascript:void(0);" class="media d-flex">
											<div class="media-img-wrap flex-shrink-0">
												<div class="avatar avatar-online">
												<img src="../../../assets/img/profiles/avatar-05.jpg" alt="User Image" class="avatar-img rounded-circle">
												</div>
											</div>
											<div class="media-body flex-grow-1">
												<div>
												<div class="user-name">Travis Trimmble</div>
												<div class="user-last-chat">Give me a full explain...</div>
												</div>
												<div>
												<div class="last-chat-time block">2 min</div>
												<div class="badge badge-success rounded-pill">15</div>
												</div>
											</div>
										</a>
									</div>
								</div>		 
							</div>					
						</div>
					    <div class="col-lg-8">
						    <div class="chat-cont-right">
							    <div class="chat-header">
								    <a id="back_user_list" href="javascript:void(0)" class="back-user-list">
									   <i class="fa-solid fa-chevron-left"></i>
									</a>
									<div class="media d-flex align-items-center">
										<div class="media-img-wrap flex-shrink-0">
											<div class="avatar avatar-online">
											<img src="../../../assets/img/profiles/avatar-03.jpg" alt="User Image" class="avatar-img rounded-circle">
											</div>
										</div>
										<div class="media-body flex-grow-1">
											<div class="user-name">Marvin Downey</div>
									    </div>
									</div>									
								</div>
								<div class="chat-body">
									<div class="chat-scroll">
										<ul class="list-unstyled">
										    <li class="media d-flex received">
												<div class="avatar flex-shrink-0">
												   <img src="../../../assets/img/profiles/avatar-03.jpg" alt="User Image" class="avatar-img rounded-circle">
												</div>
												<div class="media-body flex-grow-1">
												   <div class="msg-box">
												     <div>
														<p>I'm just looking around.</p>
														<p>Will you tell me something about yourself?</p>
														<ul class="chat-msg-info">
															<li>
																<div class="chat-time">
																    <span>8:35 AM</span>
																</div>
															</li>
														</ul>
												     </div>
												    </div>
													<div class="msg-box">
														<div>
															<p>Are you there? That time!</p>
															<ul class="chat-msg-info">
																<li>
																	<div class="chat-time">
																	    <span>8:40 AM</span>
																	</div>
																</li>
															</ul>
														</div>
													</div>
                                                    <div class="msg-box">
														<div>
															<div class="chat-msg-attachments">
																<div class="chat-attachment">
																	<img src="../../../assets/img/chat-attachment.jpg" alt="Attachment">
																	<a href="javascript:void(0)" class="chat-attach-download">
																	<i class="feather-download"></i>
																	</a>
																</div>
																<div class="chat-attachment">
																	<img src="../../../assets/img/chat-attachment.jpg" alt="Attachment">
																	<a href="javascript:void(0)" class="chat-attach-download">
																	<i class="feather-download"></i>
																	</a>
																</div>
															</div>
															<ul class="chat-msg-info">
																<li>
																	<div class="chat-time">
																	   <span>8:41 AM</span>
																	</div>
																</li>
															</ul>
														</div>
													</div> 													
												</div>
											</li>
                                            <li class="media d-flex sent">
												<div class="media-body flex-grow-1">
													<div class="msg-box">
														<div>
															<p>Hello. What can I do for you?</p>
															<ul class="chat-msg-info">
																<li>
																	<div class="chat-time">
																	    <span>8:30 AM</span>
																	</div>
																</li>
															</ul>
														</div>
													</div>
													<div class="msg-box">
														<div>
															<p>OK, my name is Limingqiang. I like singing, playing basketballand so on.</p>
															<ul class="chat-msg-info">
																<li>
																	<div class="chat-time">
																	    <span>9:45 AM</span>
																	</div>
																</li>
															</ul>
														</div>
													</div> 
													 <div class="msg-box">
														<div>
															<div class="chat-msg-attachments">
																<div class="chat-attachment">
																	<img src="../../../assets/img/chat-attachment.jpg" alt="Attachment">
																	<a href="javascript:void(0)" class="chat-attach-download">
																	<i class="feather-download"></i>
																	</a>
																</div>
															</div>
															<ul class="chat-msg-info">
																<li>
																	<div class="chat-time">
																	   <span>8:41 AM</span>
																	</div>
																</li>
															</ul>
														</div>
													</div> 		
												</div>
											</li>											
										</ul>									
									</div>
								</div> 	
                                <div class="chat-footer">
									<div class="input-group">
                                        <div class="attach-btn">									
											<input type="text" class="input-msg-send form-control" placeholder="Type something">
											<div class="btn-file btn">
												<i class="fa fa-paperclip"></i>
												<input type="file">
											</div>
										</div>
										<b-button type="button" variant="btn msg-send-btn"><i class="fas fa-paper-plane"></i></b-button>
									</div>
								</div>								
							</div>		
						</div>                       						
					 </div>				
				</div>
			</div>		
		</div>		
		<!-- /Profile Content -->
</template>

<script>
export default {
	data() {
		return {
			
		}
	},	
}
</script>