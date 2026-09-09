<template>
    <v-dialog max-width="576" transition="slide-x-reverse-transition" class="new-order-dialog" :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)">
        <v-form @submit.prevent="createOrder" class="h-100" ref="form">
            <v-card class="new-order-card">
                <template v-slot:title>
                    <v-row>
                        <v-col cols="auto">
                            <v-avatar color="#0369a1" variant="tonal" size="50" rounded="lg">
                                <v-icon size="30">
                                    <CaMachineLearningModel />
                                </v-icon>
                            </v-avatar>
                        </v-col>
                        <v-col>
                            <h3 v-if="dialogMode === 'C'" class="header-title">
                                Δημιουργία Νέας Παραγγελίας
                            </h3>
                            <h3 v-else class="header-title">
                                Επεξεργασία Παραγγελίας
                            </h3>
                            <p class="header-subtitle">Μοναδα Παραγωγης</p>
                        </v-col>
                        <v-col>
                            <v-btn @click="closeModal" variant="text" class="float-right">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                        </v-col>
                    </v-row>
                </template>
                <v-divider></v-divider>
                <v-card-text class="mt-4 px-8">
                    <div class="mb-7">
                        <v-row class="ga-2 mb-6" no-gutters>
                            <v-col cols="1" class="d-flex align-center justify-center pa-0"><v-divider color="#0369a1"
                                    class="border-opacity-100"></v-divider></v-col>
                            <v-col>
                                <h3>Κυριως Στοιχεια</h3>
                            </v-col>
                        </v-row>

                        <h4 class="description mb-2">Ονομα Πελατη</h4>
                        <v-autocomplete v-model="form.cust_name" density="compact" :items="customers" placeholder="Αναζήτηση Πελάτη..."
                        append-inner-icon="mdi-magnify" :rules="[rules.required]" variant="outlined"
                        hide-details></v-autocomplete>
                    </div>

                    <div>
                        <v-row class="ga-2 mb-6" no-gutters>
                            <v-col cols="1" class="d-flex align-center justify-center pa-0"><v-divider color="#0369a1"
                                    class="border-opacity-100"></v-divider></v-col>
                            <v-col>
                                <h3>Χαρακτηριστικα Προϊοντος</h3>
                            </v-col>
                        </v-row>
                        <transition-group name="product-list" tag="div">
                            <div class="d-flex flex-column ga-5">
                                <v-card class="py-1 px-5 product-card" v-for="(product, index) in form.products"
                                    :key="product">
                                    <v-row no-gutters class="ga-6 my-4 justify-space-between">
                                        <v-col cols="9">
                                            <h4 class="description mb-2">Όνομα Προϊόντος</h4>
                                            <v-text-field v-model="product.product_name" density="compact"
                                                placeholder="Αναζήτηση συγκεκριμένου προϊόντος..."
                                                append-inner-icon="mdi-magnify " variant="outlined"
                                                hide-details></v-text-field>

                                        </v-col>
                                        <v-col cols="2">
                                            <h4 class="description mb-2">Τεμάχια</h4>
                                            <v-number-input v-model="product.qty" density="compact"
                                                control-variant="stacked" placeholder="0" variant="outlined"
                                                :rules="[rules.required, rules.positive]" :min="0"
                                                inset></v-number-input>
                                        </v-col>
                                    </v-row>

                                    <v-row no-gutters class="ga-6 mt-4 mb-2">
                                        <v-col>
                                            <h4 class="description mb-2">Χρώμα</h4>
                                            <v-autocomplete v-model="product.color" density="compact"
                                                placeholder="Επιλέξτε χρώμα" :items="colorItems" item-title="label"
                                                item-value="value" :rules="[rules.required]"
                                                variant="outlined"></v-autocomplete>
                                        </v-col>
                                        <v-col>
                                            <h4 class="description mb-2">Μεγεθος</h4>
                                            <v-select v-model="product.size" density="compact"
                                                placeholder="Επιλέξτε μέγεθος" :items="sizeItems" item-title="label"
                                                item-value="value" :rules="[rules.required]"
                                                variant="outlined"></v-select>
                                        </v-col>
                                    </v-row>
                                    <div v-if="index !== 0">
                                        <v-divider class="mb-2"></v-divider>
                                        <v-card-actions class="justify-end">
                                            <v-btn rounded="lg" color="error" @click="removeProduct(index)"
                                                icon="mdi-delete-outline" variant="tonal"></v-btn>
                                        </v-card-actions>
                                    </div>
                                </v-card>
                            </div>
                            <v-btn class="my-6 add-product-btn" variant="outlined" prepend-icon="mdi-plus"
                                @click="addProduct" block>Προσθηκη Προϊοντος</v-btn>
                        </transition-group>
                    </div>

                    <div>
                        <v-row class="ga-2 my-6" no-gutters>
                            <v-col cols="1" class="d-flex align-center justify-center pa-0"><v-divider color="#0369a1"
                                    class="border-opacity-100"></v-divider></v-col>
                            <v-col>
                                <h3>Δρομολογηση Παραγγελιας</h3>
                            </v-col>
                        </v-row>

                        <h4 class="description mb-2">Σταδιο Παραγγελιας</h4>
                        <v-select v-model="form.current_stage" density="compact" label="Επιλέξτε στάδιο"
                            :items="stageItems" item-title="label" item-value="value" :rules="[rules.required]"
                            variant="outlined"></v-select>
                        <v-row no-gutters class="ga-6 my-4 mb-1">
                            <v-col>
                                <h4 class="description mb-2">Παραλαβη</h4>
                                <v-select v-model="form.pickupLocation" density="compact" label="Επιλέξτε"
                                    :items="pickupLocationItems" item-title="label" item-value="value"
                                    :rules="[rules.required]" variant="outlined"></v-select>
                            </v-col>
                            <v-col>
                                <h4 class="description mb-2">Προθεσμια</h4>
                                <v-date-input v-model="form.dueDate" class="date-input" prepend-icon=""
                                    prepend-inner-icon="$calendar" :rules="[rules.required]" displayFormat="dd/MM/YYYY"
                                    variant="outlined" density="compact"></v-date-input>
                            </v-col>
                        </v-row>

                        <v-row no-gutters class="ga-6 mb-4">
                            <v-col cols="12">
                                <h4 class="description mb-2">Επιπεδο Προτεραιοτητας</h4>
                                <v-select v-model="form.priority" density="compact" label="Επιλέξτε προτεραιότητα"
                                    :items="priorityItems" item-title="label" item-value="value"
                                    :rules="[rules.required]" variant="outlined"></v-select>
                            </v-col>
                        </v-row>
                    </div>

                    <div class="mt-9">
                        <v-row class="ga-2 mb-6" no-gutters>
                            <v-col cols="1" class="d-flex align-center justify-center pa-0"><v-divider color="#0369a1"
                                    class="border-opacity-100"></v-divider></v-col>
                            <v-col>
                                <h3>Οικονομικο Συνολο</h3>
                            </v-col>
                        </v-row>

                        <div class="financial-container">
                            <v-row no-gutters class="ga-6 mb-4">
                                <v-col>
                                    <h4 class="description mb-2">Συνολικο Ποσο</h4>
                                    <v-text-field v-model="form.final_amount" density="compact" placeholder="€0.00"
                                        variant="outlined"></v-text-field>
                                </v-col>
                                <v-col>
                                    <h4 class="description mb-2">Υπολοιπο</h4>
                                    <v-text-field v-model="form.balance" density="compact" placeholder="€0.00"
                                        variant="outlined"></v-text-field>
                                </v-col>
                            </v-row>

                            <v-row>
                                <v-col>
                                    <h4 class="description mb-2">Κατασταση Παραγγελιας</h4>
                                    <v-select v-model="form.payment_status" density="compact" label="Επιλέξτε φάση"
                                        :items="payment_statusItems" item-title="label" item-value="value"
                                        variant="outlined"></v-select>
                                </v-col>
                            </v-row>
                        </div>
                    </div>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-actions class="d-flex justify-space-between pa-8 ga-6">
                    <v-btn class="h-auto" text="Απόρριψη Αλλαγών"></v-btn>

                    <v-btn v-if="dialogMode === 'C'" class="h-auto create-order-btn" type="submit"
                        text="Δημιουργία Παραγγελίας" :prepend-icon="HiRocketLaunch"></v-btn>

                    <v-btn v-else :loading="loading" class="h-auto create-order-btn" text="Επεξεργασία Παραγγελίας"
                        :prepend-icon="HiRocketLaunch" @click="updateOrder(form)"></v-btn>
                </v-card-actions>
            </v-card>
        </v-form>
    </v-dialog>
