<template>
  <div style="100%">
    <el-aside width="200px">
      <el-menu>
        <template v-for="item in data">
          <!-- 有子菜单，嵌套菜单 -->
          <el-submenu
            v-if="hasChildren(item)"
            :key="item.name"
            :index="item.name"
          >
            <template slot="title">
              <i :class="getIconCls(item.meta.icon)"></i>
              {{ item.meta.title }}
            </template>
            <template v-for="child in item.children">
              <el-submenu
                v-if="hasChildren(child)"
                :key="child.name"
                :index="child.name"
              >
                <template slot="title">{{ item.meta.title }}</template>
                <el-menu-item :key="child.name" :index="child.name">
                  <!-- 这里用nuxt跳转(子菜单的子菜单......) -->
                  <nuxt-link :to="child.path">{{ child.meta.title }}</nuxt-link>
                </el-menu-item>
              </el-submenu>
              <el-menu-item v-else :key="child.name" :index="child.name">
                <!-- 这里用nuxt跳转(子菜单) -->
                <nuxt-link :to="child.path">{{ child.meta.title }}</nuxt-link>
              </el-menu-item>
            </template>
          </el-submenu>
          <!-- 只有一级菜单 -->
          <template v-else> 
            <el-menu-item :key="item.name" index="item.name">
              <i :class="getIconCls(item.meta.icon)"></i>
              <!-- 这里 -->
              <nuxt-link :to="item.path">{{ item.meta.title }}</nuxt-link>
            </el-menu-item>
          </template>
        </template>
      </el-menu>
    </el-aside>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
  props: {
    data: { type: Array, default: () => [] },
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    hasChildren(item) {
      return item.children && item.children.length > 0;
    },
    getIconCls(iconName) {
      return `el-icon-${iconName}`;
    },
  },
};
</script>
<style lang="scss" scoped>
.el-aside {
  color: #333;
  border-right: solid 1px #e6e6e6;
  height: 100%;
  .el-menu {
    border-right: 0;
  }
}
</style>
