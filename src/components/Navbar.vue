<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        :rail-width="wider ? 80 : undefined"
        color="indigo"
        permanent
        @click="rail = false"
      >
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="John Leider"
          >
            <template v-slot:prepend>
              <v-avatar
                :class="{ 'mx-1': wider }"
                :size="(wider && rail) ? 40 : undefined"
              ></v-avatar>
            </template>
            <template v-slot:append>
              <v-btn
                :inert="rail"
                icon="mdi-chevron-left"
                variant="text"
                @click.stop="rail = !rail"
              ></v-btn>
            </template>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item
            v-for="item in items"
            :key="item.value"
            :class="{ 'pl-5': wider }"
            :prepend-icon="item.icon"
            :title="item.title"
            :value="item.value"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>


    </v-layout>
  </v-card>
</template>

<script>

  export default {
    data(){
      return{
        drawer: true,
        rail: true,
        wider: true,
        items: [
          { icon: 'mdi-home-city', title: 'Home', value: 'home' },
          { icon: 'mdi-account', title: 'My Account', value: 'account' },
          { icon: 'mdi-account-group-outline', title: 'Users', value: 'users' },
        ],
      }
    },
    created() {
      console.log("Navbar created");
    },
  }
</script>