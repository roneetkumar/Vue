<template>
	<li>{{itemName}}</li>
</template>

<script>
export default {
	props: {
		itemName: String
	},
	methods: {}
};
</script>

<style scoped>
li {
	height: 32px;
	padding: 0px 14px;
	line-height: 33px;
	text-transform: uppercase;
	font-weight: bold;
	font-size: 14px;
	background: var(--colorbg);
	display: inline-block;
	color: #fff;
	border-radius: 50px;
	box-sizing: border-box;
}
</style>