</template>

<script>
import { CaMachineLearningModel, HiRocketLaunch } from '@kalimahapps/vue-icons';
import { useAuthStore } from "../stores/auth";
import { createOrder } from "../api/ordersService";
import { getCustomers } from "../api/customersService";

import Swal from 'sweetalert2'

export default {
    name: "OrdersModal",
    components: {
        CaMachineLearningModel,
        HiRocketLaunch
    },
    props:{
        items: {
            type: Array,
            required: true,
            default: () => []
        },
        modelValue: {
            type: Boolean,
            default: false
        },
        mode: {
            type: String,
            default: "C"
        },
        order: {
            type: Object,
            default: null
        }
    },
    emits: [
        "update:modelValue",
        "order-created",
        "order-updated"
    ],
    data(){
        return {
            // dialogStatus: false,
            // dialogMode: ['C', 'U'],
            payment_statusItems: [
                { label: 'Πληρωμένη', value: 'paid' },
                { label: 'Εκκρεμεί', value: 'pending' },
                // {label: 'Προκαταβολή', value: 'Deposit'},
            ],
            priorityItems: [
                { label: 'Χαμηλή', value: 'low' },
                { label: 'Μεσαία', value: 'medium' },
                { label: 'Υψηλή', value: 'high' },
            ],
            pickupLocationItems: [
                { label: 'Κατάστημα', value: 'shop' },
                { label: 'Παράδοση', value: 'delivery' },
            ],
            stageItems: [
                { label: 'Προετοιμασία', value: 'preparing' },
                { label: 'Κοπή', value: 'cutting' },
                { label: 'Ράψιμο', value: 'sewing' },
                { label: 'Έλεγχος Ποιότητας', value: 'quality_control' },
                { label: 'Παράδοση', value: 'delivering' },
            ],
            sizeItems: [
                { label: 'X-SM', value: 'x_small' },
                { label: 'SM', value: 'small' },
                { label: 'M', value: 'medium' },
                { label: 'L', value: 'large' },
                { label: 'XL', value: 'x_large' },
                { label: '2XL', value: 'xx_large' },
                { label: '3XL', value: 'xxx_large' },
            ],
            colorItems: [
                { label: 'Μαύρο', value: 'BLACK' },
                { label: 'Λευκό', value: 'WHITE' },
                { label: 'Γκρι', value: 'GREY' },
                { label: 'Ανθρακί', value: 'CHARCOAL' },
                { label: 'Ασημί', value: 'SILVER' },

                { label: 'Κόκκινο', value: 'RED' },
                { label: 'Μπορντό', value: 'BURGUNDY' },
                { label: 'Βυσσινί', value: 'MAROON' },
                { label: 'Ροζ', value: 'PINK' },
                { label: 'Ροζ Τριανταφυλλί', value: 'ROSE' },

                { label: 'Πορτοκαλί', value: 'ORANGE' },
                { label: 'Κίτρινο', value: 'YELLOW' },
                { label: 'Μουσταρδί', value: 'MUSTARD' },
                { label: 'Χρυσό', value: 'GOLD' },

                { label: 'Πράσινο', value: 'GREEN' },
                { label: 'Λαδί', value: 'OLIVE' },
                { label: 'Χακί', value: 'KHAKI' },
                { label: 'Μέντα', value: 'MINT' },
                { label: 'Σμαραγδί', value: 'EMERALD' },

                { label: 'Μπλε', value: 'BLUE' },
                { label: 'Μπλε Σκούρο', value: 'NAVY' },
                { label: 'Γαλάζιο', value: 'SKY_BLUE' },
                { label: 'Μπλε Ρουά', value: 'ROYAL_BLUE' },
                { label: 'Τιρκουάζ', value: 'TURQUOISE' },
                { label: 'Πετρόλ', value: 'TEAL' },

                { label: 'Μωβ', value: 'PURPLE' },
                { label: 'Βιολετί', value: 'VIOLET' },
                { label: 'Λεβάντα', value: 'LAVENDER' },

                { label: 'Καφέ', value: 'BROWN' },
                { label: 'Μπεζ', value: 'BEIGE' },
                { label: 'Κρεμ', value: 'CREAM' },
                { label: 'Ταμπά', value: 'TAN' },
                { label: 'Καμηλό', value: 'CAMEL' }
            ],
            customers: [],
            form: {
                cust_name: null,
                products: [
                    {
                        product_name: "",
                        qty: null,
                        color: null,
                        size: null
                    }
                ],
                current_stage: null,
                // pickupLocation: null,
                dueDate: null,
                priority: null,
                final_amount: "",
                balance: "",
                payment_status: null,
            },
            rules: {
                required: value => !!value || 'Το πεδίο είναι υποχρεωτικό.',
                positive: value => value > 0 || 'Η τιμή πρέπει να είναι μεγαλύτερη από 0.'
            },
            authStore: useAuthStore(),
            HiRocketLaunch: HiRocketLaunch,
        }
    },
    created() {
        getCustomers()
            .then(response => {
                console.log("Fetched customers:", response.data);
                this.customers = response.data.customersList.map(customer => customer.name);
            })
            .catch(error => {
                console.error("Error fetching customers:", error);
            });
    },
    methods: {
        createOrder() {
            console.log("Creating order:", this.form);
            this.$refs.form.validate()
                .then((result) => {
                    if (result.valid) {
                        createOrder({
                            id: "24789",
                            cust_name: this.form.cust_name,
                            products: this.form.products,
                            current_stage: this.form.current_stage,
                            payment_status: this.form.payment_status,
                            final_amount: this.form.final_amount,
                            balance: this.form.balance,
                            priority: this.form.priority,
                            dueDate: this.form.dueDate,
                            createdAt: new Date().toLocaleString(),
                            updatedAt: new Date().toLocaleString(),
                            deliveredAt: new Date().toLocaleString(),
                            createdBy: this.getCurrentUser,
                            updatedBy: this.getCurrentUser,
                            deletedAt: null
                        })
                            .then(response => {
                                console.log("Order created successfully:", response.data);
                                if(response.status === 201){
                                    this.items.unshift({
                                        id: "24789",
                                        cust_name: this.form.cust_name,
                                        products: this.form.products,
                                        current_stage: this.form.current_stage,
                                        payment_status: this.form.payment_status,
                                        final_amount: this.form.final_amount,
                                        balance: this.form.balance,
                                        priority: this.form.priority,
                                        dueDate: response.data.dueDate,
                                        createdAt: new Date().toLocaleString(),
                                        updatedAt: new Date().toLocaleString(),
                                        deliveredAt: new Date().toLocaleString(),
                                        createdBy: this.getCurrentUser,
                                        updatedBy: this.getCurrentUser,
                                        deletedAt: null
                                    })
                                    this.dialogStatus = false;
                                    this.$emit("order-created", this.items);   
                                }
                            })
                            .catch(error => {
                                console.error("Error creating order:", error);
                                this.dialogStatus = false;

                                Swal.fire({
                                    title: 'Error!',
                                    text: 'Error creating order. Please try again later.',
                                    icon: 'error',
                                    confirmButtonText: 'Continue'
                                })
                            });                     
                    } else {
                        alert("Please fill in all required fields correctly.");
                    }
                });

        },
        addProduct() {
            console.log(this.form);
            this.form.products.push({
                name: "",
                qty: null,
                color: null,
                size: null
            });
        },
        removeProduct(index) {
            this.form.products.splice(index, 1);
        },
        resetForm() {
            this.form = {
                cust_name: null,
                products: [
                    {
                        product_name: null,
                        qty: null,
                        color: null,
                        size: null
                    }
                ],
                current_stage: null,
                pickupLocation: null,
                dueDate: null,
                priority: null,
                final_amount: null,
                balance: null,
                payment_status: null
            };

            this.$refs.form?.resetValidation();
        },
        closeModal() {
            this.$emit("update:modelValue", false);
        }
    },
    computed: {
        getCurrentUser() {
            return this.authStore.getFullName();
        }
    },
    watch: {
        modelValue(value) {
            if (!value) return;

            if (this.mode === "U" && this.order) {
                console.log("Editing order:", this.order);
                this.form.cust_name = this.order.cust_name;
                this.form.pickupLocation = this.order.pickupLocation;
                this.form.products = this.order.products.map(product => ({
                    ...product,
                    qty: Number(product.qty)
                }));
                this.form.current_stage = this.order.current_stage;
                this.form.payment_status = this.order.payment_status;
                this.form.final_amount = this.order.final_amount;
                this.form.balance = this.order.balance;
                this.form.priority = this.order.priority;
                this.form.dueDate = this.order.dueDate;
                // Need to parse some fields to be presented in GR
            }

            if (this.mode === "C") {
                this.resetForm();
            }
        }
    }
}
</script>

