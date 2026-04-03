import MockAdapter from 'axios-mock-adapter'

export default function initializeMockAdapter(instance) {
    const styles = [
        "background: linear-gradient(#0c69f4, #0505a3)",
        "border: 1px solid #3E0E02",
        "color: white",
        "display: block",
        "text-shadow: 0 1px 0 rgba(0, 0, 0, .3)",
        "box-shadow: 0 1px 0 rgba(255, 255, 255, .4)",
        "line-height: 20px",
        "text-align: center",
        "font-weight: bold",
        "font-size: 14px",
    ]

    console.log("%cInitializing MockAdapter", styles.join(';'));

    const mock = new MockAdapter(instance);
    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/patients`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {
            return [200,
                {
                    patientsList: [
                        {
                            "id": 1,
                            "firstName": "Ethan",
                            "middleName": "James",
                            "lastName": "Collins",
                            "dob": "1993-05-30",
                            "gender": "male",
                            "lastVisit": "2024-04-12",
                            "lastTreatment": "Implants",
                            "assignedDoctor": "Dr. John Doe",
                            "phoneNumber": "+(30)756-4732145",
                            "email": "ecollins@gmail.com",
                            "isActive": true,
                            "createdAt": "2023-11-03",
                            "updatedAt": "2024-04-12",
                            "deletedAt": null
                        },
                        {
                            "id": 2,
                            "firstName": "Marcus",
                            "middleName": "Allen",
                            "lastName": "Hale",
                            "dob": "1993-05-30",
                            "gender": "male",
                            "lastVisit": "2024-27-11",
                            "lastTreatment": "Tooth Cleaning",
                            "assignedDoctor": "Dr. John Doe",
                            "phoneNumber": "(+30)693-4732145",
                            "email": "mhale@gmail.com",
                            "isActive": false,
                            "createdAt": "2023-11-03",
                            "updatedAt": "2023-11-03",
                            "deletedAt": null
                        },
                        {
                            "id": 3,
                            "firstName": "Daniel",
                            "middleName": "Joseph",
                            "lastName": "Rivera",
                            "dob": "1993-05-30",
                            "gender": "male",
                            "lastVisit": "2024-02-12",
                            "lastTreatment": "Tooth Cleaning",
                            "assignedDoctor": "Dr. John Doe",
                            "phoneNumber": "(+30)693-4732145",
                            "email": "drivera@gmail.com",
                            "isActive": true,
                            "createdAt": "2023-11-26",
                            "updatedAt": "2023-11-26",
                            "deletedAt": null
                        },
                        {
                            "id": 4,
                            "firstName": "Adrian",
                            "middleName": "Michael",
                            "lastName": "Brooks",
                            "dob": "2023-11-08",
                            "gender": "male",
                            "lastVisit": "2024-17-10",
                            "lastTreatment": "Tooth Cleaning",
                            "assignedDoctor": "Dr. John Doe",
                            "phoneNumber": "(+30)693-4732145",
                            "email": "abrooks@gmail.com",
                            "isActive": true,
                            "createdAt": "2023-11-28",
                            "updatedAt": "2023-11-28",
                            "deletedAt": null
                        },
                        {
                            "id": 5,
                            "firstName": "Emily",
                            "middleName": "Grace",
                            "lastName": "Dawson",
                            "dob": "2023-11-02",
                            "gender": "female",
                            "lastVisit": "2024-07-11",
                            "lastTreatment": "Tooth Cleaning",
                            "assignedDoctor": "Dr. John Doe",
                            "phoneNumber": "(+30)693-4732145",
                            "email": "edawson@gmail.com",
                            "isActive": true,
                            "createdAt": "2023-11-28",
                            "updatedAt": "2023-11-28",
                            "deletedAt": null
                        },
                        {
                            "id": 9,
                            "firstName": "Samuel",
                            "middleName": "Edward",
                            "lastName": "Turner",
                            "dob": "1993-05-30",
                            "gender": "male",
                            "lastVisit": "2024-04-10",
                            "lastTreatment": "Tooth Cleaning",
                            "assignedDoctor": "Dr. John Doe",
                            "phoneNumber": "(+30)693-4732145",
                            "email": "sturner@gmail.com",
                            "isActive": false,
                            "createdAt": "2023-12-22",
                            "updatedAt": "2023-12-22",
                            "deletedAt": null
                        },
                        {
                            "id": 11,
                            "firstName": "Leo",
                            "middleName": "Alexander",
                            "lastName": "Donovan",
                            "dob": "1993-05-30",
                            "gender": "male",
                            "lastVisit": "2024-12-09",
                            "lastTreatment": "Tooth Cleaning",
                            "assignedDoctor": "Dr. John Doe",
                            "phoneNumber": "(+30)693-4732145",
                            "email": "ldonovan@gmail.com",
                            "isActive": false,
                            "createdAt": "2023-12-22",
                            "updatedAt": "2023-12-22",
                            "deletedAt": null
                        },
                        {
                            "id": 12,
                            "firstName": "Victor",
                            "middleName": "Thomas",
                            "lastName": "Hayes",
                            "dob": "1993-05-30",
                            "gender": "male",
                            "lastVisit": "2024-04-12",
                            "lastTreatment": "Tooth Cleaning",
                            "assignedDoctor": "Dr. John Doe",
                            "phoneNumber": "(+30)693-4732145",
                            "email": "vhayes@gmail.com",
                            "isActive": false,
                            "createdAt": "2023-12-22",
                            "updatedAt": "2023-12-22",
                            "deletedAt": null
                        },
                        {
                            "id": 13,
                            "firstName": "Nathaniel",
                            "middleName": "Scott",
                            "lastName": "Price",
                            "dob": "1993-05-30",
                            "gender": "male",
                            "lastVisit": "2024-14-11",
                            "lastTreatment": "Tooth Cleaning",
                            "assignedDoctor": "Dr. John Doe",
                            "phoneNumber": "(+30)693-4732145",
                            "email": "nprice@gmail.com",
                            "isActive": false,
                            "createdAt": "2023-12-22",
                            "updatedAt": "2023-12-22",
                            "deletedAt": null
                        },
                        {
                            "id": 14,
                            "firstName": "Oliver",
                            "middleName": "Benjamin",
                            "lastName": "Bennett",
                            "dob": "1993-05-30",
                            "gender": "male",
                            "lastVisit": "2024-24-08",
                            "lastTreatment": "Tooth Cleaning",
                            "assignedDoctor": "Dr. John Doe",
                            "phoneNumber": "(+30)693-4732145",
                            "email": "obennett@gmail.com",
                            "isActive": false,
                            "createdAt": "2023-12-22",
                            "updatedAt": "2023-12-22",
                            "deletedAt": null
                        },
                        {
                            "id": 15,
                            "firstName": "Julian",
                            "middleName": "Robert",
                            "lastName": "Carter",
                            "dob": "1993-05-30",
                            "gender": "male",
                            "lastVisit": "2024-04-10",
                            "lastTreatment": "Tooth Cleaning",
                            "assignedDoctor": "Dr. John Doe",
                            "phoneNumber": "(+30)693-4732145",
                            "email": "jcarter@gmail.com",
                            "isActive": false,
                            "createdAt": "2023-12-22",
                            "updatedAt": "2023-12-22",
                            "deletedAt": null
                        },
                        {
                            "id": 16,
                            "firstName": "Jordan",
                            "middleName": "Taylor",
                            "lastName": "Avery",
                            "dob": "1993-05-30",
                            "gender": "male",
                            "lastVisit": "2024-24-07",
                            "lastTreatment": "Tooth Cleaning",
                            "assignedDoctor": "Dr. John Doe",
                            "phoneNumber": "(+30)693-4732145",
                            "email": "javery@gmail.com",
                            "isActive": false,
                            "createdAt": "2023-12-22",
                            "updatedAt": "2023-12-22",
                            "deletedAt": null
                        },
                        {
                            "id": 17,
                            "firstName": "Taylor",
                            "middleName": "Reese",
                            "lastName": "Morgan",
                            "dob": "1993-05-30",
                            "gender": "male",
                            "lastVisit": "2024-14-11",
                            "lastTreatment": "Tooth Cleaning",
                            "assignedDoctor": "Dr. John Doe",
                            "phoneNumber": "(+30)693-4732145",
                            "email": "tmorgan@gmail.com",
                            "isActive": false,
                            "createdAt": "2023-12-22",
                            "updatedAt": "2023-12-22",
                            "deletedAt": null
                        },
                        {
                            "id": 18,
                            "firstName": "Casey",
                            "middleName": "Drew",
                            "lastName": "Nolan",
                            "dob": "1993-05-30",
                            "gender": "male",
                            "lastVisit": "2024-04-12",
                            "lastTreatment": "Tooth Cleaning",
                            "assignedDoctor": "Dr. John Doe",
                            "phoneNumber": "(+30)693-4732145",
                            "email": "cnolan@gmail.com",
                            "isActive": false,
                            "createdAt": "2023-12-22",
                            "updatedAt": "2023-12-22",
                            "deletedAt": null
                        },
                        {
                            "id": 19,
                            "firstName": "Alex",
                            "middleName": "Morgan",
                            "lastName": "Harper",
                            "dob": "1993-05-30",
                            "gender": "male",
                            "lastVisit": "2024-04-12",
                            "lastTreatment": "Tooth Cleaning",
                            "assignedDoctor": "Dr. John Doe",
                            "phoneNumber": "(+30)693-4732145",
                            "email": "aharper@gmail.com",
                            "isActive": false,
                            "createdAt": "2023-12-22",
                            "updatedAt": "2023-12-22",
                            "deletedAt": null
                        },
                        {
                            "id": 19,
                            "firstName": "Riley",
                            "middleName": "Skye",
                            "lastName": "Shafer",
                            "dob": "1993-05-30",
                            "gender": "male",
                            "lastVisit": "2024-04-12",
                            "lastTreatment": "Tooth Cleaning",
                            "assignedDoctor": "Dr. John Doe",
                            "phoneNumber": "(+30)693-4732145",
                            "email": "rshafer@gmail.com",
                            "isActive": false,
                            "createdAt": "2023-12-22",
                            "updatedAt": "2023-12-22",
                            "deletedAt": null
                        },
                    ]
                }];
        }
        return [401, {
            message: "Unauthenticated"
        }]
    })

    // mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/appointments`).reply(config => {
    //             if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {
    //         return [200,
    //             {
    //                 appointmentsList: [
    //                     {
    //                         "id": 5,
    //                         "startDate": "2024-01-16T22:00:00.000Z",
    //                         "duration": 45,
    //                         "type": "CHECK",
    //                         "doctorInCharge": "DR1",
    //                         "appointmentStatus": "PENDING",
    //                         "reminderStatus": "NOT SENT",
    //                         "note": "test",
    //                         "preparation": null,
    //                         "createdAt": "2024-01-16T17:30:04.000Z",
    //                         "updatedAt": "2024-01-16T17:30:04.000Z",
    //                         "deletedAt": null,
    //                         "patientId": 1
    //                     },
    //                     {
    //                         "id": 6,
    //                         "startDate": "2024-01-25T09:00:00.000Z",
    //                         "duration": 50,
    //                         "type": "CHECK",
    //                         "doctorInCharge": "DR1",
    //                         "appointmentStatus": "PENDING",
    //                         "reminderStatus": "NOT SENT",
    //                         "note": "picky",
    //                         "preparation": "xrays",
    //                         "createdAt": "2024-01-16T17:38:28.000Z",
    //                         "updatedAt": "2024-01-16T17:38:28.000Z",
    //                         "deletedAt": null,
    //                         "patientId": 1
    //                     },
    //                     {
    //                         "id": 7,
    //                         "startDate": "2024-02-02T10:00:00.000Z",
    //                         "duration": 45,
    //                         "type": "CHECK",
    //                         "doctorInCharge": "DR1",
    //                         "appointmentStatus": "PENDING",
    //                         "reminderStatus": "NOT SENT",
    //                         "note": "none",
    //                         "preparation": "none",
    //                         "createdAt": "2024-02-02T13:11:44.000Z",
    //                         "updatedAt": "2024-02-02T13:11:44.000Z",
    //                         "deletedAt": null,
    //                         "patientId": 1
    //                     },
    //                     {
    //                         "id": 8,
    //                         "startDate": "2024-02-07T22:00:00.000Z",
    //                         "duration": 45,
    //                         "type": "CHECK",
    //                         "doctorInCharge": "DR1",
    //                         "appointmentStatus": "PENDING",
    //                         "reminderStatus": "NOT SENT",
    //                         "note": "none",
    //                         "preparation": "none",
    //                         "createdAt": "2024-02-02T13:13:02.000Z",
    //                         "updatedAt": "2024-02-02T13:13:02.000Z",
    //                         "deletedAt": null,
    //                         "patientId": 1
    //                     },
    //                     {
    //                         "id": 9,
    //                         "startDate": "2024-02-06T22:00:00.000Z",
    //                         "duration": 45,
    //                         "type": "IMPLANTS",
    //                         "doctorInCharge": "DR1",
    //                         "appointmentStatus": "PENDING",
    //                         "reminderStatus": "SENT",
    //                         "note": "none",
    //                         "preparation": "none",
    //                         "createdAt": "2024-02-02T13:29:05.000Z",
    //                         "updatedAt": "2024-02-02T13:29:05.000Z",
    //                         "deletedAt": null,
    //                         "patientId": 1
    //                     },
    //                     {
    //                         "id": 10,
    //                         "startDate": "2024-02-07T22:00:00.000Z",
    //                         "duration": 45,
    //                         "type": "CHECK",
    //                         "doctorInCharge": "DR1",
    //                         "appointmentStatus": "PENDING",
    //                         "reminderStatus": "NOT SENT",
    //                         "note": "none",
    //                         "preparation": "none",
    //                         "createdAt": "2024-02-02T13:31:06.000Z",
    //                         "updatedAt": "2024-02-02T13:31:06.000Z",
    //                         "deletedAt": null,
    //                         "patientId": 1
    //                     },
    //                     {
    //                         "id": 11,
    //                         "startDate": "2024-02-28T20:54:00.000Z",
    //                         "duration": 45,
    //                         "type": "CHECK",
    //                         "doctorInCharge": "DR1",
    //                         "appointmentStatus": "PENDING",
    //                         "reminderStatus": "SENT",
    //                         "note": "none",
    //                         "preparation": "none",
    //                         "createdAt": "2024-02-20T15:49:36.000Z",
    //                         "updatedAt": "2024-02-20T15:49:36.000Z",
    //                         "deletedAt": null,
    //                         "patientId": 2
    //                     }
    //                 ]
    //             }];
    //     }
    //     return [401, {
    //         message: "Unauthenticated"
    //     }]
    // })

    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/medications`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {
            return [200,
                {
                    medicationsList: [
                        {
                            "id": 1,
                            "name": "Warfarin",
                            "category": "Anticoagulants",
                            "createdAt": "2024-04-12T15:27:55.000Z",
                            "updatedAt": "2024-04-12T15:27:55.000Z",
                            "deletedAt": null
                        },
                        {
                            "id": 2,
                            "name": "Apixaban",
                            "category": "Anticoagulants",
                            "createdAt": "2024-04-12T16:36:01.000Z",
                            "updatedAt": "2024-04-12T16:42:56.000Z",
                            "deletedAt": null
                        },
                        {
                            "id": 3,
                            "name": "Rivaroxaban",
                            "category": "Anticoagulants",
                            "createdAt": "2024-04-12T16:45:58.000Z",
                            "updatedAt": "2024-04-12T16:45:58.000Z",
                            "deletedAt": null
                        },
                        {
                            "id": 4,
                            "name": "Dabigatran",
                            "category": "Anticoagulants",
                            "createdAt": "2024-04-12T16:45:58.000Z",
                            "updatedAt": "2024-04-12T16:45:58.000Z",
                            "deletedAt": null
                        },
                        {
                            "id": 5,
                            "name": "Clopidogrel",
                            "category": "Anticoagulants",
                            "createdAt": "2024-04-12T16:45:58.000Z",
                            "updatedAt": "2024-04-12T16:45:58.000Z",
                            "deletedAt": null
                        },
                        {
                            "id": 6,
                            "name": "Insulin",
                            "category": "Diabetes Medications",
                            "createdAt": "2024-04-12T16:45:58.000Z",
                            "updatedAt": "2024-04-12T16:45:58.000Z",
                            "deletedAt": null
                        },
                        {
                            "id": 7,
                            "name": "Metformin",
                            "category": "Diabetes Medications",
                            "createdAt": "2024-04-12T16:45:58.000Z",
                            "updatedAt": "2024-04-12T16:45:58.000Z",
                            "deletedAt": null
                        },
                        {
                            "id": 8,
                            "name": "Alendronate",
                            "category": "Bisphosphonates",
                            "createdAt": "2024-04-12T16:45:58.000Z",
                            "updatedAt": "2024-04-12T16:45:58.000Z",
                            "deletedAt": null
                        },
                        {
                            "id": 9,
                            "name": "Zoledronic acid",
                            "category": "Bisphosphonates",
                            "createdAt": "2024-04-12T16:45:58.000Z",
                            "updatedAt": "2024-04-12T16:45:58.000Z",
                            "deletedAt": null
                        },
                        {
                            "id": 10,
                            "name": "Propranolol",
                            "category": "Cardiovascular Drugs",
                            "createdAt": "2024-04-12T16:45:58.000Z",
                            "updatedAt": "2024-04-12T16:45:58.000Z",
                            "deletedAt": null
                        },
                        {
                            "id": 11,
                            "name": "Atenolol",
                            "category": "Cardiovascular Drugs",
                            "createdAt": "2024-04-12T16:45:58.000Z",
                            "updatedAt": "2024-04-12T16:45:58.000Z",
                            "deletedAt": null
                        },
                        {
                            "id": 12,
                            "name": "Nitroglycerin",
                            "category": "Cardiovascular Drugs",
                            "createdAt": "2024-04-12T16:45:58.000Z",
                            "updatedAt": "2024-04-12T16:45:58.000Z",
                            "deletedAt": null
                        },
                    ]
                }];
        }
        return [401, {
            message: "Unauthenticated"
        }]

    })

    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/allergies`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {
            return [200,
                {
                    allergiesList: [
                        {
                            "id": 1,
                            "name": "Lidocaine",
                            "category": "Local Anesthetics",
                        },
                        {
                            "id": 2,
                            "name": "Articaine",
                            "category": "Local Anesthetics",
                        },
                        {
                            "id": 3,
                            "name": "Mepivacaine",
                            "category": "Local Anesthetics",
                        },
                        {
                            "id": 4,
                            "name": "Bupivacaine",
                            "category": "Local Anesthetics",
                        },
                        {
                            "id": 5,
                            "name": "Benzocaine",
                            "category": "Local Anesthetics",
                        },
                        {
                            "id": 6,
                            "name": "Penicillin",
                            "category": "Antibiotics",
                        },
                        {
                            "id": 7,
                            "name": "Amoxicillin",
                            "category": "Antibiotics",
                        },
                        {
                            "id": 8,
                            "name": "Cephalosporins",
                            "category": "Antibiotics",
                        },
                        {
                            "id": 9,
                            "name": "Clindamycin",
                            "category": "Antibiotics",
                        },
                        {
                            "id": 10,
                            "name": "Azithromycin",
                            "category": "Antibiotics",
                        },
                        {
                            "id": 11,
                            "name": "Metronidazole",
                            "category": "Antibiotics",
                        },
                        {
                            "id": 12,
                            "name": "Sulfa drugs",
                            "category": "Antibiotics",
                        },
                        {
                            "id": 13,
                            "name": "Ibuprofen",
                            "category": "Painkillers",
                        },
                        {
                            "id": 14,
                            "name": "Aspirin",
                            "category": "Painkillers",
                        },
                        {
                            "id": 15,
                            "name": "Naproxen",
                            "category": "Painkillers",
                        },
                        {
                            "id": 16,
                            "name": "Codeine",
                            "category": "Painkillers",
                        },
                        {
                            "id": 17,
                            "name": "Acetaminophen",
                            "category": "Painkillers",
                        },
                        {
                            "id": 18,
                            "name": "Latex",
                            "category": "Dental Materials",
                        },
                        {
                            "id": 19,
                            "name": "Nickel",
                            "category": "Dental Materials",
                        },
                        {
                            "id": 20,
                            "name": "Acrylic",
                            "category": "Dental Materials",
                        },
                        {
                            "id": 21,
                            "name": "Resin",
                            "category": "Dental Materials",
                        },
                        {
                            "id": 22,
                            "name": "Eugenol",
                            "category": "Dental Materials",
                        },
                        {
                            "id": 23,
                            "name": "Chlorhexidine",
                            "category": "Dental Materials",
                        },
                    ]
                }];
        }
        return [401, {
            message: "Unauthenticated"
        }]
    })

    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/known_conditions`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {
            return [200,
                {
                    conditionsList: [
                        {
                            "id": 1,
                            "name": "Hypertension",
                            "category": "Cardiovascular",
                        },
                        {
                            "id": 2,
                            "name": "Coronary artery disease",
                            "category": "Cardiovascular",
                        },
                        {
                            "id": 3,
                            "name": "History of heart attack",
                            "category": "Cardiovascular",
                        },
                        {
                            "id": 4,
                            "name": "Arrhythmia",
                            "category": "Cardiovascular",
                        },
                        {
                            "id": 5,
                            "name": "Heart valve disease",
                            "category": "Cardiovascular",
                        },
                        {
                            "id": 6,
                            "name": "Pacemaker",
                            "category": "Cardiovascular",
                        },
                        {
                            "id": 7,
                            "name": "Stroke history",
                            "category": "Cardiovascular",
                        },
                        {
                            "id": 8,
                            "name": "Hemophilia",
                            "category": "Blood Disorders",
                        },
                        {
                            "id": 9,
                            "name": "Anemia",
                            "category": "Blood Disorders",
                        },
                        {
                            "id": 10,
                            "name": "Clotting disorders",
                            "category": "Blood Disorders",
                        },
                        {
                            "id": 11,
                            "name": "On anticoagulants",
                            "category": "Blood Disorders",
                        },
                        {
                            "id": 12,
                            "name": "Diabetes Type 1",
                            "category": "Metabolic",
                        },
                        {
                            "id": 13,
                            "name": "Diabetes Type 2",
                            "category": "Metabolic",
                        },
                        {
                            "id": 14,
                            "name": "Asthma",
                            "category": "Respiratory",
                        },
                        {
                            "id": 15,
                            "name": "COPD",
                            "category": "Respiratory",
                        },
                        {
                            "id": 16,
                            "name": "Epilepsy",
                            "category": "Neurological",
                        },
                        {
                            "id": 17,
                            "name": "Seizure disorders",
                            "category": "Neurological",
                        },
                        {
                            "id": 18,
                            "name": "Hepatitis B",
                            "category": "Infectious",
                        },
                        {
                            "id": 19,
                            "name": "Hepatitis C",
                            "category": "Infectious",
                        },
                        {
                            "id": 20,
                            "name": "HIV",
                            "category": "Infectious",
                        }
                    ]
                }];
        }
        return [401, {
            message: "Unauthenticated"
        }]
    })

    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/users`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {
            return [200,
                {
                    usersList: [
                        {
                            id: "916a07eb-50c7-4168-9b7f-db6ac86d41ed",
                            username: "spyros",
                            password: "$2a$10$Ss6D8D5bgD3Hpbwfc.bNruT4c8fiCT5XlVB3y54DV2iS089z3d7Pq",
                            email: "test@example.com",
                            contactNumber: "+1 555-4321",
                            role: "ADMIN",
                            profileImageUrl: `/tengen-avatar.png`,
                            lastLogin: "2024-05-20T10:15:30.000Z",
                            isActive: true,
                            createdAt: "2023-11-25T00:33:48.000Z",
                            updatedAt: "2023-11-25T00:33:48.000Z",
                            deletedAt: null
                        },
                        {
                            id: "f6e35ad0-4543-43ea-9bb0-0fc40895942c",
                            username: "spyros2",
                            password: "$2a$10$mCJpgnG3Vd6NsIqCxK2qIO0Haruh.LImQvWPtVLtU1ecS1whrAuEu",
                            email: "test2@example.com",
                            role: "USER",
                            profileImageUrl: `/user-1.jpg`,
                            lastLogin: "2024-05-20T10:15:30.000Z",
                            isActive: true,
                            createdAt: "2023-12-10T14:13:21.000Z",
                            updatedAt: "2023-12-10T14:13:21.000Z",
                            deletedAt: null
                        },
                        {
                            id: "f6e35ad0-4543-43ea-9bb0-0fc40895942c",
                            username: "spyros2",
                            password: "$2a$10$mCJpgnG3Vd6NsIqCxK2qIO0Haruh.LImQvWPtVLtU1ecS1whrAuEu",
                            email: "test3@example.com",
                            role: "USER",
                            profileImageUrl: `/user-1.jpg`,
                            lastLogin: "2024-05-20T10:15:30.000Z",
                            isActive: true,
                            createdAt: "2023-12-10T14:13:21.000Z",
                            updatedAt: "2023-12-10T14:13:21.000Z",
                            deletedAt: null
                        },
                        {
                            id: "f6e35ad0-4543-43ea-9bb0-0fc40895942c",
                            username: "spyros2",
                            password: "$2a$10$mCJpgnG3Vd6NsIqCxK2qIO0Haruh.LImQvWPtVLtU1ecS1whrAuEu",
                            email: "test4@example.com",
                            role: "USER",
                            profileImageUrl: `/user-1.jpg`,
                            lastLogin: "2024-05-20T10:15:30.000Z",
                            isActive: true,
                            createdAt: "2023-12-10T14:13:21.000Z",
                            updatedAt: "2023-12-10T14:13:21.000Z",
                            deletedAt: null
                        },
                        {
                            id: "f6e35ad0-4543-43ea-9bb0-0fc40895942c",
                            username: "spyros2",
                            password: "$2a$10$mCJpgnG3Vd6NsIqCxK2qIO0Haruh.LImQvWPtVLtU1ecS1whrAuEu",
                            email: "test5@example.com",
                            role: "USER",
                            profileImageUrl: `/user-1.jpg`,
                            lastLogin: "2024-05-20T10:15:30.000Z",
                            isActive: true,
                            createdAt: "2023-12-10T14:13:21.000Z",
                            updatedAt: "2023-12-10T14:13:21.000Z",
                            deletedAt: null
                        },
                        {
                            id: "f6e35ad0-4543-43ea-9bb0-0fc40895942c",
                            username: "spyros2",
                            password: "$2a$10$mCJpgnG3Vd6NsIqCxK2qIO0Haruh.LImQvWPtVLtU1ecS1whrAuEu",
                            email: "test6@example.com",
                            role: "USER",
                            profileImageUrl: `/user-1.jpg`,
                            lastLogin: "2024-05-20T10:15:30.000Z",
                            isActive: true,
                            createdAt: "2023-12-10T14:13:21.000Z",
                            updatedAt: "2023-12-10T14:13:21.000Z",
                            deletedAt: null
                        },
                        {
                            id: "f6e35ad0-4543-43ea-9bb0-0fc40895942c",
                            username: "spyros2",
                            password: "$2a$10$mCJpgnG3Vd6NsIqCxK2qIO0Haruh.LImQvWPtVLtU1ecS1whrAuEu",
                            email: "test7@example.com",
                            role: "USER",
                            profileImageUrl: `/user-1.jpg`,
                            lastLogin: "2024-05-20T10:15:30.000Z",
                            isActive: true,
                            createdAt: "2023-12-10T14:13:21.000Z",
                            updatedAt: "2023-12-10T14:13:21.000Z",
                            deletedAt: null
                        }
                    ]
                }];
        }
        return [401, {
            message: "Unauthenticated"
        }]
    })

    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/dentists`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {
            return [200,
                {
                    dentistsList: [
                        {
                            id: "1",
                            firstName: "Emily",
                            lastName: "Carter",
                            profileImageUrl: `/user-1.jpg`,
                            specialization: "General Dentistry",
                            experienceYears: 8,
                            bio: "Experienced in preventive and cosmetic dentistry.",
                        }
                    ]
                }];
        }
        return [401, {
            message: "Unauthenticated"
        }]
    })
    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/dentists/1`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {

            return [200,
                {
                    id: "1",
                    firstName: "Emily",
                    lastName: "Carter",
                    specialization: "General Dentistry",
                    experienceYears: 8,
                    bio: "Experienced in preventive and cosmetic dentistry.",
                }];
        }

        return [401, {
            message: "Unauthenticated"
        }]
    })
    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/appointments`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {
            return [200,
                {
                    appointmentsList: [
                        {
                            id: "1",
                            title: "John Doe - Cleaning",
                            start: "2025-12-04T08:00",
                            color: "green",
                            patientId: "1",
                            dentistId: "1",
                            serviceId: "1",
                            durationMinutes: 30,
                            status: "confirmed",
                            reminderStatus: "NOT SENT",
                            notes: "Prefers fluoride",
                            preparation: ""
                        },
                        {
                            id: "2",
                            title: "John Doe - Deep Cleaning",
                            start: "2025-12-05T11:00",
                            color: "red",
                            patientId: "1",
                            dentistId: "1",
                            serviceId: "1",
                            durationMinutes: 60,
                            status: "confirmed",
                            reminderStatus: "NOT SENT",
                            notes: "Prefers fluoride",
                            preparation: ""
                        },

                    ]
                }];
        }
        return [401, {
            message: "Unauthenticated"
        }]
    })
    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/services`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {
            return [200,
                {
                    servicesList: [
                        {
                            id: 1,
                            code: "CLEAN_BASIC",                  // internal code / for billing
                            name: "Basic Teeth Cleaning",
                            description: "Standard cleaning and checkup.",
                            category: "PREVENTIVE",               // e.g. PREVENTIVE, RESTORATIVE, COSMETIC
                            durationMinutes: 30,
                            basePrice: 50.0,
                            icon: "mdi-toothbrush",
                            createdAt: "2023-11-25T00:33:48.000Z",
                            updatedAt: "2023-11-25T00:33:48.000Z"
                        },
                        {
                            id: 2,
                            code: "CLEAN_DEEP",
                            name: "Deep Cleaning (Scaling & Root Planing)",
                            description: "Comprehensive cleaning below the gum line to treat gum disease.",
                            category: "PREVENTIVE",
                            durationMinutes: 60,
                            basePrice: 120.0,
                            icon: "mdi-toothbrush-electric",
                            createdAt: "2023-11-25T00:35:12.000Z",
                            updatedAt: "2023-11-25T00:35:12.000Z"
                        },
                        {
                            id: 3,
                            code: "FILL_COMPOSITE",
                            name: "Composite Filling",
                            description: "Tooth-colored filling used to restore decayed or damaged teeth.",
                            category: "RESTORATIVE",
                            durationMinutes: 45,
                            basePrice: 90.0,
                            icon: "mdi-tooth-outline",
                            createdAt: "2023-11-25T00:36:40.000Z",
                            updatedAt: "2023-11-25T00:36:40.000Z"
                        },
                        {
                            id: 4,
                            code: "ROOT_CANAL",
                            name: "Root Canal Therapy",
                            description: "Treatment to remove infected pulp and save a damaged tooth.",
                            category: "RESTORATIVE",
                            durationMinutes: 90,
                            basePrice: 250.0,
                            icon: "mdi-tooth-crack",
                            createdAt: "2023-11-25T00:37:58.000Z",
                            updatedAt: "2023-11-25T00:37:58.000Z"
                        },
                        {
                            id: 5,
                            code: "CROWN_CERAMIC",
                            name: "Ceramic Crown Placement",
                            description: "Custom ceramic crown to restore strength and appearance of a damaged tooth.",
                            category: "RESTORATIVE",
                            durationMinutes: 75,
                            basePrice: 400.0,
                            icon: "mdi-crown",
                            createdAt: "2023-11-25T00:39:05.000Z",
                            updatedAt: "2023-11-25T00:39:05.000Z"
                        },
                        {
                            id: 6,
                            code: "WHITENING",
                            name: "Teeth Whitening",
                            description: "Professional whitening treatment to brighten teeth by several shades.",
                            category: "COSMETIC",
                            durationMinutes: 45,
                            basePrice: 150.0,
                            icon: "mdi-tooth-brush-outline",
                            createdAt: "2023-11-25T00:40:30.000Z",
                            updatedAt: "2023-11-25T00:40:30.000Z"
                        },
                        {
                            id: 7,
                            code: "VENEERS",
                            name: "Porcelain Veneers",
                            description: "Thin ceramic shells placed on front teeth to improve appearance and alignment.",
                            category: "COSMETIC",
                            durationMinutes: 90,
                            basePrice: 600.0,
                            icon: "mdi-tooth",
                            createdAt: "2023-11-25T00:41:45.000Z",
                            updatedAt: "2023-11-25T00:41:45.000Z"
                        },
                        {
                            id: 8,
                            code: "EXTRACTION_SIMPLE",
                            name: "Simple Tooth Extraction",
                            description: "Removal of a tooth that is visible above the gum line.",
                            category: "SURGICAL",
                            durationMinutes: 30,
                            basePrice: 100.0,
                            icon: "mdi-tooth-remove-outline",
                            createdAt: "2023-11-25T00:42:57.000Z",
                            updatedAt: "2023-11-25T00:42:57.000Z"
                        },
                        {
                            id: 9,
                            code: "EXTRACTION_WISDOM",
                            name: "Wisdom Tooth Extraction",
                            description: "Surgical removal of impacted or partially erupted wisdom teeth.",
                            category: "SURGICAL",
                            durationMinutes: 75,
                            basePrice: 250.0,
                            icon: "mdi-tooth-remove",
                            createdAt: "2023-11-25T00:44:11.000Z",
                            updatedAt: "2023-11-25T00:44:11.000Z"
                        },
                        {
                            id: 10,
                            code: "XRAY_FULL",
                            name: "Full Dental X-Ray",
                            description: "Panoramic X-ray imaging to examine overall oral health and detect hidden issues.",
                            category: "DIAGNOSTIC",
                            durationMinutes: 15,
                            basePrice: 40.0,
                            icon: "mdi-radiology-box",
                            createdAt: "2023-11-25T00:45:33.000Z",
                            updatedAt: "2023-11-25T00:45:33.000Z"
                        }
                    ]
                }];
        }
        return [401, {
            message: "Unauthenticated"
        }]
    })
    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/notifications`).reply(config => {
        return [200,
            {
                notificationsList: [
                    {
                        category: "chat",
                        participantA: "user1",
                        participantB: "user2",
                        timestamp: "2024-05-23T13:27:35.093Z",
                        status: "active"
                    },
                    {
                        category: "chat",
                        participantA: "user2",
                        participantB: "user3",
                        timestamp: "2024-05-23T14:27:35.093Z",
                        status: "inactive"
                    },
                    {
                        category: "appointment",
                        patient: "johnDoe",
                        doctor: "dLongJohn",
                        timestamp: "2024-05-23T15:27:35.093Z",
                        status: "active"
                    },


                ]
            }];

        if (config.headers['Authorization'] === `Bearer ${window.localStorage.getItem("auth")}` && config.headers['Accept'] === 'application/json') {
            return [200,
                {
                    notificationsList: [
                        {
                            category: "chat",
                            participantA: "user1",
                            participantB: "user2",
                            timestamp: "2024-05-23T13:27:35.093Z",
                            status: "active"
                        },
                        {
                            category: "chat",
                            participantA: "user2",
                            participantB: "user3",
                            timestamp: "2024-05-23T14:27:35.093Z",
                            status: "inactive"
                        },
                        {
                            category: "appointment",
                            patient: "johnDoe",
                            doctor: "dLongJohn",
                            timestamp: "2024-05-23T15:27:35.093Z",
                            status: "active"
                        },


                    ]
                }];
        }
        return [401, {
            message: "Unauthenticated"
        }]
    })

    const binaryData = new Uint8Array([
        0xFF, 0xD8, 0xFF, 0xE0, 0x00, 0x10, 0x4A, 0x46, 0x49, 0x46, 0x00, 0x01, 0x01, 0x01, 0x00, 0x48,
        0x00, 0x48, 0x00, 0x00, 0xFF, 0xDB, 0x00, 0x43, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
        0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF,
        0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xC0, 0x00, 0x0B, 0x08, 0x00, 0x01, 0x00, 0x01,
        0x01, 0x01, 0x11, 0x00, 0xFF, 0xC4, 0x00, 0x14, 0x00, 0x01, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
        0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0xFF, 0xDA, 0x00, 0x08, 0x01, 0x01, 0x00, 0x00, 0x3F, 0x00,
        0xD2, 0xCF, 0x20, 0xFF, 0xD9,
    ]);

    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/patients/1/xray`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}`) {
            return [200, ["http://localhost:5173/xray.png",
                "http://localhost:5173/dental_dentist.png"
            ]];
        }

        return [401, {
            message: "Unauthenticated"
        }]
    })

    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/patients/1`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {

            return [200,
                {
                    firstName: "John",
                    middleName: "Stewart",
                    lastName: "Doe",
                    dob: "01/01/1821",
                    gender: "male",
                    address: "Palermou 21, Athens, Greece",
                    phoneNumber: "210123456",
                    email: "john@example.com",
                    emergencyContact: "Jane Doe, sister"
                }];
        }

        return [401, {
            message: "Unauthenticated"
        }]
    })

    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/patients/1/medical`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {

            return [200,
                {
                    AMKA: "123456789",
                    allergies: ["fish", "eggs", "nuts"],
                    bloodType: "A+",
                    primaryDoctor: "DoctorA",
                    knownMedicalConditions: ["asthma", "heart disease", "stroke"],
                    medications: ["Amoxicillin", "Adderall", "Ativan"],
                    familyMedicationHistory: [],
                    lastUpdatedOn: "12/01/1821",
                    patientId: 1
                }];
        }

        return [401, {
            message: "Unauthenticated"
        }]
    })

    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/patients/1/oralCheck`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {

            return [200,
                {
                    occlusi: "yes",
                    torusPalatinus: "no",
                    torusMandibularis: "no",
                    palatum: "yes",
                    diasterma: ["01", "02", "03"],
                    anomalousTeeth: "yes",
                    lastUpdatedOn: "12/01/1821",
                    patientId: 1
                }];
        }

        return [401, {
            message: "Unauthenticated"
        }]
    })

    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/patients/1/oralHygieneHabits`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {

            return [200,
                {
                    frequencyOfSugaryFoodsAndDrinks: "9-10",
                    latestDentalVisit: "01/01/1821",
                    washFrequency: "2",
                    useMouthwash: "yes",
                    smokingStatus: "10",
                    useDentalFloss: "yes",
                    lastUpdatedOn: "12/01/1821",
                    patientId: 1
                }];
        }

        return [401, {
            message: "Unauthenticated"
        }]
    })

    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/patients/1/medicine`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {

            return [200,
                [
                    {
                        name: "Vitamin C",
                        icon: "CgPill",
                        dangerLevel: "low",
                        details: "Vitamin C, also known as ascorbic acid, is a water-soluble vitamin, known for its antioxidant protection and its action in strengthening the immune system.",
                        dosage: "1",
                        frequency: "2 times (1-0-1)"
                    },
                    {
                        name: "Paracetamol",
                        icon: "CiTablets1",
                        dangerLevel: "medium",
                        details: "Used for pain relief and fever reduction.",
                        dosage: "1",
                        frequency: "2 times (1-0-1)"
                    },
                    {
                        name: "Painkiller",
                        icon: "CiWarning",
                        dangerLevel: "high",
                        details: "Strong pain relief medication; can be addictive and requires a prescription.",
                        dosage: "1",
                        frequency: "2 times (1-0-1)"
                    },
                    // {
                    //     name: "Antibiotics",
                    //     icon: "CiWarning",
                    //     dangerLevel: "high",
                    //     details: "Strong pain relief medication; can be addictive and requires a prescription.",
                    //     dosage: "1",
                    //     frequency: "2 times (1-0-1)"
                    // },

                ]];
        }

        return [401, {
            message: "Unauthenticated"
        }]
    })

    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/patients/1/doctorView`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {

            return [200,
                {
                    medicalDiagnosis: "Ankylosing spondylitis (AS)",
                    descriptionOfTheDiagnosis: "Ankylosing spondylitis (AS) is a type of arthritis that affects the joints in your spine. It usually develops in your sacroiliac joints (where the bottom of your spine joins your pelvis). It causes typical arthritis symptoms like pain and stiffness, but it can also cause digestive symptoms, rashes and weight loss.",
                    medicalAdvice: "A cyst is a pathological cavity lined by epithelium containing fluid or semi-fluid contents. Cysts are common in the jaw bones as these bones contain epithelium left after tooth development. Cysts of the jaw can be classified into two main groups: odontogenic cysts (cysts lined by odontogenic epithelium, i.e. epithelium derived from the dental lamina) and non-odontogenic cysts (cysts lined by other types of epithelium)."
                }];
        }

        return [401, {
            message: "Unauthenticated"
        }]
    })

    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/patients/1/billing`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {

            return [200,
                {
                    billingAddress: "11th Street, Athens Greece",
                    contactInformation: "+30 1234567896",
                    invoiceNumber: "#12345767",
                    servicesProvided: "Teeth Cleaning",
                    preferedPaymentMethod: "Credit card"
                }];
        }

        return [401, {
            message: "Unauthenticated"
        }]
    })

    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/patients/1/XRAY`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {

            console.log(new Blob([binaryData]));
            // return [200, new Blob([binaryData], { type: 'image/jpeg' })];
            return [200, ["https://graftondentalcare.com/wp-content/uploads/2018/01/The-Science-of-Modern-Dental-X-Rays.jpg.webp",
                "https://static.wixstatic.com/media/597e76_8e77fcc161b7496a827f432d6b797efa~mv2.jpg/v1/crop/x_199,y_0,w_601,h_346/fill/w_721,h_415,al_c,lg_1,q_80,enc_auto/Dental%20Radiography_%203D%20Scan%20%26%20X-rays%20_%20ConfiDent%20Palm%20Dentist.jpg"
            ]];
        }

        return [401, {
            message: "Unauthenticated"
        }]
    })

    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/patients/2`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {

            return [200,
                {
                    firstName: "John",
                    middleName: "Stewart",
                    lastName: "Doe",
                    dob: "01/01/1821",
                    gender: "male",
                    address: "Palermou 21, Athens, Greece",
                    phoneNumber: "210123456",
                    email: "john@example.com",
                    emergencyContact: "Jane Doe, sister"
                }];
        }

        return [401, {
            message: "Unauthenticated"
        }]
    })

    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/patients/2/medical`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {

            return [200,
                {
                    AMKA: "123456789",
                    allergies: ["fish", "eggs", "nuts"],
                    bloodType: "A+",
                    primaryDoctor: "DoctorA",
                    knownMedicalConditions: ["asthma", "heart disease", "stroke"],
                    medications: ["Amoxicillin", "Adderall", "Ativan"],
                    familyMedicationHistory: [],
                    lastUpdatedOn: "12/01/1821",
                    patientId: 1
                }];
        }

        return [401, {
            message: "Unauthenticated"
        }]
    })

    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/patients/2/oralCheck`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {

            return [200,
                {
                    occlusi: "yes",
                    torusPalatinus: "no",
                    torusMandibularis: "no",
                    palatum: "yes",
                    diasterma: ["01", "02", "03"],
                    anomalousTeeth: "yes",
                    lastUpdatedOn: "12/01/1821",
                    patientId: 1
                }];
        }

        return [401, {
            message: "Unauthenticated"
        }]
    })

    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/patients/2/oralHygieneHabits`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {

            return [200,
                {
                    frequencyOfSugaryFoodsAndDrinks: "9-10",
                    latestDentalVisit: "01/01/1821",
                    washFrequency: "2",
                    useMouthwash: "yes",
                    smokingStatus: "10",
                    useDentalFloss: "yes",
                    lastUpdatedOn: "12/01/1821",
                    patientId: 1
                }];
        }

        return [401, {
            message: "Unauthenticated"
        }]
    })

    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/patients/2/medicine`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {

            return [200,
                [
                    {
                        name: "Vitamin C",
                        dosage: "1",
                        frequency: "2"
                    },
                    {
                        name: "Antimalarial",
                        dosage: "1",
                        frequency: "2"
                    },
                    {
                        name: "Antibiotics",
                        dosage: "1",
                        frequency: "2"
                    },


                ]];
        }

        return [401, {
            message: "Unauthenticated"
        }]
    })

    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/patients/2/doctorView`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {

            return [200,
                {
                    medicalDiagnosis: "Ankylosing spondylitis (AS)",
                    descriptionOfTheDiagnosis: "Ankylosing spondylitis (AS) is a type of arthritis that affects the joints in your spine. It usually develops in your sacroiliac joints (where the bottom of your spine joins your pelvis). It causes typical arthritis symptoms like pain and stiffness, but it can also cause digestive symptoms, rashes and weight loss.",
                    medicalAdvice: "A cyst is a pathological cavity lined by epithelium containing fluid or semi-fluid contents. Cysts are common in the jaw bones as these bones contain epithelium left after tooth development. Cysts of the jaw can be classified into two main groups: odontogenic cysts (cysts lined by odontogenic epithelium, i.e. epithelium derived from the dental lamina) and non-odontogenic cysts (cysts lined by other types of epithelium)."
                }];
        }

        return [401, {
            message: "Unauthenticated"
        }]
    })

    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/patients/2/billing`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {

            return [200,
                {
                    billingAddress: "11th Street, Athens Greece",
                    contactInformation: "+30 1234567896",
                    invoiceNumber: "#12345767",
                    servicesProvided: "Teeth Cleaning",
                    preferedPaymentMethod: "Credit card"
                }];
        }

        return [401, {
            message: "Unauthenticated"
        }]
    })

    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/patients/2/XRAY`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {

            console.log(new Blob([binaryData]));
            // return [200, new Blob([binaryData], { type: 'image/jpeg' })];
            return [200, ["https://graftondentalcare.com/wp-content/uploads/2018/01/The-Science-of-Modern-Dental-X-Rays.jpg.webp",
                "https://static.wixstatic.com/media/597e76_8e77fcc161b7496a827f432d6b797efa~mv2.jpg/v1/crop/x_199,y_0,w_601,h_346/fill/w_721,h_415,al_c,lg_1,q_80,enc_auto/Dental%20Radiography_%203D%20Scan%20%26%20X-rays%20_%20ConfiDent%20Palm%20Dentist.jpg"
            ]];
        }

        return [401, {
            message: "Unauthenticated"
        }]
    })

    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/patients/1/notes`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {
            return [200,
                {
                    notesList: [
                        {
                            "id": 1,
                            "patientId": 1,
                            "content": "Regular checkup. Patient reports slight sensitivity in the upper right molar. Cleaned and scaled. No cavities found.",
                            "doctorName": "Dr. Smith",
                            "createdAt": "2024-05-20T10:15:30.000Z",
                        },
                        {
                            "id": 2,
                            "patientId": 1,
                            "content": "Regular checkup. Patient reports slight sensitivity in the upper right molar. Cleaned and scaled. No cavities found.",
                            "doctorName": "Dr. Smith",
                            "createdAt": "2024-05-20T10:15:30.000Z",
                        },
                        
                    ]
                }];
        }
        return [401, {
            message: "Unauthenticated"
        }]
    })

    // ================================================================================================================================================== //

    mock.onPost(`${import.meta.env.VITE_APP_SERVICE_URL}/patients`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {
            const requestData = JSON.parse(config.data);

            return [200,
                {
                    message: "Record Successfully saved",
                    patient: {
                        id: Math.floor(Math.random() * 100),
                        firstName: requestData.firstName,
                        middleName: requestData.middleName,
                        lastName: requestData.lastName,
                        dob: requestData.dob,
                        gender: requestData.gender,
                        address: requestData.address,
                        phoneNumber: requestData.phoneNumber,
                        email: requestData.email
                    }
                }];
        }
        return [401, {
            message: "Unauthenticated"
        }]
    })

    mock.onPost(`${import.meta.env.VITE_APP_SERVICE_URL}/cases/123/images`).reply(config => {

        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Content-Type'] === 'multipart/form-data') {
            return [200,
                {
                    message: "Clinical records successfully saved"
                }];
        }
        return [401, {
            message: "Unauthenticated"
        }]
    })

    // mock.onDelete().reply(config => {
    //     if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {

    //         if (config.url.startsWith(`${import.meta.env.VITE_APP_SERVICE_URL}patients/`)) {

    //             const patientId = config.url.split('/').pop();

    //             return [200, {
    //                 message: `Patient with ID ${patientId} deleted successfully`,
    //             }];
    //         }
    //         return [401, {
    //             message: "Unauthenticated"
    //         }]
    //     }

    // });

    mock.onDelete(new RegExp(`^${import.meta.env.VITE_APP_SERVICE_URL}/patients/`)).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {
            const patientId = config.url.split('/').pop();
            return [200, {
                        message: `Patient with ID ${patientId} deleted successfully`,
                    }];
        } else {
            return [401, {
                            message: "Unauthenticated"
                        }]
        }

    });
    mock.onPut().reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {
            if (config.url.startsWith(`${import.meta.env.VITE_APP_SERVICE_URL}/patients/`)) {

                const patientId = config.url.split('/').pop();

                return [200, {
                    message: `Patient with ID ${patientId} deleted successfully`,
                }];
            }
            return [404];
        }
        return [401, {
            message: "Unauthenticated"
        }]
    });

    // mock.onPost(`${import.meta.env.VITE_APP_SERVICE_URL}/auth/login`).reply(config => {
    //     console.log(config);
    //     const requestData = JSON.parse(config.data);
    //     console.log(requestData);

    //     if (requestData.usernameOrEmail === "s@gm.com" && requestData.password === "1234567" && !requestData.rememberMe) {
    //         return [200, {
    //             token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6IkpvaG5Eb2UiLCJyb2xlIjoiYWRtaW4iLCJleHBpcmF0aW9uIjoiMjAyNC0wNS0xOVQxMjowMDowMFoifQ.-AkslqqyEVRsIyn4EfXwXVcOjL4E4-RIGWYPNrAVnQ0'
    //         }
    //         ]
    //     } else if (requestData.usernameOrEmail === "s@gm.com" && requestData.password === "1234567" && requestData.rememberMe) {
    //         return [200, {
    //             token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6IkpvaG5Eb2UiLCJyb2xlIjoiYWRtaW4iLCJleHBpcmF0aW9uIjoiMjAyNS0wNS0xOVQxMjowMDowMFoifQ.L5nLbv7KQNybHP2PoDiFh2hVI5h_6qpa2TDFl7UL_D0'
    //         }
    //         ]
    //     } else if (requestData.usernameOrEmail === "user" && requestData.password === "pass" && !requestData.rememberMe) {
    //         return [200, {
    //             token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6IkpvaG5Eb2UiLCJyb2xlIjoiYWRtaW4iLCJleHBpcmF0aW9uIjoiMjAyNS0wNS0xOVQxMjowMDowMFoifQ.L5nLbv7KQNybHP2PoDiFh2hVI5h_6qpa2TDFl7UL_D0'
    //         }
    //         ]
    //     }

    //     return [401, {
    //         message: "Invalid Credentials"
    //     }]
    // })
    mock.onPost(`${import.meta.env.VITE_APP_SERVICE_URL}/auth/login`).reply(config => {
        return [200, {
            user: {
                fullName: "Spyros Kanellopoulos",
                role: "ADMIN"
            },
            access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6IkpvaG5Eb2UiLCJyb2xlIjoiYWRtaW4iLCJleHBpcmF0aW9uIjoiMjAyNS0wNS0xOVQxMjowMDowMFoifQ.L5nLbv7KQNybHP2PoDiFh2hVI5h_6qpa2TDFl7UL_D0"
        }]
    })

    mock.onPost(`${import.meta.env.VITE_APP_SERVICE_URL}/upload`).reply(config => {
        const requestData = config.data;
        console.log("requestData ", requestData);
        console.log(requestData);

        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Content-Type'] === 'multipart/form-data' && config.headers['Accept'] === 'application/json') {
            const formData = new FormData();
            config.data.forEach((value, key) => {
                formData.append(key, value);
            });

            if (!formData.get('image')) {
                return [400, { message: 'No file uploaded.' }];
            }
            return [200, { message: "Image Successfully saved" }];
        }
        return [401, {
            message: "Unauthenticated"
        }]
    })

    mock.onPost(`${import.meta.env.VITE_APP_SERVICE_URL}/uploadXRay`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Content-Type'] === 'multipart/form-data' && config.headers['Accept'] === 'application/json') {

            const files = Array.from(config.data.entries());
            const filenames = files.map(item => item[1]).map(item => item.name);

            return [200, { message: 'Upload complete', filename: filenames }];
        }

        return [401, {
            message: "Unauthenticated"
        }]
    })

}