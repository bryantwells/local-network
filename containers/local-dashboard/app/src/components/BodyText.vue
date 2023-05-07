<template>
	<section 
		class="BodyText">
		<slot></slot>
	</section>
</template>

<script>
export default {
	name: "BodyText",
	props: {
		color: {
			default: 'lightgray',
			type: String,
		}
	}
}
</script>

<style>
.BodyText p, 
.BodyText ol,
.BodyText li {
	margin: 1rem 0;
}
.BodyText p:first-child,
.BodyText ol:first-child {
	margin-top: 0;
}
.BodyText p:last-child,
.BodyText ol:last-child,
.BodyText li:last-child {
	margin-bottom: 0;
}
.BodyText ol {
	counter-reset: counter;
	margin: 1rem 0;
}
.BodyText ol li {
	counter-increment: counter;
}
.BodyText ol li::before {
	content: counter(counter);
	display: block;
}
.BodyText a {
	text-decoration: underline;
	text-underline-offset: 0.1rem;
}
.BodyText code {
	display: inline-block;
	background-color: black;
	border-radius: 0.25rem;
	padding: 0.125rem 0.25rem;
	color: white;
}
</style>