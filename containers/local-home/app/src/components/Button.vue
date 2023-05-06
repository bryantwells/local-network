<template>
    <div class="Button">
		{{ label }}
	</div>
</template>

<script>
export default {
	name: "Button",
    props: {
        label: String,
    },
};
</script>

<style>
.Button {
	background: black;
	color: white;
	padding: 0.5rem;
	text-align: center;
	border-radius: 0.5rem;
	cursor: pointer;
}
.Button:hover {
	background: white;
	color: black;
}
</style>