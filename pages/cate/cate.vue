<template>
	<view>
		<!-- 顶部导航 -->
		<view class="topCate">

		</view>
		<!-- 分类 -->
		<view class="bottomCate">

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navList: [],
				id: 0
			};
		},
		methods: {
			async getNav() {
				let {
					data: res
				} = await uni.$http.get('category/categoryNav?id=1005000')
				console.log(res);
				this.navList = res
			}
		},
		mounted() {
			this.getNav()
			// this.id = this.$route.query.id
			// console.log(this.id);

		},
		onLoad(obj) {
			console.log(obj);
		}

	}
</script>

<style lang="scss">

</style>
