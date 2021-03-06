export default {
  title: '基本用法',
  desc: 'bcTable的基本用法',
  tag: 'basic-table',
  code: `
<template>
  <bc-table
    :config="tableConfig"
    :data="tableData"
  />
</template>
<script>
export default {
  data() {
    return {
      tableConfig: [
        { label: '姓名', prop: 'name' },
        { label: '年龄', prop: 'age' },
        { label: '身高', prop: 'height', unit: 'm' },
        { label: '体重', prop: 'weight', unit: 'kg' },
      ],
      tableData: Mock.mock({
        'rows|10': [{
          name: '@cname',
          age: '@integer(1,100)',
          height: '@float(100, 180, 2, 2)',
          weight: '@float(40, 100, 2, 2)'
        }],
      }).rows
    }
  }
}
</script>
  `
}
