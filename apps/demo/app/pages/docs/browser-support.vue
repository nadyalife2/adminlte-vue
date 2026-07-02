<script setup lang="ts">
definePageMeta({ layout: 'docs' })
</script>

<template>
  <LteAppContent
    title='Browser Support'
    :breadcrumbs="[{ label: 'Docs', href: '#' }, { label: 'Browser Support' }]"
  >

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <p>AdminLTE comes with the same browser support as Bootstrap 5.</p>
                    <blockquote>
                      <h5 id="excerpt-from-bootstraps-official-documentation">
                        Excerpt from Bootstrap’s official Documentation!
                      </h5>
                      <p>
                        Bootstrap supports the <strong>latest, stable releases</strong> of all major
                        browsers and platforms.
                      </p>
                      <p>
                        For more details
                        <a
                          href="https://getbootstrap.com/docs/5.0/getting-started/browsers-devices/#supported-browsers"
                          >look here</a
                        >.
                      </p>
                    </blockquote>
                    <p>
                      You can find our supported range of browsers and their versions in
                      <a href="https://github.com/ColorlibHQ/AdminLTE/blob/master/.browserslistrc"
                        >our .browserslistrc file</a
                      >:
                    </p>
                    <pre
                      class="astro-code dark-plus"
                      style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                      tabindex="0"
                      data-language="plaintext"
                    ><code><span class="line"><span># https://github.com/browserslist/browserslist#readme</span></span>
<span class="line"><span></span></span>
<span class="line"><span>>= 0.5%</span></span>
<span class="line"><span>last 2 major versions</span></span>
<span class="line"><span>not dead</span></span>
<span class="line"><span>Chrome >= 60</span></span>
<span class="line"><span>Firefox >= 60</span></span>
<span class="line"><span>Firefox ESR</span></span>
<span class="line"><span>iOS >= 12</span></span>
<span class="line"><span>Safari >= 12</span></span>
<span class="line"><span>not Explorer &#x3C;= 11</span></span></code></pre>
                  </div>
                </div>
              </div>
            </div>
  </LteAppContent>
</template>
