import React from "react";
import "./SearchForm.css";

const SearchForm = props => (


<form>
<div class="form-group">
  <label for="exampleFormControlInput1">Message Title</label>
  <input type="title" class="form-control" id="exampleFormControlInput1" placeholder="Title"/>
</div>



<div class="form-group">
  <label for="exampleFormControlTextarea1">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
</div>
<button type="submit" class="btn btn-primary">Toss it into the sea!</button>
</form>
);

export default SearchForm;
