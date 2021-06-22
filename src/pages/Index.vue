<template>
  <div class="q-pa-md q-gutter-sm">
    <q-editor
      v-model="editor"
      :definitions="{
        save: {
          tip: 'Save your work',
          icon: 'save',
          label: 'Save',
          handler: saveWork
        }
      }"
      :toolbar="[
        ['bold', 'italic', 'strike', 'underline'],
        ['upload', 'save']
      ]"
    />
    <q-card
      class="row"
      flat
      bordered
      v-for="(item, index) in tasks"
      :key="index"
    >
      <q-card-section
        class="col"
        v-html="item.texto"
        :class="item.estado ? 'tachar' : ''"
      />
      <q-btn flat color="blue" @click="item.estado = !item.estado"
        >Acción</q-btn
      >
      <q-btn flat color="red" @click="eliminar(index)">Eliminar</q-btn>
    </q-card>
    <div class="flex flex-center" v-if="tasks.length == 0">
      <h6>Sin notas</h6>
    </div>
  </div>
</template>

<script>
import dialog from "../mixins/dialog.js";
export default {
  mixins: [dialog],
  data() {
    return {
      editor: "",
      tasks: [
        // { texto: "Tarea #1", estado: false },
        // { texto: "Tarea #2", estado: true },
        // { texto: "Tarea #3", estado: false }
      ]
    };
  },
  methods: {
    saveWork() {
      this.tasks.push({ texto: this.editor, estado: false });
      // this.$q.notify({
      //   message: "Tarea guardada",
      //   color: "green-4",
      //   textColor: "white",
      //   icon: "cloud_done"
      // });
      this.saveTask();
    },
    async eliminar(index) {
       let r = await this.confirm("¿confirmas eliminar la tarea?", "si estas seguro ok")
      this.tasks.splice(index,1)
    }
  },
  computed: {}
};
</script>

<style>
.tachar {
  text-decoration: line-through;
}
</style>
