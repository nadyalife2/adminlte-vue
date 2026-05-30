<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue'

// Reactive chat: a message list + composer driven by Vue state.
type Message = { side: 'them' | 'me'; text: string; time: string }

const messages = ref<Message[]>([
  { side: 'them', text: 'Hey Jane! Did you get a chance to look at the v2.4 candidate?', time: '10:38 AM' },
  { side: 'me', text: 'Just finished going through it. Overall really solid — the new motion primitives are great.', time: '10:40 AM' },
  { side: 'them', text: 'Glad you like them. Any concerns?', time: '10:40 AM' },
  { side: 'me', text: 'Two small things: the success state on form inputs feels light, and the focus ring is barely visible on dark theme.', time: '10:41 AM' },
  { side: 'them', text: 'Yeah, that focus ring issue has been bugging me too. I’ll bump the contrast and ping you for another look.', time: '10:42 AM' },
  { side: 'me', text: 'Sounds good. Otherwise, ship it!', time: '10:42 AM' },
])
const draft = ref('')
const messagesEl = ref<HTMLElement | null>(null)

const fmtTime = () => new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' })
const scrollToEnd = () => {
  if (messagesEl.value) messagesEl.value.scrollTop = messagesEl.value.scrollHeight
}

function send() {
  const text = draft.value.trim()
  if (!text) return
  messages.value.push({ side: 'me', text, time: fmtTime() })
  draft.value = ''
  nextTick(scrollToEnd)
}

onMounted(scrollToEnd)
</script>

<template>
  <LteAppContent title="Chat" :breadcrumbs="[{ label: 'Home', href: '#' }, { label: 'Chat' }]">
            <div class="chat-app">
              <!-- Contacts -->
              <aside class="chat-contacts">
                <div class="p-3 border-bottom">
                  <div class="input-group input-group-sm">
                    <span class="input-group-text bg-body">
                      <i class="bi bi-search" aria-hidden="true"></i>
                    </span>
                    <input
                      type="search"
                      class="form-control"
                      placeholder="Search contacts…"
                      aria-label="Search contacts"
                    />
                  </div>
                </div>
                <div class="flex-grow-1 overflow-auto">
                  <a href="#" class="chat-contact active">
                    <span class="chat-avatar bg-primary-subtle text-primary online"> OB </span>
                    <div class="flex-grow-1 overflow-hidden">
                      <div class="d-flex justify-content-between">
                        <p class="mb-0 text-truncate fw-semibold">Olivia Bennett</p>
                        <small class="text-secondary flex-shrink-0 ms-2"> 2m </small>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <small class="text-truncate fw-semibold">
                          Approved — a few small notes…
                        </small>
                        <span class="badge text-bg-primary rounded-pill ms-2"> 2 </span>
                      </div>
                    </div> </a
                  ><a href="#" class="chat-contact">
                    <span class="chat-avatar bg-success-subtle text-success online"> MR </span>
                    <div class="flex-grow-1 overflow-hidden">
                      <div class="d-flex justify-content-between">
                        <p class="mb-0 text-truncate">Marcus Reyes</p>
                        <small class="text-secondary flex-shrink-0 ms-2"> 1h </small>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <small class="text-truncate text-secondary"> Lunch Thursday? </small>
                      </div>
                    </div> </a
                  ><a href="#" class="chat-contact">
                    <span class="chat-avatar bg-info-subtle text-info"> SK </span>
                    <div class="flex-grow-1 overflow-hidden">
                      <div class="d-flex justify-content-between">
                        <p class="mb-0 text-truncate">Sara Khan</p>
                        <small class="text-secondary flex-shrink-0 ms-2"> 3h </small>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <small class="text-truncate text-secondary">
                          Customer interview notes are up.
                        </small>
                      </div>
                    </div> </a
                  ><a href="#" class="chat-contact">
                    <span class="chat-avatar bg-warning-subtle text-warning"> DS </span>
                    <div class="flex-grow-1 overflow-hidden">
                      <div class="d-flex justify-content-between">
                        <p class="mb-0 text-truncate fw-semibold">Diego Smania</p>
                        <small class="text-secondary flex-shrink-0 ms-2"> Yesterday </small>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <small class="text-truncate fw-semibold"> PR is ready for review. </small>
                        <span class="badge text-bg-primary rounded-pill ms-2"> 1 </span>
                      </div>
                    </div> </a
                  ><a href="#" class="chat-contact">
                    <span class="chat-avatar bg-danger-subtle text-danger"> ED </span>
                    <div class="flex-grow-1 overflow-hidden">
                      <div class="d-flex justify-content-between">
                        <p class="mb-0 text-truncate">Emma Dawson</p>
                        <small class="text-secondary flex-shrink-0 ms-2"> Yesterday </small>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <small class="text-truncate text-secondary">
                          Heading out, see you Mon.
                        </small>
                      </div>
                    </div> </a
                  ><a href="#" class="chat-contact">
                    <span class="chat-avatar bg-primary-subtle text-primary online"> LC </span>
                    <div class="flex-grow-1 overflow-hidden">
                      <div class="d-flex justify-content-between">
                        <p class="mb-0 text-truncate">Liam Carter</p>
                        <small class="text-secondary flex-shrink-0 ms-2"> May 16 </small>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <small class="text-truncate text-secondary">
                          Pushed the calendar fix.
                        </small>
                      </div>
                    </div> </a
                  ><a href="#" class="chat-contact">
                    <span class="chat-avatar bg-secondary-subtle text-secondary"> AF </span>
                    <div class="flex-grow-1 overflow-hidden">
                      <div class="d-flex justify-content-between">
                        <p class="mb-0 text-truncate">Ava Foster</p>
                        <small class="text-secondary flex-shrink-0 ms-2"> May 15 </small>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                        <small class="text-truncate text-secondary">
                          Adding you to the design crit.
                        </small>
                      </div>
                    </div>
                  </a>
                </div>
              </aside>

              <!-- Conversation -->
              <section class="chat-conversation">
                <header class="chat-header">
                  <span class="chat-avatar bg-primary-subtle text-primary online"> OB </span>
                  <div class="flex-grow-1">
                    <p class="mb-0 fw-semibold">Olivia Bennett</p>
                    <small class="text-success">
                      <i class="bi bi-circle-fill" style="font-size: 0.5rem" aria-hidden="true"></i>
                      Online &middot; typing&hellip;
                    </small>
                  </div>
                  <div class="btn-group btn-group-sm">
                    <button class="btn btn-outline-secondary" type="button" title="Call">
                      <i class="bi bi-telephone" aria-hidden="true"></i>
                    </button>
                    <button class="btn btn-outline-secondary" type="button" title="Video call">
                      <i class="bi bi-camera-video" aria-hidden="true"></i>
                    </button>
                    <button class="btn btn-outline-secondary" type="button" title="More">
                      <i class="bi bi-three-dots-vertical" aria-hidden="true"></i>
                    </button>
                  </div>
                </header>

                <div ref="messagesEl" class="chat-messages">
                  <div v-for="(m, i) in messages" :key="i" :class="['chat-message', m.side]">
                    <div class="chat-bubble">
                      {{ m.text }}
                      <span class="chat-time">{{ m.time }}</span>
                    </div>
                  </div>
                </div>

                <form class="chat-composer" @submit.prevent="send">
                  <div class="input-group">
                    <button class="btn btn-outline-secondary" type="button" title="Attach">
                      <i class="bi bi-paperclip" aria-hidden="true"></i>
                    </button>
                    <input
                      v-model="draft"
                      type="text"
                      class="form-control"
                      placeholder="Type a message…"
                      aria-label="Type a message"
                    />
                    <button class="btn btn-outline-secondary" type="button" title="Emoji">
                      <i class="bi bi-emoji-smile" aria-hidden="true"></i>
                    </button>
                    <button class="btn btn-primary" type="submit">
                      <i class="bi bi-send" aria-hidden="true"></i>
                    </button>
                  </div>
                </form>
              </section>
            </div>
  </LteAppContent>
