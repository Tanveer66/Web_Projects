import "../../StyledSheets/HomePageCSS/Search.css";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Button from '@mui/material/Button';

function Search() {
  return (
    <div>
      <div className="Search-div">
        
        <div className="radio-btn-div">
          <FormControl sx={{marginLeft:'6rem' , marginTop:'1rem'}}>
            
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="one Seater"
                control={<Radio/>}
                label="One Seater"
                
                sx={{color:'rgba(255,165,64,255)' , fontStyle:'oblique'}}
              />
              <FormControlLabel value="Two Seater" control={<Radio/>} label="Two Seater" 
              sx={{color:'rgba(255,165,64,255)' , fontStyle:'oblique'}}/>
              <FormControlLabel
                value="Three Seater"
                control={<Radio />}
                label="Three Seater"
                sx={{color:'rgba(255,165,64,255)' , fontStyle:'oblique'}}
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="radio-btn-div" style={{marginTop:'11rem'}}>
        <input class="form-control-sm" type="text" placeholder="City" aria-label="default input example" 
        style={{height:'3rem' , width:'20rem', backgroundColor:'rgb(23, 25, 27)' , marginTop:'1rem' , marginLeft:'8rem' , 
        borderTop:'none' , borderLeft:'none' , borderRight:'none' , borderBottomColor:'rgba(255,165,64,255)' , color:'rgba(255,165,64,255)'
        }}
        />
        </div>
      
        <Button variant="contained" sx={{backgroundColor:'rgba(255,165,64,255)' , color:'black' , '&:hover': {
              backgroundColor: 'black', color: 'rgba(255,165,64,255)'} , fontStyle:'oblique' , fontWeight:623 , marginTop:'20rem' , marginLeft:'24rem' }}>
         Search
        </Button>
      

      </div>

      
    </div>
  );
}

export default Search;
