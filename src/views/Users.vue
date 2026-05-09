<template>
    <v-container>
        <v-row class="header">
            <v-col>
                <span class="text-uppercase">Manage your team & permissions.</span>
                <h1>Active Personnel</h1>
            </v-col>
            <v-col class="d-flex ga-5 justify-end align-center">
                <v-btn variant="outlined" color="#0369a1">
                    <template v-slot:prepend><CaFilterEdit /></template>
                    Add new user
                </v-btn>
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
                                        <v-img src="src/assets/tengen-avatar.png" alt="Avatar" />
                                    </v-avatar>
                                </v-badge>
                            </v-col>
                            <v-col class="d-flex justify-end">
                                <div>
                                    <v-btn icon="mdi-dots-vertical" variant="plain"></v-btn>
                                </div>
                            </v-col>
                            
                        </v-row>

                        <v-row>
                            <v-col>
                                <h3>Johny Doe</h3>
                                <p>Johny@doe.com</p>
                            </v-col>
                        </v-row>
                        <v-row class="d-flex justify-space-between">
                            <v-col>
                                <v-chip>
                                    Admin
                                </v-chip>
                            </v-col>
                            <v-col class="d-flex align-center justify-end">
                                <div class="d-flex align-center justify-end ga-4 user-id">
                                    <span>ID:</span>
                                    <span>12345</span>
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
    export default {
        name: 'Users',
        data() {
            return {
                users: [1, 2, 3, 4, 5, 6, 7, 8]
            }
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
        color: #003a5a;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        font-size: .675rem;
        font-weight: 700;
        padding: .25rem .75rem;
        /* background-color: #79bff833; */
        border-radius: 999px;
    }
    .users-card :deep(.v-chip .v-chip__content){
        font-family: Manrope;
    }
    .users-card :deep(.v-chip .v-chip__underlay){
        background: #79bff8;
    }
    .user-id{
        color: #a9b3bb;
        font-weight: 700;
        font-size: .675rem;
    }
</style>