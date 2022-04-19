var data = []

const reqs = `[
    {
        "emission_factor": "memory-provider_aws-region_us_west_1",
        "parameters": {
            "data": "",
            "data_unit": "",
            "time": 1,
            "time_unit": "h"
        }
    },
    {
        "emission_factor": "electricity-energy_source_coal_fired_plant",
        "parameters": {
            "energy": "",
            "energy_unit": ""
        }
    },
    {
        "emission_factor": "accommodation_type_holiday",
        "parameters": {
            "money": "",
            "money_unit": ""
        }
    }
]`

forms = document.querySelectorAll('form')

for(let i=0; i<forms.length; i++){
    var val = {};
    forms[i].addEventListener('change', function(event){
        
    })
}