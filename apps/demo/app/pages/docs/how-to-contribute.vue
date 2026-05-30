<script setup lang="ts">
definePageMeta({ layout: 'docs' })
</script>

<template>
  <LteAppContent
    title='How To Contribute'
    :breadcrumbs="[{ label: 'Docs', href: '#' }, { label: 'How To Contribute' }]"
  >

            <div class="row">
              <div class="col-12">
                <div class="card">
                  <div class="card-body">
                    <h1 id="contributing-to-adminlte">Contributing to AdminLTE</h1>
                    <p>
                      Contributions are always <strong>welcome and recommended</strong>! Here is how
                      for beginner’s:
                      <a href="https://youtu.be/GbqSvJs-6W4"
                        >Get started with open source click here</a
                      >
                    </p>
                    <ol>
                      <li>
                        <p>Contribution Requirements :</p>
                        <ul>
                          <li>
                            When you contribute, you agree to give a non-exclusive license to
                            AdminLTE.io to use that contribution in any context as we (AdminLTE.io)
                            see appropriate.
                          </li>
                          <li>
                            If you use content provided by another party, it must be appropriately
                            licensed using an
                            <a href="https://opensource.org/licenses">open source</a> license.
                          </li>
                          <li>Contributions are only accepted through GitHub pull requests.</li>
                          <li>
                            Finally, contributed code must work in all supported browsers (see above
                            for browser support).
                          </li>
                        </ul>
                      </li>
                      <li>
                        <p>Installation :</p>
                        <ul>
                          <li>
                            Fork the repository (<a
                              href="https://help.github.com/articles/fork-a-repo/"
                              >here is the guide</a
                            >).
                          </li>
                          <li>Clone to your machine</li>
                        </ul>
                        <pre
                          class="astro-code dark-plus"
                          style="background-color: #1e1e1e; color: #d4d4d4; overflow-x: auto"
                          tabindex="0"
                          data-language="bash"
                        ><code><span class="line"><span style="color:#DCDCAA">git</span><span style="color:#CE9178"> clone</span><span style="color:#CE9178"> https://github.com/YOUR_USERNAME/AdminLTE.git</span></span></code></pre>
                        <ul>
                          <li>Create a new branch from <code>master</code></li>
                        </ul>
                      </li>
                      <li>
                        <p>Compile dist files (Development) :</p>
                        <ul>
                          <li>
                            To compile the dist files you need Node.js 18 or higher/npm (node
                            package manager)
                          </li>
                          <li><code>npm install</code> (install npm deps)</li>
                          <li>
                            <code>npm run dev</code> (developer mode, autocompile with browsersync
                            support for live demo)
                          </li>
                          <li>
                            Make your changes only in <code>./src</code> Folder OR
                            <code>package.json</code> in any files which are necessary for
                            contribution
                          </li>
                          <li>
                            Do not make changes in <code>./dist/**</code> Because it contains
                            compiled files and do not include in PR (Pull Request)
                          </li>
                          <li>
                            <code>npm run production</code> (compile css/js files and test all pages
                            are perfectly working fine, before creating a pull request)
                          </li>
                        </ul>
                      </li>
                      <li>
                        <p>Create a pull request to <code>master</code> branch</p>
                      </li>
                    </ol>
                    <h2 id="online-one-click-setup-for-contributing">
                      Online one-click setup for contributing
                    </h2>
                    <p>
                      You can use <a href="https://docs.github.com/en/codespaces">Codespace</a> an
                      online IDE which is free for Open Source for working on issues or making PRs
                      (Pull Requests). With a single click it will launch a workspace and
                      automatically:
                    </p>
                    <ul>
                      <li>clone the <code>AdminLTE</code> repo.</li>
                      <li>
                        Open with <a href="https://docs.github.com/en/codespaces">Codespace</a> or
                        <a href="https://gitpod.io/from-referrer/"
                          ><img
                            src="https://gitpod.io/button/open-in-gitpod.svg"
                            alt="Open in Gitpod"
                        /></a>
                      </li>
                      <li>install the dependencies.</li>
                      <li>run <code>npm run dev</code> to start the server.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
  </LteAppContent>
</template>
