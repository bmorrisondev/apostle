<template>
  <div class="body-main-container grid-wrapper">
    <div class='grid-top'>
      <div class="address-bar">
        <select class="method-select">
          <option v-for="method in httpMethods" :key="method">{{method}}</option>
        </select>
        <input class="address-input" type="text" placeholder="API Endpoint Address">
        <button class="address-submit">
           <font-awesome-icon icon="search" />
        </button>
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
    display: flex;
    height: auto;
    background-color: white;
    border-bottom: 1px solid #ddd;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.03);
    justify-content: stretch;
    align-items: stretch;
    padding: 1rem 1rem 1rem 1rem;

    .method-select {
      -webkit-appearance: none;
      -moz-appearance: none;
      background-position: right 50%;
      background-repeat: no-repeat;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDZFNDEwNjlGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDZFNDEwNkFGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NkU0MTA2N0Y3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NkU0MTA2OEY3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuGsgwQAAAA5SURBVHjaYvz//z8DOYCJgUxAf42MQIzTk0D/M+KzkRGPoQSdykiKJrBGpOhgJFYTWNEIiEeAAAMAzNENEOH+do8AAAAASUVORK5CYII=);
      padding: 10px 15px;
      border-radius: 0;
		  border: 1px solid transparent;
      text-align: center;
    }

    .address-input {
		  padding: 10px 15px;
		  border: 1px solid transparent;
      width:100%;
      background: #6d6a6a1a;
    }
    .address-submit{
      background:#094074;
		  padding: 10px 15px;
		  border: 1px solid transparent;
      color:white;
      font-weight: bolder;
    }
  }
}
.grid-left {
  min-width: 450px;
  padding: 10px;

  .options-panel {
    border: 1px solid #ddd;
    border-radius: 3px;
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
    border: none;
    resize: none;
  }
}
</style>
