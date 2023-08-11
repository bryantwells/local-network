<template>
	<section 
		class="Collapsible">
		<header 
			class="Collapsible-header"
			@click="isCollapsed=!isCollapsed">
			<div 
				class="Collapsible-title">
				{{ title }}
			</div>
			<div 
				v-if="isCollapsed"
				class="Collapsible-button Collapsible-button--open">
				▼
			</div>
			<div 
				v-else
				class="Collapsible-button Collapsible-button--close">
				▲
			</div>
		</header>
		<div 
			v-if="isCollapsed"
			class="Collapsible-preview">
			<slot name="preview"></slot>
		</div>
		<div 
			v-else
			class="Collapsible-body">
			<slot name="body"></slot>
		</div>
	</section>
</template>

<script>
export default {
	name: "Collapsible",
	props: {
		title: {
			default: '',
			type: String,
		}
	},
	data() {
		return {
			isCollapsed: true,
		}
	},
}
</script>

<style>
.Collapsible-header {
	display: flex;
	border-bottom: 0.1rem solid black;
	padding-bottom: var(--space-sm);
	margin-bottom: var(--space-sm);
	cursor: pointer;
}
.Collapsible-title {
	flex: 1;
}
.Collapsible-button {
	cursor: pointer;
}
</style>