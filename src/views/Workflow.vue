<template>
    <v-container>
        <v-row class="header">
            <v-col>
                <span class="text-uppercase">Γραμμη Παραγωγης</span>
                <h1>Έλεγχος Ροών</h1>
            </v-col>
            <v-col class="d-flex align-center justify-end kanban-col">
                <v-card class="pa-1">
                    <v-btn density="comfortable" class="float-right" elevation="0">
                        Kanban View
                    </v-btn>
                </v-card>
            </v-col>
        </v-row>
        <v-row no-gutters class="ga-8 work-container mt-8">
            <v-col class="work-column">
                <v-row>
                    <v-col>
                        <div class="d-flex ga-2 align-center">
                            <v-icon size="8" color="#cbd5e1">mdi-circle</v-icon>
                            <h3>Προετοιμασία</h3>
                        </div>
                    </v-col>
                    <v-col class="d-flex justify-end">
                        <v-btn variant="tonal" color="#cbd5e1" density="compact" disabled>
                            1
                        </v-btn>
                    </v-col>
                </v-row>

                <div class="workflow-item my-4">
                    <v-row>
                        <v-col class="">
                            <v-row class="d-flex justify-space-between">
                                <v-col class="d-flex ga-4">
                                    <v-chip variant="tonal" color="#64748b" size="x-small" label>#ORD-90124</v-chip>
                                    <v-chip variant="tonal" color="#a83836" size="x-small" label><v-icon class="mt-1">mdi-circle-medium</v-icon>High priority</v-chip>
                                </v-col>
                                <v-col cols="auto">
                                    <v-menu offset-y class="card-menu" :offset="[-8,-12]" location="bottom end" scroll-strategy="close">
                                        <template v-slot:activator="{props}">                  
                                        <v-btn v-bind="props" icon="mdi-dots-vertical" size="medium" color="#94a3b8" variant="plain"></v-btn>
                                        </template>
                                        
                                        <v-card class="rounded-lg overflow-hidden" max-width="200">
                                        <v-list min-width="200" class="overflow-hidden px-0 pb-1" density="compact">
                                            <v-list-item color="primary" rounded="shaped">
                                                <template v-slot:prepend>
                                                    <v-icon icon="mdi-note-text-outline"></v-icon>
                                                </template>
                                            <v-list-item-title class="text-sm">Add note</v-list-item-title>
                                            </v-list-item>
                                            
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-icon icon="mdi-clock-outline"></v-icon>
                                                </template>
                                            <v-list-item-title class="text-sm">Put on hold</v-list-item-title>
                                            </v-list-item>
                                            <v-divider class="mt-2"></v-divider>
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-icon icon="mdi-eye-arrow-right-outline"></v-icon>
                                                </template>
                                            <v-list-item-title class="text-sm">View Details</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                        </v-card>
                                    </v-menu>
                                </v-col>
                            </v-row>
                            <h4 class="mt-4">Heavyweight Oversized Tee</h4>
                            <p class="mb-4">Customer: Urban Outfitters Corp.</p>
                            <v-row class="description d-flex ga-6">
                                <v-col class="d-flex flex-column" cols="auto">
                                    <span>Quantity</span>
                                    <span>100 Units</span>
                                </v-col>

                                <v-col class="d-flex flex-column">
                                    <span>Size & Color</span>
                                    <span>L / XL Mix | Washed Black</span>
                                </v-col>
                            </v-row>
                            <v-divider class="mb-2 mt-4"></v-divider>
                            <v-row>
                                <v-col>
                                    <v-chip class="date-chip" variant="text" prepend-icon="mdi-calendar-month">Due: Oct.24 2026</v-chip>
                                </v-col>
                                <v-col class="d-flex justify-end align-center">
                                    <v-chip class="status-chip" color="#00687b" variant="tonal" size="x-small" label>Paid</v-chip>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </div>
            </v-col>

            <v-col class="work-column cutting-column">
                <v-row>
                    <v-col>
                        <div class="d-flex ga-2 align-center">
                            <v-icon size="8" color="#0ea5e9">mdi-circle</v-icon>
                            <h3>Κοπή</h3>
                        </div>
                    </v-col>
                    <v-col class="d-flex justify-end">
                        <v-btn variant="tonal" color="#0ea5e9" density="compact" disabled>
                            1
                        </v-btn>
                    </v-col>
                </v-row>

                <div class="workflow-item my-4">
                    <v-row>
                        <v-col class="">
                            <v-row class="d-flex justify-space-between">
                                <v-col class="d-flex ga-4">
                                    <v-chip variant="tonal" color="#64748b" size="x-small" label>#ORD-90124</v-chip>
                                    <v-chip variant="tonal" color="#0369a1" size="x-small" label><v-icon class="mt-1">mdi-circle-medium</v-icon>Medium priority</v-chip>
                                </v-col>
                                <v-col cols="auto">
                                    <v-menu offset-y class="card-menu" :offset="[-8,-12]" location="bottom end" scroll-strategy="close">
                                        <template v-slot:activator="{props}">                  
                                        <v-btn v-bind="props" icon="mdi-dots-vertical" size="medium" color="#94a3b8" variant="plain"></v-btn>
                                        </template>
                                        
                                        <v-card class="rounded-lg overflow-hidden" max-width="200">
                                        <v-list min-width="200" class="overflow-hidden px-0 pb-1" density="compact">
                                            <v-list-item color="primary" rounded="shaped">
                                                <template v-slot:prepend>
                                                    <v-icon icon="mdi-note-text-outline"></v-icon>
                                                </template>
                                            <v-list-item-title class="text-sm">Add note</v-list-item-title>
                                            </v-list-item>
                                            
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-icon icon="mdi-clock-outline"></v-icon>
                                                </template>
                                            <v-list-item-title class="text-sm">Put on hold</v-list-item-title>
                                            </v-list-item>
                                            <v-divider class="mt-2"></v-divider>
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-icon icon="mdi-eye-arrow-right-outline"></v-icon>
                                                </template>
                                            <v-list-item-title class="text-sm">View Details</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                        </v-card>
                                    </v-menu>
                                </v-col>
                            </v-row>
                            <h4 class="mt-4">Organic Cotton Essential</h4>
                            <p class="mb-4">Customer: Sustainable Threads</p>
                            <v-row class="description d-flex ga-6">
                                <v-col class="d-flex flex-column" cols="auto">
                                    <span>Quantity</span>
                                    <span>240 Units</span>
                                </v-col>

                                <v-col class="d-flex flex-column">
                                    <span>Size & Color</span>
                                    <span>Full Range / Natural | White</span>
                                </v-col>
                            </v-row>
                            <v-divider class="mb-2 mt-4"></v-divider>
                            <v-row>
                                <v-col>
                                    <v-chip class="date-chip" variant="text" prepend-icon="mdi-calendar-month">Due: Oct.24 2026</v-chip>
                                </v-col>
                                <v-col class="d-flex justify-end align-center">
                                    <v-chip class="status-chip" color="#64748b" variant="tonal" size="x-small" label>Pending</v-chip>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </div>
            </v-col>

            <v-col class="work-column">
                <v-row>
                    <v-col>
                        <div class="d-flex ga-2 align-center">
                            <v-icon size="8" color="#0369a1">mdi-circle</v-icon>
                            <h3>Ράψιμο</h3>
                        </div>
                    </v-col>
                    <v-col class="d-flex justify-end">
                        <v-btn variant="tonal" color="#0369a1" density="compact" disabled>
                            1
                        </v-btn>
                    </v-col>
                </v-row>

                <div class="workflow-item my-4">
                    <v-row>
                        <v-col class="">
                            <v-row class="d-flex justify-space-between">
                                <v-col class="d-flex ga-4">
                                    <v-chip variant="tonal" color="#64748b" size="x-small" label>#ORD-90124</v-chip>
                                    <v-chip variant="tonal" color="#a83836" size="x-small" label><v-icon class="mt-1">mdi-circle-medium</v-icon>Urgent</v-chip>
                                </v-col>
                                <v-col cols="auto">
                                    <v-menu offset-y class="card-menu" :offset="[-8,-12]" location="bottom end" scroll-strategy="close">
                                        <template v-slot:activator="{props}">                  
                                        <v-btn v-bind="props" icon="mdi-dots-vertical" size="medium" color="#94a3b8" variant="plain"></v-btn>
                                        </template>
                                        
                                        <v-card class="rounded-lg overflow-hidden" max-width="200">
                                        <v-list min-width="200" class="overflow-hidden px-0 pb-1" density="compact">
                                            <v-list-item color="primary" rounded="shaped">
                                                <template v-slot:prepend>
                                                    <v-icon icon="mdi-note-text-outline"></v-icon>
                                                </template>
                                            <v-list-item-title class="text-sm">Add note</v-list-item-title>
                                            </v-list-item>
                                            
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-icon icon="mdi-clock-outline"></v-icon>
                                                </template>
                                            <v-list-item-title class="text-sm">Put on hold</v-list-item-title>
                                            </v-list-item>
                                            <v-divider class="mt-2"></v-divider>
                                            <v-list-item>
                                                <template v-slot:prepend>
                                                    <v-icon icon="mdi-eye-arrow-right-outline"></v-icon>
                                                </template>
                                            <v-list-item-title class="text-sm">View Details</v-list-item-title>
                                            </v-list-item>
                                        </v-list>
                                        </v-card>
                                    </v-menu>
                                </v-col>
                            </v-row>
                            <h4 class="mt-4">Heavyweight Oversized Tee</h4>
                            <p class="mb-4">Customer: Urban Outfitters Corp.</p>
                            <v-row class="description d-flex ga-6">
                                <v-col class="d-flex flex-column" cols="auto">
                                    <span>Quantity</span>
                                    <span>100 Units</span>
                                </v-col>

                                <v-col class="d-flex flex-column">
                                    <span>Size & Color</span>
                                    <span>L / XL Mix | Washed Black</span>
                                </v-col>
                            </v-row>
                            <v-divider class="mb-2 mt-4"></v-divider>
                            <v-row>
                                <v-col>
                                    <v-chip class="date-chip" variant="text" prepend-icon="mdi-calendar-month">Due: Oct.24 2026</v-chip>
                                </v-col>
                                <v-col class="d-flex justify-end align-center">
                                    <v-chip class="status-chip" color="#00687b" variant="tonal" size="x-small" label>Paid</v-chip>
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </div>
            </v-col>

            <v-col class="work-column">
                <v-row>
                    <v-col>
                        <div class="d-flex ga-2 align-center">
                            <v-icon size="8" color="#00687b">mdi-circle</v-icon>
                            <h3>Έλεγχος Ποιότητας</h3>
                        </div>
                    </v-col>
                    <v-col class="d-flex justify-end">
                        <v-btn variant="tonal" color="#00687b" density="compact" disabled>
                            0
                        </v-btn>
                    </v-col>
                </v-row>
                <div class="empty-container my-4 d-flex align-center justify-center flex-column">
                    <v-icon>mdi-file-document-check-outline</v-icon>
                    <p>No items</p>
                </div>
            </v-col>

            <v-col class="work-column">
                <v-row>
                    <v-col>
                        <div class="d-flex ga-2 align-center">
                            <v-icon size="8" color="#00687b">mdi-circle</v-icon>
                            <h3>Αποστολή</h3>
                        </div>
                    </v-col>
                    <v-col class="d-flex justify-end">
                        <v-btn variant="tonal" color="#00687b" density="compact" disabled>
                            0
                        </v-btn>
                    </v-col>
                </v-row>

                <div class="empty-container my-4 d-flex align-center justify-center flex-column">
                    <v-icon>mdi-truck-fast-outline</v-icon>
                    <p>No batches</p>
                </div>
            </v-col>

        </v-row>
    </v-container>
