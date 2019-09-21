<template>
	<main>
		<LeaMenu :menuItems="menuItems" />
		<router-view />
	</main>
</template>

<script>
import LeaMenu from "../chip-menu/ChipMenu";

export default {
	components: { LeaMenu },
	data() {
		return {
			menuItems: [
				"Announcements",
				"Documents",
				"Assignments",
				"Grades",
				"Events",
				"Teachers",
				"Websites",
				"Absences",
				"Forum"
			]
		};
	},
	methods: {}
};
</script>

<style scoped>
button {
	padding: 4px 8px;
	border-radius: 4px;
	border: 1px solid slategrey;
	outline: 0;
	margin: 20px auto;
	display: block;
}
</style>
