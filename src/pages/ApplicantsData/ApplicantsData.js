import "./ApplicantsData.css";
import jobLogo from "../../assets/jobLogo.png";
import {
    Button,
    IconButton,
    InputAdornment,
    TextField,
    styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ApplicantsDataTable from "../../components/Tables/ApplicantsData";
import AddIcon from "@mui/icons-material/Add";

function ApplicantsData() {
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
                <p className="logo-text-applicant">JOB APPLICATION DATABASE</p>
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
            <ApplicantsDataTable />
            <label htmlFor="upload-button">
                <UploadButton
                    variant="contained"
                    component="label"
                    sx={{ left: "8px", top: "10px" }}
                >
                    IMPORT DATA
                    <input id="upload-button" accept=".xlsm" hidden />
                    <AddIcon sx={{ marginLeft: "10px", top: "100px" }} />
                </UploadButton>
            </label>
        </div>
    );
}

export default ApplicantsData;
