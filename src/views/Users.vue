<template>
    <v-container>
        <v-row class="header">
            <v-col>
                <span class="text-uppercase">Διαχειριση Προσωπικου & Ρολων</span>
                <h1>Ενεργό Προσωπικό</h1>
            </v-col>
            <v-col class="d-flex ga-5 justify-end align-center">

                <v-dialog max-width="576" transition="slide-x-reverse-transition" class="new-user-dialog" v-model="dialogStatus">
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn color="#0369a1" class="new-user-btn" @click="dialogStatus = true; form = {}; generateUid(); form.role = this.roles[0]">Δημιουργία Νέου Χρήστη</v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-form @submit.prevent="addUser" class="h-100" ref="form">
                            <v-card class="new-user-card">
                                <template v-slot:title>
                                    <v-row>
                                        <v-col cols="auto">
                                            <v-avatar color="#0369a1" variant="tonal" size="50" rounded="lg">
                                                <v-icon size="30"><ClUsers/></v-icon>
                                            </v-avatar>
                                        </v-col>
                                        <v-col>
                                            <h3 class="header-title">Δημιουργία Νέου Χρήστη</h3>
                                            <p class="header-subtitle">Ρύθμιση προφιλ και αναθεσεων</p>
                                        </v-col>
                                        <v-col>
                                            <v-btn @click="dialogStatus = false" variant="text" class="float-right">
                                                <v-icon>mdi-close</v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </template>
                                <v-divider></v-divider>
                            <v-card-text class="mt-4 px-8">
                                <div class="photo-container">                                
                                    <v-row no-gutters class="ga-6">
                                        <v-col cols="auto">
                                            <div class="photo-wrapper d-flex align-center justify-center">
                                                <v-file-input v-if="!imagePreview" accept="image/*" variant="plain" prepend-icon="mdi-camera" hide-details class="photo-input" v-model="form.avatar_img"
                                                 @update:model-value="previewImage">{{ imagePreview }}</v-file-input>
                                                <v-img v-else :src="imagePreview"></v-img>
                                            </div>
                                        </v-col>
                                        <v-col class="d-flex flex-column justify-center">
                                            <span>Προφιλ</span>
                                            <p>Επιλογή φωτογραφίας προφίλ (optional)</p>
                                        </v-col>
                                    </v-row>
                                </div>

                                <div class="my-8">
                                    <v-row no-gutters class="ga-6">
                                        <v-col cols="5">
                                            <h4 class="description mb-2">Ονομα</h4>
                                            <v-text-field v-model="form.firstName" density="compact" placeholder="John" variant="outlined" :rules="[rules.required]" required></v-text-field>
                                        </v-col>

                                        <v-col class="7">
                                            <h4 class="description mb-2">Επωνυμο</h4>
                                            <v-text-field
                                                v-model="form.lastName"
                                                density="compact"
                                                placeholder="Doe"
                                                variant="outlined"
                                                :rules="[rules.required]"
                                                required
                                            ></v-text-field>
                                        </v-col>

                                    </v-row>

                                    <v-row>
                                        <v-col>
                                            <h4 class="description mb-2">Διευθυνση Email</h4>
                                            <v-text-field
                                                v-model="form.email"
                                                density="compact"
                                                :rules="[rules.required]"
                                                placeholder="john.doe@example.com"
                                                variant="outlined"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col>
                                            <v-row no-gutters>
                                                <h4 class="description mb-2">Αναγνωριστικο χρηστη</h4>
                                            </v-row>
                                            <v-text-field
                                                v-model="form.uid"
                                                density="compact"
                                                placeholder="FM-12345"
                                                variant="outlined"
                                                disabled
                                                hide-details
                                            ></v-text-field>
                                            <v-btn variant="text" class="float-left generate-link" size="small" @click="generateUid">
                                                <template v-slot:prepend>
                                                    <v-icon><ReAiGenerate/></v-icon>
                                                </template> 
                                                Δημιουργια UUID
                                            </v-btn>
                                        </v-col>
                                        <v-col>
                                            <h4 class="description mb-2">Επιλογη Ρολου</h4>
                                            <v-select
                                                v-model="form.role"
                                                density="compact"
                                                placeholder="Select Role"
                                                variant="outlined"
                                                :items="roles"
                                                :rules="[rules.required]"
                                                item-title="label"
                                                disabled
                                            ></v-select>
                                        </v-col>
                                    </v-row>
                                </div>

                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions class="d-flex justify-space-between pa-8 ga-6">
                                <v-btn
                                    @click="resetForm"
                                    class="h-auto"
                                    text="Απόρριψη Αλλαγών"
                                ></v-btn>
                                <v-btn
                                    :loading="loading"
                                    class="h-auto create-user-btn"
                                    text="Δημιουργία Χρήστη"
                                    :prepend-icon="userAddIcon"
                                    type="submit"
                                ></v-btn>
                            </v-card-actions>
                            </v-card>
                        </v-form>
                    </template>
                </v-dialog>

            </v-col>
        </v-row>
        <v-row class="users-row">
            <v-col v-for="user in users" :key="user">
                <v-card class="mx-auto my-8 users-card pa-6">
                    <v-container class="pa-0">
                        <v-row class="d-flex justify-space-between">
                            <v-col cols="auto">
                                <v-badge color="#00687b" location="bottom end" floating dot>
                                    <v-avatar size="x-large" rounded="lg">                                        
                                        <v-img :src="user.avatar_img || default_avatar" alt="Avatar" />
                                    </v-avatar>
                                </v-badge>
                            </v-col>
                            <v-col class="d-flex justify-end">
                                <v-menu offset-y class="card-menu" :offset="[-8, -12]" location="bottom end" scroll-strategy="none">
                                <template v-slot:activator="{ props }">
                                  <v-btn v-bind="props" icon="mdi-dots-vertical" size="medium" color="#94a3b8" variant="plain"></v-btn>
                                </template>

                                <v-card class="rounded-lg overflow-hidden" max-width="200">
                                <v-list min-width="200" class="overflow-hidden px-0 pb-1" density="compact">
                                    <v-list-item @click="updateUser(user)">
                                      <template v-slot:prepend>
                                          <v-icon icon="mdi-account-edit-outline"></v-icon>
                                      </template>

                                      <v-list-item-title class="text-sm">
                                        Update User
                                      </v-list-item-title>
                                    </v-list-item>

                                    <v-divider class="mt-2" />

                                    <v-list-item color="primary" rounded="shaped">
                                      <template v-slot:prepend>
                                          <v-icon icon="mdi-lock-reset"></v-icon>
                                      </template>
                                      <v-list-item-title class="text-sm">Reset Password</v-list-item-title>
                                    </v-list-item>

                                </v-list>
                                </v-card>
                            </v-menu>
                            </v-col>
                            
                        </v-row>

                        <v-row class="mt-1">
                            <v-col>
                                <h3>{{ user.username }}</h3>
                                <p>{{ user.email }}</p>
                            </v-col>
                        </v-row>
                        <v-divider color="#f8fafc" class="my-4"></v-divider>
                        
                        <v-row class="d-flex justify-space-between">
                            <v-col>
                                <v-chip :class="user.role.toLowerCase() === 'admin' ? 'admin-chip' : 'user-chip'">
                                    {{ user.role }}
                                </v-chip>
                            </v-col>
                            <v-col class="d-flex align-center justify-end">
                                <div class="d-flex align-center justify-end ga-4 user-id">
                                    <span>ID:</span>
                                    <span>{{ user.id }}</span>
                                </div>
                            </v-col>

                        </v-row>
                    </v-container>

                </v-card>
            </v-col>

        </v-row>
    </v-container>
