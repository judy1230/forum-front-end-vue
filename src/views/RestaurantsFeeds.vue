<template>
  <div class="container py-5">
    <NavTabs />

    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :comments="comments" />
      </div>
    </div>
  </div>
</template>
<script>
import NavTabs from './../components/NavTabs'
import NewestRestaurants from './../components/NewestRestaurants'
import NewestComments from './../components/NewestComments'

const dummyData = {
    "restaurants": [
        {
            "id": 1362,
            "name": "荷蘭小鬆餅",
            "tel": "12312",
            "address": "台北市",
            "opening_hours": "11:00",
            "description": "~~~!!!!!!",
            "image": null,
            "viewCounts": 0,
            "createdAt": "2020-03-23T16:11:25.000Z",
            "updatedAt": "2020-03-26T08:47:53.000Z",
            "CategoryId": 992,
            "Category": {
                "id": 992,
                "name": "甜點",
                "createdAt": "2020-03-13T04:10:48.000Z",
                "updatedAt": "2020-03-13T04:10:48.000Z"
            }
        },
        {
            "id": 1202,
            "name": "鰻魚郎",
            "tel": "123",
            "address": "仁愛公園",
            "opening_hours": "01:00",
            "description": "123",
            "image": null,
            "viewCounts": 1,
            "createdAt": "2020-03-09T09:17:22.000Z",
            "updatedAt": "2020-03-22T06:09:05.000Z",
            "CategoryId": 2,
            "Category": {
                "id": 2,
                "name": "日本料理",
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-02-28T14:38:32.000Z"
            }
        },
        {
            "id": 1192,
            "name": "恬甜紅豆餅",
            "tel": "1-843-220-5751 x884",
            "address": "241新北市三重區中正北路145巷2號",
            "opening_hours": "01:00",
            "description": "12323",
            "image": null,
            "viewCounts": 0,
            "createdAt": "2020-03-09T01:33:53.000Z",
            "updatedAt": "2020-03-22T01:15:15.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-02-28T14:38:32.000Z"
            }
        },
        {
            "id": 1162,
            "name": "21321",
            "tel": "",
            "address": "",
            "opening_hours": "",
            "description": "",
            "image": null,
            "viewCounts": 0,
            "createdAt": "2020-03-08T09:34:18.000Z",
            "updatedAt": "2020-03-08T13:13:22.000Z",
            "CategoryId": 3,
            "Category": {
                "id": 3,
                "name": "義大利料理",
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-02-28T14:38:32.000Z"
            }
        },
        {
            "id": 4,
            "name": "Adalberto Anderson",
            "tel": "313.718.9513 x0422",
            "address": "3047 Marge Key",
            "opening_hours": "08:00",
            "description": " ufun\r\n \r\nQuaerat molestiae placeat fuga et vero neque perferendis qui et. Neque ut a hic dignissimos ea voluptas. Dignissimos distinctio perspiciatis minima.\r\n \r\nRecusandae ut et. Aut ipsum officia voluptatem soluta maiores atque quia. Veniam temporibus occaecati sunt consequuntur tempora dolore. Accusamus qui eum. Possimus dolore et sequi expedita praesentium sed dolore.",
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
            }
        },
        {
            "id": 5,
            "name": "Mitchel Beatty",
            "tel": "171-324-8413",
            "address": "85408 Francisca Square",
            "opening_hours": "08:00",
            "description": "Aut cumque excepturi exercitationem libero voluptates impedit. Enim animi repellendus tempora doloremque. Esse in delectus sequi ullam sed animi.",
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
            }
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
            }
        },
        {
            "id": 7,
            "name": "Miss Letitia Will",
            "tel": "(770) 750-6811 x99988",
            "address": "8145 Laisha Keys",
            "opening_hours": "08:00",
            "description": "Aut earum molestiae et ducimus adipisci ut maxime.\nVeritatis labore illum et similique cumque qui qui officia omnis.\nQui laudantium amet enim natus.\nVoluptatem quia est nam ut esse et.",
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
            }
        },
        {
            "id": 8,
            "name": "Mr. Johnny Abshire",
            "tel": "333-243-4940 x9008",
            "address": "075 Murray Stream",
            "opening_hours": "08:00",
            "description": "Qui omnis optio neque sit rerum nisi. Repellat qui perferendis explicabo pariatur harum recusandae debitis. Laborum eligendi dolores ullam aliquam reiciendis sit voluptates sint quaerat. Deserunt distinctio voluptatum eveniet. Excepturi nostrum saepe non et rem itaque quidem occaecati.",
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
            }
        },
        {
            "id": 9,
            "name": "Luz Schaden",
            "tel": "1-712-742-4184",
            "address": "4929 Wisozk Centers",
            "opening_hours": "08:00",
            "description": "Culpa deserunt molestiae eligendi est ex incidunt.\nNisi sit totam.",
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
            }
        }
    ],
    "comments": [
        {
            "id": 3772,
            "text": "好啊",
            "UserId": 1,
            "RestaurantId": null,
            "createdAt": "2020-03-22T05:51:05.000Z",
            "updatedAt": "2020-03-22T05:51:05.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
                "isAdmin": true,
                "image": null,
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-03-02T17:09:40.000Z"
            },
            "Restaurant": null
        },
        {
            "id": 3762,
            "text": "好啊",
            "UserId": 1,
            "RestaurantId": null,
            "createdAt": "2020-03-22T05:50:14.000Z",
            "updatedAt": "2020-03-22T05:50:14.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
                "isAdmin": true,
                "image": null,
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-03-02T17:09:40.000Z"
            },
            "Restaurant": null
        },
        {
            "id": 3752,
            "text": "2",
            "UserId": 1,
            "RestaurantId": null,
            "createdAt": "2020-03-22T05:38:57.000Z",
            "updatedAt": "2020-03-22T05:38:57.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
                "isAdmin": true,
                "image": null,
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-03-02T17:09:40.000Z"
            },
            "Restaurant": null
        },
        {
            "id": 3742,
            "text": "123",
            "UserId": 1,
            "RestaurantId": null,
            "createdAt": "2020-03-22T05:38:47.000Z",
            "updatedAt": "2020-03-22T05:38:47.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
                "isAdmin": true,
                "image": null,
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-03-02T17:09:40.000Z"
            },
            "Restaurant": null
        },
        {
            "id": 3732,
            "text": "asd",
            "UserId": 1,
            "RestaurantId": null,
            "createdAt": "2020-03-22T05:38:03.000Z",
            "updatedAt": "2020-03-22T05:38:03.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
                "isAdmin": true,
                "image": null,
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-03-02T17:09:40.000Z"
            },
            "Restaurant": null
        },
        {
            "id": 3722,
            "text": "test",
            "UserId": 1,
            "RestaurantId": null,
            "createdAt": "2020-03-22T05:37:13.000Z",
            "updatedAt": "2020-03-22T05:37:13.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
                "isAdmin": true,
                "image": null,
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-03-02T17:09:40.000Z"
            },
            "Restaurant": null
        },
        {
            "id": 3712,
            "text": "123",
            "UserId": 1,
            "RestaurantId": null,
            "createdAt": "2020-03-22T05:36:22.000Z",
            "updatedAt": "2020-03-22T05:36:22.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
                "isAdmin": true,
                "image": null,
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-03-02T17:09:40.000Z"
            },
            "Restaurant": null
        },
        {
            "id": 3702,
            "text": "c",
            "UserId": 1,
            "RestaurantId": null,
            "createdAt": "2020-03-22T05:32:54.000Z",
            "updatedAt": "2020-03-22T05:32:54.000Z",
            "User": {
                "id": 1,
                "name": "root",
                "email": "root@example.com",
                "password": "$2a$10$J9pLpJJ1Tzfe/ZcjdYwXdumyh.3F5E.w/HTxRcH./cl3azhgekgQe",
                "isAdmin": true,
                "image": null,
                "createdAt": "2020-02-28T14:38:32.000Z",
                "updatedAt": "2020-03-02T17:09:40.000Z"
            },
            "Restaurant": null
        }
    ]
}

export default {
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments
  },
  data () {
    return  {
      restaurants: [],
      comments: []
    }
  },
  created () {
    this.fetchFeeds()
  },
  methods: {
    fetchFeeds () {
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments
    }
  }
}
</script>
