<template>
  <div class="row justify-content-center">
    <div class="col-12 col-md-6 col-lg-4">
      <form class="border border-secondary rounded-3 p-5 mt-5">
          <div class="mb-3">
          <h3>-- Add new -- </h3>
        </div>
        <div class="mb-3">
          <label class="form-label">Header</label>
          <input type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <label class="form-label">URL</label>
          <input type="text" class="form-control" />
        </div>
        <div class="mb-3">
          <select class="form-select" id="floatingSelect" aria-label="Floating label select example">
            <option selected>Category</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div class="mb-3 form-floating">
          <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
          <label for="floatingTextarea2">Comments</label>
        </div>
        <div class="mb-3">
          <button type="reset" class="btn btn-warning me-1">Cancel</button>
          <button type="submit" class="btn btn-success ms-1">Save</button>
        </div>
      </form>
    </div>
  </div>
</template>