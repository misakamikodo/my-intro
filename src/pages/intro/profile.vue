<template>
    <div class="info">
        <h1>作品集</h1>
        <transition
                :duration="{ enter: 2500, leave: 1500 }"
                enter-active-class="animated fadeInRight">
            <div class="cont" v-if="show">
                <el-row :gutter="20">
                    <template v-for="item in profiles">
                        <el-col :key="item.name" :span="12" :xs="24">
                            <div class="item">
                                <h2 v-text="item.name"/>
                                <p v-text="'技术栈: ' + item.skills"/>
                                <p v-text="item.content"/>
                                <p v-text="item.duty"/>
                                <p v-if="item.github" v-text="'github地址: ' + item.github"/>
                            </div>
                        </el-col>
                    </template>
                </el-row>
            </div>
        </transition>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                show: false,
                profiles: [
                    {
                        name: '会议平台',
                        skills: 'SpringCloud Netflix，Mybatis，MySQL，redis，oauth2，jieba分词等',
                        duty: '主要职责：前期担任会议服务后端的开发，以及部分订单和直播后台服务的API开发。会议搜索和部分后' +
                            '台搜索使用jieba分词后通过数据库查询，利用redis sorted set数据结构实现对会议点击热度的排' +
                            '序，通过订单发送下单成功消息通知会议服务统计下单数实现对下单数的排序，结合redis实现扫码' +
                            '开播和扫码验票，直播功能使用腾讯云直播sdk，并即时通讯sdk完成弹幕聊天。并参与了会议服务' +
                            '的服务部署',
                        content: '介绍：本项目包括用户web端(和举办方端一起)、运营web端、用户小程序端、工作人员小程序端、直播APP四端，' +
                            '实现了在线、线下两种形式会议从举办、预定、销票一系列流程和对应举办方和运营端的管理功能。'
                    },
                    {
                        name: '赛事及商城平台',
                        skills: ' SpringBoot，Mybatis，MySQL，redis等',
                        duty: '主要职责：个人独立完成搭建SpringBoot后端服务、对接前端接口、修改BUG、服务器部署和后端交接一系列流程。使用' +
                            'best-pay实现的微信小程序支付，使用微信官方sdk登录解析参数、调用微信api。使用redis锁库存解决并发问题',
                        content: '介绍：本项目包括小程序和后台管理两端，实现了某类型赛事数据的录入和查看，以及延伸相关的赛事商品商城'

                    },
                    {
                        name: '民宿APP后端和管理平台',
                        skills: 'SpringBoot Mybatis MySQL qiniu redis solr jquery layui beetl Centos 阿里云服务api shiro jwt',
                        duty: '',
                        content: '这是公司项目，我主要完成了评论，外部日历同步，消息服务，房态信息设置，民宿特色商品下单流程，民宿后台评论管理、人员管理、投资信息概览、页面配置' +
                            '营销活动配置、订单管理与退款管理等功能'
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

        .cont {
            @extend .cont;
            width: 90%;

            .item {
                background-color: rgba(59, 123, 13, 0.2);
                padding: 10px;
                border-radius: 15px;
                margin: 10px auto;
                @media screen and (max-width: 768px) {
                    padding: 5px;
                    margin: 5px auto;
                }

                &:hover {
                    border-radius: 25px;
                    background-color: rgba(10, 135, 87, 0.3);
                }

                p {
                    text-align: left;
                    text-indent: 28px;
                    font-size: 1.1rem;
                    line-height: 1.2;
                    @media screen and (max-width: 768px) {
                        text-indent: 12px;
                        font-size: 0.7rem;
                        line-height: 1.1;
                    }
                }
            }
        }
    }
</style>
