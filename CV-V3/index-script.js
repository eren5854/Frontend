get();
let count = 0;
function get(){
    document.getElementById("blog").style.display = "none";
    document.getElementById("spinner").style.display = "flex";
    document.getElementById("error").style.display = "none";
    
    setTimeout(()=>{
        axios.get("http://localhost:5000/api/get")
        .then(res => {
            const myData = res.data;
            setMyInformation(myData.user);
            setMySkills(myData.skills);
            setMyMedias(myData.medias);
            setMyExperiences(myData.experiences);
            setMyEducations(myData.educations);
            setMyReferaces(myData.referances)

            document.getElementById("blog").style.display = "flex";
            document.getElementById("spinner").style.display = "none";
        })
        .catch(err=>{
            console.log(err);
            // if(count <= 3){
            //     location.reload();
            //     count++;
            // }
            // if(count === 3){
            //     document.getElementById("spinner").style.display = "none";
            //     document.getElementById("error").style.display = "flex";
            //     count = 3;
            // }
            location.reload();
        });
    },1000);

}



function setMyInformation(user){
        document.getElementById("name").innerText = user.fullName;
        document.getElementById("title").innerText = user.title;
        document.getElementById("userPhone").innerText = user.phone;
        document.getElementById("userEmail").innerText = user.email;
        document.getElementById("aboutText").innerHTML = user.about;
        console.log(user);
}

function setMySkills(skills){
        let text = "";
        for(let skill of skills){
            text += `
            <div class="progress">
                <div class="my-2">${skill.title}</div>
                <img class="mssql" src="${skill.logo}"> 
            </div>
            `
        }
        document.getElementById("skills").innerHTML = text;
        console.log(skills);
}

function setMyMedias(medias){
    let text = "";
    for(let media of medias){
        text += `
            <div class="row mb-2">
                <div class="col-auto">
                    <a href="${media.link}"><i class="${media.icon}"></i></a>
                </div>
            </div>
        `
    }
    document.getElementById("medias").innerHTML = text;
    console.log(medias);
}

function setMyExperiences(experiences){
    let text = "";
    for(let experience of experiences){
        text += `
            <div class="details">
                <div class="year">${experience.date}</div>
                    <div class="info">
                        <p class="title"><b>${experience.title}</b>-${experience.subTitle}</p>
                    </div>
            </div>
        `
    }
    document.getElementById("experiences").innerHTML = text;
    console.log(experiences);
}

function setMyEducations(educations){
    let text = "";
    for(let education of educations){
        text += `
            <div class="details">
                <div class="year">${education.date}</div>
                <div class="info">
                    <p class="title"><b>${education.title} </b>- ${education.faculty} - ${education.degree}</p>
                </div>
            </div>
        `
    }
    document.getElementById("educations").innerHTML = text;
    console.log(educations);
}

function setMyReferaces(referances){
    let text = "";
    for(let referance of referances){
        text += `
        <div class="details-referance">
            <div class="name"><b>${referance.name}</b></div>
            <p class="title"><b>${referance.title}</b></p>
            <p class="title">${referance.subTitle}</p>
            <div class="row mb-2">
                <div class="col-auto">
                    <i class="${referance.phoneIcon}"></i>
                </div>
                <div class="col">
                    <span>${referance.phone}</span>
                </div>
            </div>
            <div class="row mb-2">
                <div class="col-auto">
                    <i class="${referance.emailIcon}"></i>
                </div>
                <div class="col">
                    <span>${referance.email}</span>
                </div>
            </div>
        </div>
        `
    }
    document.getElementById("referances").innerHTML = text;
    console.log(referances);
}


function addVisible(){
    let visible = document.getElementById("btnVisible");
    visible.style.display = "none";
}

function tryAgain(){
    location.reload();
}
