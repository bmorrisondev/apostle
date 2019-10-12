<template>
  <div class="body-main-container grid-wrapper">
    <div class='grid-top'>
      <div class="address-bar">
        <select class="method-select">
          <option v-for="method in httpMethods" :key="method">{{method}}</option>
        </select>
        <input class="address-input" type="text" placeholder="API Endpoint Address">
      </div>
    </div>

    <div class="grid-left">
      <div class="options-panel">
        <div class="options-panel-title">Params</div>
        <div class="options-panel-content">
          A table of query parameters will go here.
        </div>
      </div>

      <div class="options-panel">
        <div class="options-panel-title">Auth</div>
        <div class="options-panel-content">
          Authentication settings will go here.
        </div>
      </div>


      <div class="options-panel">
        <div class="options-panel-title">Headers</div>
        <div class="options-panel-content">
          Key value pair of headers will be displayed here, as well as auto-generated headers.
        </div>
      </div>


      <div class="options-panel">
        <div class="options-panel-title">Variables</div>
        <div class="options-panel-content">
          A custom list of variables used in this request.
        </div>
      </div>


      <div class="options-panel">
        <div class="options-panel-title">Body Templates</div>
        <div class="options-panel-content">
          Alternate body templates can be saved into this section
        </div>
      </div>
    </div>
    <div class="grid-right">
      <textarea class="request-body-textarea"></textarea>
    </div>
  </div>
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

<style scoped lang="scss">
.grid-wrapper {
  display: grid;
  grid-auto-columns: min-content 1fr auto;
  grid-auto-rows: min-content 1fr auto;
  background-color: #eee;
  position: relative;
  height: 100%;
  align-items: stretch;
}
.grid-top {
  grid-column: 1 / 3;

  .address-bar {
    display: grid;
    height: 64px;
    background-color: white;
    border-bottom: 1px solid #ddd;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.03);
    align-items: center;
    grid-auto-columns: min-content 1fr auto;

    .method-select {
      width: 200px;
      margin-left: 12px;
    }

    .address-input {
      grid-column: 2;
      margin-right: 12px;
    }
  }
}
.grid-left {
  min-width: 450px;
  padding: 10px;

  .options-panel {
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: white;
    padding: 16px;
    margin-bottom: 16px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.03);
    min-height: 100px;

    .options-panel-title {
      color: #333;
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 4px;
    }
  }
}
.grid-right {
  padding: 10px;

  .request-body-textarea {
    height: 100%;
    width: 100%;
  }
}
</style>
