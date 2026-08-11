<template>
    <v-container fluid class="pa-0 full-height" style="
    background-repeat: no-repeat;
    background-position: center;
    background-image: url('/login_bg.png');
    background-size: cover;">
    <v-row class="fill-height" align="center" justify="center">
  
      <v-col cols="12" sm="8" md="4">
          <v-row align="center" justify="center" class="mb-2">
            <v-img :src="fabrikLogo" alt="Wagro logo" aspect-ratio="1" max-width="100" contain></v-img>
          </v-row>
          <v-card-text class="pt-8 rounded-lg" style="background: #ffffff33; backdrop-filter: blur(10px); border: 1px solid #E7E8EB; box-shadow: 0 25px 50px -12px rgb(0 0 0 / 5%);">
            <h4 class="text-md-center text-h5" style="color: #0A1B39">Σύνδεση</h4>
            <h5 class="text-center text-subtitle-2 pt-2" style="color: #6B7280">Πληκτρολογήστε το email και τον κωδικό σας</h5>
            <v-row class="justify-center">
              <v-col cols="12" sm="8">
                <v-form @submit.prevent="submitHandler" ref="form">
                  <v-text-field label="Email or Username" variant="outlined" dense color="blue" v-model="model.user.usernameOrEmail"
                    :rules="[rules.required]" prepend-inner-icon="mdi-account" autocomplete="false" class="mt-12 mb-2 login_input" clearable>
                  </v-text-field>

                  <v-text-field label="Password" variant="outlined" dense color="blue" class="login_input" :type="passwordShow ? 'text' : 'password'" 
                    v-model="model.user.password" prepend-inner-icon="mdi-key" :append-inner-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'" @click:append-inner="passwordShow = !passwordShow"
                    :rules="[rules.required]" autocomplete="false">
                  </v-text-field>
  
                  <v-row class="mb-2">
                    <v-col cols="6" class="d-flex justify-center align-center">
                      <v-checkbox label="Remember me" class="d-flex align-center" color="blue"></v-checkbox>
                    </v-col>
  
                    <v-col cols="6" class="d-flex justify-center align-center">
                      <span class="caption blue--text" color="blue">Forgot Password</span>
                    </v-col>
                  </v-row>
  
                  <v-btn color="blue" :loading="loading" elevation="0"
                    class="text-capitalize rounded-md" block tile type="submit">
                    Σύνδεση
                  </v-btn>

                </v-form>
  
                <h5 class="text-center grey--text mt-4 mb-3 text-uppercase font-weight-medium position-relative divider" style="color: #9ca3af;">Εναλλακτικές μέθοδοι σύνδεσης</h5>
                <div class="d-flex justify-center align-center mb-8 ga-4">
                  <!-- <v-btn depressed variant="tonal" color="red">
                    <v-icon color="red">mdi-google</v-icon>
                  </v-btn> -->
                  <v-btn class="text-capitalize rounded-md" depressed variant="tonal" color="secondary" block>
                    Create a Passkey
                  </v-btn>
                  
                </div>
              </v-col>
            </v-row>
          </v-card-text>
        </v-col>
      </v-row>
    </v-container>
  </template>
    
    
  <script>
  import { useAuthStore } from '../stores/auth';
  import fabrikLogo from '@/assets/fabrik_f_logo.png'
  import { login } from "../api/loginService";

  export default {
    data() {
      return {
        loading: false,
        passwordShow: false,
        valid: false,
        authStore: null,
        fabrikLogo,
        serviceapi: import.meta.env.VITE_APP_SERVICE_URL,
        model: {
          user: {
            usernameOrEmail: "",
            password: "",
          },
        },
        rules: {
          emailRules: [
            (value) => {
              if (value) return true;
              return "Email is required.";
            },
            (value) => {
              if (/.+@.+\..+/.test(value)) return true;
    
              return "E-mail must be valid";
            },
          ],
          passwordRules: [
            (value) => {
              if (value) return true;
              return "Password is required.";
            },
            (value) => {
              if (value.length > 5) return true;
    
              return "Password must be over 5 chars";
            },
          ],
          required: value => !!value || 'Το πεδίο είναι υποχρεωτικό.',
        },
      };
    },
    methods: {
      submitHandler() {
        this.$refs.form.validate()
        .then((res) => {
          if(res.valid){
            this.loading = true;
            const data = new URLSearchParams();
            data.append("usernameOrEmail", this.model.user.usernameOrEmail);
            data.append("password", this.model.user.password);

            login(data)
            .then((res) => {
              if(res.status == 200 && res.data.access_token){
                const token = res.data.access_token;
                const user = res.data.user;
                this.loading = false;
                this.authStore.login(token, user);

                this.$router.push("/");
              } else {
                this.loading = false;
                console.log("Error: ", res);
              }
            })
            .catch((err) => {
              console.log(err);
              this.loading = false;
            })
          }
        });

      },
    },
    created(){
      this.authStore = useAuthStore();
    }
  };
  </script>
    
  <style scoped>
  .v-application .rounded-bl-xl {
    border-bottom-left-radius: 300px !important;
    /* border-bottom-right-radius: 300px !important; */
  }
  .v-btn {
    color: white;
  }
  .full-height {
    height: 100%;
  }

  .v-main{
      padding-bottom: 0!important;
  }
  :deep(.login_input .v-field__outline__end),
  :deep(.login_input .v-field__outline__start),
  :deep(.login_input .v-field__outline__notch::before),
  :deep(.login_input .v-field__outline__notch::after){
    border-color: #E7E8EB;
    opacity: 1;
    /* box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.05); */
  }
  :deep(.login_input .v-label){
    color: #9DA4B0;
    font-weight: 400;
    font-size: .875rem;
  }
  :deep(.login_input .v-field__prepend-inner){
    font-size: .875rem;
  }
  :deep(.login_input .v-field.v-field--prepended){
    --v-field-padding-start: 14px;
    background-color: #f9fafb;
  }
  .divider::before{
    content: "";
    position: absolute;
    width: 20%;
    height: 1px;
    left: 0;
    top: 40%;
    transform: translateY(100%);
    background: #dcdee3;
  }
  .divider::after{
    content: "";
    position: absolute;
    width: 20%;
    height: 1px;
    right: 0;
    top: 40%;
    transform: translateY(100%);
    background: #dcdee3;
  }
  </style>
    