export default {
  title: '分页表格(自定义数据)',
  desc: '',
  tag: 'table-page',
  code: `
<template>
  <bc-table
    :config="tableConfig"
    :data="tableData"
    pagination
    :total="total"
    :params.sync="params"
    :api="getList"
  >
  </bc-table>
</template>
<script>
export default {
  data() {
    return {
      params: {
        page: 1,
        rows: 20,
      },
      total: 100,
      tableConfig: [
        { label: '姓名', prop: 'name' },
        { label: '年龄', prop: 'age' },
        { label: '身高', prop: 'height', unit: 'm' },
        { label: '体重', prop: 'weight', unit: 'kg' },
      ],
      tableData: basicData,
    }
  },
  methods: {
    getList() {
      const { rows } = this.params;
      const data = Mock.mock({
        [\`rows|\${rows}\`]: [{
          name: '@cname',
          age: '@integer(1,100)',
          height: '@float(100, 180, 2, 2)',
          weight: '@float(40, 100, 2, 2)'
        }]
      })
      this.tableData = data.rows;
    }
  }
}
</script>
  `
}
