var holder = []
var obj_h = []
var t = 0

function add_to_holder(res) {
    holder.push(res);
    // const obj = JSON.parse(res)

    // console.log(obj)

    console.log(holder)
}

function check_data(url='', data) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Authorization", "Bearer S4PKACVX3B4TRSP75VFHC4DZJ8GZ");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(xhr.status);
            console.log(xhr.responseText);
            const obj = JSON.parse(xhr.responseText)
            
            add_to_holder(obj)
            // add_to_holder(xhr.responseText);
        }};

    xhr.send(data)
}

function validateForm(form_name) {
    var url = "https://beta3.api.climatiq.io/estimate";
    let x = document.forms[`${form_name}`]["val1"].value;
    let select = document.forms[`${form_name}`]["unit"];
    var value = select.options[select.selectedIndex].value;
    let emission_factor = document.forms[`${form_name}`]["emission_type"].value

    console.log(x)
    console.log(url)
    console.log(form_name)

    if(form_name === 'form1'){
        var data = `{
            "emission_factor": "${emission_factor}",
            "parameters": {
                "data": ${x},
                "data_unit": "${String(value)}",
                "time": 1,
                "time_unit": "h"
            }
        }`
    }
    else if(form_name === 'form2'){
        var data = `{
            "emission_factor": "${emission_factor}",
            "parameters": {
                "energy": ${x},
                "energy_unit": "${value}"
            }
        }`
    }
    else if(form_name === 'form3'){
        var data = `{
            "emission_factor": "${emission_factor}",
            "parameters": {
                "money": ${x},
                "money_unit": "${value}"
            }
        }`
    }
    else{
        var data = {}
    }

    console.log(data)
    
    check_data(url, data);
  }


const forms = document.querySelectorAll('form');

for(let i=0; i<forms.length; i++){
    forms[i].addEventListener('submit', function(event){
        event.preventDefault();
        validateForm(forms[i].name)
        if(forms[i].name === 'form3'){
            redirectPage()
        }
    })
}
// f = document.querySelector("#form3")

// f.addEventListener('submit', function(event){
//     event.preventDefault();
    // l_through()
//     redirectPage()

// })

function l_through() {
    var total = 0
    for(let i=0; i<holder.length; i++){
        total = total + holder[i].co2e;
    }

    console.log(total)
    return total
}

// const new_total = t + holder[3]
// const s = new_total.toFixed()

let redirectPage = () => {
    let t = l_through()
    console.warn(t)

    holder.map((el) => {
        console.log(el)
    })

    const url = `/handle_data/${t.toFixed()}`;
    console.warn(url)
    window.location.href = url;
}