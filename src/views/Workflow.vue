<template>
  <v-container>
    <v-row class="header">
      <v-col>
        <span class="text-uppercase">Γραμμη Παραγωγης</span>
        <h1>Έλεγχος Ροών</h1>
      </v-col>

      <v-col class="d-flex align-center justify-end kanban-col">
        <div class="d-block">
          <v-card class="pa-1">
            <v-btn density="comfortable" class="float-right" elevation="0">
              Kanban View
            </v-btn>
          </v-card>

          <div class="d-flex align-end justify-end ga-2 mt-5">
            <v-btn
              class="btn-label"
              @click="filterByPriority('high_priority')"
            >
              High Priority
            </v-btn>

            <v-btn
              class="btn-label"
              @click="filterByPriority('due_today')"
            >
              Due Today
            </v-btn>

            <v-btn
              class="btn-label"
              @click="filterByPriority('due_tomorrow')"
            >
              Due Tomorrow
            </v-btn>

            <v-btn
              class="btn-label"
              @click="filterByPriority('newest')"
            >
              Newest
            </v-btn>

            <v-btn
              class="btn-label"
              @click="filterByPriority('oldest')"
            >
              Oldest Waiting
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row no-gutters class="ga-8 work-container mt-8">
      <v-col
        v-for="column in columns"
        :key="column.name"
        class="work-column"
      >
        <v-row>
          <v-col>
            <div class="d-flex ga-2 align-center">
              <v-icon size="8" :color="column.color">
                mdi-circle
              </v-icon>

              <h3>{{ column.label }}</h3>
            </div>
          </v-col>

          <v-col class="d-flex justify-end">
            <v-btn
              variant="tonal"
              :color="column.color"
              density="compact"
              disabled
            >
              {{ column.items.length }}
            </v-btn>
          </v-col>
        </v-row>

        <VueDraggable
          v-model="column.items"
          group="workflow"
          :animation="200"
          class="drag-list"
          ghost-class="ghost"
          chosen-class="drag-chosen"
          drag-class="dragging"
          @add="onItemAdded($event, column)"
          @update="onItemReordered($event, column)"
        >
          <div
            v-for="card in column.items" :key="card.id">
            <div class="workflow-item my-4" :class="{'cutting-column': column.name.toLowerCase() === 'cutting',}">
              <v-row>
                <v-col>
                  <v-row class="d-flex justify-space-between">
                    <v-col class="d-flex ga-4">
                      <v-chip
                        variant="tonal"
                        color="#64748b"
                        size="x-small"
                        label
                      >
                        #{{ card.id }}
                      </v-chip>

                      <v-chip
                        v-if="getLowerCase(card.priority) === 'high'"
                        variant="tonal"
                        color="#a83836"
                        size="x-small"
                        label
                      >
                        <v-icon class="mt-1">
                          mdi-circle-medium
                        </v-icon>

                        {{ card.priority }} p.
                      </v-chip>

                      <v-chip
                        v-if="getLowerCase(card.priority) === 'medium'"
                        variant="tonal"
                        color="#0369a1"
                        size="x-small"
                        label
                      >
                        <v-icon class="mt-1">
                          mdi-circle-medium
                        </v-icon>

                        {{ card.priority }} p.
                      </v-chip>
                    </v-col>

                    <v-col cols="auto">
                      <v-menu
                        offset-y
                        class="card-menu"
                        :offset="[-8, -12]"
                        location="bottom end"
                        scroll-strategy="close"
                      >
                        <template #activator="{ props }">
                          <v-btn
                            v-bind="props"
                            icon="mdi-dots-vertical"
                            size="medium"
                            color="#94a3b8"
                            variant="plain"
                          />
                        </template>

                        <v-card
                          class="rounded-lg overflow-hidden"
                          max-width="200"
                        >
                          <v-list
                            min-width="200"
                            class="overflow-hidden px-0 pb-1"
                            density="compact"
                          >
                            <v-list-item
                              color="primary"
                              rounded="shaped"
                            >
                              <template #prepend>
                                <v-icon icon="mdi-note-text-outline" />
                              </template>

                              <v-list-item-title class="text-sm">
                                Add note
                              </v-list-item-title>
                            </v-list-item>

                            <v-list-item>
                              <template #prepend>
                                <v-icon icon="mdi-clock-outline" />
                              </template>

                              <v-list-item-title class="text-sm">
                                Put on hold
                              </v-list-item-title>
                            </v-list-item>

                            <v-divider class="mt-2" />

                            <v-list-item>
                              <template #prepend>
                                <v-icon
                                  icon="mdi-eye-arrow-right-outline"
                                />
                              </template>

                              <v-list-item-title class="text-sm">
                                View Details
                              </v-list-item-title>
                            </v-list-item>
                          </v-list>
                        </v-card>
                      </v-menu>
                    </v-col>
                  </v-row>

                  <h4 class="mt-4">
                    {{ card.product_name }}
                  </h4>

                  <p class="mb-4">
                    Customer: {{ card.cust_name }}
                  </p>

                  <v-row class="description d-flex ga-6">
                    <v-col
                      class="d-flex flex-column"
                      cols="auto"
                    >
                      <span>Ποσοτητα</span>
                      <span>{{ card.qty }} Units</span>
                    </v-col>

                    <v-col class="d-flex flex-column align-end">
                      <span>Μεγεθος & Χρωμα</span>
                      <span>{{ card.size }} | {{ card.color }}</span>
                    </v-col>
                  </v-row>

                  <v-divider class="mb-2 mt-4" />

                  <v-row>
                    <v-col>
                      <v-chip
                        v-if="isDueInFuture(card.dueDate)"
                        class="date-chip"
                        variant="text"
                        prepend-icon="mdi-calendar-month"
                      >
                        Due: {{ card.dueDate }}
                      </v-chip>

                      <v-chip
          v-else-if="isOverdue(card.dueDate)"
          color="#a83836"
          class="date-chip red"
          variant="text"
          prepend-icon="mdi-exclamation-thick">
          Overdue: {{ card.dueDate }}
        </v-chip>
          </v-col>

                    <v-col class="d-flex justify-end align-center">
                      <v-chip
                        v-if="
                          getLowerCase(card.payment_status) === 'paid'
                        "
                        class="status-chip"
                        color="#00687b"
                        variant="tonal"
                        size="x-small"
                        label
                      >
                        {{ card.payment_status }}
                      </v-chip>

                      <v-chip
                        v-if="
                          getLowerCase(card.payment_status) === 'pending'
                        "
                        class="status-chip"
                        color="#64748b"
                        variant="tonal"
                        size="x-small"
                        label
                      >
                        {{ card.payment_status }}
                      </v-chip>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </div>
          </div>

          <div v-if="column.items.length === 0" class="empty-container d-flex flex-column align-center justify-center">
            <v-icon :icon="column.icon" />
            <p class="mt-3">
              Drop an order here
            </p>
          </div>
        </VueDraggable>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getOrders } from "../api/ordersService";
