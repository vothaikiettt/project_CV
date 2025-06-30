function HandleSubmit() {
  const place = document.getElementById("place").value;
  const days = document.getElementById("days").value;
  const style = document.getElementById("style").value;
  const budget = document.getElementById("budget").value;

  const placeMap = {
    danang: "Tp Đà Nẵng",
    dalat: "Tp Đà Lạt",
    hoian: "Phố cổ Hội An",
  };

  const styleMap = {
    sightseeing: "Tham quan",
    vacation: "Nghỉ dưỡng",
    food: "Ẩm thực",
  };

  const budgetMap = {
    save: "Tiết kiệm",
    medium: "Trung bình",
    luxury: "Cao cấp",
  };

  // Hiển thị kết quả ngay trong trang
  const output = document.getElementById("output");
  output.innerHTML = `
    <h3>Kết quả lịch trình của bạn:</h3>
    <p>📍 <strong>Địa điểm:</strong> ${placeMap[place]}</p>
    <p>🗓️ <strong>Số ngày đi:</strong> ${days} ngày</p>
    <p>🎒 <strong>Phong cách:</strong> ${styleMap[style]}</p>
    <p>💰 <strong>Ngân sách:</strong> ${budgetMap[budget]}</p>
  `;
  if (
    place === "danang" &&
    days === "2" &&
    // start only 2 days
    style === "sightseeing" &&
    budget === "save"
  ) {
  }
}
