<template>
    <div class="info">
        <h1>生涯</h1>
        <transition
                :duration="{ enter: 2500, leave: 1500 }"
                enter-active-class="animated fadeInRight">
            <div class="cont career" v-if="show">
                <div class="item"><h3 class="title">2019.7.15-2020.1.15</h3>
                    <p class="text">
                        进入杭州合讯网络技术公司担任Java后端实习生，主要参与民宿APP和商城APP的后端开发和前后端一体的管理平台开发，
                        并参与需求分析、阿里云服务器部署、数据库创建与修改和部分测试工作。期间学习了Springboot、Mybatis、solr、
                        beetl、阿里云负载均衡、数据库、虚拟机服务部署等技术。</p>
                    <hr>
                </div>
                <div class="item"><h3 class="title">2020.1.20-2020.6.15</h3>
                    <p class="text">
                        做关于流动商贩追踪和销售的APP平台的毕业设计，充分使用了实习所学知识并有所提升。</p>
                    <hr>
                </div>
                <div class="item"><h3 class="title">2019.6.22-2019.12.5</h3>
                    <p class="text">
                        进入杭州杭州匠把头科技责任有限公司担任Java后端工程师，主要参与软件项目后端开发，
                        并参与阿里云服务器部署、数据库创建与修改。期间学习了SpringCloud Netflix、oauth2、新服务器上服务的安装、best-pay、
                        微信sdk、quartz等技术，巩固了redis、centos服务部署、MySQL查询等技术。</p>
                    <hr>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "career",
        data() {
            return {
                show: false,
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
            width: 80%;
        }
    }

</style>