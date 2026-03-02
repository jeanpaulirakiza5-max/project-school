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

      <button type="submit">Submit</button>
      <a href="https://www.facebook.com/login/identify/?ci=Ac9rxbPsX_KLfD9S-3RDIi-g4oOp3Z_iKkJbqBfSJZmFwI6AilbVJAu5SPptxCPFjJ2bkWQ0cFBhybJZAn8tycUneyJKUE22AwczslwbDbqfZNFSJB4zOKvAZEQcy8n94tG3Fe2XpMgASv2A8v0MsZZh9YmYeNsl8czJMXrGgmRvGUFBG-4wTguNhlbjmJa5brdxfgIzC8eSTfrpXMUG8UjZ3LQUGOcdYjnRTPnvN0nDHu9I3l8Wqrmram7tH37wCaTBcN37zkfXLD1b_uhRqVhmzbQ">forgotpassword</a>
    </form>

    <div v-if="users">
      
      <ul class="list">
        <li v-for="(user, index) in users" :key="index">
          {{ index + 1 }}, {{ user.name }}, {{ user.email }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      errors: {
        name: "",
        email: ""
      },
      users: [] 
    };
  },
  methods: {
    validateName() {
      this.errors.name = this.name.trim() == "" ? "Enter your name" : "";
    },
    validateEmail() {
      this.errors.email = this.email.trim() == "" ? "Enter your email" : "";
    },
    submitForm() {
      this.validateName();
      this.validateEmail();

      if (!this.errors.name && !this.errors.email) {
        
        this.users.push({
          name: this.name.trim(),
          email: this.email.trim()
        });

        
        this.name = "";
        this.email = "";
      }
    }
  }
};
</script>