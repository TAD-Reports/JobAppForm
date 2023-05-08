import "./Applicants.css";
import jobLogo from "../../src/assets/jobLogo.png";
import {
    Button,
    IconButton,
    InputAdornment,
    TextField,
    styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ApplicantsTable from "../components/Tables/index";

import AddIcon from "@mui/icons-material/Add";

function Applicants() {
    const UploadButton = styled(Button)({
        backgroundColor: "#76a66e",
        left: "8px",
        top: "10px",
        "&:hover": {
            backgroundColor: "#9dff8c",
            color: "#2f2f2f",
        },
    });

    return (
        <div className="applicants">
            <div className="logo-container-applicant">
                <img
                    src={jobLogo}
                    alt="joblogo"
                    style={{
                        height: "150px",
                        width: "150px",
                    }}
                />
                <p className="logo-text-applicant">JOB POSITIONS LIBRARY</p>
            </div>
            <div className="SearchField">
                <TextField
                    label="Search"
                    size="small"
                    sx={{ width: "300px" }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
                {/* <TextField
                    label="Search"
                    sx={{ width: "300px" }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment>
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                /> */}
            </div>
            <ApplicantsTable />
            <label htmlFor="upload-button">
                <UploadButton
                    variant="contained"
                    component="label"
                    sx={{ left: "8px", top: "10px" }}
                >
                    ADD POSITION
                    <input id="upload-button" hidden />
                    <AddIcon sx={{ marginLeft: "10px", top: "100px" }} />
                </UploadButton>
            </label>
        </div>
    );
}

export default Applicants;
