<template>
  <v-app>
    <!-- <Navbar /> -->
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        :rail-width="wider ? 80 : undefined"
        class="nav-drawer"
        permanent
      >
        <div class="header">
          <v-list>
            <v-list-item
              title="Fabrik MES">
              <template v-slot:prepend>
                <v-avatar rounded="0" size="50" @click="rail = !rail">
                  <v-img src="/src/assets/fabrik_f_logo.png" />
                </v-avatar>

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
        </div>
        
        <v-divider></v-divider>

        <v-container v-if="!rail">
          <h2 class="title-list">Operations</h2>
        </v-container>
        <v-list density="compact" nav>
          <v-list-item
            v-for="item in items"
            :key="item.value"
            router
            :to="item.route"
            :class="{ 'pl-3': wider }"
            :prepend-icon="item.icon"
            :title="item.title"
            :value="item.value"
          ></v-list-item>
        </v-list>

        <v-list density="compact" nav class="bottom-list">
        <v-divider></v-divider>
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
      <v-app-bar app height="75" elevation="0" class="mr-2">
        <v-row>
          <v-col cols="auto" class="d-flex align-center justify-end"><BsBell /></v-col>
          <v-col cols="auto" class="d-flex align-center justify-end">  <v-divider class="border-opacity-100" color="#e2e8f0" vertical></v-divider></v-col>
          
          <v-col cols="auto">
            <v-menu offset-y transition="slide-x-transition" class="account-menu">
                <!-- Account button -->
                <template v-slot:activator="{props}">
                  <v-avatar
                    size="36px"
                    v-bind="props">
                    <v-img
                      alt="Avatar"
                      src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                    ></v-img>
                  </v-avatar>
                </template>
  
                <v-card>
                  <v-list min-width="250" class="overflow-hidden px-0 pb-1 menu-header">
                    <v-row class="px-4 py-1">
                      <v-col cols="auto" class="d-flex justify-end">
                        <v-avatar color="primary" variant="tonal" size="large">
                          <span class="text-h6 font-weight-bold">S</span>
                        </v-avatar>
                      </v-col>
                      <v-col class="d-flex flex-column justify-center">
                        <span class="text-h8" style="line-height: 1.5;">Spyros</span>
                        <p class="text-caption" style="color: #A4AABC; line-height: 1.5;">ADMIN</p>
                      </v-col>
                    </v-row>
    
                    <v-divider class="mt-2"></v-divider>
                    <div class="mt-2 px-3">
                      <v-btn v-for="item in options" :key="item.text" class="icon-text justify-start" color="#A4AABC" :title="item.text" rounded="xs" variant="text" block :prepend-icon="item.icon" style="text-transform: capitalize;">{{ item.text }}</v-btn>
                    </div>
                    <v-divider class="mt-2"></v-divider>
                    <div class="my-2 px-3">
                        <v-btn rounded="xs" variant="text" color="#ae152d" block prepend-icon="mdi-exit-to-app" class="justify-start" style="text-transform: capitalize;" @click="logOut">Logout</v-btn>
                    </div>
                  </v-list>
                </v-card>
              </v-menu>



          </v-col>
        </v-row>
      </v-app-bar>

      <v-main>
        <div class="blur-box"></div>
        <router-view></router-view>
        <!-- <div class="blur-box bottom"></div> -->
      </v-main>


    <v-footer app absolute border height="40" class="d-flex justify-center align-center white--text mt-4">
      <p style="color: #64748b;">&copy; 2026 © <span style="color: #0369a1">Fabrik</span>, All Rights Reserved</p>
    </v-footer>
  
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import { FlClipboardTaskListLtr, CaTreeView, FlPeopleChat, BsShield, MdLogout, BsBell } from '@kalimahapps/vue-icons';
import fabrikLogo from '@/assets/fabrik_f.svg'

export default {
  name: "App",
  components: {
    Navbar,
    BsBell,
  },
  data: () => ({
    showMain: false,
    env: import.meta.env.MODE !== "production" ? import.meta.env.MODE : "production",
    drawer: true,
    rail: true,
    wider: true,
    items: [
      { icon: FlClipboardTaskListLtr, title: 'Orders', value: 'orders', route: "/orders" },
      { icon: CaTreeView, title: 'Workflow', value: 'workflow', route: "/workflow" },
      { icon: FlPeopleChat, title: 'Customers', value: 'customers', route: "/customers" },
      { icon: BsShield, title: 'Users', value: 'users', route: "/users" },
    ],
    bottomItems: [
      { icon: MdLogout, title: 'LogOut', value: 'logout' }
    ],
    options: [
      {
        text: "Settings",
        icon: "mdi-cog"
      }
    ],
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
  border-color: #e2e8f080;
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
:deep(.v-list-item--active){
  color: #0369a157;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  /* background-color: #f8fafc; */
  border-radius: .5rem;
}
:deep(.v-list-item--active .v-list-item__prepend),
:deep(.v-list-item--active .v-list-item-title){
  color: #0369a1;
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
footer{
  border-color: #e2e8f080;
}
.v-app-bar.v-toolbar{
  background: #eff1f6;
}
:deep(.v-toolbar__content .v-row){
  display: flex;
  justify-content: flex-end;
}
:deep(.v-toolbar__content svg){
  color: #64748b;
  font-size: 1.4rem;
  font-weight: 700;
}
:deep(.v-toolbar__content){
  right: 2rem;
}
.blur-box{
  position: absolute;
  right: 0;
  top: 0;
  width: 20rem;
  height: 20rem;
  background: #0059b70d;
  border-radius: 9999px;
  filter: blur(100px);
}
.blur-box.bottom{
  bottom: 0;
  left: 0;
}
.v-avatar{
  border: 2px solid white;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}
:deep(.menu-header .v-row){
  background-color: #eef4fa80;
}
:deep(.account-menu > .v-card){
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  border: 1px solid #e7e8eb;
  border-radius: 12px;
}
:deep(.menu-header span){
  font-family: Manrope;
}
:deep(.menu-header .v-btn){
  gap: .5rem;
}
</style>
