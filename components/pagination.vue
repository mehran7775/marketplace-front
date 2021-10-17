<template>
<div>
  <div class="row">
    <div class="col-12 col-md-6 my-2">
      <div class="d-flex justify-content-center align-items-center" v-if="data.next_page_url || data.prev_page_url">
        <div class="px-1">
          <button type="button" class="btn bg-white" style="border-radius: 20px;"
                  @click="change_page(data.first_page_url)"
                  v-if="data.first_page_url && data.current_page != 1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="#999">
              <path d="M0 0h24v24H0V0z" fill="none"/>
              <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/>
            </svg>
          </button>
        </div>
        <div class="px-1 d-none d-md-block">
          <button type="button" class="btn bg-white" style="border-radius: 20px;"
                  @click="change_page(data.prev_page_url)" v-if="data.prev_page_url"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="#999">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
            </svg>
          </button>
        </div>
        <div class="px-1">
          <button type="button" class="btn bg-white" style="border-radius: 20px;" @click="change_page(data.prev_page_url)"
                  v-if="data.prev_page_url">{{ data.current_page - 1 }}
          </button>
        </div>
        <div class="px-1">
          <button type="button" class="btn bg-success text-white" style="border-radius: 20px;">{{
              data.current_page
            }}
          </button>
        </div>
        <div class="px-1">
          <button type="button" class="btn bg-white" style="border-radius: 20px;"
                  @click="change_page(data.path + '?page=' + (data.current_page + 1))"
                  v-if="data.current_page + 1 <  data.last_page"
          >{{ data.current_page + 1 }}
          </button>
        </div>
        <div class="px-1">
          <button type="button" class="btn bg-white" style="border-radius: 20px;"
                  @click="change_page(data.path + '?page=' + (data.current_page + 2))"
                  v-if="data.current_page + 2 <  data.last_page"
          >{{ data.current_page + 2 }}
          </button>
        </div>
        <div class="px-1 d-none d-md-block">
          <button type="button" class="btn bg-white" style="border-radius: 20px;"
                  @click="change_page(data.next_page_url)" v-if="data.next_page_url"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="#999">
              <path d="M0 0h24v24H0z" fill="none"/>
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
            </svg>
          </button>
        </div>
        <div class="px-1">
          <button type="button" class="btn bg-white" style="border-radius: 20px;"
                  @click="change_page(data.last_page_url)" v-if="data.last_page_url"
          >
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" fill="#999">
              <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/>
              <path d="M24 24H0V0h24v24z" fill="none"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!--<div class="col-12 col-md-6 my-2">
      <div class="d-flex justify-content-center align-items-center">
        <select class="custom-select" id="perpage" v-model="paginate_perpage" style="width: 90px; background-color: #dedede;" dir="ltr">
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="60">60</option>
          <option value="100">100</option>
        </select>
        <div class="mx-2">نمایش <span v-text="data.from"></span> - <span v-text="data.to"></span> از <span v-text="data.total"></span> رکورد</div>
      </div>-->
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "pagination",
  props : ['data', 'get_data', 'perpage'],
  data() {
    return {
      paginate_perpage: this.perpage.value,
    }
  },
  methods: {
    change_page(val) {
      this.get_data(val, () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
      });
    }
  },
  watch: {
    paginate_perpage(val) {
      this.perpage.value = val;
      this.get_data(this.data.first_page_url, () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
      });
    }
  },
}
</script>

<style scoped>
select#perpage:hover {
  background-color: #00bea5 !important;
  border-color: #00bea5 !important;
}
select#perpage:hover option {
   background-color: #dedede !important;
   border-color: #dedede !important;
}
</style>
