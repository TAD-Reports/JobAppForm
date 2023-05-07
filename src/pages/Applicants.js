import React, { useState } from "react";
import * as XLSX from "xlsx";
import "./Applicants.css";
import jobLogo from "../../src/assets/pngwing.com.png";

function Applicants() {
    const [applicants, setApplicants] = useState([]);

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
            const data = new Uint8Array(event.target.result);
            const workbook = XLSX.read(data, { type: "array" });
            const worksheet = workbook.Sheets["Sheet1"]; // specify the sheet name
            // const worksheet = workbook.Sheets[workbook.SheetNames[0]]; // use the first sheet by default
            const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
            const headers = rows[0];
            const dataRows = rows.slice(1);
            const applicants = dataRows.map((row) => {
                return {
                    no: row[0],
                    positionTitle: row[1],
                    plantiliaItem: row[2],
                    salary: row[3],
                    monthlySalary: row[4],
                    education: row[5],
                    training: row[6],
                    experience: row[7],
                    eligibility: row[8],
                    competency: row[9],
                    placeOfAssignment: row[10],
                };
            });
            setApplicants(applicants);
        };
        reader.readAsArrayBuffer(file);
    };

    return (
        <div className="applicants">
            <div className="logo-container-applicant">
                <img
                    src={jobLogo}
                    alt="joblogo"
                    style={{
                        height: "80px",
                        width: "80px",
                    }}
                />
                <p className="logo-text-applicant">JOB POSITIONS DATABASE</p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>NO.</th>
                        <th>POSITION TITLE</th>
                        <th>PLANTILIA ITEM</th>
                        <th>SALARY/JOB PAY GRADE</th>
                        <th>MONTHLY SALARY</th>
                        <th>EDUCATION</th>
                        <th>TRAINING</th>
                        <th>EXPERIENCE</th>
                        <th>ELIGIBILITY</th>
                        <th>COMPETENCY</th>
                        <th>PLACE OF ASSIGNMENT</th>
                    </tr>
                </thead>
                <tbody>
                    {applicants.map((applicant, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{applicant.positionTitle}</td>
                            <td>{applicant.plantiliaItem}</td>
                            <td>{applicant.salary}</td>
                            <td>{applicant.monthlySalary}</td>
                            <td>{applicant.education}</td>
                            <td>{applicant.training}</td>
                            <td>{applicant.experience}</td>
                            <td>{applicant.eligibility}</td>
                            <td>{applicant.competency}</td>
                            <td>{applicant.placeOfAssignment}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Applicants;
