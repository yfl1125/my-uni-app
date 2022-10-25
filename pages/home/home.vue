<template>
	<view>
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="item in lbt" :key="item.id">
				<view class="swiper-item">
					<image :src="item.image_url" mode=""></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="ul">
			<view class="li" v-for="(item,index) in navList" :key="index">
				<image @click="tocate(item.id)" :src="item.icon_url" mode=""></image>
				<span>{{item.name}}</span>
			</view>
		</view>
		<p class="p">品牌制造商直供</p>
		<ul class="a1">
			<li class="a2" v-for="(item,index) in brandList" :key="index">
				<image class="a3" :src="item.new_pic_url" mode=""></image>
				<view class="a4">
					<p>{{item.name}}</p>
					<span>￥{{item.floor_price}}起</span>
				</view>
			</li>
		</ul>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				lbt: [],
				navList: [],
				brandList: []
			};
		},
		methods: {
			async getlbt() {
				let {
					data: res
				} = await uni.$http.get('index/index ')
				console.log(res);
				console.log(res.banner);
				this.lbt = res.banner
				this.navList = res.channel
				this.brandList = res.brandList
			},

			tocate(id) {
				uni.navigateTo({
					url: '/subpkg/cate1/cate1?id=' + id
				})
			}
		},
		mounted() {
			this.getlbt()

		}
	}
</script>

<style lang="scss">
	.swiper-item {
		image {
			width: 100%;

		}
	}

	.ul {
		display: flex;
		justify-content: space-around;
		height: 250rpx;
		line-height: 150rpx;
		padding-top: 40rpx;

		// background-color: aquamarine;

		.li {
			flex: 1;
			height: 100%;
			display: flex;
			flex-direction: column;

			image {
				width: 110rpx;
				height: 90rpx;
				padding-left: 10px;
			}

			span {
				display: block;
				height: 40px;
				line-height: 40px;
				text-align: center;
			}
		}
	}

	.p {
		text-align: center;
	}

	.a1 {
		display: flex;
		flex-wrap: wrap;
		width: 98%;
		justify-content: space-between;
		margin: 0 auto;


		.a2 {
			width: 48%;
			height: 240rpx;
			margin-top: 50px;
			position: relative;

			.a3 {
				width: 100%;
				height: 240rpx;
			}

			.a4 {
				position: absolute;
				bottom: 50px;
			}
		}
	}
</style>

0
