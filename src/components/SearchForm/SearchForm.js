import React from "react";
import "./SearchForm.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
const SearchForm = props => (
  // <form className="search">
  //   <div className="form-group">
  //     <label htmlFor="breed">Breed Name:</label>
  //     <input
  //       value={props.search}
  //       onChange={props.handleInputChange}
  //       name="breed"
  //       list="breeds"
  //       type="text"
  //       className="form-control"
  //       placeholder="Type in a dog breed to begin"
  //       id="breed"
  //     />
  //     <datalist id="breeds">
  //       {props.breeds.map(breed => <option value={breed} key={breed} />)}
  //     </datalist>
  //     <button
  //       type="submit"
  //       onClick={props.handleFormSubmit}
  //       className="btn btn-success"
  //     >
  //       Search
  //     </button>
  //   </div>
  // </form>

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
