<template>
    <div class="info">
        <h1>技术栈</h1>
        <transition
                :duration="{ enter: 2500, leave: 1500 }"
                leave-active-class="animated fadeOutRight"
                enter-active-class="animated fadeInLeft">
            <div class="cont" v-if="show">
                <template v-for="skill in skills">
                    <el-row :gutter="20" :key="skill.name">
                        <el-col :span="8">
                            <div class="left" :style="{backgroundColor: `${skill.background}`}">
                                <h2> {{skill.name}}</h2>
                            </div>
                        </el-col>
                        <el-col :span="16">
                            <el-row :gutter="10">
                                <template v-for="child in skill.child">
                                    <el-col :span="12" :key="child.name">
                                        <div class="right" :style="{backgroundColor: child.background}">
                                            <h3>{{child.name}}</h3>
                                        </div>
                                    </el-col>
                                </template>
                            </el-row>
                        </el-col>
                    </el-row>
                </template>
            </div>
        </transition>
    </div>
</template>
<script>
    // nacos、swagger、mybatis多数据源、druid、hystrix、feign、redis、mybatisplus、
    // 消息转化器、异常处理advice、spring cache使用redis实现等）（SpringBoot、Netty、redis发布订阅三者的websocket）、
    // quartz、文件上传、swagger-ui、登录、OAuth2、验证码 图形验证码、二维码、rocketmq、elasticsearch
    export default {
        // let randomcolor = rgba()
        data() {
            return {
                show: false,
                skills: [
                    {
                        name: '熟悉',
                        background: 'rgba(29, 218, 61, 0.2)',
                        child: [
                            {name: 'SpringBoot', background: 'rgba(29, 218, 61, 0.2)'},
                            {name: 'MySQL', background: 'rgba(29, 218, 61, 0.2)'},
                            {name: 'MyBatis', background: 'rgba(29, 218, 61, 0.2)'},
                            {name: 'Redis', background: 'rgba(29, 218, 61, 0.2)'}
                        ]
                    },
                    {
                        name: '掌握',
                        background: 'rgba(211, 184, 30, 0.2)',
                        child: [
                            {name: 'centos', background: 'rgba(211, 184, 30, 0.2)'},
                            {name: 'oauth2', background: 'rgba(211, 184, 30, 0.2)'},
                            {name: 'git/svn', background: 'rgba(211, 184, 30, 0.2)'},
                            {name: 'hibernate&jpa', background: 'rgba(211, 184, 30, 0.2)'}
                        ]
                    },
                    {
                        name: '了解',
                        background: 'rgba(232, 13, 24, 0.2)',
                        child: [
                            {name: 'SpringCloud Alibaba', background: 'rgba(232, 13, 24, 0.2)'},
                            {name: 'docker', background: 'rgba(232, 13, 24, 0.2)'},
                            {name: 'vue', background: 'rgba(232, 13, 24, 0.2)'},
                            {name: 'elasticsearch', background: 'rgba(232, 13, 24, 0.2)'}
                        ]
                    }
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
        margin: 30px $spacing-row-base;

        .cont {
            @extend .cont;

            .left {
                margin: 10px auto;
                width: 100%;
                height: 160px;
                // background-color: rgba(211, 184, 30, 0.2);
                line-height: 160px;

                h2 {
                    margin-left: $spacing-row-base;
                }
            }

            .right {
                height: 70px;
                // background-color: rgba(232, 13, 24, 0.2);
                line-height: 70px;

                h3 {
                    margin-left: $spacing-row-base;
                }
            }
        }
    }
</style>
