import React from "react";
import AppsIcon from "@mui/icons-material/Apps";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
const style = {
  // position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-0%, -0%)",
  width: 400,
  height: "100%",
  bgcolor: "black",
  boxShadow: 24,
  color: "white",
  p: 4,
};
function Navbar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className=" w-full">
      <div className="  h-24 w-full bg-white text-black ">
        <div className="p-2 justify-between">
          <div className="p-2">
            <div className=" float-left">
              <img
                src="https://thebrandbee.com/assets/imgs/logo/logo-black.webp"
                alt=""
                className="h-[70px] w-[70px]"
              />
            </div>
          </div>
          <div className="  mt-2  h-[60px]  md:ml-[330px] ">
            <div className="md:flex ml-24  h-[60px]">
              <div className="mt-2 hidden md:block  ">
                <ul className="flex  text-base font-semibold gap-9 justify-center">
                  <li>SERVICES</li>
                  <li>ABOUT US</li>
                  <li>SAMPLE WORK</li>
                  <li>OUR CLIENTS</li>
                  <li>INDUSTRIES WE SERVE</li>
                  <li>BLOG</li>
                </ul>
              </div>
              <div className="ml-10 mb-20 hidden md:block pb-20">
                <div className="w-24 h-10 p-2 bg-black font-semibold text-white ">
                  <h1>LET'S TALK</h1>
                </div>
              </div>
              <div className="md:ml-32 md:mb-20 md:pb-20 float-right ">
                <AppsIcon fontSize="large" className="" onClick={handleOpen} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modals */}
      <div>
        {/* <Button onClick={}>Open modal</Button> */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="float-right">
              <CloseIcon onClick={handleClose} fontSize="large" />
            </div>

            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </div>
      ;
    </div>
  );
}

export default Navbar;
