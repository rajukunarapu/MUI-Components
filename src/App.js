import { FormControl, FormLabel, FormControlLabel,Checkbox, Radio, RadioGroup, Stack, TextField, Autocomplete, MenuItem, Switch,Grid,Box} from '@mui/material'
import { useEffect, useState } from 'react'



const App = () => {

  const skills = ["HTml","Js","CSS","REact"]

  const [skill,setSkill] =  useState([])
  console.log({skill})
  const handleChange = (e)=>{
    const skil = e.target.name
    setSkill((prev)=>
      e.target.checked ? [...prev,skil] : prev.filter((s)=> s !== skil)
    )
  }

  const [experience,setExperience] =  useState(false)
  console.log({experience})
  const handleChange1 = (e)=>{
    setExperience(e.target.value)
  }


  const [language,setLanguage] = useState(null)
  console.log({language})
  const handleChange3 = (e,newValue)=>{
    setLanguage(newValue)
  }

  const [option,setOption] = useState('')
  console.log({option})

  const [switch1,setSwitch1] = useState(false)
  console.log({switch1})
  useEffect(()=>{
    document.body.style.backgroundColor = switch1? "black" : "white"
    document.body.style.color = switch1? "white" : "black"
    return ()=>{
      document.body.style.backgroundColor = ""
      document.body.style.colorolor = ""
    }
  },[switch1])

  return (
    <>
     {/* <Stack bgcolor={"secondary.main"} maxWidth={400}  >
       <Typography variant='h1' >Hello</Typography>

    </Stack> 
 
    <Container>
      <Typography variant='h1' >You are using React 18.3.1.</Typography>
    </Container> 

    <Box bgcolor={"secondary.main"} maxWidth={250} >
      <Typography variant='h1' >Hello </Typography>
    </Box>  */}

    <Stack spacing={2} >
      <FormControl   >
          <FormLabel>Select skills</FormLabel>
            <FormControlLabel label={"HTml"} name={"html"} control={<Checkbox  checked={skill.includes('html')} onChange={handleChange} />} />
            <FormControlLabel label={"Css"} name={"css"} control={<Checkbox  checked={skill.includes('css')} onChange={handleChange} />} />
            <FormControlLabel label={"Js"} name={"js"} control={<Checkbox  checked={skill.includes('js')} onChange={handleChange} />} />
            <FormControlLabel label={"React"} name={"react"} control={<Checkbox  checked={skill.includes('react')} onChange={handleChange} />} />
      </FormControl>

      <FormControl >
          <FormLabel>Select your Experience</FormLabel>
          <RadioGroup value={experience} onChange={handleChange1} >
            <FormControlLabel label={"0-1 Years"} value={"0-1 Years"} control={<Radio />} />
            <FormControlLabel label={"1-2 Years"} value={"1-2 Years"} control={<Radio/>} />
            <FormControlLabel label={"2-3 Years"} value={"2-3 Years"} control={<Radio/>} />
            <FormControlLabel label={"3-4 Years"} value={"3-4 Years"} control={<Radio/>} />
          </RadioGroup>
      </FormControl> 


      <Autocomplete 
      options={skills}
      value={language} 
      onChange ={handleChange3}
      renderInput={(params)=><TextField  label="Select your skills"  sx={{maxWidth:250}} {...params} />}

      />

      <TextField  value={option} onChange={(e)=>setOption(e.target.value)} sx={{maxWidth:250}} label="Choose option" select  >
        <MenuItem value="Option1" >Option1</MenuItem>
        <MenuItem value="Option2" >Option2</MenuItem>
        <MenuItem value="Option3" >Option3</MenuItem>
        <MenuItem value="Option4" >Option4</MenuItem>
      </TextField>

      <FormControlLabel  label="Dark mode" control={<Switch color='secondary' checked={switch1} onChange={(e)=>setSwitch1(e.target.checked)} />} />

    </Stack>

   <Grid container bgcolor={"info.light"} my={2} >
      <Grid item padding={2} xs={12} sm={6} md={3} >
        <Box  bgcolor={"secondary.light"} padding={2} >Item1</Box>
      </Grid>

      <Grid item padding={2} xs={12} sm={6} md={3} >
        <Box  bgcolor={"error.light"} padding={2}  >Item2</Box>
      </Grid>

      <Grid item padding={2} xs={12} sm={6} md={3} >
        <Box  bgcolor={"success.light"} padding={2}  >Item3</Box>
      </Grid>

      <Grid item padding={2} xs={12} sm={6} md={3} >
        <Box  bgcolor={"warning.light"} padding={2}  >Item4</Box>
      </Grid>
     
   </Grid>

    </>
  )
}

export default App 