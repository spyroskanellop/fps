<template>
    <v-container>
        <v-row class="header">
            <v-col>
                <span class="text-uppercase">Διαχείριση Οντοτήτων</span>
                <h1>Πελάτες</h1>
            </v-col>
            <v-col class="d-flex ga-5 justify-end align-center">
                <v-btn variant="outlined" color="#0369a1">
                    <template v-slot:prepend><CaFilterEdit /></template>
                    Σύνθετα Φίλτρα
                </v-btn>

                <v-dialog max-width="576" transition="slide-x-reverse-transition" class="new-customer-dialog" v-model="dialogStatus">
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn color="#0369a1" class="new-customer-btn" @click="dialogStatus = true; generateΙd();">Δημιουργία Νέου Πελάτη</v-btn>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-form @submit.prevent="addCustomer" ref="form">
                            <v-card class="new-customer-card">
                                <template v-slot:title>
                                    <v-row>
                                        <v-col cols="auto">
                                            <v-avatar color="#0369a1" variant="tonal" size="50" rounded="lg">
                                                <v-icon size="30"><AkPerson/></v-icon>
                                            </v-avatar>
                                        </v-col>
                                        <v-col>
                                            <h3 class="header-title">Εγγραφή Νέου Πελάτη</h3>
                                            <p class="header-subtitle">Αναλυση αρχειου πελατη</p>
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
                                        <v-col><h3>Κυριως Στοιχεια</h3></v-col>
                                    </v-row>

                                    <v-row no-gutters class="ga-6">
                                        <v-col>
                                            <h4 class="description mb-2">Αναγνωριστικο Πελατη</h4>
                                            <v-text-field
                                                v-model="form.id"
                                                density="compact"
                                                placeholder="CUST-12345"
                                                variant="outlined"
                                                disabled
                                            ></v-text-field>
                                        </v-col>
                                        <v-col>
                                            <h4 class="description mb-2">Βιομηχανια</h4>
                                            <v-select
                                                v-model="form.industry"
                                                density="compact"
                                                label="Επιλογή Βιομηχανίας"
                                                :items="industryItems"
                                                item-title="label"
                                                item-value="value"
                                                variant="outlined"
                                                :rules="[rules.required]"
                                            ></v-select>
                                        </v-col>
                                    </v-row>
                                    <v-row no-gutters class="mb-6">
                                        <v-col>
                                            <h4 class="description mb-2">Ονομα Εταιρειας</h4>
                                            <v-text-field
                                                v-model="form.name"
                                                density="compact"
                                                placeholder="Πληκτρολογήστε το όνομα της εταιρείας..."
                                                variant="outlined"
                                                :rules="[rules.required]"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                </div>

                                <div>
                                    <v-row class="ga-2 mb-6" no-gutters>
                                        <v-col cols="1" class="d-flex align-center justify-center pa-0"><v-divider color="#0369a1" class="border-opacity-100"></v-divider></v-col>
                                        <v-col><h3>Πληροφορίες Επικοινωνίας</h3></v-col>
                                    </v-row>

                                    <v-row no-gutters class="ga-6">
                                        <v-col>
                                            <h4 class="description mb-2">Πρόσωπο Επικοινωνίας</h4>
                                            <v-text-field
                                                v-model="form.contact_person"
                                                density="compact"
                                                placeholder="Πληκτρολογήστε το όνομα του εκπροσώπου..."
                                                variant="outlined"
                                                :rules="[rules.required]"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>    

                                    <v-row no-gutters class="ga-6 mb-6">
                                        <v-col>
                                            <h4 class="description mb-2">Αριθμός Τηλεφώνου</h4>

                                            <v-number-input
                                                v-model="form.phone"
                                                density="compact"
                                                control-variant="stacked"
                                                placeholder="2610 123 456"
                                                variant="outlined"
                                                :rules="[rules.required]"
                                                :min="0"
                                                inset
                                            ></v-number-input>
                                            
                                        </v-col>
                                        <v-col>
                                            <h4 class="description mb-2">Διευθυνση Email</h4>
                                            <v-text-field
                                                v-model="form.email"
                                                density="compact"
                                                placeholder="example@email.com"
                                                variant="outlined"
                                                :rules="[rules.required]"
                                            ></v-text-field>
                                        </v-col>                           
                                    </v-row>
                                </div>

                                <div>
                                    <v-row class="ga-2 mb-6" no-gutters>
                                        <v-col cols="1" class="d-flex align-center justify-center pa-0"><v-divider color="#0369a1" class="border-opacity-100"></v-divider></v-col>
                                        <v-col><h3>Στοιχεια Τοποθεσιας</h3></v-col>
                                    </v-row>

                                    <v-row class="ga-6" no-gutters>
                                        <v-col cols="8">
                                            <h4 class="description mb-2">Διευθυνση Οδου</h4>
                                            <v-text-field
                                                v-model="form.address"
                                                density="compact"
                                                placeholder="Κανάρη"
                                                variant="outlined"
                                                :rules="[rules.required]"
                                            ></v-text-field>
                                        </v-col>
                                        <v-col>
                                            <h4 class="description mb-2">Αριθμός Οδου</h4>
                                            <v-number-input
                                                v-model="form.streetNumber"
                                                density="compact"
                                                control-variant="stacked"
                                                placeholder="12"
                                                variant="outlined"
                                                inset
                                            ></v-number-input>
                                        </v-col>
                                    </v-row>

                                    <v-row no-gutters class="ga-6 mb-1">
                                        <v-col>
                                            <h4 class="description mb-2">Πόλη</h4>
                                            <v-autocomplete
                                                v-model="form.city"
                                                density="compact"
                                                placeholder="Αθήνα"
                                                :items="cityItems"
                                                item-title="label"
                                                item-value="value"
                                                :rules="[rules.required]"
                                                variant="outlined"
                                                ></v-autocomplete>
                                        </v-col>
                                        <v-col>
                                            <h4 class="description mb-2">Ταχυδρομικός Κώδικας</h4>
                                            <v-number-input
                                                v-model="form.postal_code"
                                                density="compact"
                                                control-variant="stacked"
                                                placeholder="12345"
                                                variant="outlined"
                                                :rules="[rules.required]"
                                                :min="0"
                                                max="99999"
                                                inset
                                            ></v-number-input>
                                        </v-col>
                                    </v-row>
                                </div>

                                <div class="mt-9">
                                    <v-row class="ga-2 mb-6" no-gutters>
                                        <v-col cols="1" class="d-flex align-center justify-center pa-0"><v-divider color="#0369a1" class="border-opacity-100"></v-divider></v-col>
                                        <v-col><h3>Κατάσταση και Λεπτομέρειες Λειτουργίας</h3></v-col>
                                    </v-row>

                                    <div class="status-container">
                                        <v-row no-gutters class="ga-6 d-flex align-center justify-space-between">
                                            <v-col>
                                                <v-btn class="btn" variant="text" disabled>
                                                    <v-icon><ClShieldCheck/></v-icon>
                                                    is active
                                                </v-btn>
                                            </v-col>
                                            <v-col class="d-flex align-center justify-end pr-4">
                                                <v-switch class="switch" color="primary" v-model="this.form.isActive" inset hide-details></v-switch>
                                            </v-col>
                                        </v-row>
                                    </div>

                                    <v-row no-gutters class="ga-6 my-6 d-flex align-center justify-space-between">
                                        <v-col>
                                            <h4 class="description mb-2">Σημειωσεις</h4>
                                            <v-textarea v-model="form.notes" variant="outlined" placeholder="Προσθέστε σημειώσεις εδώ..." hide-details></v-textarea>
                                        </v-col>
                                    </v-row>

                                    <v-row no-gutters class="ga-6 my-6 d-flex align-center justify-space-between">
                                        <v-col class="timestamp-modal">
                                            <h4>Δημιουργηθηκε Στις</h4>
                                            <span>{{ new Date().toLocaleDateString() }}</span>
                                        </v-col>

                                        <v-col class="timestamp-modal">
                                            <h4>Ενημερωθηκε Στις</h4>
                                            <span>{{ new Date().toLocaleDateString() }}</span>
                                        </v-col>

                                    </v-row>

                                </div>

                            </v-card-text>
                            <v-divider></v-divider>
                            <v-card-actions class="d-flex justify-space-between pa-8 ga-6">
                                <v-btn
                                    class="h-auto"
                                    text="Απόρριψη Αλλαγών"
                                ></v-btn>
                                <v-btn
                                    class="h-auto create-user-btn"
                                    text="Δημιουργία Χρήστη"
                                    :prepend-icon="BxUserPlus"
                                    type="submit"
                                ></v-btn>

                            </v-card-actions>
                            </v-card>
                            
                        </v-form>
                    </template>
                </v-dialog>
            </v-col>
        </v-row>

        <v-row class="ga-6">
            <v-col>
                <v-card class="mx-auto py-2 px-5">
                    <v-card-item>
                        <v-card-title>Συνολικοι Πελατες</v-card-title>
                    </v-card-item>
                    <v-card-text>
                        {{ getTotalCustomers }}
                    </v-card-text>
                    <v-card-actions>
                        <span><v-icon><FeTrendingUp/></v-icon> +12.5% vs last month </span>
                    </v-card-actions>
                    <v-icon class="background-icon"><FlClipboardMultiple/></v-icon>
                </v-card>
            </v-col>

            <v-col>
                <v-card class="mx-auto py-2 px-5 blue">
                    <v-card-item>
                        <v-card-title>Active Production Runs</v-card-title>
                    </v-card-item>
                    <v-card-text>
                        2
                    </v-card-text>
                    <v-card-actions>
                        <v-row class="d-flex align-center">
                            <v-col cols="auto prod-col">
                                <v-btn variant="text" prepend-icon="mdi-circle-small" disabled>Live across 4 facilities</v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                    <v-icon class="background-icon"><FlClipboardMultiple/></v-icon>
                </v-card>
            </v-col>
            <v-col>
                <v-card class="mx-auto py-2 px-5 risk">
                    <v-card-item>
                        <v-card-title>Ανενεργα συμβολαια</v-card-title>
                    </v-card-item>
                    <v-card-text>
                        11
                    </v-card-text>
                    <v-card-actions>
                        <span><v-icon><AkTriangleAlert/></v-icon> 12 orders delayed at QC </span>
                    </v-card-actions>
                    <v-icon class="background-icon"><AkTriangleAlert/></v-icon>
                </v-card>
            </v-col>

        </v-row>

        <div class="table-container mt-6">
            <v-data-table :headers="headers" :items="this.items" item-value="id"
                sort-asc-icon="mdi-sort-ascending"
                sort-desc-icon="mdi-sort-descending"
                sort-icon="mdi-swap-vertical">
                <!-- Id Will be hidden probably -->
                <template v-slot:[`item.id`]="{item}">
                    <div>
                        <h2 class="client-header">
                            #CUST-{{ item.id }}
                        </h2>
                    </div>
                </template>
                <template v-slot:[`item.name`]="{item}">
                    <div>
                        <h2 class="cust-header">
                            {{ item.name }}
                        </h2>
                    </div>
                </template>
                <template v-slot:[`item.contact_person`]="{item}">
                    <div>
                        <h2 class="font-weight-semibold contact-person">
                            {{ item.contact_person }}
                        </h2>
                    </div>
                </template>
                <template v-slot:[`item.communication`]="{item}">
                    <div>
                        <h2 class="communication-header d-flex flex-column">
                            <span>{{ item.phone }}</span>
                            <span>{{ item.email }}</span>
                        </h2>
                    </div>
                </template>
                <template v-slot:[`item.location`]="{item}">
                    <div>
                        <h2 class="location-header d-flex flex-column">
                            <span>{{ item.street }},</span><span>{{ item.city }} {{ item.zipCode }}</span>
                        </h2>
                    </div>
                </template>
                <template v-slot:[`item.industry`]="{item}">
                    <div>
                        <h2 class="stage-header blue">
                            {{ item.industry }}
                        </h2>
                    </div>
                    
                </template>
                <template v-slot:[`item.status`]="{item}">
                    <div v-if="item.status.toLowerCase() === 'active'">
                        <h2 class="active status">
                            <v-icon>mdi-circle-medium</v-icon>
                            Ενεργος 
                        </h2>
                    </div>
                    <div v-else-if="item.status.toLowerCase() === 'contract_pending'">
                        <h2 class="pending status">
                            <v-icon>mdi-circle-medium</v-icon>
                            Σε εκκρεμοτητα
                        </h2>
                    </div>                 
                    <div v-else>
                        <h2 class="inactive status">
                            <v-icon>mdi-circle-medium</v-icon>
                            {{ item.status }}
                        </h2>
                    </div>                 
                       
                </template>
                <template v-slot:[`item.notes`]="{item}">
                    <div v-if="item.notes" class="truncate notes">
                        {{ item.notes }}
                    </div>
                    <div v-else>
                        -
                    </div>
                </template>
                <template v-slot:[`item.timestamps`]="{item}">
                    <div class="timestamps d-flex flex-column">
                        <span>C: {{ item.createdAt }}</span>
                        <span>U: {{ item.updatedAt }}</span>
                    </div>
                </template>

                <!-- <template v-slot:expanded-row="{ columns, item }">   
                    <tr class="expanded-row">
                        <td :colspan="columns.length" class="px-5 py-6">
                            <v-row class="justify-space-between" no-gutters>
                                <span>this will change probably...</span>
                                
                            </v-row>
                        </td>
                    </tr>
                </template> -->
                
            </v-data-table>
        </div>

    </v-container>
