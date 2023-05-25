<template>
  <div class="add-application-page-container">
    <custom-nav></custom-nav>
    <div
        id="dropTarget"
        @dragover="dragOver"
        @drop="drop"
      >
        <div
          v-for="item in droppedItems"
          :key="item.id"
          class="dropped-item"
          :style="`top: ${item.top}px; left: ${item.left}px`"
        ></div>
      </div>
      <setting></setting>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import CustomNav from './components/Nav.vue'
import Setting from './components/Setting.vue';
const droppedItems = reactive([]);
  const dragStart = (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
  };

  const dragOver = (event) => {
    event.preventDefault();
  };

  const drop = (event) => {
    event.preventDefault();
    console.log(event)
    const draggedElementId = event.dataTransfer.getData("text/plain");
    const dropTargetRect = event.target.getBoundingClientRect();

    const offsetX = event.clientX - dropTargetRect.left;
    const offsetY = event.clientY - dropTargetRect.top;

    const newItem = {
      id: Date.now(),
      top: offsetY,
      left: offsetX,
    };

    droppedItems.push(newItem);
  };
</script>

<style lang="scss">
.add-application-page-container{
    display: flex;
    #dropTarget {
        position: relative;
      width: 1280px;
      height: 1024px;
      background: green;
    }
  
    .dropped-item {
      position: absolute;
      width: 50px;
      height: 50px;
      background: red;
    }
}
</style>