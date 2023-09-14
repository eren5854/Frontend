get();
let count = 0;

let myData = {};

function get(){
    document.getElementById("blog").style.display = "none";
    document.getElementById("spinner").style.display = "flex";
    document.getElementById("error").style.display = "none";
    
    setTimeout(()=>{
        axios.get("http://localhost:3000/api/get")
        .then(res => {
            myData = res.data;
            setMyInformation(myData.user);
            setMySkills(myData.skills);
            setMyMedias(myData.medias);
            setMyExperiences(myData.experiences);
            setMyEducations(myData.educations);
            setMyReferaces(myData.referances);

            document.getElementById("edit-container").style.display = "none";
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

function save(){
    axios.post("http://localhost:5000/api/set", myData)
    .then(res => {
        get();
    })
}

function setMyInformation(user){
        document.getElementById("userName").innerText = user.userName;
        document.getElementById("userTitle").innerText = user.userTitle;
        document.getElementById("userPhone").innerText = user.userPhone;
        document.getElementById("userEmail").innerText = user.userEmail;
        document.getElementById("userAbout").innerHTML = user.userAbout;
        document.getElementById("userAddress").innerHTML = user.userAddress;
        
        document.getElementById("nameText").value = user.userName;
        document.getElementById("titleText").value = user.userTitle;
        document.getElementById("aboutText").value = user.userAbout;
        document.getElementById("phone").value = user.userPhone;        
        document.getElementById("email").value = user.userEmail;
        document.getElementById("address").value = user.userAddress;
        console.log(user);
}

function keyupSetInput(id,event){
    document.getElementById(id).innerHTML = event.target.value;
    myData.user[id] = event.target.value;
}

//----------Skills Functions----------//
let skillEditId = 0;
function setMySkills(skills){
    createSkills(skills);

    let editText = "";
    for(let skill of skills){
        skillEditId++;
        editText += getSkill(skill);
    }
    document.getElementById("addskill").innerHTML = editText;
}

function getSkill(skill){
    return `
    <div id="x${skillEditId}" data-id="${skill.id}" class="user-inputbox">
        <label for="skill"><i class="fas fa-skill contact-icon"></i>  Skill <button onclick="removeSkills('x${skillEditId}')">-</button></label>
        <input onkeyup="keyupSkill(event, 'title')" type="text" id="skillTitle${skillEditId}" data-id="${skill.id}" name="skill" value="${skill.title}" placeholder="Enter your skill"/>
    </div> `
}

function addSkill(){
    skillEditId++;
    const skill = {id:skillEditId, title:"", logo:""}
    myData.skills.push(skill);
    const text = getSkill(skill)
    document.getElementById("addskill").innerHTML += text;
    createSkills(myData.skills);
}

function keyupSkill(event, name){
    const element = event.target;
    const id = element.dataset["id"];
    const index = myData.skills.findIndex(p=> p.id == id);
    // if(name =="title"){
    //     myData.skill[index].title = lement.value;
    // }
    // else if(name == "logo"){
    //     myData.skill[index].logo = element.value;
    // }
    myData.skills[index][name] = element.value;
    createSkills(myData.skills);
}

function createSkills(skills){
    let text = "";
    for(let skill of skills){
        text += `
        <div class="progress">
            <div id="skillText" class="my-2"><p>${skill.title}</p></div>
            <img class="html" src="${skill.logo}"> 
        </div>
        `
    }
    document.getElementById("skills").innerHTML = text;
    console.log(skills);
}

function removeSkills(elementId){
    const element = document.getElementById(elementId);
    const id = element.dataset["id"];
    const index = myData.skills.findIndex(p=> p.id == id);
    myData.skills.splice(index,1);
    element.remove();
    createSkills(myData.skills);
}
//------------------------------------//

//----------Medias Functions----------//
let mediaEditId = 0;
function setMyMedias(medias){
    createMedias(medias);
    let editText = "";
    for(let media of medias){
        mediaEditId++;
        editText += getMedias(media); 
    }
    document.getElementById("addlink").innerHTML = editText;
}

function getMedias(media){
    return `
    <div class="mediasDiv" id="link${mediaEditId}" data-id="${media.id}">
        <label for="link"><i class="fas fa-link contact-icon"></i> Link </label>
        <input onkeyup="keyupMedias(event, 'link')" type="text" id="link${mediaEditId}" data-id="${media.id}" value="${media.link}" name="link" placeholder="Enter your link"/>
        <select name="selectMedia" onchange="selectMedia()" id="selectMedia" class="selectMedia" data-id="${media.id}">
            <option value="${media.title}">${media.title}</option>
            <option value="instagram">Instagram</option>
            <option value="facebook">Facebook</option>
            <option value="x">X(old Twitter)</option>
            <option value="linkedin">Linkedin</option>
            <option value="github">Github</option>
            <option value="youtube">Youtube</option>
            <option value="medium">Medium</option>
            <option value="">Select</option>
        </select>
        <i id="i" data-id="${media.id}" class=" l"></i>
        <button onclick="removeMedias('link${mediaEditId}')">-</button>
    </div>
    `
}

function addMedias(){
    mediaEditId++;
    const media = {id:mediaEditId, title:"", link:"",icon:""}
    myData.medias.push(media);
    const text = getMedias(media);
    document.getElementById("addlink").innerHTML += text;
    createMedias(myData.medias);
}

function keyupMedias(event, name){
    const element = event.target;
    const id = element.dataset["id"];
    const index = myData.medias.findIndex(p=> p.id == id);
    // if(name =="title"){
    //     myData.skill[index].title = element.value;
    // }
    // else if(name == "logo"){
    //     myData.skill[index].logo = element.value;
    // }
    myData.medias[index][name] = element.value;
    createMedias(myData.medias);
}

function createMedias(medias){
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

function removeMedias(elementId){
    const element = document.getElementById(elementId);
    const id = element.dataset["id"];
    const index = myData.medias.findIndex(p=> p.id == id);
    myData.medias.splice(index,1);
    element.remove();
    createMedias(myData.medias);
}

function selectMedia(){
    let i = document.getElementById("i");
    let selectMedia = document.getElementById("selectMedia");
    console.log(selectMedia.value);

    if(selectMedia.value === "github"){
        i.className = "bx bxl-github l";
    }
    else if(selectMedia.value === "linkedin"){
        i.className = "bx bxl-linkedin l";
    }
    else if(selectMedia.value === "facebook"){
        i.className = "bx bxl-facebook-square l";
    }
    else if(selectMedia.value === "instagram"){
        i.className = "bx bxl-instagram l";
    }
    else if(selectMedia.value === "youtube"){
        i.className = "bx bxl-youtube l";
    }
    else if(selectMedia.value === "medium"){
        i.className = "bx bxl-medium l";
    }
    else{
        i.className = "";
    }
}
//---------------------------------------//

//----------Experiences Functions----------//
let experienceEditId = 0;
function setMyExperiences(experiences){
    createExperiences(experiences)

    let editText = "";
    for(let experience of experiences){
        experienceEditId++;
        editText += getExperiences(experience);
    }
    document.getElementById("addExperience").innerHTML = editText;
}

function getExperiences(experience){
    return `
        <div id="y${experienceEditId}" data-id="${experience.id}" class="contact">
            <div id="addCompany" class="user-inputbox">
                <label for="company"> Company </label>
                <input onkeyup="keyupExperiences(event, 'subTitle')" type="text" id="company${experienceEditId}" value="${experience.subTitle}" data-id="${experience.id}" name="company" placeholder="Enter Company"/>
            </div>
        
            <div id="addPosition" class="user-inputbox">
                <label for="position"> Position </label>
                <input onkeyup="keyupExperiences(event, 'title')" type="text" id="position${experienceEditId}" value="${experience.title}" data-id="${experience.id}" name="position" placeholder="Enter your Position"/>
            </div>
                        
            <div id="addDate" class="user-inputbox">
                <label for="date"> Date </label>
                <input onkeyup="keyupExperiences(event, 'date')" type="text" id="date${experienceEditId}" value="${experience.date}" data-id="${experience.id}" name="date" placeholder="Enter Date"/>
            </div>

            <div id="addDescription" class="user-inputbox">
                <label for="description"> Description </label>
                <input onkeyup="keyupExperiences(event, 'description')" type="text" id="description${experienceEditId}" value="${experience.description}" data-id="${experience.id}" name="description" placeholder="Enter Description"/>
            </div>
            <button onclick="removeExperiences('y${experienceEditId}')">-</button>
        </div> `
}

function addExperiences(){
    experienceEditId++;
    const experience = {id:experienceEditId, title:"", subTitle:"", date:"",description:""}
    myData.experiences.push(experience);
    const text = getExperiences(experience)
    document.getElementById("addExperience").innerHTML += text;
    createExperiences(myData.experiences);
}

function keyupExperiences(event, name){
    const element = event.target;
    const id = element.dataset["id"];
    const index = myData.experiences.findIndex(p=> p.id == id);
    myData.experiences[index][name] = element.value;
    createExperiences(myData.experiences);
}

function createExperiences(experiences){
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

function removeExperiences(elementId){
    const element = document.getElementById(elementId);
    const id = element.dataset["id"];
    const index = myData.experiences.findIndex(p=> p.id == id);
    myData.experiences.splice(index,1);
    element.remove();
    createExperiences(myData.experiences);
}
//---------------------------------------//

//----------Educations Functions----------//
let educationEditId = 0;
function setMyEducations(educations){
    createEducations(educations);

    let editText = "";
    for(let education of educations){
        educationEditId++;
        editText += getEducations(education);
    }
    document.getElementById("addeducation").innerHTML = editText;
}

function getEducations(education){
    return `
        <div id="z${educationEditId}" data-id="${education.id}" class="contact">
            <div id="addSection" class="user-inputbox">
                <label for="section"> Section </label>
                <input onkeyup="keyupEducations(event, 'title')" type="text" id="section${educationEditId}" data-id="${education.id}" value="${education.title}" name="section" placeholder="Enter your section"/>
            </div>
        
            <div id="addUniversity" class="user-inputbox">
                <label for="university"> University </label>
                <input onkeyup="keyupEducations(event, 'faculty')" type="text" id="university${educationEditId}" data-id="${education.id}" value="${education.faculty}" name="university" placeholder="Enter your university"/>
            </div>
    
            <div id="addDegree" class="user-inputbox">
                <label for="degree"> Degree </label>
                <input onkeyup="keyupEducations(event, 'degree')" type="text" id="degree${educationEditId}" data-id="${education.id}" value="${education.degree}" name="degree" placeholder="Enter your degree"/>
            </div>
                        
            <div id="addDate" class="user-inputbox">
                <label for="date"> Date </label>
                <input onkeyup="keyupEducations(event, 'date')" type="text" id="date${educationEditId}" data-id="${education.id}" value="${education.date}" name="date" placeholder="Enter Date"/>
                
            </div>
            <button onclick="removeEducations('z${educationEditId}')">-</button>
        </div> `
}

function addEducations(){
    educationEditId++;
    const education = {id:educationEditId, title:"", faculty:"", degree:"", date:""}
    myData.educations.push(education);
    const text = getEducations(education)
    document.getElementById("addeducation").innerHTML += text;
    createEducations(myData.educations);
}

function keyupEducations(event, name){
    const element = event.target;
    const id = element.dataset["id"];
    const index = myData.educations.findIndex(p=> p.id == id);
    // if(name =="title"){
    //     myData.skill[index].title = lement.value;
    // }
    // else if(name == "logo"){
    //     myData.skill[index].logo = element.value;
    // }
    myData.educations[index][name] = element.value;
    createEducations(myData.educations);
}

function createEducations(educations){
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

function removeEducations(elementId){
    const element = document.getElementById(elementId);
    const id = element.dataset["id"];
    const index = myData.educations.findIndex(p=> p.id == id);
    myData.educations.splice(index,1);
    element.remove();
    createEducations(myData.educations);
}
//---------------------------------------//

//----------Referances Functions----------//
let referanceEditId = 0;
function setMyReferaces(referances){
    createReferances(referances);
    let editText = "";
    for(let referance of referances){
        referanceEditId++;
        editText += getReferances(referance);
    }
    document.getElementById("addreferance").innerHTML = editText;
}

function getReferances(referance){
    return `
        <div id="ref-div${referanceEditId}" data-id="${referance.id}" class="user-info">
            <div class="user-inputbox">
                <label for="username">Full Name</label>
                <input onkeyup="keyupReferances(event, 'name')" type="text" id="name-text${referanceEditId}" data-id="${referance.id}" value="${referance.name}" name="name-text" placeholder="Enter your referance name"/>
            </div>
        
            <div class="user-inputbox">
                <label for="title">Title</label>
                <input onkeyup="keyupReferances(event, 'title')" type="text" id="title-text${referanceEditId}" data-id="${referance.id}" value="${referance.title}" name="title-text" placeholder="Enter your referance title"/>
            </div>
        
            <div id="addphone" class="user-inputbox">
                <label for="phone"><i class="fas fa-phone contact-icon"></i>  Phone </label>
                <input onkeyup="keyupReferances(event, 'phone')" type="tel" id="tel${referanceEditId}" data-id="${referance.id}" value="${referance.phone}" name="tel" placeholder="Enter your referance phone number"/>
            </div>
        
            <div id="addemail" class="user-inputbox">
                <label for="email"><i class="fas fa-envelope contact-icon"></i> Email </label>
                <input onkeyup="keyupReferances(event, 'email')" type="text" id="email${referanceEditId}" data-id="${referance.id}" value="${referance.email}" name="email" placeholder="Enter your referance email"/>
            </div>
            <button onclick="removeReferances('ref-div${referanceEditId}')">-</button>
        </div>`
}

function addReferances(){
    referanceEditId++;
    const referance = {id:referanceEditId, name:"", title:"", subTitle:"", phone:"", phoneIcon:"", email:"", emailIcon:""}
    myData.referances.push(referance);
    const text = getReferances(referance);
    document.getElementById("addreferance").innerHTML += text;
    createReferances(myData.referances);
}

function keyupReferances(event, name){
    const element = event.target;
    const id = element.dataset["id"];
    const index = myData.referances.findIndex(p=> p.id == id);
    // if(name =="title"){
    //     myData.skill[index].title = lement.value;
    // }
    // else if(name == "logo"){
    //     myData.skill[index].logo = element.value;
    // }
    myData.referances[index][name] = element.value;
    createReferances(myData.referances);
}

function createReferances(referances){
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

function removeReferances(elementId){
    const element = document.getElementById(elementId);
    const id = element.dataset["id"];
    const index = myData.referances.findIndex(p=> p.id == id);
    myData.referances.splice(index,1);
    element.remove();
    createReferances(myData.referances);
}
//------------------------------------//


function addVisible(){
    let visible = document.getElementById("btnVisible");
    visible.style.display = "none";
}

function editShow(){
    document.getElementById("edit-container").style.display = "flex";
}

function editHide(){
    const result = confirm("Are you sure cancel");
    if(result){
        document.getElementById("edit-container").style.display = "none";
        get();
    }
}
