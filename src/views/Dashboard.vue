<template>
  <div class="animated fadeIn">
    <b-form-group>
      <b-form-input
        v-model="inputValue"
        type="text"
        class="form-control-success"
        placeholder="关键词搜索"
      ></b-form-input>
    </b-form-group>
    <b-row>
      <template v-for="(item,index) in dashboardList">
        <b-col
          sm="6"
          md="4"
          :key="index"
          v-if="item.header.includes(inputValue)||item.body.includes(inputValue)"
        >
          <b-card class="cursor" :class="item.class">
            <div slot="header">
              <span v-html="item.header"></span>
              <b-badge v-if="item.right" :variant="item.variant" class="float-right">{{item.right}}</b-badge>
            </div>
            <span v-html="`<a href='${item.link}' target='_blank'>${item.body}</a>`"></span>
          </b-card>
        </b-col>
      </template>
    </b-row>
  </div>
</template>

<script>
import { dashboardList } from "@/shared/TXT.js";
export default {
  name: "dashboard",
  data() {
    return {
      dashboardList,
      inputValue: ""
    };
  },
  created() {
    this.listInit();
  },
  methods: {
    // 基础列表数据处理
    listInit() {
      this.dashboardList = this.$deepClone(dashboardList);
      this.dashboardList.forEach((item, index) => {
        item.link = item.body;
        if (index % 3 == 0) {
          item.variant = "primary";
          item.class = "card-accent-primary";
        } else if (index % 3 == 1) {
          item.variant = "danger";
          item.class = "card-accent-danger";
        } else {
          item.variant = "success";
          item.class = "card-accent-success";
        }
      });
    }
  },
  watch: {
    inputValue() {
      this.listInit();
      this.dashboardList.forEach(item => {
        if (item.header.includes(this.inputValue)) {
          item.header = item.header.replace(
            new RegExp(this.inputValue, "gi"),
            `<span class="primary_title">${this.inputValue}</span>`
          );
        }
        if (item.body.includes(this.inputValue)) {
          item.body = item.body.replace(
            new RegExp(this.inputValue, "gi"),
            `<span class="primary_title">${this.inputValue}</span>`
          );
        }
      });
    }
  }
};
</script>

<style>
.primary_title {
  background: #fff000;
}
</style>
