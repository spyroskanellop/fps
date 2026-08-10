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
    console.log(mock);

    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/users`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {
            return [200,
                {
                    usersList: [
                        {
                            id: "12345",
                            username: "ggiannopoulos",
                            firstName: "giannis",
                            lastName: "giannopoulos",
                            password: "$2a$10$Ss6D8D5bgD3Hpbwfc.bNruT4c8fiCT5XlVB3y54DV2iS089z3d7Pq",
                            email: "test@example.com",
                            contactNumber: "+1 555-4321",
                            role: "ADMIN",
                            avatar_img: `/tengen_avatar.png`,
                            lastLogin: "2024-05-20T10:15:30.000Z",
                            isActive: true,
                            createdAt: "2023-11-25T00:33:48.000Z",
                            updatedAt: "2023-11-25T00:33:48.000Z",
                            deletedAt: null
                        },
                        {
                            id: "67890",
                            username: "kkostopoulos",
                            firstName: "kostas",
                            lastName: "kostopoulos",
                            password: "$2a$10$mCJpgnG3Vd6NsIqCxK2qIO0Haruh.LImQvWPtVLtU1ecS1whrAuEu",
                            email: "test2@example.com",
                            role: "USER",
                            avatar_img: `/user_1.jpg`,
                            lastLogin: "2024-05-20T10:15:30.000Z",
                            isActive: true,
                            createdAt: "2023-12-10T14:13:21.000Z",
                            updatedAt: "2023-12-10T14:13:21.000Z",
                            deletedAt: null
                        },
                        {
                            id: "11111",
                            username: "aandreopoulos",
                            firstName: "andreas",
                            lastName: "andreopoulos",
                            password: "$2a$10$mCJpgnG3Vd6NsIqCxK2qIO0Haruh.LImQvWPtVLtU1ecS1whrAuEu",
                            email: "test3@example.com",
                            role: "USER",
                            avatar_img: '',
                            lastLogin: "2024-05-20T10:15:30.000Z",
                            isActive: true,
                            createdAt: "2023-12-10T14:13:21.000Z",
                            updatedAt: "2023-12-10T14:13:21.000Z",
                            deletedAt: null
                        },
                        {
                            id: "22222",
                            username: "ggiannopoulos",
                            firstName: "giannis",
                            lastName: "giannopoulos",
                            password: "$2a$10$mCJpgnG3Vd6NsIqCxK2qIO0Haruh.LImQvWPtVLtU1ecS1whrAuEu",
                            email: "test4@example.com",
                            role: "USER",
                            avatar_img: `/user_1.jpg`,
                            lastLogin: "2024-05-20T10:15:30.000Z",
                            isActive: true,
                            createdAt: "2023-12-10T14:13:21.000Z",
                            updatedAt: "2023-12-10T14:13:21.000Z",
                            deletedAt: null
                        },
                        {
                            id: "33333",
                            username: "aandreopoulos",
                            firstName: "andreas",
                            lastName: "andreopoulos",
                            password: "$2a$10$mCJpgnG3Vd6NsIqCxK2qIO0Haruh.LImQvWPtVLtU1ecS1whrAuEu",
                            email: "test5@example.com",
                            role: "USER",
                            avatar_img: `/user_1.jpg`,
                            lastLogin: "2024-05-20T10:15:30.000Z",
                            isActive: true,
                            createdAt: "2023-12-10T14:13:21.000Z",
                            updatedAt: "2023-12-10T14:13:21.000Z",
                            deletedAt: null
                        },
                        {
                            id: "44444",
                            username: "aandreopoulos",
                            firstName: "andreas",
                            lastName: "andreopoulos",
                            password: "$2a$10$mCJpgnG3Vd6NsIqCxK2qIO0Haruh.LImQvWPtVLtU1ecS1whrAuEu",
                            email: "test6@example.com",
                            role: "USER",
                            avatar_img: `/user_1.jpg`,
                            lastLogin: "2024-05-20T10:15:30.000Z",
                            isActive: true,
                            createdAt: "2023-12-10T14:13:21.000Z",
                            updatedAt: "2023-12-10T14:13:21.000Z",
                            deletedAt: null
                        },
                        {
                            id: "55555",
                            username: "ggiannopoulos",
                            firstName: "giannis",
                            lastName: "giannopoulos",
                            password: "$2a$10$mCJpgnG3Vd6NsIqCxK2qIO0Haruh.LImQvWPtVLtU1ecS1whrAuEu",
                            email: "test7@example.com",
                            role: "USER",
                            avatar_img: `/user_1.jpg`,
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
    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/orders`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {
            return [200,
                {
                    ordersList: [
                        {
                            id: "12345123",
                            cust_name: "Λαμπρόπουλος",
                            product_name: "Γούνες",
                            color: "Μαύρο",
                            qty: "12",
                            current_stage: "PREPARING",
                            payment_status: "PAID",
                            final_amount: "103345",
                            balance: "0000",
                            priority: "high",
                            dueDate: "2024-11-25",
                            createdAt: "2026-11-25T00:33:48.000Z",
                            updatedAt: "2026-11-25T00:33:48.000Z",
                            deliveredAt: "2026-12-01",
                            createdBy: "aloubardis",
                            updatedBy: "aloubardis",
                            deletedAt: null
                        },
                        {
                            id: "12345",
                            cust_name: "Λαμπρόπουλος",
                            product_name: "Γούνες",
                            color: "Μαύρο",
                            qty: "12",
                            current_stage: "SEWING",
                            payment_status: "PAID",
                            final_amount: "103345",
                            balance: "0000",
                            priority: "high",
                            dueDate: "2026-05-25",
                            createdAt: "2026-11-25T00:33:48.000Z",
                            updatedAt: "2026-11-25T00:33:48.000Z",
                            deliveredAt: "2026-12-01",
                            createdBy: "aloubardis",
                            updatedBy: "aloubardis",
                            deletedAt: null
                        },
                        {
                            id: "67890",
                            cust_name: "Κωστόπουλος",
                            product_name: "Φόρμες",
                            color: "Μαύρο",
                            qty: "11",
                            current_stage: "PREPARING",
                            payment_status: "PENDING",
                            final_amount: "123345",
                            balance: "12345",
                            priority: "medium",
                            dueDate: "2026-03-05",
                            createdAt: "2026-11-25T00:33:48.000Z",
                            updatedAt: "2026-11-25T00:33:48.000Z",
                            deliveredAt: "2026-12-01",
                            createdBy: "aloubardis",
                            updatedBy: "aloubardis",
                            deletedAt: null
                        },
                        {
                            id: "14578",
                            cust_name: "Λαμπρόπουλος",
                            product_name: "Γούνες",
                            color: "Μαύρο",
                            qty: "12",
                            current_stage: "SEWING",
                            payment_status: "PAID",
                            final_amount: "1245",
                            balance: "0000",
                            priority: "medium",
                            dueDate: "2026-04-25",
                            createdAt: "2026-11-25T00:33:48.000Z",
                            updatedAt: "2026-11-25T00:33:48.000Z",
                            deliveredAt: "2026-12-01",
                            createdBy: "aloubardis",
                            updatedBy: "aloubardis",
                            deletedAt: null
                        },
                        {
                            id: "67890",
                            cust_name: "Κωστόπουλος",
                            product_name: "Φόρμες",
                            color: "Μαύρο",
                            qty: "11",
                            current_stage: "CUTTING",
                            payment_status: "PENDING",
                            final_amount: "14590",
                            balance: "12345",
                            priority: "high",
                            dueDate: "2026-08-11",
                            createdAt: "2026-11-25T00:33:48.000Z",
                            updatedAt: "2026-11-25T00:33:48.000Z",
                            deliveredAt: "2026-12-01",
                            createdBy: "aloubardis",
                            updatedBy: "aloubardis",
                            deletedAt: null
                        },
                        {
                            id: "67891",
                            cust_name: "Κωστόπουλος",
                            product_name: "Φόρμες",
                            color: "Μαύρο",
                            qty: "11",
                            current_stage: "DELIVERING",
                            payment_status: "PENDING",
                            final_amount: "1245",
                            balance: "0000",
                            priority: "medium",
                            dueDate: "2026-05-15",
                            createdAt: "2026-11-25T00:33:48.000Z",
                            updatedAt: "2026-11-25T00:33:48.000Z",
                            deliveredAt: "2026-12-01",
                            createdBy: "aloubardis",
                            updatedBy: "aloubardis",
                            deletedAt: null
                        },
                        {
                            id: "67892",
                            cust_name: "Κωστόπουλος",
                            product_name: "Φόρμες",
                            color: "Μαύρο",
                            qty: "11",
                            current_stage: "DELIVERING",
                            payment_status: "PENDING",
                            final_amount: "1245",
                            balance: "0000",
                            priority: "high",
                            dueDate: "2026-11-25",
                            createdAt: "2026-11-25T00:33:48.000Z",
                            updatedAt: "2026-11-25T00:33:48.000Z",
                            deliveredAt: "2026-12-01",
                            createdBy: "aloubardis",
                            updatedBy: "aloubardis",
                            deletedAt: null
                        },
                        {
                            id: "67893",
                            cust_name: "Κωστόπουλος",
                            product_name: "Φόρμες",
                            color: "Μαύρο",
                            qty: "11",
                            current_stage: "DELIVERING",
                            payment_status: "PENDING",
                            final_amount: "1245",
                            balance: "0000",
                            priority: "medium",
                            dueDate: "2026-11-25",
                            createdAt: "2026-11-25T00:33:48.000Z",
                            updatedAt: "2026-11-25T00:33:48.000Z",
                            deliveredAt: "2026-12-01",
                            createdBy: "aloubardis",
                            updatedBy: "aloubardis",
                            deletedAt: null
                        },
                        {
                            id: "67894",
                            cust_name: "Κωστόπουλος",
                            product_name: "Φόρμες",
                            color: "Μαύρο",
                            qty: "11",
                            current_stage: "DELIVERING",
                            payment_status: "PENDING",
                            final_amount: "1245",
                            balance: "0000",
                            priority: "high",
                            dueDate: "2026-11-25",
                            createdAt: "2026-11-25T00:33:48.000Z",
                            updatedAt: "2026-11-25T00:33:48.000Z",
                            deliveredAt: "2026-12-01",
                            createdBy: "aloubardis",
                            updatedBy: "aloubardis",
                            deletedAt: null
                        },
                        {
                            id: "14579",
                            cust_name: "Λαμπρόπουλος",
                            product_name: "Γούνες",
                            color: "Μαύρο",
                            qty: "12",
                            current_stage: "SEWING",
                            payment_status: "PAID",
                            final_amount: "1245",
                            balance: "0000",
                            priority: "medium",
                            dueDate: "2026-11-25",
                            createdAt: "2026-11-25T00:33:48.000Z",
                            updatedAt: "2026-11-25T00:33:48.000Z",
                            deliveredAt: "2026-12-01",
                            createdBy: "aloubardis",
                            updatedBy: "aloubardis",
                            deletedAt: null
                        },
                        {
                            id: "14580",
                            cust_name: "Λαμπρόπουλος",
                            product_name: "Γούνες",
                            color: "Μαύρο",
                            qty: "12",
                            current_stage: "SEWING",
                            payment_status: "PAID",
                            final_amount: "1245",
                            balance: "0000",
                            priority: "high",
                            dueDate: "2026-11-25",
                            createdAt: "2026-11-25T00:33:48.000Z",
                            updatedAt: "2026-11-25T00:33:48.000Z",
                            deliveredAt: "2026-12-01",
                            createdBy: "aloubardis",
                            updatedBy: "aloubardis",
                            deletedAt: null
                        },
                        {
                            id: "14581",
                            cust_name: "Λαμπρόπουλος",
                            product_name: "Γούνες",
                            color: "Μαύρο",
                            qty: "12",
                            current_stage: "SEWING",
                            payment_status: "PAID",
                            final_amount: "1245",
                            balance: "0000",
                            priority: "high",
                            dueDate: "2026-11-25",
                            createdAt: "2026-11-25T00:33:48.000Z",
                            updatedAt: "2026-11-25T00:33:48.000Z",
                            deliveredAt: "2026-12-01",
                            createdBy: "aloubardis",
                            updatedBy: "aloubardis",
                            deletedAt: null
                        },
                        {
                            id: "14582",
                            cust_name: "Λαμπρόπουλος",
                            product_name: "Γούνες",
                            color: "Μαύρο",
                            qty: "12",
                            current_stage: "QUALITY_CONTROL",
                            payment_status: "PAID",
                            final_amount: "1245",
                            balance: "0000",
                            priority: "high",
                            dueDate: "2026-11-25",
                            createdAt: "2026-11-25T00:33:48.000Z",
                            updatedAt: "2026-11-25T00:33:48.000Z",
                            deliveredAt: "2026-12-01",
                            createdBy: "aloubardis",
                            updatedBy: "aloubardis",
                            deletedAt: null
                        },
                    ]
                }];
        }
        return [401, {
            message: "Unauthenticated"
        }]
    })
    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/customers`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {
            return [200,
                {
                    customersList: [
                        {
                            id: "1",
                            name: "Λαμπρόπουλος ΑΕ",
                            contact_person: "Λαμπρόπουλος",
                            industry: 'Streetwear',
                            email: "slabro@gmail.com",
                            phone: "+30 698 123 4567",
                            street: "Akadimias 10",
                            city: "Athens",
                            TK: "12345",
                            notes: null,
                            status: 'active',
                            createdAt: "2023-11-25T00:33:48.000Z",
                            updatedAt: "2023-11-25T00:33:48.000Z",
                            deletedAt: null
                        },
                        {
                            id: "2",
                            name: "Happy Stoles",
                            contact_person: "Νικολάου",
                            industry: 'Streetwear',
                            email: "costopoulos@gmail.com",
                            phone: "+30 698 123 4567",
                            street: "Labrinis 40",
                            city: "Athens",
                            TK: "12345",
                            notes: "Σε προσπάθεια επέκτασης",
                            status: 'contract_pending',
                            createdAt: "2023-11-25T00:33:48.000Z",
                            updatedAt: "2023-11-25T00:33:48.000Z",
                            deletedAt: null
                        },
                        {
                            id: "3",
                            name: "Fabrik",
                            contact_person: "Λαμπρόπουλος",
                            industry: 'Streetwear',
                            email: "slabro@gmail.com",
                            phone: "+30 698 123 4567",
                            street: "Akadimias 10",
                            city: "Athens",
                            TK: "12345",
                            notes: null,
                            status: 'inactive',
                            createdAt: "2023-11-25T00:33:48.000Z",
                            updatedAt: "2023-11-25T00:33:48.000Z",
                            deletedAt: null
                        },

                    ]
                }];
        }
        return [401, {
            message: "Unauthenticated"
        }]
    })
    mock.onGet(`${import.meta.env.VITE_APP_SERVICE_URL}/customers/1`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {
            return [200,
                {
                    id: "1",
                    name: "Λαμπρόπουλος",
                    contact_person: "Λαμπρόπουλος",
                    email: "slabro@gmail.com",
                    phone: "+30 698 123 4567",
                    street: "Akadimias 10",
                    city: "Athens",
                    TK: "12345",
                    notes: null,
                    createdAt: "2023-11-25T00:33:48.000Z",
                    updatedAt: "2023-11-25T00:33:48.000Z",
                    deletedAt: null
                }
            ];
        }
        return [401, {
            message: "Unauthenticated"
        }]
    })


    // ================================================================================================================================================== //


    mock.onPost(`${import.meta.env.VITE_APP_SERVICE_URL}/users`).reply(config => {
        if (config.headers['Authorization'] === `Bearer ${JSON.parse(window.localStorage.getItem("auth")).token}` && config.headers['Accept'] === 'application/json') {
            const requestData = JSON.parse(config.data);
            console.log(requestData);

            return [200,
                {
                    message: "Record Successfully saved",
                    user: {
                        id: requestData.uid,
                        firstName: requestData.firstName,
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
    mock.onPost(`${import.meta.env.VITE_APP_SERVICE_URL}/auth/login`).reply(config => {
        return [200, {
            user: {
                fullName: "Spyros Kanellopoulos",
                role: "ADMIN"
            },
            access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJ1c2VybmFtZSI6IkpvaG5Eb2UiLCJyb2xlIjoiYWRtaW4iLCJleHBpcmF0aW9uIjoiMjAyNS0wNS0xOVQxMjowMDowMFoifQ.L5nLbv7KQNybHP2PoDiFh2hVI5h_6qpa2TDFl7UL_D0"
        }]
    })


    // ================================================================================================================================================== //

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


    mock.onAny().reply(config => {
        console.log('UNMATCHED REQUEST')
        console.log('method:', config.method)
        console.log('url:', config.url)

        return [404]
    })
}