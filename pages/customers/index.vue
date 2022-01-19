<template>
  <div class="row px-0 px-md-4">
    <div class="col">
      <div class="row pt-0 pt-md-2">
        <b-card bg-variant="light" class="w-100 mt-0 mt-md-5">
          <div class="pt-2 mb-4"><h5 class="font-weight-bold">سفارشات</h5></div>
          <div class="px-3">
            <div class="overflow-auto">
              <table class="table table-borderless text-center">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      style="
                        background-color: #eee;
                        border-radius: 0 16px 16px 0;
                      "
                    >
                      #
                    </th>
                    <th scope="col" style="background-color: #eee">
                      کد پیگیری
                    </th>
                    <th scope="col" style="background-color: #eee">
                      نام فروشگاه
                    </th>
                    <th scope="col" style="background-color: #eee">
                      قیمت (ریال)
                    </th>
                    <th scope="col" style="background-color: #eee">
                      تاریخ ثبت
                    </th>
                    <th scope="col" style="background-color: #eee">وضعیت</th>
                    <th
                      scope="col"
                      style="
                        background-color: #eee;
                        border-radius: 16px 0px 0px 16px;
                      "
                    >
                      جزییات
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(order, index) in orders" :key="index">
                    <td>{{ order.id }}</td>
                    <td>{{ order.tracking_number }}</td>
                    <td>{{ order.store.name }}</td>
                    <td>{{ order.payment_price }}</td>
                    <td>{{ order.created_at }}</td>
                    <td>
                      <b-badge
                        :variant="OrderStatus.getStatus(order.status).variant"
                      >
                        {{ OrderStatus.getStatus(order.status).text }}
                      </b-badge>
                    </td>
                    <td>
                      <nuxt-link
                        class="btn p-0 m-0 text-danger"
                        :to="`/customers/orders/${order.id}`"
                      >
                        <span
                          class="
                            special-tooltip
                            btn btn-sm btn-clean btn-icon btn-icon-sm
                          "
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="20"
                            viewBox="0 0 24 24"
                            width="20"
                            fill="#bbb"
                          >
                            <path d="M0 0h24v24H0V0z" fill="none"></path>
                            <path
                              d="M12 4C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"
                            ></path>
                          </svg>
                        </span>
                      </nuxt-link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <hr v-if="orders.next_page_url || orders.prev_page_url" />

          <pagination
            v-if="orders.next_page_url || orders.prev_page_url"
            :data="orders"
            :get_data="get_data"
            :perpage="per_page"
          ></pagination>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import { orderService } from "~/services/apiServices";
import pagination from "~/components/pagination";
import OrderStatus from "~/constants/OrderStatus";
export default {
  layout: "panel-customer",
  data() {
    return {
      OrderStatus,
      orders: [
        {
          id: "j862r",
          store: {
            name: "aa",
            id: "eroxr",
          },
          tracking_number: "381632031264",
          payment_price: 103370,
          status: 3,
          created_at: "1400/06/28",
        },
      ],
    };
  },
  components: {
    pagination,
  },
  async created() {
    try {
      const { data } = await orderService.getCustomersOrders(
        this.$cookies.get("token-buyer")
      );
      this.orders = data.data;
    } catch (e) {
      console.log(e);
    }
  },
};
</script>

<style >
table > tbody > tr:not(:last-child) > td {
  border-bottom: 1px solid #dedede;
}
</style>