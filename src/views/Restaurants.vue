<template>
  <div class="container py-5">
    <!-- NavTabs element -->
    <NavTabs />
    <!-- 餐廳類別標籤 RestaurantsNavPills -->

    <div class="row">
       <!-- 餐廳卡片 RestaurantCard -->
       <RestaurantCard v-for="restaurant in restaurants"
       :key="restaurant.id"
       :initial-restaurant="restaurant"/>
    </div>

    <!-- 分頁標籤 RestaurantPagination -->
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs'
import RestaurantCard from './../components/RestaurantCard'

const dummyData = {
    "restaurants": [
        {
            "id": 4,
            "name": "Adalberto Anderson",
            "tel": "313.718.9513 x0422",
            "address": "3047 Marge Key",
            "opening_hours": "08:00",
            "description": " ufun\r\n \r\nQuaerat molestiae placeat fuga et vero n",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=61.21382535340547",
            "viewCounts": 510,
            "createdAt": "2020-02-28T14:38:32.000Z",
            "updatedAt": "2020-03-27T08:17:48.000Z",
            "CategoryId": 4,
            "Category": {
                "id": 4,
                "name": "墨西哥料理",
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-02-28T14:38:32.000Z"
            },
            "isFavorited": true,
            "isLiked": false
        },
        {
            "id": 5,
            "name": "Mitchel Beatty",
            "tel": "171-324-8413",
            "address": "85408 Francisca Square",
            "opening_hours": "08:00",
            "description": "Aut cumque excepturi exercitationem libero volupta",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=86.63208465551794",
            "viewCounts": 78,
            "createdAt": "2020-02-28T14:38:32.000Z",
            "updatedAt": "2020-03-27T06:57:30.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-02-28T14:38:32.000Z"
            },
            "isFavorited": false,
            "isLiked": true
        },
        {
            "id": 6,
            "name": "Vicenta Gutkowski",
            "tel": "128-905-3953",
            "address": "371 Reuben Vista",
            "opening_hours": "08:00",
            "description": "labore",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=16.659471621888123",
            "viewCounts": 5,
            "createdAt": "2020-02-28T14:38:32.000Z",
            "updatedAt": "2020-03-27T06:58:53.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-02-28T14:38:32.000Z"
            },
            "isFavorited": false,
            "isLiked": true
        },
        {
            "id": 7,
            "name": "Miss Letitia Will",
            "tel": "(770) 750-6811 x99988",
            "address": "8145 Laisha Keys",
            "opening_hours": "08:00",
            "description": "Aut earum molestiae et ducimus adipisci ut maxime.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=44.558618229229",
            "viewCounts": 10,
            "createdAt": "2020-02-28T14:38:32.000Z",
            "updatedAt": "2020-03-27T06:59:44.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-02-28T14:38:32.000Z"
            },
            "isFavorited": true,
            "isLiked": false
        },
        {
            "id": 8,
            "name": "Mr. Johnny Abshire",
            "tel": "333-243-4940 x9008",
            "address": "075 Murray Stream",
            "opening_hours": "08:00",
            "description": "Qui omnis optio neque sit rerum nisi. Repellat qui",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=15.225573809911651",
            "viewCounts": 13,
            "createdAt": "2020-02-28T14:38:32.000Z",
            "updatedAt": "2020-03-27T06:59:53.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-02-28T14:38:32.000Z"
            },
            "isFavorited": true,
            "isLiked": false
        },
        {
            "id": 9,
            "name": "Luz Schaden",
            "tel": "1-712-742-4184",
            "address": "4929 Wisozk Centers",
            "opening_hours": "08:00",
            "description": "Culpa deserunt molestiae eligendi est ex incidunt.",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=6.497835218728576",
            "viewCounts": 2,
            "createdAt": "2020-02-28T14:38:32.000Z",
            "updatedAt": "2020-03-27T07:00:16.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-02-28T14:38:32.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 10,
            "name": "Corbin Gusikowski",
            "tel": "(506) 198-3977",
            "address": "4747 Lubowitz Brook",
            "opening_hours": "08:00",
            "description": "Aut quia aut ea nostrum quae doloremque necessitat",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=6.84802493817025",
            "viewCounts": 2,
            "createdAt": "2020-02-28T14:38:32.000Z",
            "updatedAt": "2020-03-22T05:10:42.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-02-28T14:38:32.000Z"
            },
            "isFavorited": true,
            "isLiked": false
        },
        {
            "id": 11,
            "name": "Vergie Considine",
            "tel": "351.951.8030 x0330",
            "address": "8865 Conrad Mill",
            "opening_hours": "08:00",
            "description": "Quia omnis natus est praesentium dolores aliquid d",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=0.7508871784973614",
            "viewCounts": 1,
            "createdAt": "2020-02-28T14:38:32.000Z",
            "updatedAt": "2020-03-09T06:09:15.000Z",
            "CategoryId": 5,
            "Category": {
                "id": 5,
                "name": "素食料理",
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-02-28T14:38:32.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        },
        {
            "id": 12,
            "name": "Oliver Padberg",
            "tel": "865-523-0270 x58016",
            "address": "771 Oberbrunner Hollow",
            "opening_hours": "08:00",
            "description": "Magni qui facilis asperiores. Voluptatem cumque co",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=22.348939427568215",
            "viewCounts": 1,
            "createdAt": "2020-02-28T14:38:32.000Z",
            "updatedAt": "2020-03-22T05:11:14.000Z",
            "CategoryId": 1,
            "Category": {
                "id": 1,
                "name": "中式料理",
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-02-28T14:38:32.000Z"
            },
            "isFavorited": false,
            "isLiked": true
        },
        {
            "id": 13,
            "name": "Mrs. Eileen Lockman",
            "tel": "(597) 404-9974 x003",
            "address": "383 Stroman Center",
            "opening_hours": "08:00",
            "description": "Vitae id incidunt animi qui sapiente perferendis i",
            "image": "https://loremflickr.com/320/240/restaurant,food/?random=54.950245749491145",
            "viewCounts": 2,
            "createdAt": "2020-02-28T14:38:32.000Z",
            "updatedAt": "2020-03-25T14:41:25.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-02-28T14:38:32.000Z"
            },
            "isFavorited": false,
            "isLiked": false
        }
    ],
    "categories": [
        {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2020-02-28T14:38:32.000Z",
            "updatedAt": "2020-02-28T14:38:32.000Z"
        },
        {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2020-02-28T14:38:32.000Z",
            "updatedAt": "2020-02-28T14:38:32.000Z"
        },
        {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2020-02-28T14:38:32.000Z",
            "updatedAt": "2020-02-28T14:38:32.000Z"
        },
        {
            "id": 4,
            "name": "墨西哥料理",
            "createdAt": "2020-02-28T14:38:32.000Z",
            "updatedAt": "2020-02-28T14:38:32.000Z"
        },
        {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2020-02-28T14:38:32.000Z",
            "updatedAt": "2020-02-28T14:38:32.000Z"
        },
        {
            "id": 6,
            "name": "美式料理",
            "createdAt": "2020-02-28T14:38:32.000Z",
            "updatedAt": "2020-03-27T09:46:32.000Z"
        }
    ],
    "categoryId": "",
    "page": 1,
    "totalPage": [
        1,
        2,
        3,
        4,
        5
    ],
    "prev": 1,
    "next": 2
}
export default {
  components: {
    NavTabs,
    RestaurantCard
  },
  data () {
    return {
      categories: [],
      categoryId: undefined,
      currentPage: 1,
      restaurants: [],
      totalPage: undefined
    }
  },
  created() {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants () {
      this.categories = dummyData.categories
      this.categoryId = dummyData.categoryId
      this.currentPage = dummyData.page
      this.restaurants = dummyData.restaurants
      this.totalPage = dummyData.totalPage.length
    }
  }
}
</script>