</template>

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
    .work-column h3{
        color: #1e293b;
        font-weight: 700;
        font-size: 0.875rem;
        line-height: 1.25rem;
    }
    .workflow-item{
        background: white;
        min-height: 13rem;
        padding: 1rem;
        border-radius: .75rem;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    }
    .cutting-column .workflow-item{
        border-left: 4px solid #0ea5e9; 
    }
    .work-container{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1rem;
    }
    .workflow-item :deep(.v-chip){
        letter-spacing: 0.05em;
        font-weight: 700;
        text-transform: uppercase;
    }
    .workflow-item h4{
        color: #0f172a;
        line-height: 1.25;
        font-weight: 700;
    }
    .workflow-item p{
        color: #64748b;
        font-size: 0.75rem;
        line-height: 1rem;
    }
    .workflow-item .description span:nth-child(1){
        color: #94a3b8;
        letter-spacing: -0.025em;
        text-transform: uppercase;
        font-weight: 700;
        font-size: .575rem;
    }
    .workflow-item .description span:nth-child(2){
        color: #334155;
        font-size: 0.75rem;
        line-height: 1.25rem;
        font-weight: 700;
    }
    .workflow-item .date-chip{
        color: #475569;
        font-weight: 700;
        font-size: .625rem;
    }
    .workflow-item .date-chip :deep(.v-chip__prepend){
        color: #94a3b8;
        font-size: .675rem;
    }
    .card-menu :deep(.v-list-item__prepend){
        display: inline-block;
    }
    .card-menu .v-list,
    .card-menu :deep(.v-list-item-title){
        color: #334155;
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1rem;
    }
    .empty-container{
        min-height: 13rem;
        padding: 2rem;
        background-color: #f8fafc80;
        border: 2px dashed #e2e8f0;
        border-radius: 1rem;
    }
    .empty-container .v-icon{
        color: #cbd5e1;
        font-size: 2.25rem;
        line-height: 2.5rem;
    }
    .empty-container p{
        color: #94a3b8;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-size: 0.75rem;
        line-height: 1rem;
        font-weight: 700;
    }
    .kanban-col .v-btn{
        color: #2a343a;
        background-color: #e7eff5;
        font-size: 0.875rem;
        line-height: 1.25rem;
        padding: .5rem 1rem;
        font-weight: 700;
    }
    .kanban-col .v-card{
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);   
        border-radius: 0.75rem; 
        border: 1px solid #a9b3bb26;
    }
</style>