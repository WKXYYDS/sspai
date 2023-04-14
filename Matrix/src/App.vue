<script setup>

</script>

<template>
	<div>
		<RouterView v-slot="{Component}">
			<keep-alive :include="['home']">
				<component :is="Component"></component>
			</keep-alive>
		</RouterView>
	</div>
</template>

<style scoped>

</style>	