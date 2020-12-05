<template>
    <div class="h5-input-view">
        <input class="H5-input value-input" :focus="focus" :type="inputType" :value="value" @input="onInput"
               :placeholder="placeholder" :password="type==='password'&&!showPassword"
               @focus="onFocus" @blur="onBlur"/>
        <!-- 优先显示密码可见按钮 -->
        <div v-if="clearable&&!displayable&&value.length" class="h5-input-icon">
            <i class="ccyicon icon-close_filled" color="#666666" type="clear" @click="clear"/>
        </div>
        <div v-if="displayable" class="h5-input-icon">
            <i class="ccyicon icon-view" :style="{color:showPassword?'#666666':'#cccccc'}" @click="display"/>
        </div>
    </div>
</template>

<script>
    export default {
        components: {},
        props: {
            /**
             * 输入类型
             */
            type: String,
            /**
             * 值
             */
            value: String,
            /**
             * 占位符
             */
            placeholder: String,
            /**
             * 是否显示清除按钮
             */
            clearable: {
                type: [Boolean, String],
                default: false
            },
            /**
             * 是否显示密码可见按钮
             */
            displayable: {
                type: [Boolean, String],
                default: false
            },
            /**
             * 自动获取焦点
             */
            focus: {
                type: [Boolean, String],
                default: false
            }
        },
        model: {
            prop: 'value',
            event: 'input'
        },
        data() {
            return {
                /**
                 * 显示密码明文
                 */
                showPassword: false,
                /**
                 * 是否获取焦点
                 */
                isFocus: false
            }
        },
        computed: {
            inputType() {
                const type = this.type;
                return type === 'password' ? 'text' : type
            }
        },
        methods: {
            clear() {
                this.$emit('input', '')
            },
            display() {
                this.showPassword = !this.showPassword
            },
            onFocus() {
                this.isFocus = true
            },
            onBlur() {
                this.$nextTick(() => {
                    this.isFocus = false
                })
            },
            onInput(e) {
                this.$emit('input', e.currentTarget.value)
            }
        }
    }
</script>

<style>
    .h5-input-view {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        position: relative;
        flex: 1;
    }

    .h5-input-input {
        flex: 1;
        width: 100%;
        min-height: 100%;
        line-height: inherit;
        background-color: rgba(0, 0, 0, 0);
    }

    .h5-input-icon {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 20px;
        font-size: 14px;
        padding: 16px 4px;
        color: #666666;
    }

    .value-input[password] {
        -webkit-text-security: disc !important;
    }

</style>
