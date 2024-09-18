const tarotCards = [
    { name: "The Fool", meaning: "Khởi đầu mới, tiềm năng. Đây là lá bài của sự khởi đầu, sự tự do và cuộc phiêu lưu.", image: "images/fool.jpg" },
    { name: "The Magician", meaning: "Sự sáng tạo, quyền lực, năng lực. Bạn có khả năng biến ước mơ thành hiện thực.", image: "images/magician.jpg" },
    { name: "The High Priestess", meaning: "Trực giác, tiềm thức, sự bí ẩn. Hãy tin vào trực giác của bạn.", image: "images/high_priestess.jpg" },
    { name: "The Empress", meaning: "Sự phong phú, tình yêu, sự nuôi dưỡng. Đại diện cho tình mẫu tử và sự chăm sóc.", image: "images/empress.jpg" },
    { name: "The Emperor", meaning: "Quyền lực, lãnh đạo, sự ổn định. Một lá bài của sự kiểm soát và cấu trúc.", image: "images/emperor.jpg" },
    { name: "The Lovers", meaning: "Tình yêu, sự hòa hợp, quyết định. Một lựa chọn quan trọng trong tình cảm.", image: "images/lovers.jpg" },
    { name: "The Chariot", meaning: "Kiểm soát, ý chí, chiến thắng. Bạn có khả năng vượt qua trở ngại.", image: "images/chariot.jpg" },
    { name: "Strength", meaning: "Sức mạnh nội tâm, lòng kiên nhẫn. Tìm sức mạnh bên trong.", image: "images/strength.jpg" },
    { name: "The Hermit", meaning: "Sự cô đơn, tìm kiếm, sự chiêm nghiệm. Thời gian để suy ngẫm và tìm kiếm bản thân.", image: "images/hermit.jpg" },
    { name: "Wheel of Fortune", meaning: "Thay đổi, vận may, số phận. Cuộc sống luôn thay đổi, hãy chấp nhận nó.", image: "images/wheel_of_fortune.jpg" },
    { name: "Justice", meaning: "Công bằng, sự thật, quyết định. Tìm kiếm công lý và sự công bằng.", image: "images/justice.jpg" },
    { name: "The Hanged Man", meaning: "Sự hy sinh, quan điểm mới. Đôi khi cần nhìn từ một góc độ khác.", image: "images/hanged_man.jpg" },
    { name: "Death", meaning: "Kết thúc, chuyển đổi. Mặc dù đáng sợ, nhưng đây là một lá bài của sự tái sinh.", image: "images/death.jpg" },
    { name: "Temperance", meaning: "Sự cân bằng, hòa hợp, kiên nhẫn. Tìm kiếm sự cân bằng trong cuộc sống.", image: "images/temperance.jpg" },
    { name: "The Devil", meaning: "Bị trói buộc, cám dỗ, sự phụ thuộc. Cảnh báo về những mối quan hệ không lành mạnh.", image: "images/devil.jpg" },
    { name: "The Tower", meaning: "Sự đổ vỡ, sự thay đổi đột ngột. Một sự kiện bất ngờ có thể thay đổi mọi thứ.", image: "images/tower.jpg" },
    { name: "The Star", meaning: "Hy vọng, sự hồi phục, sự hướng dẫn. Hãy tin vào ước mơ của bạn.", image: "images/star.jpg" },
    { name: "The Moon", meaning: "Mơ hồ, sự sợ hãi, sự bất an. Đôi khi, không phải mọi thứ đều rõ ràng.", image: "images/moon.jpg" },
    { name: "The Sun", meaning: "Niềm vui, thành công, sự tích cực. Một lá bài rất tích cực, mang lại ánh sáng.", image: "images/sun.jpg" },
    { name: "Judgment", meaning: "Đánh giá, sự hồi sinh, sự thức tỉnh. Thời gian để xem xét lại cuộc sống.", image: "images/judgment.jpg" },
    { name: "The World", meaning: "Hoàn thành, sự đạt được, sự viên mãn. Một hành trình đã hoàn thành.", image: "images/world.jpg" },
];

document.getElementById('drawButton').addEventListener('click', function() {
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;

    if (!name1 || !name2) {
        alert("Vui lòng nhập tên của cả hai người!");
        return;
    }

    const randomCardIndex = Math.floor(Math.random() * tarotCards.length);
    const card = tarotCards[randomCardIndex];

    const resultText = `
        <div class="card">
            <img src="${card.image}" alt="${card.name}">
            <h2>${card.name}</h2>
            <p>${card.meaning}</p>
        </div>
    `;
    document.getElementById('result').innerHTML = resultText;
});