</template>
<script>
    import { CaFilterEdit, FeTrendingUp, FlClipboardMultiple, MiMoneyPlus, CgSandClock, MdTimeline, AkTriangleAlert, CaMachineLearningModel, HiRocketLaunch, McBookmarkAddLine, AkPerson, ClShieldCheck, BxUserPlus } from '@kalimahapps/vue-icons';
    import { getCustomers, createCustomer } from "../api/customersService";

    export default {
        name: "Orders",
        components: {
            CaFilterEdit, FeTrendingUp, FlClipboardMultiple, MiMoneyPlus, CgSandClock,  MdTimeline,
            AkTriangleAlert, CaMachineLearningModel, HiRocketLaunch, McBookmarkAddLine, AkPerson,
            ClShieldCheck, BxUserPlus
        },
        data() {
            return {
                // Data properties for orders can be added here
                headers: [
                    { title: "Αναγνωριστικο", key: "id", value: "id", sortable: true},
                    { title: "Επωνυμια", key: "name", value: "name", sortable: true},
                    { title: "Προσωπο επικοινωνιας", key: "contact_person", value: "contact_person", sortable: true},
                    { title: "Επικοινωνια", key: "communication", value: "communication", sortable: true},
                    { title: "Τοποθεσια", key: "location", value: "location", sortable: true},
                    { title: "Βιομηχανια", key: "industry", value: "industry", sortable: true},
                    { title: "Κατασταση", key: "status", value: "status", sortable: true},
                    { title: "Σημειωσεις", key: "notes", value: "notes", sortable: true},
                    { title: "Στιγμιοτυπα", key: "timestamps", value: "timestamps", sortable: true},
                ],
                items: [],
                form: {
                    id: "",
                    name: "",
                    contact_person: "",
                    phone: null,
                    email: "",
                    address: "",
                    city: null,
                    industry: null,
                    status: "",
                    notes: "",
                    isActive: true,
                },
                filterMenu: false,
                industryItems: [
                    { label: 'Κατασκευές', value: 'manufacturing'},
                    { label: 'Ένδυση', value: 'streetwear'},
                    { label: 'Αλυσίδα', value: 'Corporate'},
                ],
                cityItems: [
                    { label: 'Αθήνα', value: 'athens' },
                    { label: 'Θεσσαλονίκη', value: 'thessaloniki' },
                    { label: 'Πάτρα', value: 'patras' },
                    { label: 'Πειραιάς', value: 'piraeus' },
                    { label: 'Λάρισα', value: 'larissa' },
                    { label: 'Ηράκλειο', value: 'heraklion' },
                    { label: 'Περιστέρι', value: 'peristeri' },
                    { label: 'Καλλιθέα', value: 'kallithea' },
                    { label: 'Αχαρνές', value: 'acharnes' },
                    { label: 'Καλαμαριά', value: 'kalamaria' },
                    { label: 'Νίκαια', value: 'nikaia' },
                    { label: 'Γλυφάδα', value: 'glyfada' },
                    { label: 'Βόλος', value: 'volos' },
                    { label: 'Ίλιον', value: 'ilion' },
                    { label: 'Ηλιούπολη', value: 'ilioupoli' },
                    { label: 'Κερατσίνι', value: 'keratsini' },
                    { label: 'Εύοσμος', value: 'evosmos' },
                    { label: 'Χαλάνδρι', value: 'chalandri' },
                    { label: 'Νέα Σμύρνη', value: 'nea-smyrni' },
                    { label: 'Μαρούσι', value: 'marousi' },
                    { label: 'Άγιος Δημήτριος', value: 'agios-dimitrios' },
                    { label: 'Ζωγράφου', value: 'zografou' },
                    { label: 'Αιγάλεω', value: 'aigaleo' },
                    { label: 'Ιωάννινα', value: 'ioannina' },
                    { label: 'Παλαιό Φάληρο', value: 'palaio-faliro' },
                    { label: 'Νέα Ιωνία', value: 'nea-ionia' },
                    { label: 'Κορυδαλλός', value: 'korydallos' },
                    { label: 'Αγία Παρασκευή', value: 'agia-paraskevi' },
                    { label: 'Τρίκαλα', value: 'trikala' },
                    { label: 'Χαλκίδα', value: 'chalkida' },
                    { label: 'Βύρωνας', value: 'vyronas' },
                    { label: 'Γαλάτσι', value: 'galatsi' },
                    { label: 'Αλεξανδρούπολη', value: 'alexandroupoli' },
                    { label: 'Σέρρες', value: 'serres' },
                    { label: 'Κατερίνη', value: 'katerini' },
                    { label: 'Ξάνθη', value: 'xanthi' },
                    { label: 'Καλαμάτα', value: 'kalamata' },
                    { label: 'Καβάλα', value: 'kavala' },
                    { label: 'Χανιά', value: 'chania' },
                    { label: 'Λαμία', value: 'lamia' },
                    { label: 'Κομοτηνή', value: 'komotini' },
                    { label: 'Ρόδος', value: 'rhodes' },
                    { label: 'Δράμα', value: 'drama' },
                    { label: 'Βέροια', value: 'veria' },
                    { label: 'Κοζάνη', value: 'kozani' },
                    { label: 'Καρδίτσα', value: 'karditsa' },
                    { label: 'Ρέθυμνο', value: 'rethymno' },
                    { label: 'Πτολεμαΐδα', value: 'ptolemaida' },
                    { label: 'Τρίπολη', value: 'tripoli' },
                    { label: 'Κόρινθος', value: 'corinth' },
                    { label: 'Γέρακας', value: 'gerakas' },
                    { label: 'Μυτιλήνη', value: 'mytilene' },
                    { label: 'Άργος', value: 'argos' },
                    { label: 'Χίος', value: 'chios' },
                    { label: 'Αγρίνιο', value: 'agrinio' },
                    { label: 'Σαλαμίνα', value: 'salamina' },
                    { label: 'Ελευσίνα', value: 'elefsina' },
                    { label: 'Κέρκυρα', value: 'corfu' },
                    { label: 'Πύργος', value: 'pyrgos' },
                    { label: 'Μέγαρα', value: 'megara' },
                    { label: 'Θήβα', value: 'thiva' },
                    { label: 'Λιβαδειά', value: 'livadeia' },
                    { label: 'Κως', value: 'kos' },
                    { label: 'Ναύπλιο', value: 'nafplio' },
                    { label: 'Έδεσσα', value: 'edessa' },
                    { label: 'Φλώρινα', value: 'florina' },
                    { label: 'Καστοριά', value: 'kastoria' },
                    { label: 'Κιλκίς', value: 'kilkis' },
                    { label: 'Γιαννιτσά', value: 'giannitsa' },
                    { label: 'Πρέβεζα', value: 'preveza' },
                    { label: 'Άρτα', value: 'arta' },
                    { label: 'Νάουσα', value: 'naousa' },
                    { label: 'Ορεστιάδα', value: 'orestiada' },
                    { label: 'Αμαλιάδα', value: 'amaliada' },
                    { label: 'Σπάρτη', value: 'sparta' },
                    { label: 'Θήρα', value: 'thira' },
                    { label: 'Ερμούπολη', value: 'ermoupoli' },
                    { label: 'Λευκάδα', value: 'lefkada' },
                    { label: 'Ζάκυνθος', value: 'zakynthos' },
                    { label: 'Αργοστόλι', value: 'argostoli' },
                    { label: 'Ναύπακτος', value: 'nafaktos' },
                    { label: 'Αίγιο', value: 'aigio' },
                    { label: 'Καρπενήσι', value: 'karpenisi' },
                    { label: 'Γρεβενά', value: 'grevena' },
                    { label: 'Πολύγυρος', value: 'polygyros' },
                    { label: 'Αλεξάνδρεια', value: 'alexandreia' },
                    { label: 'Σητεία', value: 'siteia' },
                    { label: 'Ιεράπετρα', value: 'ierapetra' },
                    { label: 'Άγιος Νικόλαος', value: 'agios-nikolaos' }
                ],
                dialogStatus: false,
                isActive: true,
                HiRocketLaunch: HiRocketLaunch,
                McBookmarkAddLine: McBookmarkAddLine,
                BxUserPlus: BxUserPlus,
                expanded: [],
                rules: {
                    email: [
                        value => {
                            if (regex.test(value)) {
                                return true;
                            } else {
                                return 'Το email δεν είναι έγκυρο';
                            }
                        }
                    ],
                    required: value => !!value || 'Το πεδίο είναι υποχρεωτικό.',
                }
            }
        },
        methods:{
            fetchCustomers(){
                getCustomers()
                    .then((res) => {
                        console.log(res.data.customersList);
                        this.items = res.data.customersList;
                    })
                    .catch((err) => {

                    })
                    .finally()
            },
            addCustomer(){
                this.$refs.form.validate()
                .then((res) => {
                    console.log(res);
                    if(res.valid){                        
                        createCustomer(this.form)
                        .then((res) => {
                            console.log(res)
                            this.items.unshift({
                                id: this.form.id,
                                name: this.form.name,
                                contact_person: this.form.contact_person,
                                email: this.form.email,
                                phone: this.form.phone,
                                industry: this.form.industry,
                                street: this.form.address,
                                city: this.form.city,
                                zipCode: this.form.zipCode,
                                status: this.form.status || 'active',
                                notes: this.form.notes,
                                createdAt: new Date().toLocaleString(),
                                updatedAt: new Date().toLocaleString(),
                                deliveredAt: new Date().toLocaleString(),
                                createdBy: "aloubardis",
                                updatedBy: "aloubardis",
                                deletedAt: null
                            })
                            this.dialogStatus = false;
                        })
                        .catch((err) => {
                            console.log(err);
                        })
                        .finally(() => {

                        })
                    }
                    else {
                        alert("Not valid");
                    }
                })
                .catch((err) => {

                })
                .finally();

            },
            generateΙd(){
                let result = '';
                const characters = '012345';
                for (let i = 0; i < 6; i++) {
                    const randomInd = Math.floor(Math.random() * characters.length);
                    result += characters.charAt(randomInd);
                }
                this.form.id = result
            },
        },
        created(){
            this.fetchCustomers();
        },
        computed:{
            getTotalCustomers(){
                return "5"
                return this.items.length;
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
    .new-customer-btn{
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    }
    :deep(.v-card){
        width: 100%;
        box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
        border-radius: 0.75rem;
        min-height: 11rem;
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
    :deep(.client-header){
        color: #566167;
        font-size: 0.75rem;
        line-height: 1rem;
        font-weight: 400;
    }
    :deep(.contact-person){
        font-size: 0.875rem;
    }   
    :deep(.cust-header){
        color: #2a343a;
        font-size: 1rem;
        font-weight: 700;
    }
    :deep(.communication-header span:nth-child(1)),
    :deep(.communication-header span:nth-child(2))
    {
        font-size: 0.75rem;
        line-height: 1rem;
        font-weight: 500;
    }
    :deep(.communication-header span:nth-child(2)){
        color: #566167;
    }
    :deep(.location-header){
        font-size: .75rem;
        font-weight: 600;
    }
    :deep(.location-header span:nth-child(2)){
        color: #566167;
        font-size: .675rem;
    }
    :deep(.stage-header){
        font-size: .675rem;
        font-weight: 800;
        text-transform: uppercase;
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
    :deep(.timestamps span){
        color: #566167;
        font-size: 0.70rem;
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
    .new-customer-dialog :deep(.v-overlay__content){
        right: 0;
        height: 100%;
        margin: 0;
        padding: 0;
        max-height: none;
    }
    .v-overlay-container .new-customer-dialog :deep(div.v-card-item){
        padding: 1.5rem 2rem;
    }
    .new-customer-card .header-title {
        color: #2a343a;
        text-transform: capitalize;
        line-height: 1.25;
        font-weight: 800;
        font-size: 1.25rem;
    }
    .new-customer-card .header-subtitle {
        color: #0369a1;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-size: 0.75rem;
        line-height: 1rem;
        margin-top: 0.125rem;
    }
    .new-customer-card .v-card-text h3{
        color: #566167;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-weight: 900;
        font-size: 0.75rem;
        line-height: 1rem;
    }
    .new-customer-card .v-card-text .description{
        color: #566167;
        letter-spacing: -0.05em;
        text-transform: uppercase;
        font-weight: 700;
        font-size: .75rem;
        line-height: 1rem;
    }
    .new-customer-card .v-card-text :deep(input::placeholder),
    .new-customer-card .v-card-text :deep(.v-label)
    {
        color: #566167;
        font-size: .875rem;
        opacity: 1;
    }
    .new-customer-card .v-card-text :deep(.v-input .v-field__outline__start),
    .new-customer-card .v-card-text :deep(.v-input .v-field__outline__notch::before),
    .new-customer-card .v-card-text :deep(.v-input .v-field__outline__notch::after),
    .new-customer-card .v-card-text :deep(.v-input .v-field__outline__end){
        border-color: #e2e8f0;
        opacity: 1;
    }
    .new-customer-card .v-card-text :deep(.v-field){
        border-radius: 0.5rem;
        padding: .2rem 1rem .2rem 0;
    }
    .new-customer-card .v-card-text :deep(.v-input .v-field--error .v-field__outline__start),
    .new-customer-card .v-card-text :deep(.v-input .v-field--error .v-field__outline__notch::before),
    .new-customer-card .v-card-text :deep(.v-input .v-field--error .v-field__outline__notch::after),
    .new-customer-card .v-card-text :deep(.v-input .v-field--error .v-field__outline__end){
        border-color: #b00020;
        opacity: 1;
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
    :deep(.v-overlay__content .v-card.new-customer-card){
        overflow-y: hidden;
    }
    .create-user-btn{
        background: #0369a1;
        box-shadow: 0 10px 15px -3px rgb(12 74 110 / 0.2), 0 4px 6px -4px rgb(12 74 110 / 0.2);
        border-radius: 0.5rem;
    }
    .create-user-btn :deep(.v-btn__prepend){
        padding: 0 0 0 .75rem;
        color: white;
        font-size: 1.5rem;
    }
    .create-user-btn :deep(.v-btn__content){
        color: white;
    }
    .status-container{
        background-color: #eef4fa;
        border-radius: .75rem;
        padding: .5rem;
    }
    .status-container .btn{
        opacity: 1;
    }
    .status-container .btn :deep(.v-icon){
        font-size: 1.5rem;
        color: #006497;
    }
    .status-container .btn :deep(.v-btn__content){
        color: #2a343a;
        font-weight: 600;
        font-size: 0.875rem;
        text-transform: capitalize;
        gap: 0.5rem;
    }
    .status-container :deep(.v-switch__track){
        height: 1.5rem;
    }
    .status-container :deep(.v-switch__thumb){
        height: 1.25rem;
        width: 1.25rem;
    }
    .prod-col .v-btn{
        padding-left: 0;
        opacity: 1;
    }
    .prod-col :deep(.v-btn__content){
        padding-left: 0;
    }
    .prod-col :deep(.v-btn__prepend){
        padding: 0;
        margin: 0;
    }
    .truncate{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 10rem;
    }
    .notes{
        color: #566167;
        font-size: 0.75rem;
        line-height: 1rem;
    }
    .status{
        font-size: 0.7rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        gap: 0.375rem;
    }
    .active{
        color: #00687b;
    }
    .inactive{
        color: #566167;
    }
    .pending{
        color: #a83836;
    }
    .timestamp-modal h4{
        color: #566167;
        letter-spacing: 0.05em;
        text-transform: uppercase;
        font-weight: 700;
        font-size: 0.7rem;
    }
    .timestamp-modal span{
        font-size: 0.725rem;
        color: #566167;
    }
    .timestamp-modal:nth-child(2)
    {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
    }
</style>