<template>
	<div class="mioWrapper">
		<h1 class="heading">Inbox</h1>
		<ul>
			<router-link
				tag="li"
				:to="{name: 'MioDetails', params: { userId: mail.id }}"
				v-for="(mail,index) in MioData.inbox"
				:key="index"
				@click="mioOpened(mail)"
			>
				<div class="mail">
					<h4>From : {{mail.from}}</h4>
					<h5>{{mail.subject}}</h5>
				</div>
				<UserIcon />
			</router-link>
		</ul>
		<!-- <MioDetails :mail="sendMail" /> -->
		<router-view></router-view>
	</div>
</template>

<script>
import MioData from "@/data/mio.json";
import UserIcon from "@/components/icons/UserIcon";
// import MioDetails from "@/components/mio-page/sections/mioDetails";

export default {
	components: {
		UserIcon
		// MioDetails
	},
	data() {
		return {
			MioData,
			sendMail: {},
			show: true
		};
	},
	methods: {
		mioOpened(mail) {
			// this.$router.push({
			// 	name: "MioDetails",
			// 	params: { userId: mail.id }
			// });
			this.sendMail = mail;
			// this.show = !this.show;
		}
	}
};
</script>

<style scoped>
</style>
