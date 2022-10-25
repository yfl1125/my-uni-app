<template>
	<view>
		<ul>
			<uni-swipe-action v-for="(item,index) in carts" :key="index">
				<uni-swipe-action-item>
					<view>
						<li class="oneLi">
							<view class="left">
								<label class="radio">
									<radio @click="changeOne(index)" :checked="item.flag" /><text></text>
								</label>
								<image :src="item.pic" mode=""></image>
							</view>
							<view class="right">
								<view class="name">
									<p> {{item.name}}</p>
									<span></span>
								</view>
								<view class="num">
									<p> ￥{{item.price}}</p>
									<view class="num1">
										<button>+</button>
										<input type="text" v-model="item.num">
										<button>-</button>
									</view>
								</view>
							</view>
						</li>
					</view>
					<template v-slot:right>
						<view><text @click="del(index)">删除</text></view>
					</template>
				</uni-swipe-action-item>
			</uni-swipe-action>

		</ul>
	</view>

</template>

<script>
	import {
		mapMutations,
		mapState
	} from 'vuex';

	export default {
		data() {
			return {
				options: [{
					text: '取消',
					style: {
						backgroundColor: '#007aff'
					}
				}, {
					text: '确认',
					style: {
						backgroundColor: '#dd524d'
					}
				}]
			};
		},
		computed: {
			...mapState(['carts'])
		},
		methods: {
			...mapMutations(['change', 'del']),
			changeOne(index) {
				this.change(index)
				// console.log(123);
			},
			onClick(e) {
				console.log('点击了' + (e.position === 'left' ? '左侧' : '右侧') + e.content.text + '按钮')
			},
			swipeChange(e, index) {
				console.log('当前状态：' + e + '，下标：' + index)
			}
		}
	}
</script>

<style lang="scss">
	.oneLi {
		width: 100%;
		height: 100px;
		display: flex;
		border-bottom: 1px solid #ccc;
		margin-top: 5px;

		.left {
			width: 130px;
			display: flex;

			.radio {
				margin: 37.5px 0;
			}

			image {
				width: 100px;
				height: 100px;
			}
		}

		.right {
			padding: 7px 0;

			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.name {}

			.num {
				width: 200px;
				display: flex;
				justify-content: space-between;

				.num1 {
					display: flex;
				}

				button {
					width: 40px;
					height: 30px;
					line-height: 30px;
				}

				input {
					width: 40px;
					text-align: center;
				}
			}
		}
	}
</style>
