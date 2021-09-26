<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col">
        <div class="row bg-warning">
          <header>
            <div class="bars_aside d-md-none" @click="show_aside">///</div>
            header
          </header>
        </div>
        <div class="row">
          <div class="aside" id="aside">z</div>
          <div class="body_admin">
            <Nuxt />
            {{ ip }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: "admin",

  // fetch({ $axios }) {
  //   $axios.get("/user/current").then((res) => {
  //     console.log(res);
  //     })
  //     .catch((e) => {
  //       console.log("e", e);
  //     });
  //   },

    async asyncData({ $axios }) {
      const ip = await $axios.$get('https://coreshop.paystar.ir', {
        headers:{
          Accept: 'application/json'
        }
      });
      return { ip };
    },

  mounted() {
    this.$nextTick(function () {
      this.onResize();
    });
    window.addEventListener("resize", this.onResize);
  },
  methods: {
    show_aside() {
      let aside = document.getElementById("aside");
      aside.style.transition = "all linear 0.3s";
      if (!aside.style.visibility || aside.style.visibility === "hidden") {
        aside.style.visibility = "visible";
        aside.style.right = 0;
      } else {
        aside.style.right = "-260px";
        aside.style.visibility = "hidden";
      }
    },
    onResize() {
      if (window.innerWidth > 768) {
        const aside = document.getElementById("aside");
        aside.style.visibility = "visible";
        aside.style.right = 0;
      }
    },
  },
};
</script>

<style scoped lang="scss">
.aside {
  width: 260px;
  background-color: red;
  @include medium {
    visibility: visible;
    position: unset;
    right: 0;
  }
  @include mx_medium {
    visibility: hidden;
    position: fixed;
    // opacity: 0;
    right: -260px;
    z-index: 999;
  }
}

.body_admin {
  width: calc(100% - 260px);
  background-color: royalblue;
  @include mx_medium {
    width: 100%;
  }
}
</style>