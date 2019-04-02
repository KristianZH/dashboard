<!--
Copyright (c) 2019 by SAP SE or an SAP affiliate company. All rights reserved. This file is licensed under the Apache Software License, v. 2 except as noted otherwise in the LICENSE file

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
 -->

<template>
  <v-app>
    <v-toolbar app>
      <v-btn icon @click="goBack">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon @click="goHome">
        <v-icon>home</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <div class="text-xs-center">
            <h1 class="font-weight-light error--text text--darken-2">{{title}}</h1>
            <h2 class="mt-4 headline text-uppercase">{{text}}</h2>
            <p class="mt-2 font-italic grey--text ">{{hint}}</p>
          </div>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '500'
    },
    text: {
      type: String,
      default: 'Oops! Something went wrong'
    },
    hint: {
      type: String,
      default: 'See the Javascript console for technical details'
    }
  },
  data () {
    return {}
  },
  computed: {
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    },
    goHome () {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style scoped lang="css">
  h1 {
    font-size: 240px;
    line-height: 240px;
  }
  h2 {
    max-width: 520px;
  }
</style>
