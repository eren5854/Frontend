
    // document.getElementById("save-btn").addEventListener("click", function(){
    //     var nameText = document.getElementById("name-text").value;
    //     var titleText = document.getElementById("title-text").value;
    //     var aboutText = document.getElementById("about-text").value;
    //     document.getElementById("resultNameText").textContent = nameText;
    //     document.getElementById("resultTitleText").textContent = titleText;
    //     document.getElementById("resultAboutText").textContent = aboutText;
    //     });


        let phoneElementId = 1; 
        let mailElementId = 1;
        let linkElementId = 1;
        let experienceElementId = 1;
        let educationElementId = 1;
        let skillElementId = 1;
        let referanceElementId = 1;

    // function addMail(){
    //     mailElementId++;
    //     const value = `<div id="addemail-${mailElementId}"          class="user-inputbox">
    //                     <label for="title"><i class="fas fa-envelope contact-icon"></i> Email <button onclick="removeEmail('addemail-${mailElementId}')">-</button></label>
    //                     <input type="text" id="title" name="title" placeholder="Enter your title"/>
    //                 </div>`

    //         document.getElementById("addemail").innerHTML += value;
    // }

    // function addPhone(){
    //     phoneElementId++;
    //     const value = `<div id="addphone-${phoneElementId}"          class="user-inputbox">
    //                     <label for="title"><i class="fas fa-phone contact-icon"></i> Phone <button onclick="removePhone('addphone-${phoneElementId}')">-</button></label>
    //                     <input type="text" id="title" name="title" placeholder="Enter your phone number"/>
    //                 </div>`

    //         document.getElementById("addphone").innerHTML += value;
    // }

    function addLink(){
        linkElementId++;
        const value = `<div id="addlink-${linkElementId}"          class="user-inputbox">
                        <label for="link"><i class="fas fa-link contact-icon"></i> Link <button onclick="removeLink('addlink-${linkElementId}')">-</button></label>
                        <input type="text" id="link" name="link" placeholder="Enter your link"/>
                    </div>`

            document.getElementById("addphone").innerHTML += value;
    }

    function addExperience(){
            experienceElementId++;
            const value = `<div id="addExperience-${experienceElementId}" action="#">

            <div class="contact">
                <div class="user-inputbox">
                    <label for="company"> Company </label>
                    <input type="text" id="company" name="company" placeholder="Enter Company"/>
                </div>

                <div class="user-inputbox">
                    <label for="position"> Position </label>
                    <input type="text" id="position" name="position" placeholder="Enter your Position"/>
                </div>
                
                <div class="user-inputbox">
                    <label for="date"> Date </label>
                    <input type="text" id="date" name="date" placeholder="Enter Date"/>
                </div>
                
            </div>
            <button onclick="removeExperience('addExperience-${experienceElementId}')">-</button>
        </div>`
    
            document.getElementById("addExperience").innerHTML += value;
    }
        
    function addEducation(){
            educationElementId++;
            const value = `<div id="addEducation-${educationElementId}" action="#">

            <div class="contact">
                <div id="addSection" class="user-inputbox">
                    <label for="section"> Section </label>
                    <input type="text" id="section" name="section" placeholder="Enter your section"/>
                </div>

                <div id="addUniversity" class="user-inputbox">
                    <label for="university"> University </label>
                    <input type="text" id="university" name="university" placeholder="Enter your university"/>
                </div>

                <div id="addDegree" class="user-inputbox">
                    <label for="degree"> Degree </label>
                    <input type="text" id="degree" name="degree" placeholder="Enter your degree"/>
                </div>
                
                <div id="addDate" class="user-inputbox">
                    <label for="date"> Date </label>
                    <input type="text" id="date" name="date" placeholder="Enter Date"/>
                </div>
                <button onclick="removeEducation('addEducation-${experienceElementId}')">-</button>
            </div>
        </div>`
    
                document.getElementById("addEducation").innerHTML += value;
    }
    
    function addSkill(){
        skillElementId++;
        const value = `<div id="addskill-${skillElementId}" class="user-inputbox">
        <label for="skill"><i class="fas fa-skill contact-icon"></i>  Skill <button onclick="removeSkill('addskill-${skillElementId}')">-</button></label>
        <input type="text" id="skill" name="skill" placeholder="Enter your skill"/>
    </div>`

            document.getElementById("addskill").innerHTML += value;
    }

    function addReferance(){
        referanceElementId++;
            const value = `<div id="addReferance-${referanceElementId}" action="#">
            <div class="user-info">
                <div class="user-inputbox">
                    <label for="username">Full Name</label>
                    <input type="text" id="name-text" name="name-text" placeholder="Enter your referance name"/>
                </div>

                <div class="user-inputbox">
                    <label for="title">Title</label>
                    <input type="text" id="title-text" name="title-text" placeholder="Enter your referance title"/>
                </div>

                <div id="addphone" class="user-inputbox">
                    <label for="phone"><i class="fas fa-phone contact-icon"></i>  Phone </label>
                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="tel" name="tel" placeholder="Enter your referance phone number"/>
                </div>

                <div id="addemail" class="user-inputbox">
                    <label for="email"><i class="fas fa-envelope contact-icon"></i> Email </label>
                    <input type="text" id="email" name="email" placeholder="Enter your referance email"/>
                </div>
                <button onclick="removeReferance('addReferance-${referanceElementId}')">-</button>
            </div>

            <div class="save-btn">
                <input id="save-btn" type="button" value="Save">
            </div>
        </div>`
    
        document.getElementById("addReferance").innerHTML += value;
    }

        function removePhone(Id){
            document.getElementById(Id).remove();
        }

        function removeEmail(Id){
            document.getElementById(Id).remove();
        }

        function removeLink(Id){
            document.getElementById(Id).remove();
        }

        function removeExperience(Id){
            document.getElementById(Id).remove();
        }
        
        function removeEducation(Id){
            document.getElementById(Id).remove();
        }

        function removeSkill(Id){
            document.getElementById(Id).remove();
        }

        function removeReferance(Id){
            document.getElementById(Id).remove();
        }



let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function(){
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
}
