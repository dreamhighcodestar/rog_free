const searchboxinput = document.querySelector(".search-input");
const inputBox = searchboxinput.querySelector("input");
const suggBox = searchboxinput.querySelector(".autocom-box");
const icon = searchboxinput.querySelector(".search-input .material-symbols-outlined");

let suggestions = [
    "stomach ache",
    "indigestion",
    "joint pain",
    "shoulder pain",
    "back pain",
    "neck pain",
    "unable to concentrate",
    "increase focus",
    "not able to sleep properly",
    "tiredness",
    "high sugar level",
    "high blood pressure",
    "breathing problem",
    "difficulty in breathing",
];

let digestive = [
    "stomach ache",
    "indigestion",
];

let heart = [
    "high blood pressure",
];

let anxiety = [
    "unable to concentrate",
    "increase focus",
    "not able to sleep properly",
];

let asthma = [
    "breathing problem",
    "difficulty in breathing",
];

let joint = [
    "shoulder pain",
    "back pain",
    "neck pain",
    "tiredness",
];

let diabetes = [
    "high sugar level",
];


inputBox.onkeyup = (e)=>{
    let userData = e.target.value;
    let emptyArray = [];
    if(userData){

        

        emptyArray = suggestions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = `<li>${data}</li>`;
        });
        searchboxinput.classList.add("active");
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)");
        }

        icon.onclick = () => {
            if (digestive.includes(userData)) {
                window.open("../Rog-Free/html/digestive.html");
            }

            else if (heart.includes(userData)) {
                window.open("../Rog-Free/html/heartdisease.html");
            }

            else if (anxiety.includes(userData)) {
                window.open("../Rog-Free/html/depression.html");
            }

            else if (asthma.includes(userData)) {
                window.open("../Rog-Free/html/asthama.html");
            }

            else if (joint.includes(userData)) {
                window.open("../Rog-Free/html/bodypain.html");
            }

            else if (diabetes.includes(userData)) {
                window.open("../Rog-Free/html/diabetes.html");
            }
        }

    }
    else{
        searchboxinput.classList.remove("active");
    }
}

function select(element){
    let selectData = element.textContent;
    inputBox.value = selectData;
    userData = selectData;

    icon.onclick = () => {
        if (digestive.includes(userData)) {
            window.open("../Rog-Free/html/digestive.html");
        }

        else if (heart.includes(userData)) {
            window.open("../Rog-Free/html/heartdisease.html");
        }

        else if (anxiety.includes(userData)) {
            window.open("../Rog-Free/html/depression.html");
        }

        else if (asthma.includes(userData)) {
            window.open("../Rog-Free/html/asthama.html");
        }

        else if (joint.includes(userData)) {
            window.open("../Rog-Free/html/bodypain.html");
        }

        else if (diabetes.includes(userData)) {
            window.open("../Rog-Free/html/diabetes.html");
        }
    }

    searchboxinput.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = `<li>${userValue}</li>`;
    }else{
      listData = list.join('');
    }
    suggBox.innerHTML = listData;
}
