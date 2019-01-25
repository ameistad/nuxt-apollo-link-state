<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        nuxt-apollo-link-state
      </h1>
      <h2 class="subtitle">
        My lovely Nuxt.js project
      </h2>
      <p>
        {{ hello }}
      </p>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >GitHub</a>
        <button
            class="button--grey"
            @click="updateHello"
          >
            Update Local State
          </button>
        </div>
      </div>
    </section>
  </template>

  <script>
  import Logo from '~/components/Logo.vue'
  import gql from 'graphql-tag'

  export default {
    components: {
      Logo
    },
    apollo: {
      hello: gql`
        query hello {
          hello @client
        }
      `
    },
    methods: {
      updateHello () {
        this.$apollo.mutate({
          mutation: gql`
            mutation updateHello ($value: String!) {
              updateHello (value: $value) @client
            }
          `,
          variables: {
            value: 'Hello from apollo-link-state!'
          }
        })
      }
    }
  }
  </script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
