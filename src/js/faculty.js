(function () {
    // Array of Faculty

    const faculty = [
        {
            name : "Sundarjeet Kaur Bhatia",
            qualification : "M.Phil.",
            post : "Associate Professor", 
            id : 0,
            email : "skbhatiadu@gmail.com"
        },
        {
            name : "Daljeet IP Singh",
            qualification : "M.Phil.",
            post : "Associate Professor", 
            id : 1,
            email : "daljeetips@yahoo.co.in"
        },
        {
            name : "Virender Kumar Mehra",
            qualification : "M.Phil.",
            post : "Associate Professor", 
            id : 2,
            email : "virender.mehra828@gmail.com"
        },
        {
            name : "Satish Verma",
            qualification : "PhD",
            post : "Associate Professor", 
            id : 3,
            email : "satishvermadu@gmail.com"
        },
        {
            name : "Jasvinder Bhalla",
            qualification : "M.A.",
            post : "Associate Professor", 
            id : 4,
            email : "jasvinderbhalladu@gmail.com"
        },
        {
            name : "Dharmendra Kumar",
            qualification : "M.Sc.",
            post : "Assistant Professor", 
            id : 5,
            email : "dhku06@gmail.com"
        },
        {
            name : "Charanpreet Kaur",
            qualification : "M.Phil.",
            post : "Assistant Professor", 
            id : 6,
            email : "charanpreet@arneetintl.com"
        },
        {
            name : "Amarpreet Kaur Sabherwal",
            qualification : "M.Phil.",
            post : "Assistant Professor", 
            id : 7,
            email : "preetimannu@yahoo.co.in"
        }
    ]

    const facultyBlock = document.querySelector('.faculty-member-container');

    const dialogBox = document.querySelector('.member-dialog-area');

    const displayFacultyList = (parent, array) => {
        parent.innerHTML = " ";
        
        array.map((member,i) => (
            parent.innerHTML += `
            <div class="member-container">
                <a href="#" id="${i}" class="member-link">${member.name}</a>
            </div>
            `
        )).join('');
    }

    const dialog = (id) => {
        const {name, qualification, post, email} = faculty[id];
        return `
        <div class="overlay">
            <div class="member-dialog-box middle">
                <div class="member-image-container ">
                    <img src="./../images/faculty-images/${id}.jpeg" alt="${name}" class="member-image">
                </div>
                <div class="member-details">
                    <h2 class="member-name">${name}</h2>
                    <h3 class="member-info">${qualification}</h3>
                    <h3 class="member-info">${post}</h3>
                    <h3 class="member-info">${email}</h3>
                </div>
                <a href="#" class="close">X</a>
            </div>
        </div>
        `
    }

    const openDialog = e => {
        e.preventDefault();
        if(e.target.classList.contains("member-link")) {
            dialogBox.innerHTML = '';
            dialogBox.innerHTML = dialog(e.target.id);
        }
    }

    const closeDialog = e => {
        if(e.target.classList.contains("close")) {
            e.target.parentElement.parentElement.remove();
        }
    }

    facultyBlock.addEventListener('click', openDialog);

    dialogBox.addEventListener('click', closeDialog);

    displayFacultyList(facultyBlock, faculty);
})();