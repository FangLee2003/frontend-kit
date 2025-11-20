// ajax.js - Fetch helpers
const Ajax = {
  headers() {
    return { "Content-Type": "application/json" };
  },
  get(url) {
    return fetch(url, { credentials: "same-origin" }).then((r) =>
      r.ok ? r.json() : Promise.reject(r)
    );
  },
  post(url, data) {
    return fetch(url, {
      method: "POST",
      headers: this.headers(),
      body: JSON.stringify(data),
      credentials: "same-origin",
    }).then((r) => (r.ok ? r.json() : Promise.reject(r)));
  },
  put(url, data) {
    return fetch(url, {
      method: "PUT",
      headers: this.headers(),
      body: JSON.stringify(data),
      credentials: "same-origin",
    }).then((r) => (r.ok ? r.json() : Promise.reject(r)));
  },
  del(url) {
    return fetch(url, { method: "DELETE", credentials: "same-origin" }).then(
      (r) => (r.ok ? r.json() : Promise.reject(r))
    );
  },
  upload(url, formData) {
    return fetch(url, { method: "POST", body: formData }).then((r) =>
      r.ok ? r.json() : Promise.reject(r)
    );
  },
};

const Form = {
  getData(form) {
    const fd = new FormData(form);
    return Object.fromEntries(fd);
  },
  validate(form, rules) {
    const data = this.getData(form);
    const errors = {};
    Object.keys(rules || {}).forEach((k) => {
      const rule = rules[k];
      const val = data[k];
      if (rule.required && (!val || String(val).trim() === ""))
        errors[k] = rule.message || "Required";
      if (rule.email && !Validators.isEmail(val))
        errors[k] = rule.message || "Invalid email";
    });
    return { isValid: Object.keys(errors).length === 0, errors };
  },
};
