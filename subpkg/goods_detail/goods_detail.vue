<template>
	<view>
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in pics" :key="index">
				<image class="img" :src="item.img_url" mode="widthFix"></image>
			</swiper-item>
		</swiper>
		<view class="title">
			<span>{{info.name}}</span>
			<p>￥{{info.retail_price}}</p>
		</view>
		<view class="dite" v-html="info.goods_desc">

		</view>
		<view class="goods-carts">
			<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import {
		mapMutations
	} from 'vuex';
	export default {
		components: {},
		data() {
			return {
				info: {},
				id: 0,
				pics: [],

				options: [{
					icon: 'chat',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 2,
					infoBackgroundColor: '#007aff',
					infoColor: "#f5f5f5"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 2
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: 'linear-gradient(90deg, #FFCD1E, #FF8A18)',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
						color: '#fff'
					}
				],
				customButtonGroup: [{
						text: '加入购物车',
						backgroundColor: 'linear-gradient(90deg, #1E83FF, #0053B8)',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: 'linear-gradient(90deg, #60F3FF, #088FEB)',
						color: '#fff'
					}
				],
				customButtonGroup1: [{
					text: '立即购买',
					backgroundColor: 'linear-gradient(90deg, #FE6035, #EF1224)',
					color: '#fff'
				}]
			};

		},
		methods: {
			...mapMutations(['add']),
			async getGoods() {
				let {
					data: res
				} = await uni.$http.get('goods/detailaction?openId=13216484256&id=' + this.id)
				// console.log(res);
				this.pics = res.gallery
				this.info = res.info
				console.log(this.info);
				console.log(this.pics);
			},
			onClick(e) {
				console.log(e);
				if (e.content.text == '购物车') {
					uni.switchTab({
						url: '/pages/cart/cart'
					})
				}
			},
			buttonClick(e) {
				if (e.content.text == '加入购物车') {
					let obj = {
						name: this.info.name,
						id: this.info.id,
						pic: this.info.list_pic_url,
						price: this.info.retail_price,
						num: 1,
						flag: false
					}
					this.add(obj)
				}

			}

		},
		mounted() {
			console.log(123)
			this.getGoods()

		},
		onLoad(obj) {
			this.id = obj.id
		}
	}
</script>

<style lang="scss">
	.swiper {
		width: 100%;
		height: 350px;

		.img {
			width: 100%;
		}
	}

	.title {
		height: 70px;
		line-height: 35px;

		// background-color: red;
		p {
			color: red;
		}
	}

	.dite {
		::v-deep image {
			width: 100% !important;
		}
	}

	.goods-carts {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		position: fixed;
		left: 0;
		right: 0;
		/* #ifdef H5 */
		left: var(--window-left);
		right: var(--window-right);
		/* #endif */
		bottom: 0;
	}
</style>