<style scoped>
.new-order-btn {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
}
.new-order-dialog :deep(.v-overlay__content) {
    right: 0;
    height: 100%;
    margin: 0;
    padding: 0;
    max-height: none;
}
.v-overlay-container .new-order-dialog :deep(div.v-card-item) {
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

.new-order-card .v-card-text h3 {
    color: #566167;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 0.75rem;
    line-height: 1rem;
}

.new-order-card .v-card-text .description {
    color: #566167;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    font-weight: 700;
    font-size: .75rem;
    line-height: 1rem;
}

.new-order-card .v-card-text :deep(input::placeholder),
.new-order-card .v-card-text :deep(.v-label) {
    color: #566167;
    font-size: .875rem;
    opacity: 1;
}

.new-order-card .v-card-text :deep(.v-input .v-field__outline__start),
.new-order-card .v-card-text :deep(.v-input .v-field__outline__notch::before),
.new-order-card .v-card-text :deep(.v-input .v-field__outline__notch::after),
.new-order-card .v-card-text :deep(.v-input .v-field__outline__end) {
    border-color: #e2e8f0;
    opacity: 1;
}

.new-order-card .v-card-text :deep(.v-input .v-field--error .v-field__outline__start),
.new-order-card .v-card-text :deep(.v-input .v-field--error .v-field__outline__notch::before),
.new-order-card .v-card-text :deep(.v-input .v-field--error .v-field__outline__notch::after),
.new-order-card .v-card-text :deep(.v-input .v-field--error .v-field__outline__end) {
    border-color: #b00020;
    opacity: 1;
}

.new-order-card .v-card-text :deep(.v-field) {
    border-radius: 0.5rem;
    padding: .2rem 1rem .2rem 0;
}

:deep(.v-overlay__scrim) {
    background: #0f172a66;
    opacity: 1;
    backdrop-filter: blur(8px);
}
.product-card {
    border: 1px solid #e2e8f0;
    border-radius: .75rem;
}
.add-product-btn {
    color: #566167;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    border-color: #e2e8f0;
    border-style: dashed;
    border-width: 2px;
    border-radius: 0.5rem;
    padding: 1.5rem;
}
:deep(.v-card) {
    width: 100%;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    border-radius: 0.75rem;
}
.financial-container {
    background-color: #eef4fa;
    border-radius: .75rem;
    padding: 1.5rem;
}
.financial-container :deep(.v-field) {
    background: white;
}
.create-order-btn {
    background: #0369a1;
    box-shadow: 0 10px 15px -3px rgb(12 74 110 / 0.2), 0 4px 6px -4px rgb(12 74 110 / 0.2);
    border-radius: 0.5rem;
    padding: 1rem;
}
.create-order-btn :deep(.v-btn__prepend) {
    padding: 0 0 0 .75rem;
    color: white;
}
.create-order-btn :deep(.v-btn__content) {
    color: white;
}
</style>