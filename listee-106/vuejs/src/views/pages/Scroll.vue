<template>
	<div class="progress-wrap active-progress">
		<svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
			<path :style="{ 'stroke-dashoffset': dashOffset, 'stroke-dasharray': dashArray }"
				d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path>
		</svg>
	</div>
</template>
  
<script>
export default {
	data() {
		return {
			progress: 0,
			dashArray: "307.919px, 307.919px",
			dashOffset: "228.265px"
		};
	},
	mounted() {
		const savedProgress = localStorage.getItem('progress');
		this.progress = savedProgress ? parseInt(savedProgress) : this.progress;
		},
		beforeDestroy() {
		localStorage.setItem('progress', this.progress.toString());
	},
	watch: {
		progress(newValue, oldValue) {
			const circumference = Math.PI * 2 * 49;
			const progressOffset = circumference * (1 - newValue / 100);
			this.dashOffset = `${progressOffset}px`;
		}
	},
	props: {
		progress: {
			type: Number,
			required: true,
			default: 0
		}
	}
};
</script>
  