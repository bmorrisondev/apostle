<template>
  <v-container ma-0 pa-0 class="body-main-container grid-wrapper">
    <div class='grid-top'>
      <v-app-bar class="address-bar">
        <v-select
          :items="httpMethods"
          label="Method"
          class="http-method-select"></v-select>
        <v-text-field label="API Endpoint Address"></v-text-field>
      </v-app-bar></div>
    <div class="grid-left">
       <v-expansion-panels multiple>

        <v-expansion-panel>
          <v-expansion-panel-header>Params</v-expansion-panel-header>
          <v-expansion-panel-content>
            A table of query parameters will go here.
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Auth</v-expansion-panel-header>
          <v-expansion-panel-content>
            Authentication settings will go here.
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Headers</v-expansion-panel-header>
          <v-expansion-panel-content>
            Key value pair of headers will be displayed here, as well as auto-generated headers.
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Variables</v-expansion-panel-header>
          <v-expansion-panel-content>
            A custom list of variables used in this request.
          </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel>
          <v-expansion-panel-header>Body Templates</v-expansion-panel-header>
          <v-expansion-panel-content>
            Alternate body templates can be saved into this section
          </v-expansion-panel-content>
        </v-expansion-panel>

      </v-expansion-panels>
    </div>
    <div class="grid-right">Request body will be editted here.</div>
  </v-container>
</template>



<script>
export default {
  data: () => ({
    items: [],
    httpMethods: [
      'GET',
      'POST',
      'PUT',
      'PATCH',
      'DELETE'
    ]
  }),
};
</script>

<style scoped>
.grid-wrapper {
  display: grid;
  grid-auto-columns: min-content 1fr auto;
  grid-auto-rows: min-content 1fr auto;
  background-color: #eee;
}
.grid-top {
  grid-column: 1 / 3;
}
.grid-left {
  min-width: 450px;
  padding: 10px;
}
.grid-right {
  padding: 10px;
}
.http-method-select {
  width: 200px;
}
.body-main-container {
  position: relative;
  height: 100%;
  align-items: stretch;
}
</style>
