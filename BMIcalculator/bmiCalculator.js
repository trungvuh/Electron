//change the height from inches/cms to feet and inches on entering the height into the text field
function changeToFeet(){
    var heightInCmsInches = document.getElementById("height").value
    var inchOrCms = document.getElementById("inchCmSelector").value
    if(inchOrCms == "inches"){
        var realFeet = ((heightInCmsInches) / 12)
        var feet = Math.floor(realFeet)
        var inches = Math.floor((realFeet - feet) * 12)
        document.getElementById("heightInFeet").value = feet
        document.getElementById("heightInInches").value = inches
    } else {
        var realFeet = ((heightInCmsInches * 0.393700) / 12)
        var feet = Math.floor(realFeet)
        var inches = Math.floor((realFeet = feet) * 12)
        document.getElementById("heightInFeet").value = feet
        document.getElementById("heightInInches").value = inches
    }
}

//change the height from feet and inches to inches/cms on entering the height in the combo box
function convertToInchesCMs(){
 var inchOrCms = document.getElementById("inchCmSelector").value
 if(inchOrCms == "inches"){
     var feet = Math.floor(document.getElementById("heightInFeet").value)
     var inches = Math.floor(document.getElementById("heightInInches").value)
     totalInches = (feet * 12) + inches
     document.getElementById("height").value = totalInches
 } else {
    var feet = Math.floor(document.getElementById("heightInFeet").value)
    var inches = Math.floor(document.getElementById("heightInInches").value)
    totalCms = ((feet * 12) + (inches)) * 2.54
    document.getElementById("height").value = totalCms
 }
}

//calculate BMI using the formula. Get the value from the text field...we use height from the text box because it is the final value.
function calculateBMI(){
    var weight = Math.floor(document.getElementById("weight").value)
    if(weight < 0 || weight == ''){
        alert('Please enter your weight')
    }

    var height = Math.floor(document.getElementById("height").value)
    if(height < 0 || height == ''){
        convertToInchesCMs()
        height = Math.floor(document.getElementById("height").value)
    }

    var inchOrCms = document.getElementById("inchCmSelector").value
    var kiloPounds = document.getElementById("weightCombo").value

    if(inchOrCms == "inches"){
        heightInCms = height * 2.54
    } else {
        heightInCms = height
    }

    if(kiloPounds == "pounds"){
        weightInKgs = weight * 0.453592
    } else {
        weightInKgs = weight
    }

    if(weightInKgs > 0 && heightInCms > 0){
        var finalBMI = weightInKgs/(heightInCms/100*heightInCms/100)
        document.getElementById("bmiValue").value = finalBMI
        
        var bmiText
        if(finalBMI < 18.5){
            bmiText = "You are too underweight."
        }
        if (finalBMI > 18.5 && finalBMI < 25) {
            bmiText = "You are healthy"
        }
        if(finalBMI > 25){
            bmiText = "You are overweight"
        }
        document.getElementById("bmiStat").value = bmiText
    }
}