<template>
  <section class="section section-signup">
    <div class="container">
      <div class="row">
        <div class="col s12 m6">
          <h4>Get a free account</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus veniam id nisi? Saepe sint ipsum distinctio
            molestiae, recusandae autem sequi?</p>
          <h4>Download the free software</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus veniam id nisi? Saepe sint ipsum distinctio
            molestiae, recusandae autem sequi?</p>
          <h4>Push to the platform</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus veniam id nisi? Saepe sint ipsum distinctio
            molestiae, recusandae autem sequi?</p>
        </div>
        <div class="col s12 m6">
          <div class="card-panel grey lighten-4 grey-text text-darken-4 z-depth-0">
            <form>
              <div class="input-field">
                <input type="text" id="first_name">
                <label for="first_name">First Name</label>
              </div>
              <div class="input-field">
                <input type="text" id="last_name">
                <label for="last_name">Last Name</label>
              </div>
              <div class="input-field">
                <input type="email" id="email">
                <label for="email">Email</label>
              </div>
              <div class="input-field">
                <input type="password" id="password">
                <label for="password">Password</label>
              </div>
              <div class="input-field">
                <input type="text" id="company">
                <label for="company">Company</label>
              </div>
              <div class="input-field">
                <select id="role">
                  <option value="" disabled selected>Select Role</option>
                  <option value="professional">Professional Developer</option>
                  <option value="hobbyist">Hobbyist</option>
                  <option value="student">Student</option>
                  <option value="manager">Manager</option>
                  <option value="other">Other</option>
                </select>
                <label for="role">Role</label>
              </div>
              <input type="submit" value="Signup" class="btn btn-large purple btn-extend">
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'sign-in',
  components: {},
};
</script>
