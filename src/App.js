import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import * as React from 'react';
import 'react-image-crop/dist/ReactCrop.css';
import Crop from './Crop';



const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


function App() {
  const [open, setOpen] = React.useState(false);
  // const [src, setSrc] = React.useState("");
  // const [file, setFiles] = React.useState([]);
 

  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleFile = (acceptedFiles )=>{
  //     return setFiles(acceptedFiles.map(file => Object.assign(file, {
  //       preview: URL.createObjectURL(file)
  //     })));      
  // }
  
 



  return (
    <>
    
          <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Slide in alert dialog
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent>
          {/* <Dropzone onDrop={acceptedFiles => handleFile(acceptedFiles)}>
              {({getRootProps, getInputProps}) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p style={{padding:"20px",height:"200px",border:"3px dotted #000",borderRadius:"5px"}}>Drag 'n' drop some files here, or click to select files</p>
                  </div>
                </section>
              )}
          </Dropzone> */}
          <Crop/>
         
          {/* <img src={file.map((item)=>(item.preview))}/> */}

        </DialogContent>
        <DialogActions>
          <Button variant="contained" color="error" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color="success" onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
{/* ================================== */}
    
    </>
  );
}

export default App;
