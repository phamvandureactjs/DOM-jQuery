function calculate(){
    var SoTienVay = parseFloat(document.getElementById("SoTienVay").value);
    var SoThang = (parseFloat(document.getElementById("ThoiGianTra").value)*12);    
    var LaiSuatTheoThang = ((parseFloat(document.getElementById("LaiSuatHangNam").value))/1200);

    var x = (Math.pow(1 + LaiSuatTheoThang, SoThang));
    var SoTienTraHangThang = ((SoTienVay*x*LaiSuatTheoThang)/(x-1));
    var TongSoTienPhaiTra = SoTienTraHangThang*SoThang;
    var TongSoLaiPhaiTra  = TongSoTienPhaiTra-SoTienVay;
    // var SoTien1Thang = (SoTienVay/12).toFixed(1);
    // var TongTien = SoThang * 30;
    // var X = (Math.pow(1+LaiSuatTheoThang, SoThang));
    var result1 = document.getElementById("SoTienTraHangThang");
    var result2 = document.getElementById("TongSoTienPhaiTra");
    var result3 = document.getElementById("TongSoLaiPhaiTra");

    result1.textContent = SoTienTraHangThang.toFix(1);
    result2.textContent = TongSoTienPhaiTra.toFix(1);
    result3.textContent = TongSoLaiPhaiTra.toFix(1);
}
