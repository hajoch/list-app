<template>
  <transition name="fade">
    <div class="item">
        <input type="checkbox" name="" :id="id">
        <label :for="id">{{ item.title }}</label>
    </div>
  </transition>
</template>

<script>
let GID = 1
export default {
    props: {
        item: {
            type: Object
        }
    },
    data () {
        return {
            id: `item-${GID++}`
        }
    },
}
</script>

<style lang="scss">
.item {
  display: flex;
  padding: 12px 0;
  border-bottom: 1px solid #eee;
  font-size: 14px;
}
.item input {
  display: none;
}
.item label {
  flex: 1;
  line-height: 20px;
}
.item label:before,
.item label:after {
  content: '';
  display: inline-block;
  margin-right: 20px;
  margin-top: 1px;
  width: 14px;
  height: 14px;
  vertical-align: top;
}
.item label:before {
  border: 1px solid #ccc;
  border-radius: 2px;
  background-color: white;
}
.item label:after {
  content: '\f00c';
  position: relative;
  display: none;
  z-index: 10;
  margin-right: -16px;
  width: 10px;
  height: 10px;
  padding: 3px;
  border-radius: 2px;
  font: normal normal normal 10px/1 FontAwesome;
  color: white;
  background-color: #ccc;
  float: left;
}
.item input:checked + label:after {
  display: inline-block;
}
</style>