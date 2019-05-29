<template>
	<div class="App">
		Hello World

		<validation-provider name="email" rules="required|email">
			<template #default="{ errors }">
				<input v-model="email">
				<p>{{ errors[0] }}</p>
			</template>
		</validation-provider>
	</div>
</template>

<script>
	import { ValidationProvider } from 'vee-validate';
	export default {
		name: 'App',
		components: {
			ValidationProvider
		},
		data() {
			return {};
		}
	};
</script>

<style lang="scss" scoped>
	@import './assets/styles/var.scss';
	.App {
		color: #ff6701;
	}
</style>