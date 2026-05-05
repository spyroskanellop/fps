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
            <v-data-table class="" :headers="headers" :items="this.items" item-value="Order_Id"
                sort-asc-icon="mdi-sort-ascending"
                sort-desc-icon="mdi-sort-descending"
                sort-icon="mdi-swap-vertical"
                show-expand>
                <template v-slot:[`item.Order_Id`]="{item}">
                    <div>
                        <h2 class="order-header">
                            {{ item.Order_Id }}
                        </h2>
                    </div>
                </template>
                <template v-slot:[`item.Cust_id`]="{item}">
                    <div>
                        <h2 class="cust-header">
                            {{ item.Cust_id }}
                        </h2>
                    </div>
                </template>
                <template v-slot:[`item.SKU_CODE`]="{item}">
                    <div>
                        <h2 class="sku-header">
                            {{ item.SKU_CODE }}
                        </h2>
                    </div>
                </template>
                <template v-slot:[`item.product_name`]="{item}">
                    <div>
                        <h2 class="name-header">
                            {{ item.product_name }}
                        </h2>
                    </div>
                </template>
                <template v-slot:[`item.qty`]="{item}">
                    <div>
                        <h2 class="qty-header">
                            {{ item.qty }}
                        </h2>
                    </div>
                </template>

                <template v-slot:[`item.current_stage`]="{item}">
                    <div v-if="item.current_stage.toUpperCase() === 'MANUFACTURING'">
                        <h2 class="stage-header blue">
                            {{ item.current_stage }}
                        </h2>
                    </div>
                    
                    <div v-if="item.current_stage.toUpperCase() === 'SEWING'">
                        <h2 class="stage-header yellow">
                            {{ item.current_stage }}
                        </h2>
                    </div>
                </template>
                <template v-slot:[`item.payment_status`]="{item}">
                    <div v-if="item.payment_status.toUpperCase() === 'PAID'">
                        <h2 class="payment-header paid">
                            <MiMoneyPlus/>
                            {{ item.payment_status }}
                        </h2>
                    </div>
                    <div v-if="item.payment_status.toUpperCase() === 'PENDING'">
                        <h2 class="payment-header pending">
                            <CgSandClock />
                            {{ item.payment_status }}
                        </h2>
                    </div>

                </template>


                <template v-slot:expanded-row="{ columns, item }">   
                    <tr class="expanded-row">
                        <td :colspan="columns.length" class="px-5 py-6">
                            <v-row class="justify-space-between">
                                <v-col cols="3">
                                    <div class="details">
                                        <div class="v-row">
                                            <v-col cols="auto" class="d-flex flex-center"><MiMoneyPlus/></v-col>
                                            <v-col><h4>Financial Details</h4></v-col>
                                        </div>
                                        
                                        <div class="content mt-2">
                                            <div class="d-flex justify-space-between">
                                                <span class="header">Total Amount:</span>
                                                <span>$123.45</span>
                                            </div>
                                            <div class="d-flex justify-space-between">
                                                <span class="header">Balance:</span>
                                                <span>$00.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </v-col>

                                <v-col cols="3" class="ml-8">
                                    <div class="details">
                                        <div class="v-row">
                                            <v-col cols="auto" class="d-flex flex-center"><MdTimeline/></v-col>
                                            <v-col><h4>Production Timeline</h4></v-col>
                                        </div>
                                        
                                        <div class="content mt-2">
                                            <div class="d-flex justify-space-between">
                                                <span class="header">Order Date:</span>
                                                <span>2024-05-12</span>
                                            </div>
                                        </div>
                                    </div>
                                </v-col>



                                <v-col>
                                    <v-btn color="primary" class="float-right">Update Status</v-btn>
                                </v-col>
                            </v-row>
                        </td>
                    </tr>
                </template>
            </v-data-table>
        </div>

    </v-container>
