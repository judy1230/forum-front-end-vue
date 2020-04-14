<template>
  <div class="container py-5">
    <!-- AdminNav Component -->
    <AdminNav />
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <th scope="row">
            {{ user.id }}
          </th>
          <td>{{ user.email }}</td>
					<td v-show="user.isAdmin"> Admin </td>
          <td v-show="!user.isAdmin"> Normal User </td>
          <td>
            <button
              type="button"
							v-show="user.isAdmin"
              class="btn btn-link"
							@click.stop.prevent="toggleSetRole(user.id)"
            >
              set as User
            </button>
						<button
              type="button"
							v-show="!user.isAdmin"
              class="btn btn-link"
							@click.stop.prevent="toggleSetRole(user.id)"
            >
              set as Admin
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from "./../components/AdminNav"

const dummyData ={
    "users": [
        {
            "id": 1,
            "name": "root test",
            "email": "root@example.com",
            "password": "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
            "isAdmin": true,
            "image": "https://i.imgur.com/58ImzMM.png",
            "createdAt": "2019-07-30T16:24:54.983Z",
            "updatedAt": "2019-09-15T07:49:43.737Z",
            "Followers": [
                {
                    "id": 12,
                    "name": "eason",
                    "email": "eason@example.com",
                    "password": "$2a$10$vY3NIexoMkSUI.4ph6Y8teakUPKo7jN1lWhKkJooyVeGMEiNc7CyW",
                    "isAdmin": true,
                    "image": "https://i.imgur.com/nbHsOOs.jpg",
                    "createdAt": "2019-11-14T05:50:54.996Z",
                    "updatedAt": "2019-11-17T04:11:08.560Z",
                    "Followship": {
                        "followerId": 12,
                        "followingId": 1,
                        "createdAt": "2019-11-14T05:51:27.831Z",
                        "updatedAt": "2019-11-14T05:51:27.831Z"
                    }
                },
                {
                    "id": 1,
                    "name": "root test",
                    "email": "root@example.com",
                    "password": "$2a$10$OJ3jR93XlEMrQtYMWOIQh.EINWgaRFTXkd0Xi5OC/Vz4maztUXEPe",
                    "isAdmin": true,
                    "image": "https://i.imgur.com/58ImzMM.png",
                    "createdAt": "2019-07-30T16:24:54.983Z",
                    "updatedAt": "2019-09-15T07:49:43.737Z",
                    "Followship": {
                        "followerId": 1,
                        "followingId": 1,
                        "createdAt": "2019-09-16T03:56:36.845Z",
                        "updatedAt": "2019-09-16T03:56:36.845Z"
                    }
                },
                {
                    "id": 2,
                    "name": "user1",
                    "email": "user1@example.com",
                    "password": "$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y",
                    "isAdmin": false,
                    "image": "https://i.imgur.com/Q14p2le.jpg",
                    "createdAt": "2019-07-30T16:24:55.204Z",
                    "updatedAt": "2019-09-09T05:34:35.986Z",
                    "Followship": {
                        "followerId": 2,
                        "followingId": 1,
                        "createdAt": "2019-08-01T10:27:45.616Z",
                        "updatedAt": "2019-08-01T10:27:45.616Z"
                    }
                }
            ],
            "FollowerCount": 3,
            "isFollowed": true
        },
        {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$oNyp9cr8jG7NulbUr56g6e3yvwnttFkoBAmtUYAeQuXkcdFz0Ko6y",
            "isAdmin": false,
            "image": "https://i.imgur.com/Q14p2le.jpg",
            "createdAt": "2019-07-30T16:24:55.204Z",
            "updatedAt": "2019-09-09T05:34:35.986Z",
            "Followers": [
                {
                    "id": 12,
                    "name": "eason",
                    "email": "eason@example.com",
                    "password": "$2a$10$vY3NIexoMkSUI.4ph6Y8teakUPKo7jN1lWhKkJooyVeGMEiNc7CyW",
                    "isAdmin": true,
                    "image": "https://i.imgur.com/nbHsOOs.jpg",
                    "createdAt": "2019-11-14T05:50:54.996Z",
                    "updatedAt": "2019-11-17T04:11:08.560Z",
                    "Followship": {
                        "followerId": 12,
                        "followingId": 2,
                        "createdAt": "2019-11-17T08:26:57.195Z",
                        "updatedAt": "2019-11-17T08:26:57.195Z"
                    }
                }
            ],
            "FollowerCount": 1,
            "isFollowed": false
        },
        {
            "id": 5,
            "name": "123",
            "email": "123+v1@gmail.com",
            "password": "$2a$10$aFObNZTWYpkh86oGEz647OCCg27GkIEqOBZUzBHttZavLtw2PosJO",
            "isAdmin": false,
            "image": null,
            "createdAt": "2019-08-13T05:01:17.528Z",
            "updatedAt": "2019-09-15T09:14:14.189Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 8,
            "name": "mark",
            "email": "mark@gmail.com",
            "password": "$2a$10$uegR/2XVI7S6UIQLlZxg6uQh4rdHZrTINyH7dmjApFueGg6A0LVZO",
            "isAdmin": null,
            "image": null,
            "createdAt": "2019-09-08T05:54:22.376Z",
            "updatedAt": "2019-09-08T05:54:22.376Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 14,
            "name": "lib2",
            "email": "lib2@example.com",
            "password": "$2a$10$8lGwKR9SwRrTR4V3I5rZo.kU5Mfq90Gh4eBVlSzt/RRC6IdzOR3A2",
            "isAdmin": false,
            "image": null,
            "createdAt": "2019-11-15T16:40:44.274Z",
            "updatedAt": "2019-11-19T13:06:41.292Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 7,
            "name": "買東西",
            "email": "sun@gmail.com",
            "password": "$2a$10$PyLZbH.VtrtJbxiteKbKbORiUyI83QF0sqdNCD3ntQh5dq1Nt6N/m",
            "isAdmin": null,
            "image": null,
            "createdAt": "2019-09-08T05:52:45.681Z",
            "updatedAt": "2019-09-08T05:52:45.681Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 3,
            "name": "user2",
            "email": "user2@example.com",
            "password": "$2a$10$tsvcnSFsJvdvs2NLm9rW.uYbah93Xl5cTYcQnSeK3sjEopj.NGzk2",
            "isAdmin": false,
            "image": "https://i.imgur.com/OezkRwO.jpg",
            "createdAt": "2019-07-30T16:24:55.422Z",
            "updatedAt": "2019-09-15T09:14:03.454Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 6,
            "name": "cjl19670@aklqo.com",
            "email": "cjl19670@aklqo.com",
            "password": "$2a$10$mlS72JE7IffnhMTp7HGyfORzvpVrl.0zUNWxveHWo8/OiA.Stl8Ne",
            "isAdmin": null,
            "image": null,
            "createdAt": "2019-08-15T09:10:17.401Z",
            "updatedAt": "2019-08-15T09:10:17.401Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 9,
            "name": "mos",
            "email": "user6@example.com",
            "password": "$2a$10$5mMHAYpCwz6gF0NPnZZdA.h8jbH2zIfvhErYNTZ9DXcss4G6ifmv2",
            "isAdmin": null,
            "image": null,
            "createdAt": "2019-09-15T11:44:58.101Z",
            "updatedAt": "2019-09-15T11:44:58.101Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 10,
            "name": "bb",
            "email": "bb@example.com",
            "password": "$2a$10$UHkAELuG7LYywkEfWD83POeZsgSaVfKHedxHmwS9YuBgMETMx8Kcy",
            "isAdmin": null,
            "image": null,
            "createdAt": "2019-09-26T10:31:54.665Z",
            "updatedAt": "2019-09-26T10:31:54.665Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 4,
            "name": "123",
            "email": "123@gmail.com",
            "password": "$2a$10$3DgQkLtWS7ud3ewuWdmRuOiFhRsgcE1SzOYAzo4/wV.rOWP3rNcRC",
            "isAdmin": false,
            "image": null,
            "createdAt": "2019-08-13T05:00:15.406Z",
            "updatedAt": "2019-09-30T11:49:25.356Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 11,
            "name": "parag",
            "email": "p@mail.com",
            "password": "$2a$10$a6Ce2r46Xd1iFF4EyXJu3uyCQE3jpEq2uy0ex.qG3ihcXMxmL0Tyu",
            "isAdmin": null,
            "image": null,
            "createdAt": "2019-10-07T09:03:32.408Z",
            "updatedAt": "2019-10-07T09:03:32.408Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 12,
            "name": "eason",
            "email": "eason@example.com",
            "password": "$2a$10$vY3NIexoMkSUI.4ph6Y8teakUPKo7jN1lWhKkJooyVeGMEiNc7CyW",
            "isAdmin": true,
            "image": "https://i.imgur.com/nbHsOOs.jpg",
            "createdAt": "2019-11-14T05:50:54.996Z",
            "updatedAt": "2019-11-17T04:11:08.560Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        },
        {
            "id": 13,
            "name": "lib1",
            "email": "lib1@example.com",
            "password": "$2a$10$9Nvavjenmx.mdlrTFFB6ZeNzG7UACZ2oFC.2Xbr5/yVE2WJa0g9MS",
            "isAdmin": false,
            "image": null,
            "createdAt": "2019-11-15T16:38:45.158Z",
            "updatedAt": "2019-11-19T12:59:04.249Z",
            "Followers": [],
            "FollowerCount": 0,
            "isFollowed": false
        }
    ]

}
export default {
  components: {
    AdminNav
	},
	data() {
		return {
      users: []
		}
	},
	created () {
    this.fetchUsers()
  },
	methods: {
		fetchUsers () {
			this.users = dummyData.users
			console.log('this.users:', this.users)
		},
		toggleSetRole(userId) {
      this.users = this.users.map(user => {
				if(user.id !== userId) return user;
				return {
					...user,
					isAdmin: !user.isAdmin
				}
			})
		}
	}
}
</script>
