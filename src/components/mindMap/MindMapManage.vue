<template>
  <div class="MinMapManage">
    <van-nav-bar
      title="思维导图新增"
      left-text="返回"
      right-text=""
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="mindMapEditor">
      <van-field v-model="tempValue" placeholder="无标题" />
      <van-divider
        :style="{ margin: '8px 0', padding: '0 16px' }"
      ></van-divider>
      <div
        class="mindNodes"
        contenteditable="true"
        @focus="focusEditor"
        @input="inputEditor"
      >
        <template v-if="arrs.length <= 0">
          <van-icon name="plus" />
        </template>
        <template>
          <minmap-manage-com :childrens="arrs"></minmap-manage-com>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { NavBar, Icon, Field, Divider } from 'vant';
import minmapManageCom from '@/components/comm/minMapManageCom';
export default {
  name: 'MinMapManage',
  components: {
    vanNavBar: NavBar,
    vanField: Field,
    vanIcon: Icon,
    vanDivider: Divider,
    minmapManageCom
  },
  data() {
    return {
      tempValue: '',
      arrs: [
        {
          name: 'A',
          attr: 'aaaa'
        },
        {
          name: 'B',
          attr: '',
          children: [
            {
              name: 'B-1',
              attr: ''
            },
            {
              name: 'B-2',
              attr: '2',
              children: [
                {
                  name: 'B-1',
                  attr: ''
                }
              ]
            }
          ]
        },
        {
          name: 'B',
          attr: 'bbb'
        }
      ]
    };
  },
  methods: {
    focusEditor(editor) {
      // console.log(editor);
      debugger;
      if (this.arrs.length < 1) {
        this.arrs.push({
          name: null,
          attr: ''
        });
      }
    },
    inputEditor(type, editor) {
      // debugger;
      console.log(editor.FocusEvent);
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="less" scoped>
.MinMapManage {
  .mindMapEditor {
    .mindNodes {
      margin: 0 16px;
    }
  }
}
</style>