import { VueDraggable } from "vue-draggable-plus";

export default {
  name: "Workflow",

  components: {
    VueDraggable,
  },

  data() {
    return {
      items: [],
      columns: [],
      activeFilter: null,

      stages: [
        {
          name: "Preparation",
          label: "Προετοιμασία",
          color: "#cbd5e1",
          icon: "mdi-cogs",
        },
        {
          name: "Cutting",
          label: "Κοπή",
          color: "#0ea5e9",
          icon: "mdi-content-cut",
        },
        {
          name: "Sewing",
          label: "Ράψιμο",
          color: "#0369a1",
          icon: "mdi-hanger",
        },
        {
          name: "Quality_Control",
          label: "Έλεγχος Ποιότητας",
          color: "#00687b",
          icon: "mdi-file-document-check-outline",
        },
        {
          name: "Delivering",
          label: "Αποστολή",
          color: "#64748b",
          icon: "mdi-truck-fast-outline",
        },
      ],
    };
  },

  created() {
    this.fetchOrders();
  },

  methods: {
    fetchOrders() {
      getOrders()
        .then((response) => {
          this.items = response.data.ordersList || [];
          this.createColumns(this.items);

          console.log(
            "Orders fetched successfully:",
            this.items
          );
        })
        .catch((error) => {
          console.error("Error fetching orders:", error);
        });
    },

    createColumns(sourceItems) {
      this.columns = this.stages.map((stage) => {
        return {
          name: stage.name,
          label: stage.label,
          color: stage.color,
          icon: stage.icon || null,
          items: sourceItems.filter((item) => {
            return (
              this.getLowerCase(item.current_stage) ===
              stage.name.toLowerCase()
            );
          }),
        };
      });
    },

    onItemAdded(event, destinationColumn) {
      const newIndex = event.newIndex;

      if (newIndex === undefined || newIndex === null) {
        return;
      }

      const movedItem = destinationColumn.items[newIndex];

      if (!movedItem) {
        return;
      }

      const previousStage = movedItem.current_stage;

      movedItem.current_stage = destinationColumn.name;

      this.syncMasterItems();

      console.log({
        itemId: movedItem.id,
        previousStage,
        newStage: destinationColumn.name,
        newIndex,
      });

      // Example API request:
      //
      // updateOrderStage(movedItem.id, {
      //   current_stage: destinationColumn.name,
      //   position: newIndex,
      // })
      //   .then(() => {
      //     console.log("Order stage updated");
      //   })
      //   .catch((error) => {
      //     console.error("Could not update order stage:", error);
      //     this.fetchOrders();
      //   });
    },

    onItemReordered(event, column) {
      const oldIndex = event.oldIndex;
      const newIndex = event.newIndex;

      if (
        oldIndex === undefined ||
        oldIndex === null ||
        newIndex === undefined ||
        newIndex === null
      ) {
        return;
      }

      const movedItem = column.items[newIndex];

      if (!movedItem) {
        return;
      }

      this.updateColumnPositions(column);
      this.syncMasterItems();

      console.log({
        itemId: movedItem.id,
        column: column.name,
        oldIndex,
        newIndex,
      });
    },

    updateColumnPositions(column) {
      column.items.forEach((item, index) => {
        item.position = index;
        item.current_stage = column.name;
      });
    },

    syncMasterItems() {
      this.items = this.columns.flatMap((column) => {
        return column.items.map((item, index) => {
          return {
            ...item,
            current_stage: column.name,
            position: index,
          };
        });
      });
    },

    filterByPriority(filter) {
      this.activeFilter = filter;

      const sourceItems = [...this.items];

      switch (filter) {
        case "high_priority":
          sourceItems.sort((a, b) => {
            return this.getLowerCase(a.priority) === "high"
              ? -1
              : this.getLowerCase(b.priority) === "high"
                ? 1
                : 0;
          });
          break;

        case "due_today": {
          const today = new Date()
            .toISOString()
            .split("T")[0];

          sourceItems.sort((a, b) => {
            return a.dueDate === today
              ? -1
              : b.dueDate === today
                ? 1
                : 0;
          });
          break;
        }

        case "due_tomorrow": {
          const tomorrow = new Date();
          tomorrow.setDate(tomorrow.getDate() + 1);

          const tomorrowString = tomorrow
            .toISOString()
            .split("T")[0];

          sourceItems.sort((a, b) => {
            return a.dueDate === tomorrowString
              ? -1
              : b.dueDate === tomorrowString
                ? 1
                : 0;
          });
          break;
        }

        case "newest":
          sourceItems.sort((a, b) => {
            return new Date(b.created_at) - new Date(a.created_at);
          });
          break;

        case "oldest":
          sourceItems.sort((a, b) => {
            return new Date(a.created_at) - new Date(b.created_at);
          });
          break;

        default:
          break;
      }

      this.createColumns(sourceItems);
    },

    getLowerCase(value) {
      return String(value || "").toLowerCase();
    },

    isDueInFuture(date) {
      if (!date) {
        return false;
      }

      return new Date(date) >= this.getTodayStart();
    },

    isOverdue(date) {
      if (!date) {
        return false;
      }

      return new Date(date) < this.getTodayStart();
    },

    getTodayStart() {
      const today = new Date();

      today.setHours(0, 0, 0, 0);

      return today;
    },
  },
};
</script>

