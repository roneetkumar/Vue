<template>
	<div>
		<h2>{{mail.from}}</h2>
	</div>
</template>

<script>
export default {
	props: {
		mail: Object
	}
};
</script>

<style scoped>
div {
	width: 100%;
	background: pink;
}
</style>
