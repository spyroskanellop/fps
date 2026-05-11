<template>
    <v-container>
        <v-row class="header">
            <v-col>
                <span class="text-uppercase">Manage your team & permissions.</span>
                <h1>Active Personnel</h1>
            </v-col>
            <v-col class="d-flex ga-5 justify-end align-center">

                <v-dialog max-width="576" transition="slide-x-reverse-transition" class="new-user-dialog">
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn color="#0369a1" class="new-user-btn" v-bind="activatorProps">Create New User</v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-card class="new-user-card">
                            <template v-slot:title>
                                <v-row>
                                    <v-col cols="auto">
                                        <v-avatar color="#0369a1" variant="tonal" size="50" rounded="lg">
                                            <v-icon size="30"><ClUsers/></v-icon>
                                        </v-avatar>
                                    </v-col>
                                    <v-col>
                                        <h3 class="header-title">Create New User</h3>
                                        <p class="header-subtitle">Configure profiles and assignments</p>
                                    </v-col>
                                    <v-col>
                                        <v-btn
                                        @click="isActive.value = false"
                                        variant="text"
                                        class="float-right"
                                        >
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
                                            <v-icon icon="mdi-camera" color="#727c83"></v-icon>
                                        </div>
                                    </v-col>
                                    <v-col class="d-flex flex-column justify-center">
                                        <span>Identification</span>
                                        <p>Upload worker ID photo (optional)</p>
                                    </v-col>
                                </v-row>
                            </div>

                            <div class="my-8">
                                <v-row no-gutters class="ga-6">
                                    <v-col cols="5">
                                        <h4 class="description mb-2">First Name</h4>
                                        <v-text-field
                                            density="compact"
                                            placeholder="John"
                                            variant="outlined"
                                            hide-details
                                        ></v-text-field>
                                    </v-col>

                                    <v-col class="7">
                                        <h4 class="description mb-2">Last Name</h4>
                                        <v-text-field
                                            density="compact"
                                            placeholder="Doe"
                                            variant="outlined"
                                            hide-details
                                        ></v-text-field>
                                    </v-col>

                                </v-row>

                                <v-row>
                                    <v-col>
                                        <h4 class="description mb-2">Email Address</h4>
                                        <v-text-field
                                            density="compact"
                                            placeholder="john.doe@example.com"
                                            variant="outlined"
                                            hide-details
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-row no-gutters>
                                            <h4 class="description mb-2">Employee Id</h4>
                                        </v-row>
                                        <v-text-field
                                            density="compact"
                                            placeholder="FM-12345"
                                            variant="outlined"
                                            hide-details
                                        ></v-text-field>
                                        <v-btn
                                            variant="text"
                                            class="float-left generate-link"
                                            size="small">
                                            <template v-slot:prepend>
                                                <v-icon><ReAiGenerate/></v-icon>
                                            </template> 
                                            Generate UUID
                                        </v-btn>
                                    </v-col>
                                    <v-col>
                                        <h4 class="description mb-2">Industrial Role</h4>
                                        <v-select
                                            density="compact"
                                            placeholder="Select Role"
                                            variant="outlined"
                                            hide-details
                                            :items="['Press Operator', 'Batch Specialist', 'Maintenance Technician',
                                             'Quality Inspector', 'Warehouse Manager']"
                                        ></v-select>
                                    </v-col>
                                </v-row>
                            </div>

                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions class="d-flex justify-space-between pa-8 ga-6">
                            <v-btn
                                class="h-auto"
                                text="Discard Changes"
                            ></v-btn>
                            <v-btn
                                class="h-auto create-user-btn"
                                text="Create User"
                                :prepend-icon="userAddIcon"
                                @click="isActive.value = false"
                            ></v-btn>

                        </v-card-actions>
                        </v-card>
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
                                        <v-img :src="user.avatar_img || 'src/assets/user_1.jpg'" alt="Avatar" />
                                    </v-avatar>
                                </v-badge>
                            </v-col>
                            <v-col class="d-flex justify-end">
                                <div>
                                    <v-btn icon="mdi-dots-vertical" variant="plain"></v-btn>
                                </div>
                            </v-col>
                            
                        </v-row>

                        <v-row class="mt-1">
                            <v-col>
                                <h3>{{ user.name }}</h3>
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

    export default {
        name: 'Users',
        data() {
            return {
                users: [
                    {avatar_img: 'src/assets/tengen_avatar.png', name: 'John Doe', email: 'john.doe@example.com', role: 'Admin', id: '12345'},
                    {avatar_img: 'src/assets/user_1.jpg', name: 'Jane Smith', email: 'jane.smith@example.com', role: 'User', id: '67890'},
                    {avatar_img: 'src/assets/user_1.jpg', name: 'Alice Johnson', email: 'alice.johnson@example.com', role: 'User', id: '11111'},
                    {avatar_img: 'src/assets/user_1.jpg', name: 'Bob Brown', email: 'bob.brown@example.com', role: 'User', id: '22222'},
                    {avatar_img: 'src/assets/user_1.jpg', name: 'Charlie Davis', email: 'charlie.davis@example.com', role: 'User', id: '33333'},
                    {avatar_img: 'src/assets/user_1.jpg', name: 'Diana Wilson', email: 'diana.wilson@example.com', role: 'User', id: '44444'},
                ],
                userAddIcon: AnOutlinedUserAdd,
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
    .new-user-card .v-card-text :deep(.v-field){
        border-radius: 0.5rem;
        padding: .2rem 1rem .2rem 0;
    }
    :deep(.v-overlay__scrim){
        background: #0f172a66;
        opacity: 1;
        backdrop-filter: blur(8px);
    }
    /* .create-order-btn{
        background: #0369a1;
        box-shadow: 0 10px 15px -3px rgb(12 74 110 / 0.2), 0 4px 6px -4px rgb(12 74 110 / 0.2);
        border-radius: 0.5rem;
    }
    .create-order-btn :deep(.v-btn__prepend){
        padding: 0 0 0 .75rem;
        color: white;
    }
    .create-order-btn :deep(.v-btn__content){
        color: white;
    } */
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
    :deep(.v-card-actions .v-btn:nth-child(1)){
        flex: 1;
    }
    :deep(.v-card-actions .v-btn:nth-child(2)){
        flex: 2;
    }
</style>