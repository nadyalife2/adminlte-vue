<script setup lang="ts">
import { computed, ref } from 'vue'

// Reactive multi-step wizard: step state, per-step validation, password-match
// and the review summary are all driven by Vue state (no DOM queries).
const steps = ['Account', 'Profile', 'Preferences', 'Review']
const current = ref(0)
const tried = ref(false) // show validation only after a Next/Submit attempt

// Form model
const email = ref('')
const username = ref('')
const password = ref('')
const password2 = ref('')
const first = ref('')
const last = ref('')
const company = ref('')
const role = ref('')
const notifProduct = ref(true)
const notifSecurity = ref(true)
const notifMarketing = ref(false)
const frequency = ref('Daily')
const terms = ref(false)

// Field-level validity
const emailValid = computed(() => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.value))
const usernameValid = computed(() => username.value.trim().length >= 3)
const passwordValid = computed(() => password.value.length >= 8)
const password2Valid = computed(() => password2.value.length > 0 && password2.value === password.value)
const firstValid = computed(() => first.value.trim().length > 0)
const lastValid = computed(() => last.value.trim().length > 0)
const roleValid = computed(() => role.value !== '')
const termsValid = computed(() => terms.value)

const stepValid = (i: number): boolean => {
  if (i === 0) return emailValid.value && usernameValid.value && passwordValid.value && password2Valid.value
  if (i === 1) return firstValid.value && lastValid.value && roleValid.value
  if (i === 3) return termsValid.value
  return true
}

const summary = computed<Array<[string, string]>>(() => [
  ['Email', email.value],
  ['Username', username.value],
  ['Name', `${first.value} ${last.value}`.trim()],
  ['Company', company.value || '—'],
  ['Role', role.value || '—'],
  ['Digest', frequency.value],
])

function next() {
  tried.value = true
  if (!stepValid(current.value)) return
  if (current.value < steps.length - 1) {
    current.value++
    tried.value = false
  }
}
function prev() {
  if (current.value > 0) {
    current.value--
    tried.value = false
  }
}
function onSubmit() {
  tried.value = true
  if (!stepValid(current.value)) return
  alert('Wizard complete! Form would submit here.')
}
</script>

