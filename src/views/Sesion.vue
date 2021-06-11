<template>
  <div>
    <v-container>
      <v-container>
        <!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
        <v-row justify="center">
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="mx-2"
                fab
                dark
                color="primary"
                v-bind="attrs"
                v-on="on"
              >
                <v-icon dark> add </v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">Add new task</span>
              </v-card-title>
              <v-card-text>
                <v-form ref="form">
                  <v-text-field
                    type="text"
                    label="Task name"
                    v-model="name"
                    :rules="[(v) => !!v || 'Item is required']"
                  ></v-text-field>

                  <v-text-field
                    type="text"
                    label="Task details"
                    v-model="details"
                    :rules="[(v) => !!v || 'Item is required']"
                  ></v-text-field>

                  <v-text-field
                    type="date"
                    label="Task date"
                    v-model="date"
                  ></v-text-field>

                  <v-select
                    v-model="priority"
                    :items="items"
                    :rules="[(v) => !!v || 'Item is required']"
                    label="select priority"
                    required
                  >
                  </v-select>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Close
                </v-btn>
                <v-btn type="submit" color="primary" @click="addEvent"
                  >ADD</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>

        <!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
      </v-container>

      <v-container>
        <div v-for="element of events" :key="element.id">
          <v-card class="mb-2">
            <v-layout>
              <v-flex xs1 :class="['pa-1', color(element.priority)]">
                <div></div>
              </v-flex>
              <v-flex xs10>
                <v-layout justify-space-between>
                  <!-- <v-flex xs7> -->
                  <v-card-title class="mb-1 pa-2">{{
                    element.name
                  }}</v-card-title>
                  <!-- </v-flex> -->
                  <!-- <v-flex xs3 offset-xs2 align-self-center>
              <v-chip color="success" class="ma-3">{{ element.date }}</v-chip>
            </v-flex> -->
                </v-layout>

                <v-card-text class="pa-2">{{ element.details }}</v-card-text>
                <v-chip
                  v-if="element.date != null"
                  color="#1C41E6"
                  class="ma-3 white--text"
                  >{{ element.date }}</v-chip
                >
                <v-divider class="mx-4"></v-divider>
              </v-flex>
              <v-flex>
                <v-btn class="mx-1 ma-2" outlined fab small color="pink">
                  <v-icon @click="deleteEvent(element)">delete</v-icon>
                </v-btn>

                <v-dialog transition="dialog-bottom-transition" max-width="600">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      v-bind="attrs"
                      v-on="on"
                      class="mx-1 ma-2"
                      outlined
                      fab
                      small
                      color="blue"
                      ><v-icon @click="dialogEdit = true">edit</v-icon></v-btn
                    >
                  </template>
                  <template v-slot:default="dialog">
                    <v-card>
                      <v-toolbar color="primary" dark>Edit your task</v-toolbar>
                      <v-card-text>
                        <v-form>
                          <v-text-field
                          :rules="[(v) => !!v || 'Item is required']"
                          type="text"
                          label="name"
                          v-model="element.name"
                        ></v-text-field>
                        <v-text-field
                          :rules="[(v) => !!v || 'Item is required']"
                          type="text"
                          label="details"
                          v-model="element.details"
                        ></v-text-field>
                        <v-text-field
                          type="date"
                          label="date"
                          v-model="element.date"
                        ></v-text-field>
                        <v-select
                          v-model="element.priority"
                          :items="items"
                          :rules="[(v) => !!v || 'Item is required']"
                          label="select priority"
                          required
                        >
                        </v-select>
                        </v-form>
                      </v-card-text>
                      <v-card-actions class="justify-end">
                        <v-btn color="primary" @click="()=>{
                          updateEvent(element);
                          dialog.value = false
                          }">Save</v-btn>
                        <v-btn text @click="dialog.value = false">Close</v-btn>
                      </v-card-actions>
                    </v-card>
                  </template>
                </v-dialog>
              </v-flex>
            </v-layout>
          </v-card>
          <!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->

          <!-- XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX -->
        </div>
      </v-container>
    </v-container>
  </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import { db } from "../main";
export default {
  created() {
    this.getData();
    console.log(this.user);
  },
  methods: {
    async getData() {
      try {
        const snapshot = await db.collection("events").get();
        const evt = [];
        let temp;
        snapshot.forEach((element) => {
          if (this.userId == element.data().userId) {
            temp = element.data();
            temp.id = element.id;
            evt.push(temp);
          }
        });
        this.events = evt;
        console.log(evt);
      } catch (error) {
        console.log(error);
      }
    },
    async addEvent() {
      try {
        await db.collection("events").add({
          name: this.name,
          details: this.details,
          date: this.date,
          priority: this.priority,
          messages: this.messages,
          userId: this.userId,
        });
        await this.getData();
        this.$refs.form.reset();
        this.dialog = false;
      } catch (error) {
        console.log(error);
      }
    },
    async deleteEvent(evt) {
      try {
        await db.collection("events").doc(evt.id).delete();
        // this.selectedOpen = false;
        await this.getData();
      } catch (error) {
        console.log(error);
      }
    },
    async updateEvent(evt) {
      try {
        await db.collection("events").doc(evt.id).update({
          name: evt.name,
          details: evt.details,
          date: evt.date,
          priority: evt.priority,
        });

        this.selectedOpen = false;
        this.currentlyEditing = null;
        this.dialogEdit = false;
      } catch (error) {}
    },
  },
  data() {
    return {
      dialog: false,
      dialogEdit: false,
      user: firebase.auth().currentUser,
      events: [],
      name: null,
      details: null,
      date: null,
      priority: null,
      color: (a) => {
        switch (a) {
          case "level 1":
            return "red";
            break;
          case "level 2":
            return "yellow";
            break;
          case "level 3":
            return "green";
            break;
        }
      },
      messages: null,
      userId: firebase.auth().currentUser.uid,
      items: ["level 1", "level 2", "level 3"],
    };
  },
};
</script>