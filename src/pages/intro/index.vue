<template>
    <div
            class="container"
            @mousewheel="mouse"
            :style="{
    backgroundColor:`${bgcolor}`,
    height: `${clientHeight}`
  }">
        <div class="nav">
            <i class="ccyicon nav-item" :class="current===0?'icon-radio':'icon-circle'" title="个人信息" @click="current = 0"/>
            <i class="ccyicon nav-item" :class="current===1?'icon-radio':'icon-circle'" title="技术栈" @click="current = 1"/>
            <i class="ccyicon nav-item" :class="current===2?'icon-radio':'icon-circle'" title="作品集" @click="current = 2"/>
            <i class="ccyicon nav-item" :class="current===3?'icon-radio':'icon-circle'" title="生涯" @click="current = 3"/>
            <i class="ccyicon nav-item" :class="current===4?'icon-radio':'icon-circle'" title="联系方式" @click="current = 4"/>
        </div>
        <transition
                :duration="{ enter: 1500, leave: 1500 }"
                :leave-active-class="'animated ' + leaveanimate"
                :enter-active-class="'animated ' + enteranimate">
            <div class="section" :style="{height: `${clientHeight}`,backgroundColor: secBgColor[0]}" v-if="current === 0">
                <div class="sec">
                    <info/>
                </div>
            </div>
        </transition>
        <transition
                :duration="{ enter: 1500, leave: 1500 }"
                :leave-active-class="'animated ' + leaveanimate"
                :enter-active-class="'animated ' + enteranimate">
            <div class="section" :style="{height: `${clientHeight}`,backgroundColor: secBgColor[1]}" v-if="current === 1">
                <div class="sec">
                    <skill/>
                </div>
            </div>
        </transition>
        <transition
                :duration="{ enter: 1500, leave: 1500 }"
                :leave-active-class="'animated ' + leaveanimate"
                :enter-active-class="'animated ' + enteranimate">
            <div class="section" :style="{height: `${clientHeight}`,backgroundColor: secBgColor[2]}" v-if="current === 2">
                <div class="sec">
                    <profile/>
                </div>
            </div>
        </transition>
        <transition
                :duration="{ enter: 1500, leave: 1500 }"
                :leave-active-class="'animated ' + leaveanimate"
                :enter-active-class="'animated ' + enteranimate">
            <div class="section" :style="{height: `${clientHeight}`,backgroundColor: secBgColor[3]}" v-if="current === 3">
                <div class="sec">
                    <career/>
                </div>
            </div>
        </transition>
        <transition
                :duration="{ enter: 1500, leave: 1500 }"
                :leave-active-class="'animated ' + leaveanimate"
                :enter-active-class="'animated ' + enteranimate">
            <div class="section" :style="{height: `${clientHeight}`,backgroundColor: secBgColor[4]}" v-if="current === 4">
                <div class="sec">
                    <contact/>
                </div>
            </div>
        </transition>
        <!-- 下方的下一页按钮 -->
        <div class="next"><i class="ccyicon icon-arrow_down setarrow" @click="nextPage"/></div>
        <beian pos="fixed"/>
    </div>
