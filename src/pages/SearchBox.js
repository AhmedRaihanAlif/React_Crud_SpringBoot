import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { React, useState } from "react";
export const SearchBar=({setResults})=>{

    const [input, setInput] = useState("");

    const fetchData = (value) => {
      fetch("http://localhost:5000/api/contacts")
        .then((response) => response.json())
        .then((json) => {
          const results = json.filter((user) => {
            return (
              value &&
              user &&
              user.email &&
              user.email.toLowerCase().includes(value)
            );
          });
          setResults(results);
        });
    };
  
    const handleChange = (value) => {
      setInput(value);
      fetchData(value);
    };
   
return (
    
    <form style={{marginLeft:"330px"}} >
    <TextField
      id="search-bar"
      className="text"
      // onInput={(e) => {
      //   setSearchQuery(e.target.value);
      // }}
      label="Enter an Employee Id"
      variant="outlined"
      placeholder="Search..."
      size="small"
      value={input}
      onChange={(e) => handleChange(e.target.value)}
      style={{marginTop:"10%"}}
    />
    <IconButton type="submit" aria-label="search"  style={{marginTop:"10%"}}>
      <SearchIcon style={{ fill: "blue" }} />
    </IconButton>
  </form>
  
)
}