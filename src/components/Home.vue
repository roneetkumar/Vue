<template>
	<div class="homePageWrapper">
		<transition name="fade">
			<div
				class="overlay"
				v-if="$store.state.navOpened"
				@click="$store.state.navOpened = !$store.state.navOpened"
			></div>
		</transition>

		<SideNav />
		<Header />
		<SearchBar />

		<router-view />
		<NavBar />
	</div>
</template>

<script>
import Header from "./header/Header";
import NavBar from "./nav-bar/Nav";
import SideNav from "./side-nav/SideNav";
import SearchBar from "./header/SearchBar";

export default {
	components: {
		Header,
		NavBar,
		SearchBar,
		SideNav
	}
};
</script>

<style scoped>
.overlay {
	width: 100%;
	height: 100%;
	position: fixed;
	background: rgba(41, 72, 255, 0.5);
	z-index: 1;
	transition: background 0.2s ease;
	opacity: 1;
	transition: opacity 0.2s ease-in-out;
}

.fade-enter,
.fade-leave-active {
	opacity: 0;
}
</style>;
