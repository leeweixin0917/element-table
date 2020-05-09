<template>
  <div>
    <lb-table :column="tableData.column"
      :data="tableData.data"
      :row-class-name="rowClassName"
      height="300"
      border
      @details="getOperations"
      @operation="getExamine">
    </lb-table>
  </div>
</template>

<script>
import LbTable from './lb-table/lb-table'
export default {
  name: 'ClickTable',
  components: {
    LbTable
  },
  data () {
    return {
      tableData: {
        column: [
          {
            prop: 'date',
            label: '日期'
          },
          {
            prop: 'name',
            label: '姓名'
          },
          {
            prop: 'id',
            label: '省份'
          },
          {
            prop: 'address',
            label: '城市'
          },
          // 操作列
          { prop: 'operation',
            label: '操作',
            list: [{
              id: 'examine', name: '查看'
            }, {
              id: 'compile', name: '编辑'
            }]
          }
        ],
        data: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  },
  methods: {
    getExamine (e) { // 根据table组件传的不同的id进行不同的操作
      if (e.id === 'examine') {
        console.log('查看')
      }
      if (e.id === 'compile') {
        console.log('编辑')
      }
    },
    getOperations (val) {
      console.log(val)
    },
    rowClassName ({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row'
      } else if (rowIndex === 3) {
        return 'success-row'
      }
      return ''
    }
  }
}
</script>

<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>