</template>
<script>
    import info from './info'
    import skill from './skill'
    import career from './career'
    import profile from './profile'
    import contact from './contact'
    import beian from '../beian'

    export default {
        components: {
            info,
            skill,
            profile,
            career,
            contact,
            beian
        },
        data() {
            return {
                // ..
                current: 0,
                bgcolor: '#49500a',
                secBgColor: ['#144949', '#009688', '#FFB800', 'rgba(13,16,110,.575)', '#2F4056'],
                clientHeight: '900px',
                lastscroll: 0,
                leaveanimate: 'zoomOutUp',
                enteranimate: 'zoomInDown'
            }
        },
        methods: {
            mouse(event) {
                // 防止用户短时间内滚动多次，设置滚动间隔大于一秒才能生效
                // 判断滚动间隔时间
                let scrollduration = event.timeStamp - this.lastscroll
                console.log(scrollduration)
                if (scrollduration > 1000) {
                    // 将这一次的滚动时间记录为上一次合法的滚动时间
                    this.lastscroll = event.timeStamp
                    // console.log('合法的滚动')
                    // 判断滚动方向进行操作
                    if (event.deltaY > 0) {
                        //down
                        if (this.current === 4) {
                            this.current = 0
                        } else {
                            this.current = this.current + 1
                        }
                    } else {
                        //up
                        if (this.current === 0) {
                            this.current = 4
                        } else {
                            this.current = this.current - 1
                        }
                    }
                } else {
                    // 如果滚动不合法就不做任何操作
                    // console.log('请爱护你的鼠标不要连续滚动！')
                }
            },
            nextPage() {
                if (this.current === 4) {
                    this.current = 0
                } else {
                    this.current = this.current + 1
                }
            }
        },
        mounted() {
            this.clientHeight = `${document.documentElement.clientHeight}px`
            // 然后监听window的resize事件．在浏览器窗口变化时再设置下背景图高度
            window.onresize = () => {
                this.clientHeight = `${document.documentElement.clientHeight}px`
                console.log(this.clientHeight)
            }
        }
    }
</script>
<style lang="scss" scoped>

    .position {
        position: fixed;
        top: 0;
        left: 0;
    }

    .position-right {
        position: fixed;
        top: 50%;
        right: 20px;
    }

    .position-bottom {
        position: fixed;
        bottom: 20px;
        left: 47%;
    }

    @-moz-keyframes myfirst {
        0%, 20%, 50%, 80%, 100% {
            -moz-transform: translateY(0);
            transform: translateY(0);
        }
        40% {
            -moz-transform: translateY(-30px);
            transform: translateY(-30px);
        }
        60% {
            -moz-transform: translateY(-15px);
            transform: translateY(-15px);
        }
    }

    @-webkit-keyframes myfirst {
        0%, 20%, 50%, 80%, 100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        40% {
            -webkit-transform: translateY(-30px);
            transform: translateY(-30px);
        }
        60% {
            -webkit-transform: translateY(-15px);
            transform: translateY(-15px);
        }
    }

    @keyframes myfirst {
        0%, 20%, 50%, 80%, 100% {
            -moz-transform: translateY(0);
            -ms-transform: translateY(0);
            -webkit-transform: translateY(0);
            transform: translateY(0);
        }
        40% {
            -moz-transform: translateY(-30px);
            -ms-transform: translateY(-30px);
            -webkit-transform: translateY(-30px);
            transform: translateY(-30px);
        }
        60% {
            -moz-transform: translateY(-15px);
            -ms-transform: translateY(-15px);
            -webkit-transform: translateY(-15px);
            transform: translateY(-15px);
        }
    }

    .container {
        width: 100%;
        height: 100%;
        color: #FFF;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 100% 100%;
        -moz-background-size: 100% 100%;
        // opacity: .7;
        .section {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            @extend .position;

            .sec {
                width: 100%;
            }
        }

        .next {
            // .position-bottom;
            .setarrow {
                // position:relative;
                @extend .position-bottom;
                font-size: 60px;
                color: #FFF;
                opacity: .8;
                cursor: pointer;
                animation: myfirst 5s infinite;
                @media screen and (max-width: 768px) {
                    font-size: 20px;
                }
            }
        }
    }

    .nav {
        position: fixed;
        z-index: 998;
        right: 10px;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .nav-item {
            display: block;
            font-size: $text-size-base;
            animation: pc-scale-spring 1s;
            line-height: $text-size-base+12px;
            padding: 3px 0;
        }

        .ccyicon {
            color: #FFF;
        }

        .icon-radio {
            font-size: 30px;
            color: $color-primary;
        }
    }
</style>
