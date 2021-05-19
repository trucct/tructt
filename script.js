var weight, height, BMI;

function BMI_Calculate() {
	weight = document.getElementById('weight').value;
	height = document.getElementById('height').value;
	BMI = ( weight / (height*height) );

	if(BMI < 18.5) {
		alert('"Gầy" và nguy cơ phát triển bệnh"THẤP"');
	}
	else if (18.5 < BMI < 24.9) {
		alert('"Bình thường" và nguy cơ phát triển bệnh "TRUNG BÌNH"');
	}
	else if (25.0 < BMI < 29.9) {
		alert('"Hơi béo" và nguy cơ phát triển bệnh "CAO"')
	}
	else if (30.0 < BMI < 34.9) {
		alert('"Béo phì cấp độ 1" và nguy cơ phát triển bệnh "CAO"')
	}
	else if (35.0 < BMI < 39.9) {
		alert('"Béo phì cấp độ 2" và nguy cơ phát triển bệnh "RẤT CAO"')
	}
	else if (BMI > 40.0) {
		alert('"Béo phì cấp độ 3" và nguy cơ phát triển bệnh "NGUY HIỂM"')
	}
}