<template>
  <v-app>
    <!-- <Navbar /> -->
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        :rail-width="wider ? 80 : undefined"
        class="nav-drawer"
        permanent
        @click="rail = false"
      >
        <div class="header">
          <v-list>
            <v-list-item
              title="Fabrik MES">
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
        </div>
        
        <v-divider></v-divider>

        <v-container>
          <h2 class="title-list">Operations</h2>
        </v-container>
        <v-list density="compact" nav>
          <v-list-item
            v-for="item in items"
            :key="item.value"
            :class="{ 'pl-3': wider }"
            :prepend-icon="item.icon"
            :title="item.title"
            :value="item.value"
          ></v-list-item>
        </v-list>

        <v-list density="compact" nav class="bottom-list">
          <v-list-item
            v-for="item in bottomItems"
            :key="item.value"
            :class="{ 'pl-3': wider }"
            :prepend-icon="item.icon"
            :title="item.title"
            :value="item.value"
          ></v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-main>
        <router-view></router-view>
      </v-main>


    <v-footer app absolute border height="40" class="d-flex justify-center align-center white--text mt-4">
      <p style="color: #64748b;">&copy; 2026 © <span style="color: #0369a1">Fabrik</span>, All Rights Reserved</p>
    </v-footer>
  
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { FlClipboardTaskListLtr, CaTreeView, FlPeopleChat, BsShield, MdLogout } from '@kalimahapps/vue-icons';

export default {
  name: "App",
  components: {
    Navbar,
  },
  data: () => ({
    showMain: false,
    env: import.meta.env.MODE !== "production" ? import.meta.env.MODE : "production",
    drawer: true,
    rail: true,
    wider: true,
    items: [
      { icon: FlClipboardTaskListLtr, title: 'Orders', value: 'orders' },
      { icon: CaTreeView, title: 'Workflow', value: 'workflow' },
      { icon: FlPeopleChat, title: 'Customers', value: 'customers' },
      { icon: BsShield, title: 'Users', value: 'users' },
    ],
    bottomItems: [
      { icon: MdLogout, title: 'LogOut', value: 'logout' }
    ]
  }),
  methods: {
    
  },
};
</script>

<style scoped>
@import "./assets/main.css";

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.v-main {
  transition: margin-left 0.3s;
}
.test-text {
  z-index: 999;
  font-size: 10rem;
  font-weight: 500;
  position: fixed;
  bottom: 0;
  right: 2%;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  color: #ae152d;
  pointer-events: none;
  opacity: .1;
}
.nav-drawer{
  background: white;
}
:deep(.v-navigation-drawer__content){
  display: flex;
  flex-direction: column;
  border-color: #e2e8f080;
}
:deep(.v-list-item--nav .v-list-item-title){
  letter-spacing: 0.025em;
  font-size: 0.875rem;
  font-weight: 500;
  color: #a4aabc;
  font-family: Manrope;
}
:deep(.v-list-item--nav .v-list-item__prepend){
  color: #a4aabc;
}
.header :deep(.v-list-item-title){
  font-family: Manrope;
  color: #1e293b;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.025em;
}
.active-nav{
  background-color: #f8fafc;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}
.header :deep(.v-list-item__append){
  color: #64748b;
}
.title-list{
  font-family: Manrope;
  color: #0369a1;
  opacity: 0.6;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-weight: 800;
  font-size: .75rem;
}
.bottom-list{
  margin-top: auto;
  margin-bottom: .5rem;
}
</style>
