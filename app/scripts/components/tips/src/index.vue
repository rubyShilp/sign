<template>
  <popper
    :trigger="trigger"
    :options="{
      placement: placement,
      modifiers: { offset: { offset: '0,10px' } },
    }"
  >
    <div class="popper">
      <slot name="menu"></slot>
    </div>
    <div class="popper-btton-" slot="reference">
      <slot></slot>
    </div>
  </popper>
</template>
<script src="./tips.js"></script>
<style lang="less" scoped>
.popper-btton- {
  width: auto;
  height: auto;
  display: inline-block;
}
</style>
