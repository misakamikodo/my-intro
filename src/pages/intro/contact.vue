<template>
    <div class="info">
        <h1>联系我</h1>
        <transition
                :duration="{ enter: 2500, leave: 1500 }"
                enter-active-class="animated fadeInDown">
            <div class="cont" v-if="show">
                <div class="assessment">
                    <h2>自我评价</h2>
                    <p>高效的自学能力，具备独立分析解决问题能力，喜欢钻研新知识；</p>
                    <p>强烈的自我驱动力，只喜欢优雅的代码，严格按照阿里巴巴代码规范（Java）编写；</p>
                    <p>做事仔细负责，能比较全面地思考问题，会自觉主动加班弥补个人原因导致的项目进度延后，能独立完成项目。</p>
                </div>
                <div class="honor">
                    <h2>兴趣爱好</h2>
                    <p>爱喝茶、咖啡、听音乐，喜欢音乐美食</p>
                </div>
                <div class="contact">
                    <div class="contact-title">
                        <h2>联系我：</h2>
                        <div class="acount">
                            <el-row>
                                <template v-for="item in accounts">
                                    <el-col :span="6" :key="item.class">
                                        <div class="iconBox">
                                            <a :href="item.link" target="_blank" :title="item.title">
                                                <i class="ccyicon iconSet" :class="item.class"/>
                                            </a>
                                        </div>
                                    </el-col>
                                </template>
                            </el-row>
                        </div>
                    </div>
                    <p><i class="ccyicon icon-mobile"/> 13758233011 </p>
                    <p><i class="ccyicon icon-mail"/> me@chenchengyuan.com </p>
                    <p><i class="ccyicon icon-weixin2"/> ccychann </p>
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
                accounts: [
                    {class: 'icon-social_github', link: 'https://github.com/misakamikodo', title: "github"}
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
    a {
        text-decoration: none;
    }

    .info {
        @extend .info;

        .cont {
            @extend .cont;
            margin: 20px auto;
            background-color: rgba(233, 225, 225, .3);
            border-radius: 25px;
            padding: $spacing-col-sm $spacing-row-base;

            .contact-title {
                display: flex;
                align-items: center;

                h2 {
                    display: inline-block;
                }

                .acount {
                    display: inline-block;

                    .iconBox {
                        width: 40px;
                        height: 40px;
                        border-radius: 20px;
                        border: 1px solid rgba(9, 92, 49, .5);
                        margin: 5px auto;
                        text-align: center;
                        background-color: rgba(13, 73, 87, 0.4);

                        &:hover {
                            background-color: rgba(13, 73, 87, 0.8);
                        }

                        .iconSet {
                            font-size: 1.5rem;
                            line-height: 40px;
                            cursor: pointer;
                            color: rgba(220, 228, 220, 0.7);

                            &:hover {
                                font-size: 1.8rem;
                                color: rgba(220, 228, 220, 1);
                            }
                        }
                    }
                }
            }
        }
    }
</style>
