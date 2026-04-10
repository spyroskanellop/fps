<template>
    <v-container>
        <v-row class="header">
            <v-col>
                <span class="text-uppercase">Factory Overview</span>
                <h1>Live Orders</h1>
            </v-col>
            <v-col class="d-flex ga-5 justify-end align-center">
                <v-btn variant="outlined" color="#0369a1">
                    <template v-slot:prepend><CaFilterEdit /></template>
                    Advanced Filters
                </v-btn>
                <v-btn color="#0369a1" class="new-order-btn">Create New Order</v-btn>
            </v-col>
        </v-row>

        <v-row class="ga-6">
            <v-col>
                <v-card class="mx-auto py-2 px-5">
                    <v-card-item>
                        <v-card-title>Card title</v-card-title>
                    </v-card-item>
                    <v-card-text>
                        1,284
                    </v-card-text>
                    <v-card-actions>
                        <span><v-icon><FeTrendingUp/></v-icon> +12.5% vs last month </span>
                    </v-card-actions>
                    <v-icon class="background-icon"><FlClipboardMultiple/></v-icon>
                </v-card>
            </v-col>

            <v-col>
                <v-card class="mx-auto py-2 px-5">
                    <v-card-item>
                        <v-card-title>Card title</v-card-title>
                    </v-card-item>
                    <v-card-text>
                        1,284
                    </v-card-text>
                    <v-card-actions>
                        <span><v-icon><FeTrendingUp/></v-icon> +12.5% vs last month </span>
                    </v-card-actions>
                    <v-icon class="background-icon"><FlClipboardMultiple/></v-icon>
                </v-card>
            </v-col>
            <v-col>
                <v-card class="mx-auto py-2 px-5">
                    <v-card-item>
                        <v-card-title>Card title</v-card-title>
                    </v-card-item>
                    <v-card-text>
                        1,284
                    </v-card-text>
                    <v-card-actions>
                        <span><v-icon><FeTrendingUp/></v-icon> +12.5% vs last month </span>
                    </v-card-actions>
                    <v-icon class="background-icon"><FlClipboardMultiple/></v-icon>
                </v-card>
            </v-col>

        </v-row>

        <div class="table-container mt-6">
            <v-data-table class="" :items="items"></v-data-table>
        </div>

    </v-container>
</template>
<script>
    import { CaFilterEdit, FeTrendingUp, FlClipboardMultiple } from '@kalimahapps/vue-icons';

    export default {
        name: "Orders",
        components: {
            CaFilterEdit,
            FeTrendingUp,
            FlClipboardMultiple
        },
        data() {
            return {
                // Data properties for orders can be added here
                items: [
                    {
                        Order_Id: '#ORD-2024-8812',
                        Cust_id: 'C-88219',
                        SKU_CODE: 'PRC-99-ALPHA',
                        product_name: 'Titanium Turbine Blade V4',
                        qty: 45,
                        current_stage: 'Manufacturing',
                        payment_status: 'Paid'
                    },
                    {
                        Order_Id: '#ORD-2024-8812',
                        Cust_id: 'C-88219',
                        SKU_CODE: 'PRC-99-ALPHA',
                        product_name: 'Titanium Turbine Blade V4',
                        qty: 45,
                        current_stage: 'Manufacturing',
                        payment_status: 'Paid'
                    },
                    {
                        Order_Id: '#ORD-2024-8812',
                        Cust_id: 'C-88219',
                        SKU_CODE: 'PRC-99-ALPHA',
                        product_name: 'Titanium Turbine Blade V4',
                        qty: 45,
                        current_stage: 'Manufacturing',
                        payment_status: 'Paid'
                    },
                    {
                        Order_Id: '#ORD-2024-8812',
                        Cust_id: 'C-88219',
                        SKU_CODE: 'PRC-99-ALPHA',
                        product_name: 'Titanium Turbine Blade V4',
                        qty: 45,
                        current_stage: 'Manufacturing',
                        payment_status: 'Paid'
                    },
                    
                ]
            }
        },

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
    .new-order-btn{
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
    :deep(.v-card){
        width: 100%;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        border-radius: 0.75rem;
    }
    :deep(.v-card .v-card-title){
        color: #566167;
        font-size: 0.75rem;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        font-family: Manrope;
    }
    :deep(.v-card-text){
        color: #2a343a;
        font-size: 2.25rem;
        font-weight: 800;
        font-family: Manrope;
        padding-bottom: 0;
    }
    :deep(.v-card-actions span){
        padding: 1rem;
    }
    :deep(.v-card-actions span){
        font-family: Manrope;
        color: #00687b;
        font-weight: 700;
        font-size: 0.875rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
    }
    .background-icon{
        position: absolute;
        right: -.75rem;
        bottom: -1rem;
        font-size: 7rem;
        color: #2a343a;
        opacity: 0.05;
    }
    .v-table{
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        border-radius: 0.75rem;
        background: white;
        overflow: hidden;
    }
    :deep(.v-table-wrapper){
        border-radius: 0.75rem;
    }
    :deep(.v-table thead tr){
        background-color: #e2e8f0;
        /* border: 1px solid #e1e9f04d; */
    }
    .table-container{
        background-color: #e2e8f0;
        padding: 1px;
        border: 1px solid #e1e9f04d;
        /* border-radius: 1rem; */
        border-radius: .75rem;
    }
    :deep(.v-table.v-data-table .v-table__wrapper table tbody tr td),
    :deep(.v-table.v-data-table .v-table__wrapper table thead tr th)
    {
        border-bottom: 0;
    }
    :deep(.v-table.v-data-table .v-table__wrapper table thead th span){
        font-family: Manrope;
        color: #566167;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 0.675rem;
    }
</style>