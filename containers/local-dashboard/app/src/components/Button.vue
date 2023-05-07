<template>
    <div 
		class="Button">
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
	padding: var(--space-sm);
	text-align: center;
	border-radius: var(--border-radius);
	cursor: pointer;
	border: 0.1rem solid black;
	background: black;
	color: var(--color);
	text-shadow: none;
}
.Button--alt {
	background: var(--color);
	color: black;
}
.Button:hover,
.Button.is-active {
	background: black;
	color: white;
}
.Button--alt:hover,
.Button--alt.is-active {
	background: white;
	color: black
}

</style>