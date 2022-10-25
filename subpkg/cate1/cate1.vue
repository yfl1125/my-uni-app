<template>
	<view>
		<!-- 顶部导航 -->
		<view class="topCate">
			<scroll-view scroll-x="true" style="white-space: nowrap; width: 100%; height: 80rpx;">
				<view v-for="(item,index) in navList" :key="index" class="nav" @click="getcateList({id:item.id,index})"
					:class="{active:active==index}">
					{{item.name}}
				</view>
			</scroll-view>
		</view>
		<!-- 分类 -->
		<view class="bottomCate">
			<view class="title">
				<p class="bt">{{level2.name}}</p>
				<p>{{level2.front_name}}</p>
			</view>
			<ul>
				<li v-for="(item,key) in cateList" :key="item.id" @click="togoods(item.id)">
					<img :src="item.list_pic_url" alt="">
					<h1>{{item.name}}</h1>
					<p>￥{{item.retail_price}}</p>
				</li>
			</ul>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navList: [],
				id: 0,
				active: 0,
				cateList: [],
				level2: []
			};
		},
		methods: {
			async getNav() {
				let {
					data: res
				} = await uni.$http.get('category/categoryNav?id=' + this.id)

				this.navList = res.navData
			},
			async getcateList({
				id,
				index
			}) {
				this.active = index
				this.level2 = this.navList[index]
				let {
					data: res
				} = await uni.$http.get('goods/goodsList?categoryId=' + id)
				console.log(res);
				this.cateList = res.data

			},
			togoods(id) {
				uni.navigateTo({
					url: '/subpkg/goods_detail/goods_detail?id=' + id
				})
				console.log(id);
			}
		},
		mounted() {
			this.getNav()
			this.getcateList({
				id: this.id,
				i: 0
			})


		},
		onLoad(obj) {
			this.id = obj.id
		}

	}
</script>

<style lang="scss">
	.nav {
		display: inline-block;
		width: 120rpx;
		height: 80rpx;
		line-height: 80rpx;
		text-align: center;

		&.active {
			color: red;
		}
	}

	.bt {
		font-size: 20px;
		font-weight: 800;
		margin-top: 30px;
	}

	.title {
		text-align: center;
		width: 100%;
		height: 120px;
		overflow: auto;
		// background-color: aquamarine;
	}

	ul {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 20rpx 40rpx;

		li {
			width: 46%;
			text-align: center;

			img {
				width: 100%;
				height: 240rpx;
			}

			h1 {
				font-size: 30rpx;
				font-weight: 700;
			}

			p {
				color: red;
			}
		}
	}
</style>