<style scoped>
.header span {
  color: #006497;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;
  font-family: Manrope;
}

.header h1 {
  color: #2a343a;
  letter-spacing: -0.025em;
  text-transform: capitalize;
  font-size: 2.25rem;
  font-weight: 800;
  font-family: Manrope;
}

.header :deep(.v-btn) {
  padding: 0.675rem 1.5rem;
  height: auto;
  border-color: #00649766;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: capitalize;
  letter-spacing: 0;
  font-family: Manrope;
}

.header :deep(.v-btn .v-btn__prepend) {
  font-size: 1rem;
}

.work-column h3 {
  color: #1e293b;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.drag-list {
  min-height: 13rem;
  max-height: 80vh;
  overflow-y: auto;
  padding-right: 0.5rem;
}

.workflow-item {
  background: white;
  min-height: 13rem;
  padding: 1rem;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  cursor: grab;
  transition-duration: 150ms;
}

.workflow-item:active {
  cursor: grabbing;
}

.workflow-item:hover {
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
}

.cutting-column.workflow-item {
  border-left: 4px solid #0ea5e9;
}

.work-container {
  display: grid;
  grid-template-columns: repeat(5, minmax(16rem, 1fr));
  gap: 1rem;
  overflow-x: auto;
}

.workflow-item :deep(.v-chip) {
  letter-spacing: 0.05em;
  font-weight: 700;
  text-transform: uppercase;
}

