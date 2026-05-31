<template>
    <v-container>
        <v-row class="header">
            <v-col>
                <span class="text-uppercase">Επισκοπηση εργαστηριου</span>
                <h1>Παραγγελίες</h1>
            </v-col>
            <v-col class="d-flex ga-5 justify-end align-center">
                <v-btn variant="outlined" color="#0369a1">
                    <template v-slot:prepend><CaFilterEdit /></template>
                    Σύνθετα Φίλτρα
                </v-btn>


                <v-dialog max-width="576" transition="slide-x-reverse-transition" class="new-order-dialog">
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn color="#0369a1" class="new-order-btn" v-bind="activatorProps">Δημιουργία Νέας Παραγγελίας</v-btn>
                    </template>
                    <template v-slot:default="{ isActive }">
                        <v-card class="new-order-card">
                            <template v-slot:title>
                                <v-row>
                                    <v-col cols="auto">
                                        <v-avatar color="#0369a1" variant="tonal" size="50" rounded="lg">
                                            <v-icon size="30"><CaMachineLearningModel/></v-icon>
                                        </v-avatar>
                                    </v-col>
                                    <v-col>
                                        <h3 class="header-title">Δημιουργία Νέας Παραγγελίας</h3>
                                        <p class="header-subtitle">Μοναδα Παραγωγης</p>
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
                            <div>
                                <v-row class="ga-2 mb-6" no-gutters>
                                    <v-col cols="1" class="d-flex align-center justify-center pa-0"><v-divider color="#0369a1" class="border-opacity-100"></v-divider></v-col>
                                    <v-col><h3>Primary Identification</h3></v-col>
                                </v-row>

                                <h4 class="description mb-2">Customer Name</h4>
                                <v-text-field
                                    density="compact"
                                    placeholder="Search or enter customer name..."
                                    append-inner-icon="mdi-magnify "
                                    variant="outlined"
                                    hide-details
                                ></v-text-field>
                                <v-row no-gutters class="ga-6 my-4">
                                    <v-col>
                                        <h4 class="description mb-2">SKU Reference</h4>
                                        <v-text-field
                                            density="compact"
                                            placeholder="TX-2048-IND"
                                            variant="outlined"
                                            hide-details
                                        ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <h4 class="description mb-2">Quantity</h4>
                                        <v-number-input
                                            density="compact"
                                            control-variant="stacked"
                                            placeholder="0"
                                            variant="outlined"
                                        ></v-number-input>
                                    </v-col>
                                </v-row>
                            </div>

                            <div>
                                <v-row class="ga-2 mb-6" no-gutters>
                                    <v-col cols="1" class="d-flex align-center justify-center pa-0"><v-divider color="#0369a1" class="border-opacity-100"></v-divider></v-col>
                                    <v-col><h3>Product Specifications</h3></v-col>
                                </v-row>

                                <h4 class="description mb-2">Customer Name</h4>
                                <v-text-field
                                    density="compact"
                                    placeholder="Search specific product..."
                                    append-inner-icon="mdi-magnify "
                                    variant="outlined"
                                    hide-details
                                ></v-text-field>
                                <v-row no-gutters class="ga-6 my-4">
                                    <v-col>
                                        <h4 class="description mb-2">Product Name</h4>
                                        <v-text-field
                                            density="compact"
                                            placeholder="TX-2048-IND"
                                            variant="outlined"
                                            hide-details
                                        ></v-text-field>
                                    </v-col>
                                    <v-col>
                                        <h4 class="description mb-2">Size</h4>
                                        <v-select
                                            density="compact"
                                            label="Select"
                                            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
                                            variant="outlined"
                                            hide-details
                                        ></v-select>
                                    </v-col>
                                    <v-col>
                                        <h4 class="description mb-2">Color Grade</h4>
                                        <v-container class="pa-0 d-flex ga-2">
                                            <v-btn color="primary" rounded="xl" icon="" size="small" elevation="0"></v-btn>
                                            <v-btn color="secondary" rounded="xl" icon="" size="small" elevation="0"></v-btn>
                                        </v-container>
                                        <v-btn color="primary" variant="text" class="save-btn" :prepend-icon="McBookmarkAddLine">Save as template</v-btn>
                                    </v-col>
                                    
                                </v-row>
                            </div>

                            <div>
                                <v-row class="ga-2 mb-6" no-gutters>
                                    <v-col cols="1" class="d-flex align-center justify-center pa-0"><v-divider color="#0369a1" class="border-opacity-100"></v-divider></v-col>
                                    <v-col><h3>Pipeline Status</h3></v-col>
                                </v-row>

                                <h4 class="description mb-2">Current Stage</h4>
                                <v-select
                                    density="compact"
                                    label="Select"
                                    :items="['Preparation', 'In Progress', 'Completed']"
                                    variant="outlined"
                                    hide-details
                                ></v-select>
                                <v-row no-gutters class="ga-6 my-4 mb-1">
                                    <v-col>
                                        <h4 class="description mb-2">Delivery Status</h4>
                                        <v-select
                                            density="compact"
                                            label="Select"
                                            :items="['Pending Logistics', 'Out for Delivery', 'Delivered']"
                                            variant="outlined"
                                            hide-details
                                        ></v-select>
                                    </v-col>
                                    <v-col>
                                        <h4 class="description mb-2">Due Date</h4>
                                        <v-date-input
                                            prepend-icon=""
                                            prepend-inner-icon="$calendar"
                                            variant="outlined"
                                            density="compact"
                                        ></v-date-input>
                                    </v-col>
                                </v-row>

                                <v-row no-gutters class="ga-6 mb-4">
                                    <v-col cols="12">
                                        <h4 class="description mb-2">Priority Level</h4>
                                        <v-select
                                            density="compact"
                                            label="Select"
                                            :items="['Low', 'Medium', 'High']"
                                            variant="outlined"
                                            hide-details
                                        ></v-select>
                                    </v-col>
                                </v-row>
                            </div>

                            <div class="mt-9">
                                <v-row class="ga-2 mb-6" no-gutters>
                                    <v-col cols="1" class="d-flex align-center justify-center pa-0"><v-divider color="#0369a1" class="border-opacity-100"></v-divider></v-col>
                                    <v-col><h3>Financial Summary</h3></v-col>
                                </v-row>

                                <div class="financial-container">
                                    <v-row no-gutters class="ga-6 mb-4">
                                        <v-col>
                                            <h4 class="description mb-2">Total Amount</h4>
                                            <v-text-field
                                                density="compact"
                                                placeholder="TX-2048-IND"
                                                variant="outlined"
                                                hide-details
                                            ></v-text-field>
                                        </v-col>
                                        <v-col>
                                            <h4 class="description mb-2">Paid Amount</h4>
                                            <v-text-field
                                                density="compact"
                                                placeholder="TX-2048-IND"
                                                variant="outlined"
                                                hide-details
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col>
                                            <h4 class="description mb-2">Current Stage</h4>
                                            <v-select
                                                density="compact"
                                                label="Select"
                                                :items="['Preparation', 'In Progress', 'Completed']"
                                                variant="outlined"
                                                hide-details
                                            ></v-select>
                                        </v-col>
                                    </v-row>
                                </div>
                            </div>

                        </v-card-text>
                        <v-divider></v-divider>
                        <v-card-actions class="d-flex justify-space-between pa-8 ga-6">
                            <v-btn
                                class="h-auto"
                                text="Discard Changes"
                            ></v-btn>
                            <v-btn
                                class="h-auto create-order-btn"
                                text="Create Order"
                                :prepend-icon="HiRocketLaunch"
                                @click="isActive.value = false"
                            ></v-btn>

                        </v-card-actions>
                        </v-card>
                    </template>
                    </v-dialog>
            </v-col>
        </v-row>

        <v-row class="ga-6">
            <v-col>
                <v-card class="mx-auto py-2 px-5">
                    <v-card-item>
                        <v-card-title>Συνολικές Ενεργές Παραγγελίες</v-card-title>
                    </v-card-item>
                    <v-card-text>
                        1,284
                    </v-card-text>
                    <v-card-actions>
                        <span><v-icon><FeTrendingUp/></v-icon> +12.5% vs προηγούμενου μήνα </span>
                    </v-card-actions>
                    <v-icon class="background-icon"><FlClipboardMultiple/></v-icon>
                </v-card>
            </v-col>

            <v-col>
                <v-card class="mx-auto py-2 px-5 blue">
                    <v-card-item>
                        <v-card-title>Σε Παραγωγή</v-card-title>
                    </v-card-item>
                    <v-card-text>
                        1,284
                    </v-card-text>
                    <v-card-actions>
                        <v-row class="d-flex align-center">
                            <v-col>
                                <v-progress-linear buffer-value="65" color="#00687b" height="10" rounded stream></v-progress-linear>
                            </v-col>
                            <v-col cols="auto">
                                <span> 65% χωρητικότητα </span>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-icon class="background-icon"><FlClipboardMultiple/></v-icon>
                </v-card>
            </v-col>
            <v-col>
                <v-card class="mx-auto py-2 px-5 risk">
                    <v-card-item>
                        <v-card-title>Έσοδα Σε Κινδυνό</v-card-title>
                    </v-card-item>
                    <v-card-text>
                        $42,900
                    </v-card-text>
                    <v-card-actions>
                        <span><v-icon><AkTriangleAlert/></v-icon> 12 παραγγελίες καθυστερημένες </span>
                    </v-card-actions>
                    <v-icon class="background-icon"><AkTriangleAlert/></v-icon>
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
                            <v-row class="justify-space-between" no-gutters>
                                <v-col cols="3">
                                    <div class="details">
                                        <v-row no-gutters>
                                            <v-col cols="auto" class="d-flex flex-center"><MiMoneyPlus/></v-col>
                                            <v-col><h4>Financial Details</h4></v-col>
                                        </v-row>
                                        
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
                                        <v-row no-gutters>
                                            <v-col cols="auto" class="d-flex flex-center"><MdTimeline/></v-col>
                                            <v-col><h4>Production Timeline</h4></v-col>
                                        </v-row>
                                        
                                        <div class="content mt-2">
                                            <div class="d-flex justify-space-between">
                                                <span class="header">Order Date:</span>
                                                <span>2024-05-12</span>
                                            </div>
                                        </div>
                                    </div>
                                </v-col>
                                <v-col cols="3">
                                    <v-btn color="primary" class="float-right primary-btn">Update Status</v-btn>
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
    import { CaFilterEdit, FeTrendingUp, FlClipboardMultiple, MiMoneyPlus, CgSandClock, MdTimeline, AkTriangleAlert, CaMachineLearningModel, HiRocketLaunch, McBookmarkAddLine } from '@kalimahapps/vue-icons';
    
    export default {
        name: "Orders",
        components: {
            CaFilterEdit,
            FeTrendingUp,
            FlClipboardMultiple,
            MiMoneyPlus,
            CgSandClock, 
            MdTimeline,
            AkTriangleAlert,
            CaMachineLearningModel,
            HiRocketLaunch,
            McBookmarkAddLine
        },
        data() {
            return {
                // Data properties for orders can be added here
                headers: [
                    { title: "Αναγνωριστικό Παραγγελίας", key: "Order_Id", value: "Order_Id", sortable: true},
                    { title: "Τίτλος Παραγγελίας", key: "Order_Title", value: "Order_Title", sortable: true},
                    { title: "Αναγνωριστικό Πελάτη", key: "Cust_id", value: "Cust_id", sortable: true},
                    { title: "Όνομα Προϊόντος", key: "product_name", value: "product_name", sortable: true},
                    { title: "Ποσότητα", key: "qty", value: "qty", sortable: true},
                    { title: "Τρέχουσα Φάση", key: "current_stage", value: "current_stage", sortable: true},
                    { title: "Payment Status", key: "payment_status", value: "payment_status", sortable: true},
                ],
                items: [
                    {
                        Order_Id: '#ORD-2024-8812',
                        Cust_id: 'C-88219',
                        product_name: 'Titanium Turbine Blade V4',
                        qty: 45,
                        current_stage: 'Sewing',
                        payment_status: 'Paid'
                    },
                    {
                        Order_Id: '#ORD-2024-8813',
                        Cust_id: 'C-88219',
                        product_name: 'Titanium Turbine Blade V4',
                        qty: 45,
                        current_stage: 'Manufacturing',
                        payment_status: 'Paid'
                    },
                    {
                        Order_Id: '#ORD-2024-8814',
                        Cust_id: 'C-88219',
                        product_name: 'Titanium Turbine Blade V4',
                        qty: 45,
                        current_stage: 'Manufacturing',
                        payment_status: 'Pending'
                    },
                    {
                        Order_Id: '#ORD-2024-8815',
                        Cust_id: 'C-88219',
                        product_name: 'Titanium Turbine Blade V4',
                        qty: 45,
                        current_stage: 'Manufacturing',
                        payment_status: 'Paid'
                    },
                    {
                        Order_Id: '#ORD-2024-8816',
                        Cust_id: 'C-88219',
                        product_name: 'Titanium Turbine Blade V4',
                        qty: 45,
                        current_stage: 'Manufacturing',
                        payment_status: 'Pending'
                    },
                    {
                        Order_Id: '#ORD-2024-8817',
                        Cust_id: 'C-88219',
                        product_name: 'Titanium Turbine Blade V4',
                        qty: 45,
                        current_stage: 'Sewing',
                        payment_status: 'Paid'
                    },
                    {
                        Order_Id: '#ORD-2024-8818',
                        Cust_id: 'C-88219',
                        product_name: 'Titanium Turbine Blade V4',
                        qty: 45,
                        current_stage: 'Manufacturing',
                        payment_status: 'Paid'
                    },
                    {
                        Order_Id: '#ORD-2024-8819',
                        Cust_id: 'C-88219',
                        product_name: 'Titanium Turbine Blade V4',
                        qty: 45,
                        current_stage: 'Sewing',
                        payment_status: 'Pending'
                    },
                ],
                HiRocketLaunch: HiRocketLaunch,
                McBookmarkAddLine: McBookmarkAddLine,
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
    :deep(.v-card.blue){
        border-left: 4px solid #0064974d;
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
        letter-spacing: -0.05em;
        font-family: Manrope;
        padding-bottom: 0;
    }
    :deep(.risk .v-card-text){
        color: #a83836;
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
    }
    .table-container{
        background-color: #e2e8f0;
        padding: 1px;
        border: 1px solid #e1e9f04d;
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
    .primary-btn{
        color: white;
        background-color: #0369a1;
        border-color: #00649766;
        width: 100%;
        padding: .675rem 1.5rem;
        height: auto;
        border-radius: .5rem;
        font-size: 0.875rem;
        font-weight: 700;
        text-transform: capitalize;
        letter-spacing: 0;
        font-family: Manrope;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
    .new-order-dialog :deep(.v-overlay__content){
        right: 0;
        height: 100%;
        margin: 0;
        padding: 0;
        max-height: none;
    }
    .v-overlay-container .new-order-dialog :deep(div.v-card-item){
        padding: 1.5rem 2rem;
    }
    .new-order-card .header-title {
        color: #2a343a;
        text-transform: capitalize;
        line-height: 1.25;
        font-weight: 800;
        font-size: 1.25rem;
    }
    .new-order-card .header-subtitle {
        color: #0369a1;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-size: 0.75rem;
        line-height: 1rem;
        margin-top: 0.125rem;
    }
    .new-order-card .v-card-text h3{
        color: #566167;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-weight: 900;
        font-size: 0.75rem;
        line-height: 1rem;
    }
    .new-order-card .v-card-text .description{
        color: #566167;
        letter-spacing: -0.05em;
        text-transform: uppercase;
        font-weight: 700;
        font-size: .75rem;
        line-height: 1rem;
    }
    .new-order-card .v-card-text :deep(input::placeholder),
    .new-order-card .v-card-text :deep(.v-label)
    {
        color: #566167;
        font-size: .875rem;
        opacity: 1;
    }
    .new-order-card .v-card-text :deep(.v-input .v-field__outline__start),
    .new-order-card .v-card-text :deep(.v-input .v-field__outline__notch::before),
    .new-order-card .v-card-text :deep(.v-input .v-field__outline__notch::after),
    .new-order-card .v-card-text :deep(.v-input .v-field__outline__end){
        border-color: #e2e8f0;
        opacity: 1;
    }
    .new-order-card .v-card-text :deep(.v-field){
        border-radius: 0.5rem;
        padding: .2rem 1rem .2rem 0;
    }
    :deep(.v-overlay__scrim){
        background: #0f172a66;
        opacity: 1;
        backdrop-filter: blur(8px);
    }
    .save-btn{
        font-size: 0.675rem;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        font-weight: 700;
    }
    :deep(.v-overlay__content .v-card .v-card-text){
        overflow-y: auto;
    }
    :deep(.v-overlay__content .v-card .v-card-text::-webkit-scrollbar) {
        width: 4px;
    }

    :deep(.v-overlay__content .v-card .v-card-text::-webkit-scrollbar-track) {
        background: transparent;
    }

    :deep(.v-overlay__content .v-card .v-card-text::-webkit-scrollbar-thumb) {
        background-color: #0369a020;
        border-radius: 999px;
    }

    :deep(.v-overlay__content .v-card .v-card-text::-webkit-scrollbar-thumb:hover) {
        background-color: #0369a040;
    }
    :deep(.v-overlay__content .v-card.new-order-card){
        overflow-y: hidden;
    }
    .create-order-btn{
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
    }
    .financial-container{
        background-color: #eef4fa;
        border-radius: .75rem;
        padding: 1.5rem;
    }
    .financial-container :deep(.v-field){
        background: white;
    }
</style>