</template>
<script>
    import { CaFilterEdit, FeTrendingUp, FlClipboardMultiple, MiMoneyPlus, CgSandClock, MdTimeline } from '@kalimahapps/vue-icons';
    
    export default {
        name: "Orders",
        components: {
            CaFilterEdit,
            FeTrendingUp,
            FlClipboardMultiple,
            MiMoneyPlus,
            CgSandClock, 
            MdTimeline
        },
        data() {
            return {
                // Data properties for orders can be added here
                headers: [
                    { title: "Order Id", key: "Order_Id", value: "Order_Id", sortable: true},
                    { title: "Cust Id", key: "Cust_id", value: "Cust_id", sortable: true},
                    { title: "SKU CODE", key: "SKU_CODE", value: "SKU_CODE", sortable: true},
                    { title: "Product Name", key: "product_name", value: "product_name", sortable: true},
                    { title: "Qty", key: "qty", value: "qty", sortable: true},
                    { title: "Current Stage", key: "current_stage", value: "current_stage", sortable: true},
                    { title: "Payment Status", key: "payment_status", value: "payment_status", sortable: true},
                ],
                items: [
                    {
                        Order_Id: '#ORD-2024-8812',
                        Cust_id: 'C-88219',
                        SKU_CODE: 'PRC-99-ALPHA',
                        product_name: 'Titanium Turbine Blade V4',
                        qty: 45,
                        current_stage: 'Sewing',
                        payment_status: 'Paid'
                    },
                    {
                        Order_Id: '#ORD-2024-8813',
                        Cust_id: 'C-88219',
                        SKU_CODE: 'PRC-99-ALPHA',
                        product_name: 'Titanium Turbine Blade V4',
                        qty: 45,
                        current_stage: 'Manufacturing',
                        payment_status: 'Paid'
                    },
                    {
                        Order_Id: '#ORD-2024-8814',
                        Cust_id: 'C-88219',
                        SKU_CODE: 'PRC-99-ALPHA',
                        product_name: 'Titanium Turbine Blade V4',
                        qty: 45,
                        current_stage: 'Manufacturing',
                        payment_status: 'Pending'
                    },
                    {
                        Order_Id: '#ORD-2024-8815',
                        Cust_id: 'C-88219',
                        SKU_CODE: 'PRC-99-ALPHA',
                        product_name: 'Titanium Turbine Blade V4',
                        qty: 45,
                        current_stage: 'Manufacturing',
                        payment_status: 'Paid'
                    },
                    {
                        Order_Id: '#ORD-2024-8816',
                        Cust_id: 'C-88219',
                        SKU_CODE: 'PRC-99-ALPHA',
                        product_name: 'Titanium Turbine Blade V4',
                        qty: 45,
                        current_stage: 'Manufacturing',
                        payment_status: 'Pending'
                    },
                    {
                        Order_Id: '#ORD-2024-8817',
                        Cust_id: 'C-88219',
                        SKU_CODE: 'PRC-99-ALPHA',
                        product_name: 'Titanium Turbine Blade V4',
                        qty: 45,
                        current_stage: 'Sewing',
                        payment_status: 'Paid'
                    },
                    {
                        Order_Id: '#ORD-2024-8818',
                        Cust_id: 'C-88219',
                        SKU_CODE: 'PRC-99-ALPHA',
                        product_name: 'Titanium Turbine Blade V4',
                        qty: 45,
                        current_stage: 'Manufacturing',
                        payment_status: 'Paid'
                    },
                    {
                        Order_Id: '#ORD-2024-8819',
                        Cust_id: 'C-88219',
                        SKU_CODE: 'PRC-99-ALPHA',
                        product_name: 'Titanium Turbine Blade V4',
                        qty: 45,
                        current_stage: 'Sewing',
                        payment_status: 'Pending'
                    },
                ],
                expanded: []
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
        background: transparent;
        overflow: hidden;
    }
    :deep(.v-table tbody){
        background: white;
    }
    :deep(.v-table .v-divider){
        display: none;
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
    :deep(.v-table.v-data-table .v-table__wrapper table tbody tr td){
        border-bottom: 1px solid #e1e9f04d;
        padding: .785rem 1.5rem;
    }
    :deep(.v-table.v-data-table .v-table__wrapper table thead th span){
        font-family: Manrope;
        color: #566167;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 0.675rem;
    }
    :deep(.v-table.v-data-table .v-table__wrapper){
        border-radius: 0.75rem;
    }
    :deep(.order-header){
        color: #006497;
        font-size: 1rem;
    }
    :deep(.cust-header){
        color: #566167;
        font-size: 1rem;
        font-weight: 500;
        font-family: 'Manrope';
    }
    :deep(.sku-header){
        color: #566167;
        font-size: .75rem;
        font-family: 'Manrope';
        font-weight: 400;
    }
    :deep(.name-header){
        color: #2a343a;
        font-size: 1rem;
        font-family: 'Manrope';
        font-weight: 600;
    }
    :deep(.qty-header){
        font-size: .875rem;
        font-family: 'Manrope';
        font-weight: 700;
    }
    :deep(.stage-header){
        font-size: .675rem;
        font-family: 'Manrope';
        font-weight: 800;
        text-transform: uppercase;
        /* color: #075985; */
        /* background-color: #e0f2fe; */
        padding: .25rem .75rem;
        border-radius: 999px;
        display: inline;
    }
    :deep(.stage-header.blue){
        color: #075985;
        background-color: #e0f2fe;
    }
    :deep(.stage-header.yellow){
        color: #92400e;
        background-color: #fef3c7;
    }
    :deep(.payment-header){
        display: flex;
        align-items: center;
        gap: .25rem;
        font-size: .75rem;
        text-transform: uppercase;
        font-family: 'Manrope';
        font-weight: 700;
    }
    :deep(.payment-header.paid){
        color: #00687b;
    }
    :deep(.payment-header.pending){
        color: #566167;
    }
    :deep(.payment-header svg){
        font-size: 1rem;
    }
    .expanded-row{
        background-color: #eef4fa4d;
        border: 1px solid #e1e9f04d;
    }
    :deep(.expanded-row .details .v-row){
        color: #006497;
        font-size: .675rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
    }
    :deep(.expanded-row .details .content .header){
        color: #566167;
        font-size: 0.75rem;
        line-height: 1rem;
    }
    :deep(.expanded-row .details svg){
        font-size: 1rem;
    }
    :deep(.expanded-row .details .content span:not(.header)){
        font-weight: 700;
        color: #2a343a;
    }
    :deep(.expanded-row .details .content > div:nth-child(1)){
        border-bottom: 1px solid #e2e8f0;
    }
    :deep(.v-data-table-footer__info > div),
    :deep(.v-data-table-footer__items-per-page span){
        color: #566167;
        font-weight: 700;
        font-size: 0.75rem;
        line-height: 1rem;
    }
    :deep(.v-data-table-footer__items-per-page .v-input .v-field){
        border-radius: .75rem;
        background: white;
    }
</style>