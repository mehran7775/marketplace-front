<template>
  <div class="lable">
    <div class="title text-right pt-4 pr-5 d-none d-md-block">
      <h5>
        <label>
          <b>برچسب</b>
        </label>
      </h5>
    </div>
    <div id="carousel" class="mt-4">
      <div class="carousel-wrapper d-none d-md-block">
        <client-only>
          <carousel :per-page="per_page" v-bind="options">
            <slide v-for="i in 10" :key="i" class="img-wrapper">
              <x-item></x-item>
            </slide>
          </carousel>
        </client-only>
      </div>
      <div>
        <div class="d-md-none">
          <div class="container-fluid">
            <div class="row">
              <div v-for="i in 10" :key="i" class="col-4">
                <div class="row">
                  <x-item></x-item>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <slot name="advertise"> </slot>
  </div>
</template>

<script>
import xItem from "@/components/xItem";
export default {
  data() {
    return {
      options: {
        loop: true,
        paginationEnabled: false,
      },
      per_page: 3,
    };
  },
  components: {
    xItem,
  },
  mounted() {
    this.$nextTick(function () {
      this.onResize();
    });
    window.addEventListener("resize", this.onResize);
  },
  computed: {},
  methods: {
    onResize() {
      if (window.innerWidth > 340) {
        this.per_page = 3;
      }
      if (window.innerWidth > 576) {
        this.per_page = 3;
      }
      if (window.innerWidth > 768) {
        this.per_page = 3;
      }
      if (window.innerWidth > 992) {
        this.per_page = 4;
      }
      if (window.innerWidth > 1200) {
        this.per_page = 5;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.lable {
  .title {
    color: text_color;
  }
  //   @include mx_medium
}
.carousel-wrapper {
  cursor: grab;
  direction: ltr;

  text-align: center;
  @include medium {
    padding: 20px 0 40px 20px;
  }
  .img-wrapper {
    // margin:min(0.05rem, 0.2%);
    @include medium {
      //   margin: 0 0.2rem;
      margin: min(0.05rem, 0.05%);
    }
  }
}
</style>
