<template>
  <LteAppContent
    title="Read Message"
    :breadcrumbs="[{ label: 'Home', href: '#' }, { label: 'Mailbox', href: '/mailbox/inbox' }, { label: 'Read' }]"
  >
            <LteCard
              header-class="d-flex justify-content-between align-items-center"
              footer-class="d-flex gap-2"
            >
              <template #header>
                <h3 class="card-title">Re: design system v2.4 sign-off</h3>
                <div class="btn-group btn-group-sm">
                  <a
                    href="../mailbox/inbox.html"
                    class="btn btn-outline-secondary"
                    title="Back to inbox"
                  >
                    <i class="bi bi-arrow-left" aria-hidden="true"></i>
                  </a>
                  <button class="btn btn-outline-secondary" type="button" title="Previous">
                    <i class="bi bi-chevron-up" aria-hidden="true"></i>
                  </button>
                  <button class="btn btn-outline-secondary" type="button" title="Next">
                    <i class="bi bi-chevron-down" aria-hidden="true"></i>
                  </button>
                </div>
              </template>
              <!-- Sender meta -->
                <div class="d-flex gap-3 align-items-start mb-4">
                  <div
                    class="flex-shrink-0 rounded-circle bg-primary-subtle text-primary d-flex align-items-center justify-content-center"
                    style="width: 48px; height: 48px"
                    aria-hidden="true"
                  >
                    OB
                  </div>
                  <div class="flex-grow-1">
                    <div class="d-flex justify-content-between">
                      <div>
                        <p class="mb-0 fw-semibold">Olivia Bennett</p>
                        <small class="text-secondary"> olivia@example.com &mdash; to me </small>
                      </div>
                      <small class="text-secondary">10:42 AM &middot; 2 hours ago</small>
                    </div>
                  </div>
                </div>

                <!-- Body -->
                <div class="mb-4">
                  <p>Hey Jane,</p>
                  <p>
                    Reviewed the v2.4 candidate this morning. Overall: looks great, ready to ship
                    pending two small notes:
                  </p>
                  <ol>
                    <li>
                      Success state on form inputs feels a touch light against
                      <code>bg-body-tertiary</code>. Can we bump the border contrast by ~10%?
                    </li>
                    <li>
                      The new focus ring is lovely on light theme but barely visible on dark. Worth
                      a quick a11y pass before we cut the release.
                    </li>
                  </ol>
                  <p>Otherwise, big +1. Customers are going to love the motion primitives.</p>
                  <p class="mb-0">
                    Olivia<br />
                    <small class="text-secondary">Sent from my laptop</small>
                  </p>
                </div>

                <!-- Attachments -->
                <h6 class="fw-semibold">Attachments (2)</h6>
                <div class="row g-2 mb-3">
                  <div class="col-md-6">
                    <LteCard body-class="py-2 px-3 d-flex align-items-center gap-2">
                      <i
                        class="bi bi-file-earmark-pdf-fill text-danger fs-3"
                        aria-hidden="true"
                      ></i>
                      <div class="flex-grow-1">
                        <p class="mb-0 small fw-semibold">design-review.pdf</p>
                        <small class="text-secondary">1.4 MB</small>
                      </div>
                      <a href="#" class="btn btn-sm btn-outline-secondary">
                        <i class="bi bi-download" aria-hidden="true"></i>
                      </a>
                    </LteCard>
                  </div>
                  <div class="col-md-6">
                    <LteCard body-class="py-2 px-3 d-flex align-items-center gap-2">
                      <i
                        class="bi bi-file-earmark-image-fill text-primary fs-3"
                        aria-hidden="true"
                      ></i>
                      <div class="flex-grow-1">
                        <p class="mb-0 small fw-semibold">focus-ring-dark.png</p>
                        <small class="text-secondary">320 KB</small>
                      </div>
                      <a href="#" class="btn btn-sm btn-outline-secondary">
                        <i class="bi bi-download" aria-hidden="true"></i>
                      </a>
                    </LteCard>
                  </div>
                </div>
              <template #footer>
                <a href="../mailbox/compose.html" class="btn btn-primary">
                  <i class="bi bi-reply me-1" aria-hidden="true"></i>Reply
                </a>
                <button class="btn btn-outline-secondary" type="button">
                  <i class="bi bi-arrow-90deg-right me-1" aria-hidden="true"></i>
                  Forward
                </button>
                <button class="btn btn-outline-secondary ms-auto" type="button">
                  <i class="bi bi-archive me-1" aria-hidden="true"></i>Archive
                </button>
                <button class="btn btn-outline-danger" type="button">
                  <i class="bi bi-trash me-1" aria-hidden="true"></i>Delete
                </button>
              </template>
            </LteCard>
  </LteAppContent>
</template>
