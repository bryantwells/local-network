<template>
	<section 
		class="Message"
		:style="{
			background: color
		}">
		<slot></slot>
	</section>
</template>

<script>
export default {
	name: "Message",
	props: {
		message: String,
		color: {
			default: 'lightgray',
			type: String,
		}
	}
}
</script>

<style>
.Message {
	padding: 0.5rem;
	min-height: 100%;
	border-radius: 0.5rem;
	background-color: lightgray;
}
.Message-body {
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	height: 100%;
}
</style>