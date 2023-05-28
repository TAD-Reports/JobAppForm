import React from "react";
import { motion } from "framer-motion";
import { Box, Button, Grid } from "@mui/material";
import "./container.css";
import MenuItems from "../../components/Menu-Items";
import BodyContent from "../../assets/da-for-landingpage.jpg";

export default function LandingPage() {
    return (
        <Box className="Background">
            <Grid
                container
                // justifyContent="flex-start"
                // alignItems="flex-start"
                style={{ borderWidth: "2px", width: "800px" }}
            >
                <MenuItems />

                <motion.h1
                    initial={{ x: -1000, opacity: 0 }}
                    animate={{ x: [-10, 350], opacity: 1 }}
                    transition={{ duration: 1, delay: 0.1 }}
                    style={{
                        marginTop: "150px",
                        marginRight: "50px",
                        color: "white",
                        fontSize: "70px",
                    }}
                >
                    Welcome to PhilFIDA
                </motion.h1>

                <motion.h2
                    initial={{ x: -1000, opacity: 0 }}
                    animate={{ x: [-10, 350], opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    style={{
                        marginTop: "20px",
                        marginRight: "50px",
                        color: "white",
                        fontWeight: "normal",
                    }}
                >
                    At PhilFIDA, we are passionate about fibercrops, supporting
                    farmers, and promoting the use of fiber products.Our task
                    agency is dedicated to fostering growth and sustainability
                    in the fiber industry. Whether you're a farmer looking to
                    enhance your crop yield, a manufacturer seeking quality
                    fiber materials, or an enthusiast interested in learning
                    about the wonders of fiber, we're here to help. Join us in
                    this fiber revolution!
                    <br />
                </motion.h2>
                <Box
                    sx={{
                        display: "flex-end",
                        justifyContent: "flex-end",
                        position: "absolute",
                        alignContent: "flex-end",
                    }}
                >
                    <img
                        src={BodyContent}
                        alt="BodyContent"
                        style={{
                            marginTop: "225px",
                            marginLeft: "1236px",
                            marginBottom: "10",
                            width: "1000px",
                            height: "500px",
                            objectFit: "cover",
                        }}
                    />
                </Box>
            </Grid>

            <Box
                sx={{
                    marginTop: "50px",
                    position: "absolute",
                    display: "flex",
                    height: "50px",
                    alignItems: "left",
                }}
            >
                <motion.div
                    initial={{ x: -1000, opacity: 0 }}
                    animate={{ x: [-10, 300], opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <Button
                        type="input"
                        variant="contained"
                        sx={{
                            fontFamily: "Poppins",
                            fontSize: "20px",
                            width: "200px",
                            height: "50px",
                            marginLeft: "50px",
                            backgroundColor: "#76a66e",
                            "&:hover": {
                                textShadow:
                                    "0 0 0.5rem rgba(255, 255, 255, 0.75)",
                                color: "black",
                                backgroundColor: "#60ec60",
                            },
                        }}
                    >
                        Apply Now!
                    </Button>
                </motion.div>
                <motion.div
                    initial={{ x: -1000, opacity: 0 }}
                    animate={{ x: [-10, 300], opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <Button
                        type="input"
                        variant="contained"
                        sx={{
                            fontFamily: "Poppins",
                            fontSize: "20px",
                            width: "200px",
                            height: "50px",
                            marginLeft: "50px",
                            backgroundColor: "#76a66e",
                            "&:hover": {
                                textShadow:
                                    "0 0 0.5rem rgba(255, 255, 255, 0.75)",
                                color: "black",
                                backgroundColor: "#60ec60",
                            },
                        }}
                    >
                        Go Back
                    </Button>
                </motion.div>
            </Box>
        </Box>
    );
}
