const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

let user = {
    id: 1,
    userName: "İhsan Eren Delibaş",
    userTitle: "Mekatronik Mühendisi",
    userAbout:  `Lorem ipsum dolor sit amet, consectetur adipisicing elit. At neque obcaecati recusandae cum perferendis error aspernatur laborum fugit? Dolor ratione incidunt voluptatibus cupiditate nemo aspernatur, repellat officiis saepe esse odio.
    Veniam sed hic voluptates quidem molestiae eos modi rem sit explicabo voluptatibus aperiam tempore enim quos illum optio ipsa ratione eum totam dolorum in assumenda, accusamus odio dolor aspernatur. Ipsam!
    Vitae fuga rem inventore perferendis, corrupti adipisci? Eveniet minus ad nihil cumque! Voluptatem labore excepturi alias iste et ab minus ipsum perferendis consequuntur, obcaecati quia nostrum nemo nihil quas cupiditate.
    Ut, velit corporis. Qui ullam voluptate, temporibus asperiores ex molestias repudiandae rem. Alias quidem, praesentium natus harum ipsa tempora non temporibus architecto perspiciatis ullam, nam voluptatibus. Aperiam recusandae reprehenderit quidem?
    Odio eius sunt aut aliquid ab cupiditate incidunt veritatis. Repellat labore blanditiis est dolor a ex ipsa, ut optio quas minus nostrum quidem quia corrupti modi sed maiores dicta? Velit.`,
    userPhone: "0534 717 05 68",
    userEmail: "ihsanerendelibas@gmail.com",
    userAddress: "Sakarya/Adapazarı"
}

let skills = [
    {
        id: 0,
        title: "HTML",
        logo: "img/html.png"
    },
    {
        id: 1,
        title: "CSS",
        logo: "img/css.png"
    },
    {
        id: 2,
        title: "JS",
        logo: "img/js.png"
    },
    {
        id: 3,
        title: "C#",
        logo: "img/csharp.png"
    },
    {
        id:4,
        title: "MS SQL",
        logo: "img/mssql.png"
    }
]

let medias = [
    {
        id: 0,
        title: "github",
        link: "https://github.com/eren5854?tab=repositories",
        icon: "bx bxl-github"
    },
    {
        id: 1,
        title: "linkedin",
        link: "https://www.linkedin.com/in/ihsan-eren-deliba%C5%9F-208581159/",
        icon: "bx bxl-linkedin"
    },
    {
        id: 2,
        title: "youtube",
        link: "#",
        icon: "bx bxl-youtube"
    },
    {
        id: 3,
        title: "medium",
        link: "#",
        icon: "bx bxl-medium"
    }
]

let experiences = [
    {
        id: 0,
        title: "Intern Engineer",
        subTitle:"By Partners Group",
        date:"January2018 - February 2018",
        description:"",
    },
    {
        id: 1,
        title: "Intern Engineer",
        subTitle:"Balsu Gıda",
        date:"May 2019 - June 2019",
        description:"",
    },
    {
        id: 2,
        title: "Intern Engineer",
        subTitle:"Xinerji Software",
        date:"July 2019-August 2019",
        description:"",
    },
    {
        id: 3,
        title: "Intern Engineer",
        subTitle:"Yektamot",
        date:"February 2022 - June 2022",
        description:"",
    },
    {
        id: 4,
        title: "Test Engineer",
        subTitle:"YMTM Technology",
        date:"August 2022 - August 2023",
        description:"",
    }
]

let educations = [
    {
        id: 0,
        title:"Mechanical Engineering",
        faculty: "Technology Faculty",
        degree: "Licance",
        date: "2017-2022",
    },
    {
        id: 1,
        title:"Computer Engineering",
        faculty: "Institute of Natural Sciences",
        degree: "Master Degree",
        date: "2023-Present",
    }
]

let referances = [
    {
        id: 0,
        name:"Mustafa Çağrı Kutlu",
        title:"Doctoral faculty member",
        subTitle:"Sakarya Uygulamalı Bilimler Üniversitesi",
        phone:"05xx xxx xx xx",
        phoneIcon:"fas fa-phone contact-icon",
        email:"xxxxx@xxxxxx",
        emailIcon:"fas fa-envelope contact-icon"
    }
]

let id = 0;

app.get("/api/get", (req,res) => {
    const information = {
        user: user,
        skills: skills,
        medias: medias,
        experiences: experiences,
        educations: educations,
        referances: referances
    }
    res.json(information);
});

app.post("/api/set", (req,res)=>{
    const body = req.body;
    user = body.user;
    skills = body.skills;
    medias = body.medias;
    experiences = body.experiences;
    educations = body.educations;
    referances = body.referances;

    res.json({message: "Update succes"});
});

const port = process.env.PORT || 3000;
app.listen(port,()=> console.log("api running"));