</template>

<script>
    import { ClUsers, ReAiGenerate, AnOutlinedUserAdd } from '@kalimahapps/vue-icons';
    import tengen_avatar from '@/assets/tengen_avatar.png';
    import default_avatar from '@/assets/user_1.jpg';
    import { getUsers, createUser } from "../api/usersService";
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    export default {
        name: 'Users',
        data() {
            return {
                serviceapi: import.meta.env.VITE_APP_SERVICE_URL,
                users: [],
                tengen_avatar: tengen_avatar,
                default_avatar: default_avatar,
                userAddIcon: AnOutlinedUserAdd,
                imagePreview: null,
                valid: false,
                dialogStatus: false,
                loading: false,
                form: {
                    avatar_img: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    uid: "",
                    role: null
                },
                roles: [
                    {name: "ADMIN", label: "Διαχειριστής"}
                ],
                rules: {
                    email: [
                        value => {
                            if (regex.test(value)) {
                                console.log("Valid Email address");
                                return true;
                            } else {
                                console.log("Email not valid")
                                return 'Το email δεν είναι έγκυρο';
                            }
                        }
                    ],
                    required: value => !!value || 'Το πεδίο είναι υποχρεωτικό.',
                }
            }
        },
        created() {
            this.fetchUsers();
            // this.form.role = this.roles[0];
            // this.generateUid();
        },
        methods: {
            fetchUsers() {
                getUsers()
                    .then(response => {
                        this.users = response.data.usersList;
                        console.log("Fetched users:", this.users);                        
                    })
                    .catch(error => {
                        console.error("Error fetching users:", error);
                    });
            },
            generateUid(){
                let result = '';
                const characters = '012345';
                for (let i = 0; i < 6; i++) {
                    const randomInd = Math.floor(Math.random() * characters.length);
                    result += characters.charAt(randomInd);
                }
                this.form.uid = "FM-"+result
            },
            addUser(){
                this.loading = true;
                this.$refs.form.validate()
                .then((res) => {
                    if(res.valid){
                        createUser(this.form)
                        .then((res) => {
                            this.users.unshift({
                                id: this.form.uid,
                                avatar_img: this.imagePreview,
                                username: this.form.firstName.charAt(0)+this.form.lastName,
                                email: this.form.email,
                                isActive: true,
                                role: this.form.role.name,
                                createdAt: new Date().toLocaleString(),
                                updatedAt: new Date().toLocaleString(),
                                deliveredAt: new Date().toLocaleString(),
                                createdBy: "aloubardis",
                                updatedBy: "aloubardis",
                                deletedAt: null
                            })
                            console.log(this.users);    
                            this.dialogStatus = false;
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                        .finally(() => {

                        })
                    }
                })
                .catch((err) => {

                })
                .finally(() => {
                    this.loading = false;
                });
            },
            resetForm(){
                this.form.email = "";
                this.form.firstName = "";
                this.form.lastName = "";
                this.form.avatar_img = "";
                this.dialogStatus = false;
            },
            previewImage(image){
                if(!image){
                    this.imagePreview = null;
                    return;
                }
                this.imagePreview = URL.createObjectURL(image);
            },
            updateUser(user){
                console.log(user);
                console.log("Update clicked");
                this.dialogStatus = true;
                // Set up modal values
                this.form.firstName = user.firstName;
                this.form.lastName = user.lastName;
                this.form.email = user.email;
                this.form.uid = user.id;
                
            }
        },
        components: {
            ClUsers,
            ReAiGenerate,
            AnOutlinedUserAdd
        }   
    }
</script>

<style scoped>
    .header span {
        color: #006497;
        letter-spacing: .2em;
        text-transform: uppercase;
        font-size: .75rem;
        font-weight: 700;
        font-family: Manrope;
    }
    .header h1 {
        color: #2a343a;
        letter-spacing: -.025em;
        text-transform: capitalize;
        font-size: 2.25rem;
        font-weight: 800;
        font-family: Manrope;
    }
    .header :deep(.v-btn){
        padding: .675rem 1.5rem;
        height: auto;
        border-color: #00649766;
        border-radius: .5rem;
        font-size: 0.875rem;
        font-weight: 700;
        text-transform: capitalize;
        letter-spacing: 0;
        font-family: Manrope;
    }
    .header :deep(.v-btn .v-btn__prepend){
        font-size: 1rem;
    }
    .users-row {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .users-card{
        box-shadow: 0px 12px 32px rgba(42,52,58,0.04);
        border-radius: .75rem;
    }
    .users-card h3{
        color: #2a343a;
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.75rem;
        letter-spacing: -0.025em;
    }
    .users-card p{
        color: #566167;
        font-size: 0.875rem;
        font-weight: 400;
        font-family: Manrope;
        line-height: 1.25rem;
    }
    .users-card :deep(.v-chip){
        letter-spacing: 0.05em;
        text-transform: uppercase;
        font-size: .675rem;
        font-weight: 700;
        padding: .25rem .75rem;
        border-radius: 999px;
    }
    .users-card :deep(.v-chip.admin-chip){
        color: #003a5a;
    }
    .users-card :deep(.v-chip.user-chip){
        color: #465361;
    }
    .users-card :deep(.v-chip .v-chip__content){
        font-family: Manrope;
    }
    .users-card :deep(.v-chip.admin-chip .v-chip__underlay){
        background: #79bff8;
    }
    .users-card :deep(.v-chip.user-chip .v-chip__underlay){
        background: #d6e4f566;
        opacity: 1;
    }
    .user-id{
        color: #a9b3bb;
        font-weight: 700;
        font-size: .675rem;
    }
    .create-user-btn{
        background: #0369a1;
        box-shadow: 0 10px 15px -3px rgb(12 74 110 / 0.2), 0 4px 6px -4px rgb(12 74 110 / 0.2);
        border-radius: 0.5rem;
    }
    .create-user-btn :deep(.v-btn__prepend){
        padding: 0 0 0 .75rem;
        color: white;
    }
    .create-user-btn :deep(.v-btn__content){
        color: white;
    }
    .new-user-dialog :deep(.v-overlay__content){
        right: 0;
        height: 100%;
        margin: 0;
        padding: 0;
        max-height: none;
    }
    .v-overlay-container .new-user-dialog :deep(div.v-card-item){
        padding: 1.5rem 2rem;
    }
    .new-user-card .header-title {
        color: #2a343a;
        text-transform: capitalize;
        line-height: 1.25;
        font-weight: 800;
        font-size: 1.25rem;
    }
    .new-user-card .header-subtitle {
        color: #0369a1;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-size: 0.75rem;
        line-height: 1rem;
        margin-top: 0.125rem;
    }
    .new-user-card .v-card-text h3{
        color: #566167;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-weight: 900;
        font-size: 0.75rem;
        line-height: 1rem;
    }
    .new-user-card .v-card-text .description{
        color: #566167;
        letter-spacing: -0.05em;
        text-transform: uppercase;
        font-weight: 700;
        font-size: .75rem;
        line-height: 1rem;
    }
    .new-user-card .v-card-text :deep(input::placeholder),
    .new-user-card .v-card-text :deep(.v-label)
    {
        color: #566167;
        font-size: .875rem;
        opacity: 1;
    }
    .new-user-card .v-card-text :deep(.v-input .v-field__outline__start),
    .new-user-card .v-card-text :deep(.v-input .v-field__outline__notch::before),
    .new-user-card .v-card-text :deep(.v-input .v-field__outline__notch::after),
    .new-user-card .v-card-text :deep(.v-input .v-field__outline__end){
        border-color: #e2e8f0;
        opacity: 1;
    }
    .new-user-card .v-card-text :deep(.v-input .v-field--error .v-field__outline__start),
    .new-user-card .v-card-text :deep(.v-input .v-field--error .v-field__outline__notch::before),
    .new-user-card .v-card-text :deep(.v-input .v-field--error .v-field__outline__notch::after),
    .new-user-card .v-card-text :deep(.v-input .v-field--error .v-field__outline__end){
        border-color: #b00020;
        opacity: 1;
    }
    .new-user-card .v-card-text :deep(.v-field){
        border-radius: 0.5rem;
        padding: .2rem 1rem .2rem 0;
    }
    :deep(.v-overlay__scrim){
        background: #0f172a66;
        opacity: 1;
        backdrop-filter: blur(8px);
    }
     .photo-container .v-col span:nth-child(1){
        color: #727c83;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-weight: 700;
        font-size: .675rem;
     }
     .photo-container .v-col p{
        color: #566167;
        font-size: 0.75rem;
     }
     .photo-wrapper{
        height: 4rem;
        width: 4rem;
        background-color: #d9e4ec;
        border: 1px dashed #a9b3bb;
        border-radius: .75rem;
        overflow: hidden;
     }
     .photo-wrapper :deep(.v-input__prepend){
        padding: 0;
        margin: 0;
     }
    .photo-wrapper :deep(.v-input){
        flex: unset;
    }
     .photo-wrapper :deep(.v-input__control){
        display: none;
     }
     .generate-link{
        color: #0369a1;
        font-size: .675rem;
        text-transform: uppercase;
        font-weight: 700;
     }
    .create-user-btn{
        background: #0369a1;
        box-shadow: 0 10px 15px -3px rgb(12 74 110 / 0.2), 0 4px 6px -4px rgb(12 74 110 / 0.2);
        border-radius: 0.5rem;
    }
    .create-user-btn :deep(.v-btn__prepend){
        padding: 0 0 0 .75rem;
        color: white;
    }
    .create-user-btn :deep(.v-btn__content){
        color: white;
    }
    :deep(.risk .v-card-actions span){
        color: #566167;
        font-weight: 500;
        font-size: 0.875rem;
        line-height: 1.25rem;
        gap: .5rem;
    }
    :deep(.v-card-actions span){
        padding: 1rem;
    }
    :deep(.v-card-actions span){
        font-family: Manrope;
        color: #00687b;
        font-weight: 800;
        font-size: 0.875rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        text-transform: capitalize;
    }
    :deep(.v-card-actions span svg){
        color: white;
    }
    :deep(.v-card-actions .v-btn:nth-child(1)){
        flex: 1;
    }
    :deep(.v-card-actions .v-btn:nth-child(2)){
        flex: 2;
    }
    .card-menu :deep(.v-list-item__prepend) {
        display: inline-block;
    }
    .card-menu .v-list,
    .card-menu :deep(.v-list-item-title) {
        color: #334155;
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1rem;
    }
</style>