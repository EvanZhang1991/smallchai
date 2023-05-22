<template>
    <div class="nav-list-component-container">
      <div
        id="dragElement"
        draggable="true"
        @dragstart="dragStart"
      ></div>
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
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue';
  
  export default {
    setup() {
      const droppedItems = reactive([]);
  
      const dragStart = (event) => {
        event.dataTransfer.setData("text/plain", event.target.id);
      };
  
      const dragOver = (event) => {
        event.preventDefault();
      };
  
      const drop = (event) => {
        event.preventDefault();
  
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
  
      return {
        dragStart,
        dragOver,
        drop,
        droppedItems,
      };
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .nav-list-component-container {
    #dragElement {
      width: 50px;
      height: 50px;
      background: red;
    }
  
    #dropTarget {
      position: relative;
      width: 500px;
      height: 500px;
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
  