</template>

<style>
      .chat-app {
        display: grid;
        grid-template-columns: 320px 1fr;
        gap: 0;
        height: calc(100vh - 14rem);
        min-height: 32rem;
        border-radius: var(--bs-border-radius);
        overflow: hidden;
        background: var(--bs-body-bg);
        border: 1px solid var(--bs-border-color);
      }
      @media (max-width: 768px) {
        .chat-app {
          grid-template-columns: 1fr;
        }
        .chat-app .chat-contacts {
          display: none;
        }
      }
      .chat-contacts {
        background: var(--bs-tertiary-bg);
        border-right: 1px solid var(--bs-border-color);
        display: flex;
        flex-direction: column;
        min-height: 0;
      }
      .chat-contact {
        display: flex;
        gap: 0.75rem;
        padding: 0.75rem 1rem;
        cursor: pointer;
        border-bottom: 1px solid var(--bs-border-color);
        text-decoration: none;
        color: inherit;
      }
      .chat-contact:hover {
        background: var(--bs-body-bg);
      }
      .chat-contact.active {
        background: var(--bs-body-bg);
        border-left: 3px solid var(--bs-primary);
        padding-left: calc(1rem - 3px);
      }
      .chat-avatar {
        position: relative;
        flex-shrink: 0;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 0.8rem;
      }
      .chat-avatar.online::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 10px;
        height: 10px;
        background: var(--bs-success);
        border: 2px solid var(--bs-body-bg);
        border-radius: 50%;
      }
      .chat-conversation {
        display: flex;
        flex-direction: column;
        min-height: 0;
      }
      .chat-header {
        padding: 0.75rem 1rem;
        border-bottom: 1px solid var(--bs-border-color);
        display: flex;
        align-items: center;
        gap: 0.75rem;
      }
      .chat-messages {
        flex: 1;
        overflow-y: auto;
        padding: 1rem;
        background: var(--bs-tertiary-bg);
      }
      .chat-message {
        display: flex;
        margin-bottom: 0.75rem;
      }
      .chat-message.me {
        justify-content: flex-end;
      }
      .chat-bubble {
        max-width: 70%;
        padding: 0.5rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.9rem;
        line-height: 1.4;
      }
      .chat-message.them .chat-bubble {
        background: var(--bs-body-bg);
        border: 1px solid var(--bs-border-color);
        border-bottom-left-radius: 0.25rem;
      }
      .chat-message.me .chat-bubble {
        background: var(--bs-primary);
        color: #fff;
        border-bottom-right-radius: 0.25rem;
      }
      .chat-time {
        font-size: 0.7rem;
        opacity: 0.7;
        display: block;
        margin-top: 0.15rem;
      }
      .chat-composer {
        padding: 0.75rem;
        border-top: 1px solid var(--bs-border-color);
      }
</style>
