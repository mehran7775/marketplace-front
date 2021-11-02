<template>
  <div class="bg-white p-3 h-100" style="border-radius: 20px; box-shadow: 0 0 5px #8ce3d6;">
    <div class="text-left my-3">
        <span :style="'background-color: '+color+'; border-radius: 7px;padding: 0.8rem'">
          <slot></slot>
        </span>
    </div>
    <div class="px-2">
      <span class="h4" style="letter-spacing: 2px;">{{number}}</span>
      <span v-if="has_rail" class="mx-1">ریال</span>
    </div>
    <div class="my-2 px-2">
      <div class="h5">{{ title }}
        <a href="#" v-if="info" class="special-tooltip btn btn-sm btn-clean btn-icon btn-icon-sm rounded-circle">
          <span class="tooltip-text" v-text="info"></span>
          <i class="fas fa-info-circle"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard-box",
  props : ['title','number','color', 'info', 'has_rail'],
}
</script>

<style>
.special-tooltip{
  position: relative;
  display: inline-block;
  cursor: pointer;
}
.special-tooltip .tooltip-text {
  font-size: 12px;
  visibility: hidden;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 5px 10px;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  opacity: 0;
  transition: opacity 0.3s;
  min-width: 120px !important;
}
.special-tooltip .tooltip-text::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}
.special-tooltip:hover .tooltip-text {
  visibility: visible;
  opacity: 1;
}
</style>