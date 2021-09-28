<template>
  <div class="container-fluid" id="panel_admin">
    <div class="row">
      <div class="col">
        <div class="row bg-warning">
          <header>
            <div class="bars_aside d-md-none" @click="toggle_aside">
              <fa icon="bars" size="2x"></fa>
            </div>
          </header>
        </div>
        <div class="row">
          <div class="aside pb-3" id="aside">
            <div class="row">
              <div class="col">
                <div class="pl-3 pt-2 d-md-none">
                  <span @click="toggle_aside" class="cursor_pointer"
                    ><fa icon="times" size="lg"></fa
                  ></span>
                </div>
                <div class="profile text-center pt-4">
                  <b-avatar
                    class="m-auto"
                    src="https://placekitten.com/300/300"
                    size="7rem"
                  ></b-avatar>
                  <div class="py-3">
                    <span class="font-weigt-bold">نام کاربر</span>
                  </div>
                </div>
                <div id="menu_sidebar">
                  <ul>
                    <li><nuxt-link to="#">فروشگاه ها</nuxt-link></li>
                    <li><nuxt-link to="#">قالقفال</nuxt-link></li>
                    <li><nuxt-link to="#">فقاقف</nuxt-link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="body_admin bg-info">
            <Nuxt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(function () {
      this.onResize();
    });
    window.addEventListener("resize", this.onResize);
  },
  methods: {
    toggle_aside() {
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
#panel_admin {
  .bars_aside{
    color: $bac_dark_color;
    margin:1rem ;
    cursor: pointer;
  }
  .aside {
    width: 260px;
    background-color: $bac_dark_color;
    @include medium {
      visibility: visible;
      position: unset;
      right: 0;
    }
    @include mx_medium {
      visibility: hidden;
      position: fixed;
      right: -260px;
      z-index: 999;
    }

    #menu_sidebar {
      ul {
        width: 100%;
        // background-color: yellow;
        padding: 0;
        margin: 0;

        li {
          width: 100%;
          list-style: none;
          a {
            display: block;
            background-color: $bac_dark_color3;
            width: 85%;
            margin: 0.3rem auto;
            text-decoration: none;
            color: $success;
            border-radius: 15px;
            text-align: center;
            padding: 0.5rem 0;
            transition: all 0.2s;
          }
          a:hover {
            background-color: $bac_dark_color2;
          }
        }
      }
    }
  }

  .body_admin {
    width: calc(100% - 260px);
    @include mx_medium {
      width: 100%;
    }
  }
}
</style>
