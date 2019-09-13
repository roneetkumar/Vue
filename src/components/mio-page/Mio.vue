<template>
	<main>
		<ChipMenu :menuItems="menuItems" />
		<router-view />
	</main>
</template>

<script>
import ChipMenu from "../chip-menu/ChipMenu";

export default {
	components: { ChipMenu },
	data() {
		return {
			menuItems: ["Inbox", "Outbox", "Sent", "Saved", "Draft", "Trash"]
		};
	}
};
</script>

<style>
.mioWrapper ul {
	max-width: 1000px;
	list-style: none;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-gap: 1em;
	justify-items: center;
	margin: auto;
	padding: 10px;
}

.mioWrapper ul li {
	width: 100%;
	max-width: 300px;
	min-height: 70px;
	background: #fff;
	margin: auto;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: 4px;
	display: grid;
	grid-template-columns: max-content 1fr;
	box-sizing: border-box;
	padding: 10px;
	justify-items: right;
	align-items: center;
}

.mioWrapper ul li svg {
	border-radius: 50%;
	float: right;
	fill: #fff;
	background: var(--colorbg);
	padding: 10px;
}
</style>
