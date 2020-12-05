<template>
    <div class="info">
        <h1>个人简介</h1>
        <transition
                :duration="{ enter: 2500, leave: 1500 }"
                enter-active-class="animated fadeInUp">
            <div class="cont" v-if="show">
                <img class="avatar" src="http://www.baidu.com/p/setting/profile/portrait" alt="">
                 <img class="avatar" src="../../assets/image/my.jpg" alt="">
                <h2>崇德、尚用、求真、创新</h2>
                <p>我叫陈成愿</p>
                <p>半年Java后端实习经验，半年Java后端工作经验，毕业于浙江科技学院软件工程专业</p>
                <div class="state">
                    <el-row :gutter="30">
                        <template v-for="item in states">
                            <el-col :span="6" :xs="12" :key="item.icon">
                                <div class="iconBox">
                                    <i class="ccyicon iconSet" :class="item.icon"/>
                                </div>
                                <p v-text="item.val"/>
                            </el-col>
                        </template>
                    </el-row>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                show: false,
                states: [
                    {icon: 'icon-age', val: '年龄/23'},
                    {icon: 'icon-education', val: '学历/本科'},
                    {icon: 'icon-region', val: '坐标/浙江杭州'},
                    {icon: 'icon-radio', val: '状态/离职'}
                ]
            }
        },
        methods: {
            timeout() {
                setTimeout(() => {
                    this.show = true
                }, 1000)
            }
        },
        mounted() {
            this.timeout()
        }
    }
</script>

<style lang="scss" scoped>
    .info {
        @extend .info;

        .cont {
            @extend .cont;
            margin: 20px auto;
            background-color: rgba(233, 225, 225, .3);
            border-radius: 25px;

            .avatar {
                width: 120px;
                height: 120px;
                border-radius: 60px;
                margin:0 auto;
            }

            .state {
                padding: 20px 10px 50px;
                text-align: center;

                .iconBox {
                    width: 80px;
                    height: 80px;
                    border-radius: 40px;
                    border: 1px solid rgba(9, 92, 49, .5);
                    margin: 5px auto;
                    background-color: rgba(13, 73, 87, 0.4);

                    &:hover {
                        background-color: rgba(13, 73, 87, 0.8);
                    }

                    .iconSet {
                        font-size: 3rem;
                        line-height: 80px;
                        color: rgba(220, 228, 220, 0.7);

                        &:hover {
                            font-size: 3.5rem;
                            color: rgba(220, 228, 220, 1);
                        }
                    }
                }
            }
        }
    }
</style>
