<template>
	<div class="mioWrapper">
		<h1 class="heading">Inbox</h1>
		<ul>
			<li v-for="mail in MioData.inbox" :key="mail.id" @click="mioOpened(mail)">
				<div class="mail">
					<h4>From : {{mail.from}}</h4>
					<h5>{{mail.subject}}</h5>
				</div>
				<UserIcon />
			</li>
		</ul>
		<MioDetails :mail="sendMail" />
		<!-- <router-view></router-view> -->
	</div>
</template>

<script>
import MioData from "@/data/mio.json";
import UserIcon from "@/components/icons/UserIcon";
import MioDetails from "@/components/mio-page/sections/mioDetails";

export default {
	components: {
		UserIcon,
		MioDetails
	},
	data() {
		return {
			MioData,
			sendMail: {}
		};
	},
	methods: {
		mioOpened(mail) {
			this.$router.push({
				name: "MioDetails",
				params: { userId: mail.id }
			});
			this.sendMail = mail;
		}
	}
};
</script>

<style scoped>
</style>
