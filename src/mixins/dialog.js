import { Dialog } from "quasar";
const dialogMixin = {
  data() {
    return {};
  },
  methods: {
    saveTask() {
      this.$q.notify({
        message: "Tarea guardada",
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        position: "top",
      });
    },
    async $DeleteTask(opts = {}) {
      return new Promise(resolve => {
        Dialog.create({
          title: opts.title || "pruebas",
          message: opts.msg || "pruebas",
          cancel: opts.cancel == null ? false : opts.cancel,
          persistent: opts.persist == null ? false : opts.persist,
          prompt: opts.prompt,
          ok: {
            label: opts.ok || "ok"
          }
        })
          .onOk(res => resolve(opts.confirm ? true : res || ""))
          .onCancel(() => resolve(false));
      });
    },
    async confirm(title, msg, label) {
      return this.$DeleteTask({
        title: title,
        msg: msg,
        confirm: true,
        cancel: {
          push: true,
          color: "negative"
        },
        persist: true,
        ok: label
      });
    }
  }
};
export default dialogMixin;
