function calculate(){
    var bmi;
    var result = document.getElementById("result__cal");
    var height = parseFloat(document.getElementById("inputHeight").value);
    var weight = parseFloat(document.getElementById("inputWeight").value);
    var status;
    bmi = (weight / Math.pow( (height), 2 )).toFixed(1);

    if(document.getElementById("Man").checked == true){
        if(bmi < 20.7){
            status = "Gầy";
        }
        else if(bmi >= 20.7 && bmi < 26.4){
            status = "Bình thường";
        }
        else if(bmi >= 26.4 && bmi < 27.8){
            status = "Thừa cân nhẹ";
        }
        else if(bmi >= 27.8 && bmi < 31.1){
            status = " Trên lý tưởng";
        }
        else if(bmi >= 31.1){
            status = "Béo phì";
        }
    }
    else if(document.getElementById("Women").checked == true){
        if(bmi < 19.1){
            status = "Gầy";
        }
        else if(bmi >= 19.1 && bmi < 25.8){
            status = "Bình thường";
        }
        else if(bmi >= 25.8 && bmi < 27.3){
            status = "Thừa cân nhẹ";
        }
        else if(bmi >= 27.3 && bmi < 32.3){
            status = " Trên lý tưởng";
        }
        else if(bmi >= 32.3){
            status = "Béo phì";
        }
    }
    result.textContent = bmi + "|" + status;
}
  