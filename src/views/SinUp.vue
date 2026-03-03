<template>
  <div class="container">
    <h1>LOGIN FORM</h1>

    <form @submit.prevent="submitForm">
      <label>Name:</label>
      <input type="text" v-model="name" @blur="validateName" /><br><br>
      <p v-if="errors.name" style="color:red">{{ errors.name }}</p>

      <label>Email:</label>
      <input type="email" v-model="email" @blur="validateEmail" /><br>
      <p v-if="errors.email" style="color:red">{{ errors.email }}</p>

      <button type="submit">Submit</button><br><br><br>
    </form>

    <hr />

    <div v-if="users.length">
      <table border="1" cellpadding="10">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>
              <button @click="editUser(index)">Edit</button>
              <button @click="deleteUser(index)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      editIndex: null,
      users: [],
      errors: {
        name: "",
        email: ""
      }
    };
  },

  methods: {
    validateName() {
      this.errors.name = this.name.trim() === "" ? "Enter your name" : "";
    },

    validateEmail() {
       this.errors.email = this.name.trim() ==="" ? "Enter your email" : "";
    },

    submitForm() {
      this.validateName();
      this.validateEmail();

      if (!this.errors.name && !this.errors.email) {
        const emailExists = this.users.some(
          (user, index) =>
            user.email === this.email.trim() &&
            index !== this.editIndex
        );

        if (emailExists) {
          this.errors.email = "Email already exists!";
          return;
        }

        if (this.editIndex === null) {
          this.users.push({
            name: this.name.trim(),
            email: this.email.trim()
          });
        } else {
          this.users[this.editIndex] = {
            name: this.name.trim(),
            email: this.email.trim()
          };
          this.editIndex = null;
        }

        this.name = "";
        this.email = "";
      }
    },

    editUser(index) {
      this.name = this.users[index].name;
      this.email = this.users[index].email;
      this.editIndex = index;
    },

    deleteUser(index) {
      this.users.splice(index, 1);
    }
  }
};
</script>