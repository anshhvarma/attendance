document = document.getElementById("form1").addEventListener("submit", submitFun1);

var studentDataArr = JSON.parse(localStorage.getItem("studentData")) || [];

const DATA = [
    {
        "id": "230600205",
        "name": "ANANYA VISHAL MAKKAR",
        "roll": 201,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600062",
        "name": "ANKITA DHANRAJ PRASAD",
        "roll": 202,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600575",
        "name": "HARSHAL GAJANAN SHEREKAR",
        "roll": 203,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600015",
        "name": "HRITIKA DHANANJAY DAS",
        "roll": 204,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600001",
        "name": "KARINA DINESH CHOUDHARY",
        "roll": 205,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600024",
        "name": "KARISHMA SHESHNATH GUPTA",
        "roll": 206,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600036",
        "name": "KHUSHI RAKESHKUMAR KHATRI",
        "roll": 207,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600080",
        "name": "KIRTI SHYAMSHANKAR TIWARI",
        "roll": 208,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600208",
        "name": "MANASVI SANJAY JUNGHARE",
        "roll": 209,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600051",
        "name": "MANASVI VINAYAK PALAV",
        "roll": 210,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600020",
        "name": "NEHA KIRAN GOREGAONKAR",
        "roll": 211,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600026",
        "name": "NIYATI MAHESH GUPTA",
        "roll": 212,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600013",
        "name": "POOJA ASHOK CHOURASIYA",
        "roll": 213,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600030",
        "name": "POOJA PANNALAL JAISWAR",
        "roll": 214,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600014",
        "name": "POOJITHA VENKATRAMANA DABBURI",
        "roll": 215,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600045",
        "name": "PRATIDHONY HRUSHIKESH MAHARANA",
        "roll": 216,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600098",
        "name": "RAJYASHRI DULNEEYA PRADEEP YADAV",
        "roll": 217,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600066",
        "name": "RIDDHI PRADEEP SHETKAR",
        "roll": 218,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600067",
        "name": "RIYA RAJU BAILUR",
        "roll": 219,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600065",
        "name": "SARA SOHAN RAWAT",
        "roll": 220,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600071",
        "name": "SAYLI SANDIP UTEKAR",
        "roll": 221,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600128",
        "name": "SHREYA GANESH GUPTA",
        "roll": 222,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600077",
        "name": "SHREYA KULDEEP BHANDARI",
        "roll": 223,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600078",
        "name": "SHREYA RAJNIKANT SHUKLA",
        "roll": 224,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600009",
        "name": "SHRUTI RAJU BHISE",
        "roll": 225,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600048",
        "name": "SIYA RAJESH MISHRA",
        "roll": 226,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600053",
        "name": "SMRITI SANTOSH PANDEY",
        "roll": 227,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600129",
        "name": "SNEHA SANTOSH BHANAGE",
        "roll": 228,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600207",
        "name": "SONALI SANTOSH CHAUDHARI",
        "roll": 229,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600012",
        "name": "SONALI SANTOSH CHAVAN",
        "roll": 230,
        "branch": "Computer Engineering"
    },
    {
        "id": "230600100",
        "name": "SUPRIYA SURENDRA YADAV",
        "roll": 231,
        "branch": "Computer Engineering"
    }
];
function submitFun1(e) {
    document.querySelector("#tbody").innerHTML = "";
    e.preventDefault();
    var name = document.querySelector("#name").value;
    var number = document.querySelector("#number").value;
    var Branch = document.querySelector("#Branch").value;
    var rollNo = document.querySelector("#rollNo").value;

    var studentObj = {
        name: name,
        number: number,
        Branch: Branch,
        rollNo: rollNo
    }

    studentDataArr.push(studentObj);
    localStorage.setItem("studentData", JSON.stringify(studentDataArr));
    document.querySelector("#form1").reset();
    alert("Student Added Successfully");

    displayFun(studentDataArr)
}

document.getElementById('generatePdf').addEventListener('click', function () {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Get the current date for file naming
    const today = new Date();
    const date = today.toISOString().split('T')[0]; // Format: YYYY-MM-DD

    // Define the table content
    const table = document.querySelector("table");

    // Use autoTable plugin to generate PDF from the HTML table
    doc.text("Student Attendance", 10, 10); // Title of the PDF
    doc.text(`Date: ${date}`, 10, 20); // Adding date below the title

    doc.autoTable({
        html: table, // Take table content from HTML
        startY: 30,  // Adjusted starting position for the table to avoid overlapping with the text
    });

    // Save the PDF file with the current date in the file name
    doc.save(`attendance-${date}.pdf`);
});




function displayFun(studentDataArr) {

    var count = 1;
    studentDataArr.map(function (item) {

        var tr = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.innerHTML = count++
        var td2 = document.createElement("td");
        td2.innerHTML = item.name;
        var td3 = document.createElement("td");
        td3.innerHTML = item.number;
        var td4 = document.createElement("td");
        td4.innerHTML = item.Branch;
        var td5 = document.createElement("td");
        td5.innerHTML = item.rollNo;
        var td6 = document.createElement("td");
        var btn1 = document.createElement("button");
        btn1.innerHTML = "P";
        btn1.addEventListener("click", function () {
            td6.innerHTML = "<button >Present</button>";
        });
        var btn2 = document.createElement("button");
        btn2.innerHTML = "A";
        btn2.addEventListener("click", function () {
            td6.innerHTML = "<button id='absent'>Absent</button>";
        });
        td6.classList.add("td6");
        td6.append(btn1, btn2);

        tr.append(td1, td2, td3, td4, td5, td6);

        document.querySelector("#tbody").append(tr);

    });


}
displayFun(studentDataArr);

// Assuming `DATA` is already available
// Assuming `DATA` is already available
const tbody = document.getElementById('tbody');

// Function to populate the table
function populateTable() {
    DATA.forEach((student, index) => {
        // Create a new row for each student
        const row = document.createElement('tr');

        // Insert cells into the row
        row.innerHTML = `
      <td>${index + 1}</td>
      <td>${student.name}</td>
      <td>${student.roll}</td>
      <td>${student.branch}</td>
      <td>${student.id}</td>
      <td class="td6">
        <button class="present-btn">P</button>
        <button class="absent-btn">A</button>
      </td>
    `;

        // Get the buttons for attendance within the row
        const presentBtn = row.querySelector('.present-btn');
        const absentBtn = row.querySelector('.absent-btn');
        const td6 = row.querySelector('.td6');

        // Add event listeners to buttons
        presentBtn.addEventListener('click', () => {
            td6.innerHTML = '<button >Present</button>';
        });

        absentBtn.addEventListener('click', () => {
            td6.innerHTML = "<button id='absent'>Absent</button>";
        });

        // Append the row to the tbody
        tbody.appendChild(row);
    });
}

// Call the function to populate the table when the page loads
document.addEventListener('DOMContentLoaded', populateTable);
