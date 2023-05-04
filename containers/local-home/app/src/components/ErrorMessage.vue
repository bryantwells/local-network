<template>
	<section 
		class="ErrorMessage">
		<div 
			class="ErrorMessage-body">
			<p>
				{{ message }}
			</p>
		</div>
	</section>
</template>

<script>
export default {
	name: "ErrorMessage",
	props: {
		message: String,
	}
}
</script>

<style>
.ErrorMessage {
	padding: 0.5rem;
	min-height: 100%;
	border-radius: 0.5rem;
}
.ErrorMessage-body {
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	height: 100%;
}
</style>