<template>
    <v-container>
        <v-row class="header">
            <v-col>
                <span class="text-uppercase">Επισκοπηση εργαστηριου</span>
                <h1>Παραγγελίες</h1> 
                <!-- {{ this.items.length }} -->
            </v-col>
            <v-col class="d-flex ga-5 justify-end align-center">

                <v-menu offset-y class="filter-menu" :offset="[-8, -12]" location="bottom end"
                 scroll-strategy="none" height="auto" :close-on-content-click="false">
                    <template v-slot:activator="{ props }">
                        <v-btn variant="outlined" color="#0369a1" v-bind="props">
                            <template v-slot:prepend><CaFilterEdit /></template>
                            Σύνθετα Φίλτρα
                        </v-btn>
                    </template>

                    <v-card min-width="300" height="auto" class="overflow-hidden">
                        <v-list class="header">
                            <v-list-item title="Φιλτρα Παραγγελιων">
                                <template v-slot:append>
                                    <v-btn class="weight-bold" color="#0369a1" variant="text">
                                        Επαναφορα
                                    </v-btn>
                                </template>
                            </v-list-item>
                        </v-list>

                        <v-divider></v-divider>

                        <v-list>
                            <v-list-item>
                                <label>Ονομα Πελατη</label>
                                <v-text-field
                                    v-model="filter.customerName"
                                    density="compact"
                                    placeholder="Αναζήτηση Πελάτη..."
                                    prepend-inner-icon="mdi-magnify"
                                    variant="outlined"
                                    class="mt-2"
                                    hide-details
                                ></v-text-field>
                            </v-list-item>

                            <v-list-item>
                                <label>Ονομα Παραγγελιας</label>
                                <v-text-field
                                    v-model="filter.orderName"
                                    density="compact"
                                    placeholder="Αναζήτηση Παραγγελίας..."
                                    prepend-inner-icon="mdi-magnify"
                                    variant="outlined"
                                    class="mt-2"
                                    hide-details
                                ></v-text-field>
                            </v-list-item>

                            <v-list-item>
                                <label>Τρεχουσα Φαση</label>
                                <v-row class="row-btn mt-2 ga-2" no-gutters>
                                    <v-btn>Προετοιμασία</v-btn>
                                    <v-btn>Κοπή</v-btn>
                                    <v-btn>Ράψιμο</v-btn>
                                    <v-btn>Έλεγχος</v-btn>
                                    <v-btn>Αποστολή</v-btn>                                    
                                </v-row>
                            </v-list-item>

                            <v-list-item>
                                <label>Κατασταση Παραγγελιας</label>
                                <v-row class="row-btn mt-2 ga-2" no-gutters>
                                    <v-btn>Πληρωμένη</v-btn>
                                    <v-btn>Εκκρεμεί</v-btn>                                                                        
                                </v-row>
                            </v-list-item>

                            <v-list-item>
                                <v-row no-gutters class="ga-6">
                                    <v-col class="pa-0">
                                        <label>Καταχωρηση Παραγγελιας</label>
                                        <v-date-input
                                            v-model="filter.orderDate"
                                            class="date-input mt-2"
                                            prepend-icon=""
                                            append-inner-icon="$calendar"
                                            variant="outlined"
                                            density="compact"
                                        ></v-date-input>
                                    </v-col>
                                    
                                    <v-col class="pa-0">
                                        <label>Ημερομηνια Παραδοσης</label>
                                        <v-date-input
                                            v-model="filter.deliveryDate"
                                            class="date-input mt-2"
                                            prepend-icon=""
                                            append-inner-icon="$calendar"
                                            variant="outlined"
                                            density="compact"
                                        ></v-date-input>
                                    </v-col>
                                </v-row>
                            </v-list-item>
                        </v-list>
                        <v-divider />
                        <v-card-actions>
                            <v-spacer></v-spacer>
                                <v-col>
                                    <v-btn color="primary" height="auto" variant="tonal" @click="menu = false">
                                        Εφαρμογή Φίλτρων
                                    </v-btn>
                                </v-col>
                        </v-card-actions>
                    </v-card>
                </v-menu>

                <v-dialog max-width="576" transition="slide-x-reverse-transition" class="new-order-dialog" v-model="dialogStatus">
                    <template v-slot:activator="{ props }">
                        <v-btn color="#0369a1" class="new-order-btn" v-bind="props">Δημιουργία Νέας Παραγγελίας</v-btn>
                    </template>
                        <!-- Add validation here -->
                    <v-form @submit.prevent class="h-100" ref="form">
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
                                        <v-btn @click="dialogStatus = false" variant="text" class="float-right">
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
                                    <v-col>
                                        <h3>Κυριως Στοιχεια</h3>
                                    </v-col>
                                </v-row>

                                <h4 class="description mb-2">Ονομα Πελατη</h4>
                                <v-text-field
                                    v-model="form.cust_name"
                                    density="compact"
                                    placeholder="Αναζήτηση Πελάτη..."
                                    append-inner-icon="mdi-magnify"
                                    :rules="[rules.required]"
                                    variant="outlined"
                                    hide-details
                                ></v-text-field>
                                <v-row no-gutters class="ga-6 my-4">
                                    <!-- <v-col>
                                        <h4 class="description mb-2">SKU Reference</h4>
                                        <v-text-field
                                            density="compact"
                                            placeholder="TX-2048-IND"
                                            variant="outlined"
                                            hide-details
                                        ></v-text-field>
                                    </v-col> -->
                                    <v-col>
                                        <h4 class="description mb-2">Τεμάχια</h4>
                                        <v-number-input
                                            v-model="form.qty"
                                            density="compact"
                                            control-variant="stacked"
                                            placeholder="0"
                                            variant="outlined"
                                            :rules="[rules.required, rules.positive]"
                                            :min="0"
                                            inset
                                        ></v-number-input>
                                    </v-col>
                                </v-row>
                            </div>

                            <div>
                                <v-row class="ga-2 mb-6" no-gutters>
                                    <v-col cols="1" class="d-flex align-center justify-center pa-0"><v-divider color="#0369a1" class="border-opacity-100"></v-divider></v-col>
                                    <v-col><h3>Χαρακτηριστικα Προϊοντος</h3></v-col>
                                </v-row>

                                <h4 class="description mb-2">Όνομα Προϊόντος</h4>
                                <v-text-field
                                    v-model="form.product.name"
                                    density="compact"
                                    placeholder="Αναζήτηση συγκεκριμένου προϊόντος..."
                                    append-inner-icon="mdi-magnify "
                                    variant="outlined"
                                    hide-details
                                ></v-text-field>
                                <v-row no-gutters class="ga-6 my-4">
                                    <v-col>
                                        <h4 class="description mb-2">Χρώμα</h4>
                                        <v-select
                                            v-model="form.product.color"
                                            density="compact"
                                            placeholder="Επιλέξτε χρώμα"
                                            :items="colorItems"
                                            item-title="label"
                                            item-value="value"
                                            :rules="[rules.required]"
                                            variant="outlined"
                                        ></v-select>
                                    </v-col>
                                    <v-col>
                                        <h4 class="description mb-2">Μεγεθος</h4>
                                        <v-select
                                            v-model="form.product.size"
                                            density="compact"
                                            placeholder="Επιλέξτε μέγεθος"
                                            :items="sizeItems"
                                            item-title="label"
                                            item-value="value"
                                            :rules="[rules.required]"
                                            variant="outlined"
                                        ></v-select>
                                    </v-col>
                                </v-row>
                            </div>

                            <div>
                                <v-row class="ga-2 my-6" no-gutters>
                                    <v-col cols="1" class="d-flex align-center justify-center pa-0"><v-divider color="#0369a1" class="border-opacity-100"></v-divider></v-col>
                                    <v-col><h3>Δρομολογηση Παραγγελιας</h3></v-col>
                                </v-row>

                                <h4 class="description mb-2">Σταδιο Παραγγελιας</h4>
                                <v-select
                                    v-model="form.stage"
                                    density="compact"
                                    label="Επιλέξτε στάδιο"
                                    :items="stageItems"
                                    item-title="label"
                                    item-value="value"
                                    :rules="[rules.required]"
                                    variant="outlined"
                                ></v-select>
                                <v-row no-gutters class="ga-6 my-4 mb-1">
                                    <v-col>
                                        <h4 class="description mb-2">Παραλαβη</h4>
                                        <v-select
                                            v-model="form.pickupLocation"
                                            density="compact"
                                            label="Επιλέξτε"
                                            :items="pickupLocationItems"
                                            item-title="label"
                                            item-value="value"
                                            :rules="[rules.required]"
                                            variant="outlined"
                                        ></v-select>
                                    </v-col>
                                    <v-col>
                                        <h4 class="description mb-2">Προθεσμια</h4>
                                        <v-date-input
                                            v-model="form.dueDate"
                                            class="date-input"
                                            prepend-icon=""
                                            prepend-inner-icon="$calendar"
                                            :rules="[rules.required]"
                                            variant="outlined"
                                            density="compact"
                                        ></v-date-input>
                                    </v-col>
                                </v-row>

                                <v-row no-gutters class="ga-6 mb-4">
                                    <v-col cols="12">
                                        <h4 class="description mb-2">Επιπεδο Προτεραιοτητας</h4>
                                        <v-select
                                            v-model="form.priority"
                                            density="compact"
                                            label="Επιλέξτε προτεραιότητα"
                                            :items="priorityItems"
                                            item-title="label"
                                            item-value="value"
                                            :rules="[rules.required]"
                                            variant="outlined"
                                        ></v-select>
                                    </v-col>
                                </v-row>
                            </div>

                            <div class="mt-9">
                                <v-row class="ga-2 mb-6" no-gutters>
                                    <v-col cols="1" class="d-flex align-center justify-center pa-0"><v-divider color="#0369a1" class="border-opacity-100"></v-divider></v-col>
                                    <v-col><h3>Οικονομικο Συνολο</h3></v-col>
                                </v-row>

                                <div class="financial-container">
                                    <v-row no-gutters class="ga-6 mb-4">
                                        <v-col>
                                            <h4 class="description mb-2">Συνολικο Ποσο</h4>
                                            <v-text-field
                                                v-model="form.final_amount"
                                                density="compact"
                                                placeholder="€0.00"
                                                variant="outlined"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col>
                                            <h4 class="description mb-2">Υπολοιπο</h4>
                                            <v-text-field
                                                v-model="form.balance"
                                                density="compact"
                                                placeholder="€0.00"
                                                variant="outlined"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>

                                    <v-row>
                                        <v-col>
                                            <h4 class="description mb-2">Κατασταση Παραγγελιας</h4>
                                            <v-select
                                                v-model="form.paymentStatus"
                                                density="compact"
                                                label="Επιλέξτε φάση"
                                                :items="paymentStatusItems"
                                                item-title="label"
                                                item-value="value"
                                                variant="outlined"
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
                                text="Απόρριψη Αλλαγών"
                            ></v-btn>
                            <v-btn
                                class="h-auto create-order-btn"
                                type="submit"
                                text="Δημιουργία Παραγγελίας"
                                :prepend-icon="HiRocketLaunch"
                                @click="createOrder"
                            ></v-btn>

                        </v-card-actions>
                        </v-card>
                    </v-form>                        
                </v-dialog>
            </v-col>
        </v-row>

        <v-row class="ga-6 kpi-cards">
            <v-col>
                <v-card class="mx-auto py-2 px-5">
                    <v-card-item>
                        <v-card-title>Συνολικές Ενεργές Παραγγελίες</v-card-title>
                    </v-card-item>
                    <v-card-text>
                        12
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
                        {{ getActiveOrders }}
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
                        {{ getOrdersBalance }}
                    </v-card-text>
                    <v-card-actions>
                        <span><v-icon><AkTriangleAlert/></v-icon> {{ getOverdueOrders }} παραγγελίες καθυστερημένες </span>
                    </v-card-actions>
                    <v-icon class="background-icon"><AkTriangleAlert/></v-icon>
                </v-card>
            </v-col>

        </v-row>

        <div class="table-container mt-6">
            <v-data-table :headers="headers" :items="this.items" item-value="id"
                sort-asc-icon="mdi-sort-ascending"
                sort-desc-icon="mdi-sort-descending"
                sort-icon="mdi-swap-vertical"
                show-expand>
                <template v-slot:[`item.id`]="{item}">
                    <div>
                        <h2 class="order-header">
                            #ORD-{{ item.id }}
                        </h2>
                    </div>
                </template>
                <template v-slot:[`item.Order_Title`]="{item}">
                    <div>
                        <h2 class="cust-header">
                            {{ item.cust_name }} {{ new Date(item.createdAt).toLocaleDateString() }}
                        </h2>
                    </div>
                </template>
                <template v-slot:[`item.Cust_id`]="{item}">
                    <div>
                        <h2 class="cust-header">
                            {{ item.cust_name }}
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
                    <div v-if="item.current_stage.toUpperCase() === 'PREPARING'">
                        <h2 class="stage-header gray">
                            προετοιμασια
                        </h2>
                    </div>
                    <div v-if="item.current_stage.toUpperCase() === 'CUTTING'">
                        <h2 class="stage-header lightblue">
                            κοπη
                        </h2>
                    </div>
                    
                    <div v-if="item.current_stage.toUpperCase() === 'SEWING'">
                        <h2 class="stage-header blue">
                            ραψιμο
                        </h2>
                    </div>
                    
                    <div v-if="item.current_stage.toUpperCase() === 'QA'">
                        <h2 class="stage-header yellow">
                            ελεγχος ποιοτητας
                        </h2>
                    </div>
                    <div v-if="item.current_stage.toUpperCase() === 'DELIVERING'">
                        <h2 class="stage-header green">
                            παραδοση
                        </h2>
                    </div>

                </template>
                <template v-slot:[`item.payment_status`]="{item}">
                    <div v-if="item.payment_status.toUpperCase() === 'PAID'">
                        <h2 class="payment-header paid">
                            <MiMoneyPlus/>
                            Πληρωμενη
                        </h2>
                    </div>
                    <div v-if="item.payment_status.toUpperCase() === 'PENDING'">
                        <h2 class="payment-header pending">
                            <CgSandClock />
                            εκκρεμει
                        </h2>
                    </div>

                </template>
                <template v-slot:[`item.timestamps`]="{item}">
                    <div class="timestamps d-flex flex-column">
                        <v-tooltip>
                            <template v-slot:activator="{ props }">
                                <p v-bind="props">C: <span>{{ formatTimestamp(item.createdAt) }}</span></p>
                            </template>
                            <div class="">
                                <p>Created By: aloubardis</p>
                            </div>
                        </v-tooltip>
                        <v-tooltip text="Tooltip">
                            <template v-slot:activator="{ props }">
                                <p v-bind="props">U: <span>{{ formatTimestamp(item.updatedAt) }}</span></p>
                            </template>
                            <div class="">
                                <p>Updated By: aloubardis</p>
                            </div>
                        </v-tooltip>
                    </div>
                </template>


                <template v-slot:expanded-row="{ columns, item }">   
                    <tr class="expanded-row">
                        <td :colspan="columns.length" class="px-5 py-6">
                            <v-row class="justify-space-between" no-gutters>
                                <v-col cols="3">
                                    <div class="details">
                                        <v-row no-gutters>
                                            <v-col cols="auto" class="d-flex flex-center mr-1"><MiMoneyPlus/></v-col>
                                            <v-col><h4>Οικονομικα στοιχεια</h4></v-col>
                                        </v-row>
                                        
                                        <div class="content mt-2">
                                            <div class="d-flex justify-space-between">
                                                <span class="header">Συνολικό Ποσό:</span>
                                                <span>€{{ parseFloat(item.final_amount/100).toFixed(2) }}</span>  <!-- NEED TO PARSE THAT-->
                                            </div>
                                            <div class="d-flex justify-space-between">
                                                <span class="header">Υπόλοιπο:</span>
                                                <span>€{{ parseFloat(item.balance/100).toFixed(2) }}</span> <!-- NEED TO PARSE THAT-->
                                            </div>
                                        </div>
                                    </div>
                                </v-col>

                                <v-col cols="3" class="ml-8">
                                    <div class="details">
                                        <v-row no-gutters>
                                            <v-col cols="auto" class="d-flex flex-center mr-1"><MdTimeline/></v-col>
                                            <v-col><h4>Χρονοδιαγραμμα παραγωγης</h4></v-col>
                                        </v-row>
                                        
                                        <div class="content mt-2">
                                            <div class="d-flex justify-space-between">
                                                <span class="header">Παράδοση Μέχρι:</span>
                                                <span>{{ item.deliveredAt }}</span>
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
    import {getOrders} from "../api/ordersService";

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
                    { title: "Αναγνωριστικό Παραγγελίας", key: "id", value: "id", sortable: true, width: "10rem" },
                    { title: "Τίτλος Παραγγελίας", key: "Order_Title", value: "Order_Title", sortable: true},
                    { title: "Αναγνωριστικό Πελάτη", key: "Cust_id", value: "Cust_id", sortable: true},
                    { title: "Όνομα Προϊόντος", key: "product_name", value: "product_name", sortable: true},
                    { title: "Ποσότητα", key: "qty", value: "qty", sortable: true},
                    { title: "Χρώμα", key: "color", value: "color", sortable: true},
                    { title: "Τρέχουσα Φάση", key: "current_stage", value: "current_stage", sortable: true},
                    { title: "Payment Status", key: "payment_status", value: "payment_status", sortable: true},
                    { title: "Στιγμιότυπα", key: "timestamps", value: "timestamps", sortable: true},
                ],
                dialogStatus: false,
                paymentStatusItems: [
                    {label: 'Πληρωμένη', value: 'Paid'},
                    {label: 'Εκκρεμεί', value: 'Pending'},
                    {label: 'Προκαταβολή', value: 'Deposit'},
                ],
                priorityItems: [
                    {label: 'Χαμηλή', value: 'Low'},
                    {label: 'Μεσαία', value: 'Medium'},
                    {label: 'Υψηλή', value: 'High'},
                ],
                pickupLocationItems: [
                    {label: 'Κατάστημα', value: 'Shop'},
                    {label: 'Παράδοση', value: 'Delivery'},
                ],     
                stageItems: [
                    {label: 'Προετοιμασία', value: 'Preparing'},
                    {label: 'Κοπή', value: 'Cutting'},
                    {label: 'Ράψιμο', value: 'Sewing'},
                    {label: 'Έλεγχος Ποιότητας', value: 'Quality_control'},
                    {label: 'Παράδοση', value: 'Delivering'},
                ],
                sizeItems: [
                    {label: 'X-SM', value: 'x_small'},
                    {label: 'SM', value: 'small'},
                    {label: 'M', value: 'medium'},
                    {label: 'L', value: 'large'},
                    {label: 'XL', value: 'x_large'},
                    {label: '2XL', value: 'xx_large'},
                    {label: '3XL', value: 'xxx_large'},
                ],
                colorItems: [
                    {label: 'Black', value: 'BLACK'},
                    {label: 'White', value: 'WHITE'},
                ],
                items: [],
                sumBulance: 0,
                overdueOrders: 0,
                todayDate: new Date().toLocaleDateString(),
                clientsName: "",
                HiRocketLaunch: HiRocketLaunch,
                McBookmarkAddLine: McBookmarkAddLine,
                expanded: [],
                rules: {
                    required: value => !!value || 'Το πεδίο είναι υποχρεωτικό.',
                    positive: value => value > 0 || 'Η τιμή πρέπει να είναι μεγαλύτερη από 0.' 
                },
                valid: false,
                form: {
                    cust_name: "",
                    qty: null,
                    product: {
                        name: "",
                        color: null,
                        size: null,
                    },
                    stage: null,
                    pickupLocation: null,
                    dueDate: "",
                    priority: null,
                    final_amount: "",
                    balance: "",
                    paymentStatus: null,
                },
                filter: {
                    customerName: "",
                    orderName: ""
                },
            }
        },
        created(){
            this.fetchOrders();
        },
        methods: {
            fetchOrders() {
                getOrders()
                    .then(response => {
                        this.items = response.data.ordersList;
                        console.log("Orders fetched successfully:", this.items);
                    })
                    .catch(error => {
                        console.error("Error fetching orders:", error);
                    });
            },
            formatTimestamp(timestamp){
                return new Date(timestamp).toLocaleString();
            },
            createOrder(){
                this.$refs.form.validate()
                .then((result)=> {
                    if(result.valid){
                        this.items.unshift({
                            id: "24789",
                            cust_name: this.form.cust_name,
                            product_name: this.form.product.name,
                            color: this.form.product.color,
                            qty: this.form.qty,
                            current_stage: this.form.stage,
                            payment_status: this.form.paymentStatus,
                            final_amount: this.form.final_amount,
                            balance: this.form.balance,
                            priority: this.form.priority,
                            dueDate: this.form.dueDate, // Need to format me!
                            createdAt: new Date().toLocaleString(),
                            updatedAt: new Date().toLocaleString(),
                            deliveredAt: new Date().toLocaleString(),
                            createdBy: "aloubardis",
                            updatedBy: "aloubardis",
                            deletedAt: null
                        })
                        console.log(this.items);
                        this.dialogStatus = false;
                    }else {
                        alert("Please fill in all required fields correctly.");
                    } 
                });
                
            },
            isOverdue(itemDuedate){
                const [year, month, day] = itemDuedate.split("-");
                if(new Date(year, month - 1, day) < new Date(this.todayDate)){
                    // console.log("true");
                    return true;
                    // this.overdueOrders += 1;
                }
            }
            
        },
        computed: {
            getActiveOrders(){
                return this.items.length || 'Not Available'
            },
            getOrdersBalance(){
                this.items.forEach((item) => {
                    this.sumBulance += parseFloat(item.balance)
                })
                return '€'+ (this.sumBulance/100).toFixed(2) || 'Not Available'
            },
            getOverdueOrders(){
                return "5";
                this.items.forEach((item) => {
                    if(this.isOverdue(item.dueDate)){
                        this.overdueOrders += 1;
                    }
                })
                return this.overdueOrders;
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
    :deep(.kpi-cards .v-card-actions span){
        padding: 1rem;
    }
    :deep(.kpi-cards .v-card-actions span){
        font-family: Manrope;
        color: #00687b;
        font-weight: 800;
        font-size: 0.875rem;
        display: flex;
        align-items: center;
        gap: 0.75rem;
        text-transform: capitalize;
    }
    :deep(.kpi-cards .v-card-actions .v-btn:nth-child(1)){
        flex: 1;
    }
    :deep(.kpi-cards .v-card-actions .v-btn:nth-child(2)){
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
    :deep(.stage-header.gray){
        color: #64748b;
        background-color: #64748b1f;
    }
    :deep(.stage-header.lightblue){
        color: #075985;
        background-color: #e0f2fe;
    }
    :deep(.stage-header.blue){
        color: #0369a1;
        background-color: #036aa11f;
    }
    :deep(.stage-header.yellow){
        color: #92400e;
        background-color: #fef3c7;
    }
    :deep(.stage-header.green){
        color: #3e9789;
        background-color: #f0fdfa;
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
    .new-order-card .v-card-text :deep(.v-input .v-field--error .v-field__outline__start),
    .new-order-card .v-card-text :deep(.v-input .v-field--error .v-field__outline__notch::before),
    .new-order-card .v-card-text :deep(.v-input .v-field--error .v-field__outline__notch::after),
    .new-order-card .v-card-text :deep(.v-input .v-field--error .v-field__outline__end){
        border-color: #b00020;
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
    .timestamps{
        color: #566167;
        font-size: 0.70rem;
    }
    .timestamps span{
        text-decoration: underline dashed;
    }
    .date-input :deep(.v-field__prepend-inner){
        padding-left: .5rem;
        font-size: .875rem;
    }
    .filter-menu .v-card{
        background: white;
        border: 1px solid #e2e8f0;
        box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
        border-radius: 0.75rem;
    }
    .filter-menu .header{
        background-color: #f8fafc80;
    }
    .filter-menu :deep(.v-list-item-title){
        color: #64748b;
        font-size: 0.75rem;
        line-height: 1rem;
        text-transform: uppercase;
        letter-spacing: 0.1em;
        font-weight: 800;
    }
    .filter-menu label{
        color: #94a3b8;
        font-size: 0.625rem;
        font-weight: 700;
        letter-spacing: 0.05em;
        text-transform: uppercase;
    }
    .filter-menu :deep(.v-field){
        font-size: 0.75rem;
        line-height: 1rem;
        border-radius: 0.5rem;
    }
    .filter-menu :deep(.v-field .v-field__outline .v-field__outline__start),
    .filter-menu :deep(.v-field .v-field__outline .v-field__outline__end)
    {
        border-color: #e2e8f0;
        opacity: 1;
    }
    .filter-menu .row-btn button{
        color: #475569;
        font-weight: 700;
        font-size: 0.625rem;
        padding: 0.5rem 0.75rem;
        border: 1px solid #e2e8f0;
        border-radius: 9999px;
        text-transform: capitalize;
        height: auto;
        box-shadow: none;
    }
    .filter-menu .row-btn button.active{
        background-color: #0369a1;
        color: white;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    }
    .filter-menu .v-card-actions button{
        font-size: 0.875rem;
        font-weight: 500;
        padding: 0.625rem 1.5rem;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        border-radius: 0.5rem;
        text-transform: capitalize;
    }
</style>