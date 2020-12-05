<template>
    <root-form
            ref="form"
            :model="form"
            :rules="rules"
    >
        <form-item
                label=""
                border
        >
            <radio
                    v-model="curRadio"
                    name="test"
                    label="1"
            >
                男
            </radio>
            <radio
                    v-model="curRadio"
                    name="test"
                    label="2"
            >
                女
            </radio>
            <radio
                    v-model="curRadio"
                    name="test"
                    label="4"
                    disabled
            >
                禁用
            </radio>
        </form-item>
    </root-form>
</template>

<script>
    export default {
        components: {
        },
        name: "test",
        data() {
            return {
                form: {},
                rules: {},
                curRadio: 1
            }
        }
    }
</script>

<style lang="scss">

</style>