<template>
  <LteAppContent
    title="Form Wizard"
    :breadcrumbs="[{ label: 'Home', href: '#' }, { label: 'Forms', href: '#' }, { label: 'Wizard' }]"
  >
    <div class="row justify-content-center">
      <div class="col-lg-10 col-xl-8">
        <LteCard body-class="p-4">
            <!-- Step indicators -->
            <ol class="wizard-steps mb-4">
              <li
                v-for="(label, i) in steps"
                :key="label"
                :class="{ active: current === i, completed: i < current }"
              >
                {{ label }}
              </li>
            </ol>

            <form novalidate @submit.prevent="onSubmit">
              <!-- Step 1 -->
              <fieldset :class="['wizard-step', { 'd-none': current !== 0 }]">
                <h2 class="h5 mb-3">Create your account</h2>
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label" for="wz-email">Email</label>
                    <input
                      id="wz-email"
                      v-model="email"
                      type="email"
                      class="form-control"
                      :class="{ 'is-invalid': tried && !emailValid }"
                    />
                    <div class="invalid-feedback">Please enter a valid email.</div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label" for="wz-username">Username</label>
                    <input
                      id="wz-username"
                      v-model="username"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': tried && !usernameValid }"
                    />
                    <div class="invalid-feedback">Username must be at least 3 characters.</div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label" for="wz-password">Password</label>
                    <input
                      id="wz-password"
                      v-model="password"
                      type="password"
                      class="form-control"
                      :class="{ 'is-invalid': tried && !passwordValid }"
                    />
                    <div class="invalid-feedback">Password must be at least 8 characters.</div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label" for="wz-password2">Confirm password</label>
                    <input
                      id="wz-password2"
                      v-model="password2"
                      type="password"
                      class="form-control"
                      :class="{ 'is-invalid': tried && !password2Valid }"
                    />
                    <div class="invalid-feedback">Passwords must match.</div>
                  </div>
                </div>
              </fieldset>

              <!-- Step 2 -->
              <fieldset :class="['wizard-step', { 'd-none': current !== 1 }]">
                <h2 class="h5 mb-3">Tell us about yourself</h2>
                <div class="row g-3">
                  <div class="col-md-6">
                    <label class="form-label" for="wz-first">First name</label>
                    <input
                      id="wz-first"
                      v-model="first"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': tried && !firstValid }"
                    />
                    <div class="invalid-feedback">First name is required.</div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label" for="wz-last">Last name</label>
                    <input
                      id="wz-last"
                      v-model="last"
                      type="text"
                      class="form-control"
                      :class="{ 'is-invalid': tried && !lastValid }"
                    />
                    <div class="invalid-feedback">Last name is required.</div>
                  </div>
                  <div class="col-md-6">
                    <label class="form-label" for="wz-company">Company</label>
                    <input id="wz-company" v-model="company" type="text" class="form-control" />
                  </div>
                  <div class="col-md-6">
                    <label class="form-label" for="wz-role">Role</label>
                    <select
                      id="wz-role"
                      v-model="role"
                      class="form-select"
                      :class="{ 'is-invalid': tried && !roleValid }"
                    >
                      <option value="">Choose&hellip;</option>
                      <option>Founder / CEO</option>
                      <option>Engineering</option>
                      <option>Design</option>
                      <option>Marketing</option>
                      <option>Other</option>
                    </select>
                    <div class="invalid-feedback">Please select a role.</div>
                  </div>
                </div>
              </fieldset>

              <!-- Step 3 -->
              <fieldset :class="['wizard-step', { 'd-none': current !== 2 }]">
                <h2 class="h5 mb-3">Notification preferences</h2>
                <div class="form-check form-switch mb-2">
                  <input
                    id="wz-notif-product"
                    v-model="notifProduct"
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                  />
                  <label class="form-check-label" for="wz-notif-product">
                    Product updates &amp; releases
                  </label>
                </div>
                <div class="form-check form-switch mb-2">
                  <input
                    id="wz-notif-security"
                    v-model="notifSecurity"
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                  />
                  <label class="form-check-label" for="wz-notif-security">Security alerts</label>
                </div>
                <div class="form-check form-switch mb-3">
                  <input
                    id="wz-notif-marketing"
                    v-model="notifMarketing"
                    class="form-check-input"
                    type="checkbox"
                    role="switch"
                  />
                  <label class="form-check-label" for="wz-notif-marketing">Marketing &amp; tips</label>
                </div>
                <label class="form-label" for="wz-frequency">Digest frequency</label>
                <select id="wz-frequency" v-model="frequency" class="form-select">
                  <option>Real time</option>
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Never</option>
                </select>
              </fieldset>

              <!-- Step 4 -->
              <fieldset :class="['wizard-step', { 'd-none': current !== 3 }]">
                <h2 class="h5 mb-3">Review &amp; confirm</h2>
                <dl class="row mb-3">
                  <template v-for="row in summary" :key="row[0]">
                    <dt class="col-sm-4 text-secondary fw-normal">{{ row[0] }}</dt>
                    <dd class="col-sm-8 fw-semibold">{{ row[1] }}</dd>
                  </template>
                </dl>
                <div class="form-check">
                  <input
                    id="wz-terms"
                    v-model="terms"
                    class="form-check-input"
                    type="checkbox"
                    :class="{ 'is-invalid': tried && !termsValid }"
                  />
                  <label class="form-check-label" for="wz-terms">
                    I agree to the <a href="#">terms of service</a>.
                  </label>
                  <div class="invalid-feedback">You must accept the terms to continue.</div>
                </div>
              </fieldset>

              <!-- Navigation -->
              <div class="d-flex justify-content-between mt-4">
                <button
                  type="button"
                  class="btn btn-outline-secondary"
                  :disabled="current === 0"
                  @click="prev"
                >
                  <i class="bi bi-arrow-left me-1" aria-hidden="true"></i>
                  Previous
                </button>
                <button
                  v-show="current < steps.length - 1"
                  type="button"
                  class="btn btn-primary"
                  @click="next"
                >
                  Next
                  <i class="bi bi-arrow-right ms-1" aria-hidden="true"></i>
                </button>
                <button v-show="current === steps.length - 1" type="submit" class="btn btn-success">
                  <i class="bi bi-check-lg me-1" aria-hidden="true"></i>
                  Submit
                </button>
              </div>
            </form>
        </LteCard>
      </div>
    </div>
  </LteAppContent>
</template>

<style>
.wizard-steps {
  counter-reset: step;
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: space-between;
  position: relative;
}
.wizard-steps::before {
  content: '';
  position: absolute;
  top: 1rem;
  left: 0;
  right: 0;
  height: 2px;
  background: var(--bs-border-color);
  z-index: 0;
}
.wizard-steps li {
  position: relative;
  z-index: 1;
  background: var(--bs-body-bg);
  padding: 0 0.75rem;
  text-align: center;
  color: var(--bs-secondary-color);
  font-size: 0.875rem;
}
.wizard-steps li::before {
  counter-increment: step;
  content: counter(step);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin: 0 auto 0.5rem;
  border-radius: 50%;
  background: var(--bs-body-tertiary-bg);
  border: 2px solid var(--bs-border-color);
  color: var(--bs-secondary-color);
  font-weight: 600;
}
.wizard-steps li.active {
  color: var(--bs-primary);
  font-weight: 600;
}
.wizard-steps li.active::before {
  background: var(--bs-primary);
  border-color: var(--bs-primary);
  color: #fff;
}
.wizard-steps li.completed::before {
  background: var(--bs-success);
  border-color: var(--bs-success);
  color: #fff;
  content: '\f633';
  font-family: 'bootstrap-icons';
}
</style>
