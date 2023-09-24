import React from "react";

export default function Attractions() {
  return (
    <>
      <div class="container mt-5">
        <div class="row glass p-3">
          <div class="col-md-3">
            <select class="form-control">
              <option>Dropdown 1</option>
              <option>Dropdown 1</option>
              <option>Dropdown 1</option>
            </select>
          </div>
          <div class="col-md-3">
            <select class="form-control">
              <option>Dropdown 2</option>
              <option>Dropdown 2</option>
              <option>Dropdown 2</option>
            </select>
          </div>
          <div class="col-md-6">
            <input type="text" class="form-control" placeholder="Search..." />
          </div>
        </div>
      </div>
    </>
  );
}