.workflow-item h4 {
  color: #0f172a;
  line-height: 1.25;
  font-weight: 700;
}

.workflow-item p {
  color: #64748b;
  font-size: 0.75rem;
  line-height: 1rem;
}

.workflow-item .description span:nth-child(1) {
  color: #94a3b8;
  letter-spacing: -0.025em;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.575rem;
}

.workflow-item .description span:nth-child(2) {
  color: #334155;
  font-size: 0.75rem;
  line-height: 1.25rem;
  font-weight: 700;
}

.workflow-item .date-chip {
  color: #475569;
  font-weight: 700;
  font-size: 0.625rem;
}

.workflow-item .date-chip :deep(.v-chip__prepend) {
  color: #94a3b8;
  font-size: 0.675rem;
}

.workflow-item .date-chip.red :deep(.v-chip__prepend) {
  color: #a83836;
  font-size: 0.675rem;
}

.card-menu :deep(.v-list-item__prepend) {
  display: inline-block;
}

.card-menu .v-list,
.card-menu :deep(.v-list-item-title) {
  color: #334155;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1rem;
}

.empty-container {
  min-height: 13rem;
  padding: 2rem;
  background-color: #f8fafc80;
  border: 2px dashed #e2e8f0;
  border-radius: 1rem;
}

.empty-container .v-icon {
  color: #cbd5e1;
  font-size: 2.25rem;
  line-height: 2.5rem;
}

.empty-container p {
  color: #94a3b8;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 700;
}

.kanban-col .v-btn {
  color: #2a343a;
  background-color: #e7eff5;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.5rem 1rem;
  font-weight: 700;
}

.kanban-col .v-card {
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border-radius: 0.75rem;
  border: 1px solid #a9b3bb26;
  width: fit-content;
  justify-self: end;
}

.kanban-col .btn-label {
  color: #475569;
  background: white;
  font-size: 0.75rem;
  line-height: 1rem;
  border: 1px solid #e2e8f0;
  padding: 0.375rem 1rem;
  border-radius: 999px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
}

.ghost {
  opacity: 0.4;
  background: #e3f2fd;
  border: 2px dashed #0ea5e9;
}

.drag-chosen {
  opacity: 0.9;
}

.dragging {
  transform: rotate(1deg);
}

@media (max-width: 1280px) {
  .work-container {
    grid-template-columns: repeat(5, minmax(15rem, 1fr));
  }
}
</style>
