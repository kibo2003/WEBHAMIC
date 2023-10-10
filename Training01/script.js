function submitInformation() {
	// Lấy giá trị đã nhập từ các trường input
	var ho = document.querySelector('input[name="ho"]').value;
	var ten = document.querySelector('input[name="ten"]').value;
	var email = document.querySelector('input[name="email"]').value;
	var classroom = document.querySelector('input[name="classroom"]:checked').value;

	// Để kiểm tra xem các giá trị đã nhập có đúng không, bạn có thể sử dụng console.log
	alert("Họ: " + ho + "\n"
		+ "Tên: " + ten + "\n"
		+ "Email: " + email + "\n"
		+ "Lớp: " + classroom);
}