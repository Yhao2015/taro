export default {
	pages: [
		'pages/index/index',
		'pages/my/index'
	],
	window: {
		backgroundTextStyle: 'light',
		navigationBarBackgroundColor: '#fff',
		navigationBarTitleText: 'WeChat',
		navigationBarTextStyle: 'black'
	},
	tabBar: {
		color: '#646566',
		selectedColor: '#1989fa',
		backgroundColor: '#fafafa',
		borderStyle: "white",
		list: [{
			pagePath: 'pages/index/index',
			text: '首页',
			iconPath: 'assets/image/tabs/home.png',
			selectedIconPath: 'assets/image/tabs/home_active.png'
		},
		{
			pagePath: 'pages/my/index',
			text: '我的',
			iconPath: 'assets/image/tabs/my.png',
			selectedIconPath: 'assets/image/tabs/my_active.png'
		}],
		position: 'bottom'
	},
	permission: {
	}
}
