<template>
  <section class="wrapper">
    <aside-menu :menus="config" />
    <main>
      <component
        class="container"
        v-for="item in asides"
        :key="item.prop"
        :is="item.prop"
      ></component>
    </main>
  </section>
</template>

<script>
import { line2Camel } from '@/utils/tools';
import AsideMenu from '@/views/components/asideMenu.vue';
import BasicInput from './example/basic';
import InputBorder from './example/border';
import InputDefault from './example/defaultValue';
import InputDisplay from './example/display';
import InputPassword from './example/password';
import { input as config } from '@/config';
export default {
  name: 'inputExample',
  components: {
    AsideMenu,
    BasicInput,
    InputBorder,
    InputDefault,
    InputDisplay,
    InputPassword,
  },
  computed: {
    asides() {
      const res = config.map(item => {
        return {
          ...item,
          prop: line2Camel(item.prop),
        }
      })
      return res;
    }
  },
  data() {
    return {
      config,
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
}
</style>
