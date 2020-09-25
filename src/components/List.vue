<template>
  <div>
      <ul>
          <li
            v-for="item in items"
            :key="item.id"
          >
                <item
                    :item="item"
                />
          </li>
      </ul>
  </div>
</template>

<script>
import Item from './Item.vue'

export default {
    components: {
        Item
    },
    data () {
        return {
            items: [
                { title: 'Potteplante'},
                { title: 'Rensemiddel til kaffemaskinen'},
                { title: 'Bakepapir'},
            ]
        }
    },
}
</script>

<style scoped lang="scss">
    item-list {
        padding: 0 5rem;
        height: 400px; //temporary
        transition: all 0.5 ease;
        list-style-type: none;

        > ul,
        > ul > li {
            display: flex;
            height: 100%;
        }
        > ul > li {
            flex: 1;
            transition: all 0.5 ease;
        }
    }
</style>
