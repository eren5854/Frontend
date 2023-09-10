const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const user = {
    id: 1,
    fullName: "İhsan Eren Delibaş",
    title: "Mekatronik Mühendisi",
    about:  `<div class="show-more-module--content--cjTh0 show-more-module--with-gradient--1ZDrA" style="max-height:32rem"><div tabindex="0"><div data-purpose="instructor-description"><p>Hello! I'm <strong>Taner Saydam</strong>, an experienced software developer and instructor.</p><p>Through my courses on <strong>Udemy</strong> and <strong>YouTube</strong>, I help participants develop their software skills from beginner to advanced levels.</p><p>Throughout my professional career, I have successfully completed projects in various companies and I am eager to share everything I have learned with you.</p><p>My courses on <strong>Udemy </strong>cover programming languages, web and mobile application development, and much more.</p><p>My courses focus on helping students acquire strong foundations and practical knowledge for real-world applications.</p></div></div></div>`,
    phone: "0534 717 05 68",
    email: "ihsanerendelibas@gmail.com"

}

const skills = [
    {
        title: "HTML",
        logo: "img/html.png"
    },
    {
        title: "CSS",
        logo: "img/css.png"
    },
    {
        title: "JS",
        logo: "img/js.png"
    },
    {
        title: "C#",
        logo: "img/csharp.png"
    },
    {
        title: "MS SQL",
        logo: "img/mssql.png"
    }
]

const medias = [
    {
        title: "github",
        link: "https://github.com/eren5854?tab=repositories",
        icon: "bx bxl-github"
    },
    {
        title: "linkedin",
        link: "https://www.linkedin.com/in/ihsan-eren-deliba%C5%9F-208581159/",
        icon: "bx bxl-linkedin"
    },
    {
        title: "youtube",
        link: "#",
        icon: "bx bxl-youtube"
    },
    {
        title: "medium",
        link: "#",
        icon: "bx bxl-medium"
    }
]

const experiences = [
    {
        title: "Intern Engineer",
        subTitle:"By Partners Group",
        date:"January2018 - February 2018",
        description:"",
    },
    {
        title: "Intern Engineer",
        subTitle:"Balsu Gıda",
        date:"May 2019 - June 2019",
        description:"",
    },
    {
        title: "Intern Engineer",
        subTitle:"Xinerji Software",
        date:"July 2019-August 2019",
        description:"",
    },
    {
        title: "Intern Engineer",
        subTitle:"Yektamot",
        date:"February 2022 - June 2022",
        description:"",
    },
    {
        title: "Test Engineer",
        subTitle:"YMTM Technology",
        date:"August 2022 - August 2023",
        description:"",
    }
]

const educations = [
    {
        title:"Mechanical Engineering",
        faculty: "Technology Faculty",
        degree: "Licance",
        date: "2017-2022",
    },
    {
        title:"Computer Engineering",
        faculty: "Institute of Natural Sciences",
        degree: "Master Degree",
        date: "2023-Present",
    }
]

const referances = [
    {
        name:"Mustafa Çağrı Kutlu",
        title:"Doctoral faculty member",
        subTitle:"Sakarya Uygulamalı Bilimler Üniversitesi",
        phone:"+90 05xx xxx xx xx",
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

// app.get("/api/skills", (req,res) => {
//     res.json(skills);
// });

// app.post("/api/user/create", (req, res)=>{
//     const body = req.body;
//     id++;
//     const data = {
//         id: id,
//         fullName: body.title,
//         title: "",
//         about: "",
//     }
//     todos.push(data);
//     res.json({message: "Create is succes"});
// });


app.listen(5000,()=> console.log("api running"));