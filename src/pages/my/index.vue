<template>
    <view class="index">
        <view>请求接口说明</view>
        {{ coverGroup }}
    </view>
</template>

<script>
import './index.less'

export default {
    data() {
        return {
            coverGroup: ''
        }
    },
    created() {
        this.getSwiperGroup()
    },
    methods:{
        getSwiperGroup() {
            this.$HTTPREQUEST.get(this.$Api.userCenter.findSwiperFileds).then(res => {
                if (res.code == 200) {
                    let coverGroup = res.data || []
                    this.coverGroup = JSON.stringify(coverGroup)
                }
            })
        },
    }
}
</script>
