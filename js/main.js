const PRODUCTS = {
  "kem-dau-tay": {
    name: "Bánh kem dâu tây",
    category: "cake",
    badge: "Bánh kem",
    image: "../assets/images/banhkemdau.jpg", 
    price: 195000,
    short: "Cốt bông lan mềm ẩm phủ kem tươi, xen lớp dâu tây tươi cắt lát.",
    desc: "Bánh kem dâu tây của Sweet Cake được làm từ cốt bông lan trứng gà mềm ẩm, phủ lớp kem tươi đánh bông nhẹ béo và trang trí bằng dâu tây tươi theo mùa. Vị ngọt thanh, không gắt, rất hợp cho tiệc sinh nhật hoặc kỷ niệm.",
    meta: ["Size: 16cm (4-6 phần) / 20cm (8-10 phần)", "Bảo quản ngăn mát 2-3 ngày", "Đặt trước ít nhất 4 giờ"]
  },
  "kem-chocolate": {
    name: "Bánh kem chocolate",
    category: "cake",
    badge: "Bánh kem",
    image: "../assets/images/banhkemchoco.jpg",
    price: 210000,
    short: "Cốt cacao đậm đà kết hợp kem chocolate tan chảy nhẹ trong miệng.",
    desc: "Dành cho tín đồ yêu chocolate, bánh có cốt cacao nguyên chất đậm vị, xen lớp ganache chocolate mềm mịn và phủ kem tươi ít ngọt. Thích hợp cho các dịp cần một chiếc bánh 'chất' và sang trọng.",
    meta: ["Size: 16cm (4-6 phần) / 20cm (8-10 phần)", "Bảo quản ngăn mát 2-3 ngày", "Đặt trước ít nhất 4 giờ"]
  },
  "cupcake-socola": {
    name: "Cupcake socola",
    category: "cupcake",
    badge: "Cupcake",
    image: "../assets/images/cupcakechoco.jpg",
    price: 25000,
    short: "Cupcake cacao mềm xốp, phủ kem bơ socola béo nhẹ.",
    desc: "Chiếc cupcake nhỏ xinh với phần cốt cacao mềm xốp, phía trên phủ kem bơ socola tạo hình đẹp mắt. Phù hợp làm quà tặng nhỏ hoặc set bánh cho tiệc tại nhà.",
    meta: ["Size tiêu chuẩn ~70g/cái", "Bán theo hộp từ 4 cái", "Bảo quản ngăn mát 2 ngày"]
  },
  "cupcake-vani-dau": {
    name: "Cupcake vani dâu",
    category: "cupcake",
    badge: "Cupcake",
    image: "../assets/images/cupcakevanidau.jpg",
    price: 25000,
    short: "Cupcake vani thơm nhẹ, phủ kem dâu hồng xinh xắn.",
    desc: "Cốt bánh vani thơm nhẹ mềm mịn, kết hợp lớp kem dâu màu hồng pastel dễ thương. Là lựa chọn được yêu thích trong các set quà tặng của Sweet Cake.",
    meta: ["Size tiêu chuẩn ~70g/cái", "Bán theo hộp từ 4 cái", "Bảo quản ngăn mát 2 ngày"]
  },
  "croissant-bo-phap": {
    name: "Croissant bơ Pháp",
    category: "pastry",
    badge: "Bánh mặn",
    image: "../assets/images/croissantbophap.jpg",
    price: 28000,
    short: "Vỏ bánh giòn xốp nhiều lớp, thơm mùi bơ Pháp đặc trưng.",
    desc: "Được cán tay nhiều lớp bột và bơ Pháp theo đúng kỹ thuật truyền thống, chiếc croissant có lớp vỏ giòn xốp, ruột mềm và thơm béo. Ngon nhất khi dùng nóng cùng cà phê buổi sáng.",
    meta: ["Trọng lượng ~65g/cái", "Nên dùng trong ngày để giữ độ giòn", "Có thể hâm nóng lại trước khi dùng"]
  },
  "bagel-pho-mai": {
    name: "Bagel phô mai",
    category: "pastry",
    badge: "Bánh mặn",
    image: "../assets/images/bagelphomai.jpg",
    price: 30000,
    short: "Bagel dai mềm nhân phô mai béo ngậy, ăn kèm bữa sáng đều hợp.",
    desc: "Bánh bagel được luộc sơ rồi nướng theo cách truyền thống, cho vỏ ngoài hơi dai và ruột mềm, nhân phô mai béo ngậy tan trong miệng. Thích hợp cho bữa sáng hoặc bữa xế nhẹ nhàng.",
    meta: ["Trọng lượng ~90g/cái", "Bảo quản ngăn mát 2 ngày", "Nên hâm nóng trước khi dùng"]
  },
  "cookie-socola-chip": {
    name: "Cookie socola chip",
    category: "cookie",
    badge: "Bánh quy",
    image: "../assets/images/cookisocolachip.jpg",
    price: 15000,
    short: "Cookie bơ giòn rụm, điểm nhiều hạt chocolate chip tan chảy.",
    desc: "Cookie bơ được nướng vừa tới để giữ độ giòn ở viền và mềm nhẹ ở giữa, điểm xuyết nhiều hạt chocolate chip đậm vị. Món ăn vặt được yêu thích của cả trẻ em lẫn người lớn.",
    meta: ["Trọng lượng ~30g/cái", "Bán theo hộp từ 6 cái", "Bảo quản nơi khô ráo, dùng trong 5 ngày"]
  },
  "donut-phu-duong": {
    name: "Donut phủ đường",
    category: "cookie",
    badge: "Bánh quy",
    image: "../assets/images/donutphuduong.jpg",
    price: 20000,
    short: "Donut chiên vàng ươm, phủ lớp đường mịn ngọt dịu.",
    desc: "Donut được chiên vàng đều, mềm xốp bên trong và phủ một lớp đường mịn ngọt dịu bên ngoài. Là món bánh nhẹ nhàng phù hợp cho bữa xế hoặc tiệc trà cùng bạn bè.",
    meta: ["Trọng lượng ~55g/cái", "Bán theo hộp từ 4 cái", "Nên dùng trong ngày"]
  },
  "kem-red-velvet": {
    name: "Bánh kem Red Velvet",
    category: "cake",
    badge: "Bánh kem",
    image: "../assets/images/banhkemredvelvet.jpg",
    price: 220000,
    short: "Cốt bánh đỏ nhung mềm mịn, xen lớp kem phô mai chua nhẹ.",
    desc: "Bánh Red Velvet với cốt bánh màu đỏ nhung đặc trưng, vị cacao nhẹ, kết hợp lớp kem phô mai (cream cheese) chua thanh cân bằng vị ngọt. Một lựa chọn nổi bật cho những dịp cần một chiếc bánh ấn tượng về màu sắc.",
    meta: ["Size: 16cm (4-6 phần) / 20cm (8-10 phần)", "Bảo quản ngăn mát 2-3 ngày", "Đặt trước ít nhất 4 giờ"]
  },
  "kem-vani-trai-cay": {
    name: "Bánh kem vani trái cây",
    category: "cake",
    badge: "Bánh kem",
    image: "../assets/images/banhkemvanitraicay.jpg",
    price: 200000,
    short: "Cốt vani thơm nhẹ, phủ kem tươi cùng trái cây theo mùa.",
    desc: "Bánh kem vani nhẹ nhàng, thanh mát với lớp kem tươi mỏng và trái cây tươi theo mùa (kiwi, cam, việt quất...). Vị ngọt dịu, phù hợp cho các bữa tiệc trà hoặc sinh nhật cần một chiếc bánh tươi mới, ít ngấy.",
    meta: ["Size: 16cm (4-6 phần) / 20cm (8-10 phần)", "Bảo quản ngăn mát 2 ngày", "Đặt trước ít nhất 4 giờ"]
  },
  "cupcake-matcha": {
    name: "Cupcake trà xanh",
    category: "cupcake",
    badge: "Cupcake",
    image: "../assets/images/cupcaketraxanh.jpg",
    price: 27000,
    short: "Cupcake matcha thơm nhẹ, phủ kem bơ trà xanh béo dịu.",
    desc: "Cốt bánh trà xanh thơm nhẹ, vị hơi đắng nhẹ đặc trưng của matcha hòa cùng lớp kem bơ béo dịu, cân bằng vị ngọt. Món yêu thích của những ai thích hương vị thanh mát.",
    meta: ["Size tiêu chuẩn ~70g/cái", "Bán theo hộp từ 4 cái", "Bảo quản ngăn mát 2 ngày"]
  },
  "cupcake-caramel": {
    name: "Cupcake caramel muối",
    category: "cupcake",
    badge: "Cupcake",
    image: "../assets/images/cupcakecaramelmuoi.jpg",
    price: 27000,
    short: "Cupcake caramel béo ngậy điểm chút muối biển hài hòa.",
    desc: "Cốt bánh vani mềm mịn kết hợp lớp kem caramel béo ngậy, điểm thêm chút muối biển tạo vị mặn ngọt hài hòa, hợp cho ai thích hương vị đậm đà mới lạ.",
    meta: ["Size tiêu chuẩn ~70g/cái", "Bán theo hộp từ 4 cái", "Bảo quản ngăn mát 2 ngày"]
  },
  "tart-trung": {
    name: "Tart trứng",
    category: "pastry",
    badge: "Bánh mặn",
    image: "../assets/images/tarttrung.jpg",
    price: 22000,
    short: "Vỏ tart giòn xốp, nhân trứng sữa béo mịn thơm lừng.",
    desc: "Vỏ bánh tart giòn xốp nhiều lớp, bên trong là nhân trứng sữa béo mịn được nướng vừa tới, thơm lừng mùi trứng và bơ. Món ăn nhẹ được yêu thích cho buổi xế chiều.",
    meta: ["Trọng lượng ~60g/cái", "Nên dùng trong ngày để giữ độ giòn", "Có thể hâm nóng lại trước khi dùng"]
  },
  "pate-so": {
    name: "Bánh Pate Sô",
    category: "pastry",
    badge: "Bánh mặn",
    image: "../assets/images/pateso.jpg",
    price: 25000,
    short: "Vỏ bánh phồng nhiều lớp giòn tan, nhân pate thơm béo.",
    desc: "Bánh Pate Sô với lớp vỏ bánh phồng nhiều lớp giòn tan, bên trong là nhân pate thơm béo đậm đà. Món bánh mặn quen thuộc, thích hợp cho bữa sáng hoặc bữa xế.",
    meta: ["Trọng lượng ~70g/cái", "Nên dùng trong ngày", "Có thể hâm nóng lại trước khi dùng"]
  },
  "cookie-yen-mach": {
    name: "Cookie yến mạch nho khô",
    category: "cookie",
    badge: "Bánh quy",
    image: "../assets/images/cookiyenmachnhokho.jpg",
    price: 16000,
    short: "Cookie yến mạch giòn rụm, điểm nho khô ngọt dịu tự nhiên.",
    desc: "Cookie làm từ yến mạch nguyên hạt, giòn rụm bên ngoài và mềm nhẹ bên trong, điểm xuyết nho khô ngọt dịu tự nhiên. Lựa chọn lành mạnh cho bữa ăn vặt.",
    meta: ["Trọng lượng ~30g/cái", "Bán theo hộp từ 6 cái", "Bảo quản nơi khô ráo, dùng trong 5 ngày"]
  },
  "muffin-viet-quat": {
    name: "Muffin việt quất",
    category: "muffin",
    badge: "Muffin",
    image: "../assets/images/muffinvietquoc.jpg",
    price: 26000,
    short: "Muffin mềm ẩm với vị chua ngọt tự nhiên từ việt quất tươi.",
    desc: "Cốt muffin mềm ẩm hòa quyện cùng vị chua ngọt tự nhiên của việt quất tươi trong từng miếng bánh. Món bánh sáng được yêu thích cùng một tách cà phê.",
    meta: ["Trọng lượng ~80g/cái", "Bán theo hộp từ 4 cái", "Nên dùng trong ngày"]
  },
  "muffin-chocolate-chip": {
    name: "Muffin chocolate chip",
    category: "muffin",
    badge: "Muffin",
    image: "../assets/images/muffinchocolachip.jpg",
    price: 26000,
    short: "Muffin cacao mềm xốp, điểm nhiều hạt chocolate chip béo ngậy.",
    desc: "Cốt muffin mềm xốp với hương cacao nhẹ, điểm xuyết nhiều hạt chocolate chip tan chảy béo ngậy trong từng miếng cắn. Món bánh được cả trẻ em và người lớn yêu thích.",
    meta: ["Trọng lượng ~80g/cái", "Bán theo hộp từ 4 cái", "Nên dùng trong ngày"]
  },
  "muffin-vani": {
    name: "Muffin vani",
    category: "muffin",
    badge: "Muffin",
    image: "../assets/images/muffinvani.jpg",
    price: 24000,
    short: "Muffin vani thơm nhẹ, mềm xốp, vị ngọt thanh dễ ăn.",
    desc: "Chiếc muffin vani cổ điển với cốt bánh mềm xốp, thơm nhẹ mùi vani tự nhiên, vị ngọt thanh dễ ăn, phù hợp cho mọi bữa ăn nhẹ trong ngày.",
    meta: ["Trọng lượng ~75g/cái", "Bán theo hộp từ 4 cái", "Nên dùng trong ngày"]
  },
  "muffin-pho-mai-bap": {
    name: "Muffin phô mai bắp",
    category: "muffin",
    badge: "Muffin",
    image: "../assets/images/muffinphomaibap.jpg",
    price: 25000,
    short: "Muffin mặn nhẹ với phô mai béo và hạt bắp ngọt tự nhiên.",
    desc: "Muffin vị mặn nhẹ độc đáo, kết hợp phô mai béo thơm cùng hạt bắp ngọt tự nhiên, tạo nên hương vị lạ miệng, thích hợp cho bữa sáng hoặc bữa xế.",
    meta: ["Trọng lượng ~80g/cái", "Bán theo hộp từ 4 cái", "Nên dùng trong ngày"]
  },

  /* ===== 31 loại bánh mới thêm - chưa có ảnh chụp thật nên dùng icon emoji ===== */

  "kem-tiramisu": {
    name: "Bánh kem Tiramisu",
    category: "cake",
    badge: "Bánh kem",
    image: "../assets/images/tiramisu.jpg",
    price: 230000,
    short: "Cốt bánh cà phê mềm ẩm, phủ kem mascarpone béo nhẹ, rắc cacao.",
    desc: "Bánh kem lấy cảm hứng từ món tiramisu nổi tiếng của Ý, với cốt bánh thấm cà phê nhẹ, xen lớp kem mascarpone béo mịn và phủ một lớp cacao nguyên chất bên trên.",
    meta: ["Size: 16cm (4-6 phần)", "Bảo quản ngăn mát 2 ngày", "Đặt trước ít nhất 4 giờ"]
  },
  "kem-matcha-dauddo": {
    name: "Bánh kem panacotta",
    category: "cake",
    badge: "Bánh kem",
    image: "../assets/images/panacota.jpg",
    price: 215000,
    short: "Cốt bánh vani mềm mịn, phủ lớp panacotta béo mịn tan trong miệng.",
    desc: "Bánh kem lấy cảm hứng từ món tráng miệng Ý panna cotta, với lớp kem sữa béo mịn tan chảy trong miệng kết hợp cùng cốt bánh vani mềm nhẹ, vị ngọt thanh, không gắt.",
    meta: ["Size: 16cm (4-6 phần)", "Bảo quản ngăn mát 2 ngày", "Đặt trước ít nhất 4 giờ"]
  },
  "kem-chanh-day": {
    name: "Bánh kem chanh dây",
    category: "cake",
    badge: "Bánh kem",
    image: "../assets/images/chanhday.jpg",
    price: 205000,
    short: "Cốt vani mềm mịn, phủ lớp mứt chanh dây chua thanh sảng khoái.",
    desc: "Vị chua thanh đặc trưng của chanh dây hòa quyện cùng cốt bánh vani mềm mịn và lớp kem tươi béo nhẹ, mang lại cảm giác tươi mới, không bị ngấy.",
    meta: ["Size: 16cm (4-6 phần)", "Bảo quản ngăn mát 2 ngày", "Đặt trước ít nhất 4 giờ"]
  },
  "kem-oreo": {
    name: "Bánh kem Oreo",
    category: "cake",
    badge: "Bánh kem",
    image: "../assets/images/oreo.jpg",
    price: 215000,
    short: "Cốt cacao mềm, xen kem tươi cùng vụn bánh Oreo giòn tan.",
    desc: "Chiếc bánh được giới trẻ yêu thích với cốt cacao mềm ẩm, lớp kem tươi béo nhẹ điểm xuyết vụn bánh quy Oreo giòn tan, trang trí bắt mắt.",
    meta: ["Size: 16cm (4-6 phần)", "Bảo quản ngăn mát 2 ngày", "Đặt trước ít nhất 4 giờ"]
  },
  "kem-hoa-hong": {
    name: "Bánh kem hoa hồng",
    category: "cake",
    badge: "Bánh kem",
    image: "../assets/images/hoahong.jpg",
    price: 240000,
    short: "Cốt vani mềm mịn, trang trí hoa kem bơ hình hoa hồng tinh tế.",
    desc: "Bánh kem được trang trí bằng những đóa hoa kem bơ hình hoa hồng tỉ mỉ, thích hợp cho các dịp kỷ niệm, tỏ tình hoặc tặng quà đặc biệt.",
    meta: ["Size: 18cm (6-8 phần)", "Bảo quản ngăn mát 2 ngày", "Đặt trước ít nhất 12 giờ"]
  },

  "cupcake-dua": {
    name: "Cupcake dừa",
    category: "cupcake",
    badge: "Cupcake",
    image: "../assets/images/cupcakedua.jpg",
    price: 26000,
    short: "Cupcake cốt dừa thơm béo, phủ kem dừa và dừa sợi rang.",
    desc: "Cốt bánh thơm mùi nước cốt dừa tự nhiên, phủ lớp kem béo ngậy và rắc thêm dừa sợi rang vàng thơm giòn phía trên.",
    meta: ["Size tiêu chuẩn ~70g/cái", "Bán theo hộp từ 4 cái", "Bảo quản ngăn mát 2 ngày"]
  },
  "cupcake-cam": {
    name: "Cupcake cam",
    category: "cupcake",
    badge: "Cupcake",
    image: "../assets/images/cupcakecam.jpg",
    price: 26000,
    short: "Cupcake thơm mùi cam tươi, phủ kem bơ cam vị chua ngọt nhẹ.",
    desc: "Cốt bánh trộn vỏ cam bào tươi, dậy mùi thơm tự nhiên, kết hợp lớp kem bơ vị cam chua ngọt hài hòa, giải ngấy rất tốt.",
    meta: ["Size tiêu chuẩn ~70g/cái", "Bán theo hộp từ 4 cái", "Bảo quản ngăn mát 2 ngày"]
  },
  "cupcake-red-velvet-mini": {
    name: "Cupcake Red Velvet mini",
    category: "cupcake",
    badge: "Cupcake",
    image: "../assets/images/cupcakeredvelvet.jpg",
    price: 28000,
    short: "Phiên bản mini của bánh Red Velvet, phủ kem phô mai chua nhẹ.",
    desc: "Cốt bánh đỏ nhung mềm mịn thu nhỏ thành size cupcake tiện lợi, phủ lớp kem phô mai chua thanh, thích hợp cho tiệc nhỏ hoặc set quà nhiều vị.",
    meta: ["Size tiêu chuẩn ~70g/cái", "Bán theo hộp từ 4 cái", "Bảo quản ngăn mát 2 ngày"]
  },
  "cupcake-bo-dau-phong": {
    name: "Cupcake bơ đậu phộng",
    category: "cupcake",
    badge: "Cupcake",
    image: "../assets/images/cupcakebodauphong.jpg",
    price: 27000,
    short: "Cupcake vani béo bùi, phủ kem bơ đậu phộng đậm đà.",
    desc: "Cốt bánh vani mềm xốp kết hợp lớp kem bơ đậu phộng béo bùi, đậm đà, dành cho những ai yêu thích hương vị hạt béo đặc trưng.",
    meta: ["Size tiêu chuẩn ~70g/cái", "Bán theo hộp từ 4 cái", "Bảo quản ngăn mát 2 ngày"]
  },

  "banh-mi-bo-toi": {
    name: "Bánh mì bơ tỏi",
    category: "pastry",
    badge: "Bánh mặn",
    image: "../assets/images/banhmibotoi.jpg",
    price: 20000,
    short: "Bánh mì que phết bơ tỏi thơm lừng, nướng giòn hai mặt.",
    desc: "Bánh mì được phết lớp bơ tỏi thơm lừng rồi nướng giòn hai mặt, thường dùng kèm súp hoặc ăn nhẹ buổi xế.",
    meta: ["Trọng lượng ~60g/cái", "Nên dùng trong ngày", "Có thể hâm nóng lại trước khi dùng"]
  },
  "banh-xoan-que": {
    name: "Bánh xoắn quế",
    category: "pastry",
    badge: "Bánh mặn",
    image: "../assets/images/xoanque.jpg",
    price: 24000,
    short: "Vỏ bánh xoắn nhiều lớp, nhân quế thơm, phủ lớp glaze mỏng.",
    desc: "Bánh cuộn xoắn nhiều lớp bột mềm, nhân đường quế thơm nồng, phủ một lớp glaze đường mỏng ngọt dịu bên trên, ngon nhất khi dùng ấm.",
    meta: ["Trọng lượng ~80g/cái", "Nên dùng trong ngày", "Có thể hâm nóng lại trước khi dùng"]
  },
  "puff-pho-mai": {
    name: "Bánh Puff phô mai",
    category: "pastry",
    badge: "Bánh mặn",
    image: "../assets/images/puffphomai.jpg",
    price: 23000,
    short: "Vỏ bánh phồng nhiều lớp giòn xốp, nhân phô mai béo tan chảy.",
    desc: "Vỏ bánh phồng (puff pastry) nhiều lớp giòn xốp bao bọc nhân phô mai béo, tan chảy khi còn ấm nóng, món ăn vặt được nhiều bạn trẻ yêu thích.",
    meta: ["Trọng lượng ~60g/cái", "Nên dùng trong ngày để giữ độ giòn", "Có thể hâm nóng lại trước khi dùng"]
  },
  "quiche-rau-cu": {
    name: "Bánh Quiche rau củ",
    category: "pastry",
    badge: "Bánh mặn",
    image: "../assets/images/quicheraucu.jpg",
    price: 32000,
    short: "Vỏ tart giòn, nhân trứng sữa cùng rau củ nướng thơm béo.",
    desc: "Bánh Quiche kiểu Pháp với lớp vỏ tart giòn xốp, nhân trứng sữa béo mịn kết hợp cùng rau củ nướng (bí ngòi, cà chua, ớt chuông...), phù hợp cho bữa sáng đầy đủ dinh dưỡng.",
    meta: ["Trọng lượng ~120g/phần", "Bảo quản ngăn mát 1-2 ngày", "Nên hâm nóng trước khi dùng"]
  },
  "sandwich-ga": {
    name: "Bánh Sandwich gà",
    category: "pastry",
    badge: "Bánh mặn",
    image: "../assets/images/sanwichga.jpg",
    price: 35000,
    short: "Bánh mì sandwich mềm kẹp gà nướng, rau tươi và sốt đặc biệt.",
    desc: "Hai lát bánh mì sandwich mềm mịn kẹp thịt gà nướng thơm, rau củ tươi giòn và sốt đặc biệt của Sweet Cake, là lựa chọn no bụng cho bữa sáng hoặc bữa trưa nhẹ.",
    meta: ["Trọng lượng ~180g/phần", "Nên dùng trong ngày", "Bảo quản ngăn mát nếu chưa dùng ngay"]
  },

  "cookie-bo-dau-phong": {
    name: "Cookie bơ đậu phộng",
    category: "cookie",
    badge: "Bánh quy",
    image: "../assets/images/cookibodauphong.jpg",
    price: 16000,
    short: "Cookie bơ đậu phộng đậm vị, giòn rụm, thơm béo đặc trưng.",
    desc: "Cookie được làm từ bơ đậu phộng nguyên chất, cho vị béo bùi đậm đà, giòn rụm ở viền và mềm nhẹ ở giữa, được nhiều người lớn yêu thích.",
    meta: ["Trọng lượng ~30g/cái", "Bán theo hộp từ 6 cái", "Bảo quản nơi khô ráo, dùng trong 5 ngày"]
  },
  "cookie-hanh-nhan": {
    name: "Cookie hạnh nhân",
    category: "cookie",
    badge: "Bánh quy",
    image: "../assets/images/cookihanhnhan.jpg",
    price: 17000,
    short: "Cookie bơ giòn tan, điểm hạnh nhân lát thơm bùi.",
    desc: "Cookie bơ giòn tan với hạnh nhân lát rang thơm bùi rải đều trên mặt bánh, vị ngọt vừa phải, thích hợp dùng cùng trà hoặc cà phê.",
    meta: ["Trọng lượng ~28g/cái", "Bán theo hộp từ 6 cái", "Bảo quản nơi khô ráo, dùng trong 5 ngày"]
  },
  "cookie-matcha-trang": {
    name: "Cookie matcha trắng",
    category: "cookie",
    badge: "Bánh quy",
    image: "../assets/images/cookimatchatrang.jpg",
    price: 17000,
    short: "Cookie vị trà xanh, điểm socola trắng ngọt béo hài hòa.",
    desc: "Cookie trộn bột matcha thơm nhẹ, kết hợp cùng những hạt socola trắng ngọt béo, tạo vị đắng - ngọt hài hòa lạ miệng.",
    meta: ["Trọng lượng ~28g/cái", "Bán theo hộp từ 6 cái", "Bảo quản nơi khô ráo, dùng trong 5 ngày"]
  },
  "cookie-gung-mat-ong": {
    name: "Cookie gừng mật ong",
    category: "cookie",
    badge: "Bánh quy",
    image: "../assets/images/cookirungmatong.jpg",
    price: 16000,
    short: "Cookie thơm mùi gừng ấm và mật ong, vị ngọt dịu đặc trưng.",
    desc: "Cookie mang hương thơm ấm áp của gừng hòa quyện cùng vị ngọt dịu tự nhiên từ mật ong, thường được yêu thích vào mùa se lạnh.",
    meta: ["Trọng lượng ~30g/cái", "Bán theo hộp từ 6 cái", "Bảo quản nơi khô ráo, dùng trong 5 ngày"]
  },

  "muffin-chuoi-oc-cho": {
    name: "Muffin chuối óc chó",
    category: "muffin",
    badge: "Muffin",
   image: "../assets/images/muffinchuoioccho.jpg",
    price: 27000,
    short: "Muffin chuối chín mềm ẩm, điểm óc chó bùi giòn.",
    desc: "Cốt muffin làm từ chuối chín tự nhiên, mềm ẩm và thơm ngọt dịu, điểm xuyết hạt óc chó rang bùi giòn, tốt cho bữa sáng nhanh gọn.",
    meta: ["Trọng lượng ~80g/cái", "Bán theo hộp từ 4 cái", "Nên dùng trong ngày"]
  },
  "muffin-cam-que": {
    name: "Muffin cam quế",
    category: "muffin",
    badge: "Muffin",
    image: "../assets/images/muffincamque.jpg",
    price: 26000,
    short: "Muffin thơm mùi cam tươi hòa quyện cùng chút quế ấm nồng.",
    desc: "Cốt muffin trộn vỏ cam tươi cùng một chút bột quế, mang lại hương thơm ấm áp, vị ngọt thanh, rất hợp dùng vào những ngày se lạnh.",
    meta: ["Trọng lượng ~80g/cái", "Bán theo hộp từ 4 cái", "Nên dùng trong ngày"]
  },
  "muffin-dau-tay": {
    name: "Muffin dâu tây",
    category: "muffin",
    badge: "Muffin",
    image: "../assets/images/muffinkemdautay.jpg",
    price: 27000,
    short: "Muffin mềm xốp với những miếng dâu tây tươi bên trong.",
    desc: "Cốt muffin bông xốp điểm xuyết những miếng dâu tây tươi cắt nhỏ, mang vị chua ngọt tự nhiên trong từng miếng bánh.",
    meta: ["Trọng lượng ~80g/cái", "Bán theo hộp từ 4 cái", "Bảo quản ngăn mát 2 ngày"]
  },
  "muffin-socola-doi": {
    name: "Muffin socola đôi",
    category: "muffin",
    badge: "Muffin",
    image: "../assets/images/muffinsocoladoi.jpg",
    price: 28000,
    short: "Muffin cacao đậm đà, điểm thêm socola chip tan chảy bên trong.",
    desc: "Cốt muffin cacao đậm vị kết hợp thêm socola chip bên trong, tạo cảm giác 'double chocolate' đậm đà cho tín đồ mê socola.",
    meta: ["Trọng lượng ~80g/cái", "Bán theo hộp từ 4 cái", "Nên dùng trong ngày"]
  },

  "brownie-socola-dac": {
    name: "Brownie socola đặc",
    category: "brownie",
    badge: "Brownie",
    image: "../assets/images/browniesocoladac.jpg",
    price: 22000,
    short: "Brownie đặc mịn, đậm vị cacao, ẩm mềm ở giữa.",
    desc: "Brownie được nướng vừa tới để giữ độ ẩm mềm ở giữa và hơi giòn ở viền, vị cacao đậm đà, dành cho những tín đồ mê socola thực thụ.",
    meta: ["Trọng lượng ~70g/miếng", "Bán theo hộp từ 4 miếng", "Bảo quản ngăn mát 3 ngày"]
  },
  "brownie-pho-mai": {
    name: "Brownie phô mai",
    category: "brownie",
    badge: "Brownie",
    image: "../assets/images/browniephomai.jpg",
    price: 24000,
    short: "Brownie socola xen lớp phô mai kem béo mịn hòa quyện.",
    desc: "Sự kết hợp giữa vị đậm đà của brownie socola và vị béo chua nhẹ của phô mai kem (cream cheese), tạo nên hương vị hài hòa, lạ miệng.",
    meta: ["Trọng lượng ~75g/miếng", "Bán theo hộp từ 4 miếng", "Bảo quản ngăn mát 3 ngày"]
  },
  "brownie-hanh-nhan": {
    name: "Brownie hạnh nhân",
    category: "brownie",
    badge: "Brownie",
    image: "../assets/images/browniehanhnhan.jpg",
    price: 24000,
    short: "Brownie socola đậm đà, điểm hạnh nhân rang giòn bùi.",
    desc: "Brownie cacao đậm vị, rắc thêm hạnh nhân lát rang giòn bùi phía trên, tạo thêm kết cấu giòn nhẹ xen kẽ với độ ẩm mềm của bánh.",
    meta: ["Trọng lượng ~75g/miếng", "Bán theo hộp từ 4 miếng", "Bảo quản ngăn mát 3 ngày"]
  },
  "blondie-caramel": {
    name: "Blondie caramel",
    category: "brownie",
    badge: "Brownie",
    image: "../assets/images/blondiecaramel.jpg",
    price: 23000,
    short: "Phiên bản 'brownie không cacao', vị bơ đường caramel béo ngậy.",
    desc: "Blondie là phiên bản anh em của brownie nhưng không dùng cacao, thay vào đó là vị bơ đường caramel béo ngậy, thơm nồng đặc trưng.",
    meta: ["Trọng lượng ~70g/miếng", "Bán theo hộp từ 4 miếng", "Bảo quản ngăn mát 3 ngày"]
  },

  "banh-mi-hoa-cuc": {
    name: "Bánh mì hoa cúc (bánh mì sữa)",
    category: "banh-mi",
    badge: "Bánh mì",
    image: "../assets/images/banhmihoacuc.jpg",
    price: 18000,
    short: "Bánh mì sữa mềm xốp, tạo hình hoa cúc đẹp mắt.",
    desc: "Bánh mì sữa được tạo hình như đóa hoa cúc, ruột bánh mềm xốp, thơm mùi sữa và bơ, thích hợp cho bữa sáng nhẹ nhàng.",
    meta: ["Trọng lượng ~90g/ổ", "Nên dùng trong ngày", "Có thể hâm nóng lại trước khi dùng"]
  },
  "banh-mi-nho-kho": {
    name: "Bánh mì nho khô",
    category: "banh-mi",
    badge: "Bánh mì",
    image: "../assets/images/banhminhokho.jpg",
    price: 19000,
    short: "Bánh mì mềm điểm xuyết nho khô ngọt tự nhiên bên trong.",
    desc: "Ruột bánh mì mềm mịn, điểm xuyết nho khô ngọt tự nhiên trong từng lát cắt, thích hợp ăn kèm bơ hoặc mứt vào buổi sáng.",
    meta: ["Trọng lượng ~100g/ổ", "Nên dùng trong ngày", "Có thể hâm nóng lại trước khi dùng"]
  },
  "banh-mi-pho-mai-que": {
    name: "Bánh mì phô mai que",
    category: "banh-mi",
    badge: "Bánh mì",
   image: "../assets/images/banhmiphomaique.jpg",
    price: 20000,
    short: "Bánh mì que giòn, nhân phô mai béo tan chảy bên trong.",
    desc: "Bánh mì được tạo hình que dài, bên trong là nhân phô mai béo, tan chảy khi ăn nóng, là món ăn vặt được giới trẻ yêu thích.",
    meta: ["Trọng lượng ~70g/cái", "Nên dùng trong ngày", "Ngon nhất khi ăn nóng"]
  },
  "banh-mi-chuoi-yen-mach": {
    name: "Bánh mì chuối yến mạch",
    category: "banh-mi",
    badge: "Bánh mì",
    image: "../assets/images/banhmichuoiyenmach.jpg",
    price: 21000,
    short: "Bánh mì chuối mềm ẩm, rắc thêm yến mạch bổ dưỡng bên trên.",
    desc: "Bánh mì làm từ chuối chín nghiền mềm ẩm, thơm ngọt tự nhiên, rắc thêm yến mạch cán mỏng phía trên, phù hợp cho bữa sáng lành mạnh.",
    meta: ["Trọng lượng ~100g/ổ", "Bảo quản ngăn mát 2 ngày", "Nên hâm nóng trước khi dùng"]
  },
  "banh-mi-hotdog": {
    name: "Bánh mì hotdog",
    category: "banh-mi",
    badge: "Bánh mì",
    image: "../assets/images/banhhotdog.jpg",
    price: 22000,
    short: "Bánh mì mềm cuộn xúc xích, nướng vàng thơm hấp dẫn.",
    desc: "Bánh mì mềm cuộn quanh xúc xích, quét thêm chút sốt cà và mù tạt, nướng vàng thơm, là món ăn nhanh gọn được nhiều bạn trẻ yêu thích.",
    meta: ["Trọng lượng ~90g/cái", "Nên dùng trong ngày", "Ngon nhất khi ăn nóng"]
  }
};

/* ---------- 1. Nút Back to top ---------- */
window.addEventListener('scroll', function () {
  const btn = document.getElementById('backToTop');
  if (!btn) return;
  if (window.scrollY > 300) {
    btn.style.display = 'block';
  } else {
    btn.style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ---------- 2. Phân loại / Lọc sản phẩm (Trang san-pham.html) ---------- */
function filterProducts(category) {
  const cards = document.querySelectorAll('.product-item');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(function (btn) {
    btn.classList.remove('active');
  });
  
  const activeBtn = document.querySelector('.filter-btn[data-filter="' + category + '"]');
  if (activeBtn) activeBtn.classList.add('active');

  cards.forEach(function (card) {
    if (category === 'all' || card.dataset.category === category) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

/* ---------- 3. Xử lý tăng giảm số lượng (Mua bao nhiêu cũng được) ---------- */
function changeQty(delta) {
  const input = document.getElementById('qtyInput');
  if (!input) return;
  let value = parseInt(input.value, 10) || 1;
  value = value + delta;
  
  // Chỉ chặn không cho giảm xuống dưới 1, còn tăng thì không giới hạn
  if (value < 1) value = 1; 
  input.value = value;
  
  // Cập nhật lại link đặt hàng kèm số lượng mới nhất
  const orderLink = document.getElementById('orderNowBtn');
  const detailName = document.getElementById('detailName').textContent;
  if (orderLink) {
    orderLink.href = 'lien-he.html?san_pham=' + encodeURIComponent(detailName) + '&so_luong=' + value;
  }
}

/* ---------- 4. Trang chi tiết sản phẩm (chi-tiet.html) ---------- */
function formatPrice(price) {
  return price.toLocaleString('vi-VN') + '₫';
}

function getQueryParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

function renderProductDetail() {
  const detailRoot = document.getElementById('productDetail');
  if (!detailRoot) return;

  const id = getQueryParam('id');
  const product = PRODUCTS[id];
  const notFoundBox = document.getElementById('notFoundBox');

  if (!product) {
    detailRoot.style.display = 'none';
    if (notFoundBox) notFoundBox.style.display = 'block';
    return;
  }

  document.title = product.name + ' - Sweet Cake';

  // Đổ ảnh (hoặc icon emoji nếu bánh chưa có ảnh thật) vào khung hình chi tiết
  const thumb = document.getElementById('detailThumb');
  if (product.image) {
    thumb.classList.remove('emoji-thumb');
    thumb.innerHTML = '<img id="detailImage" src="' + product.image + '" alt="' + product.name + '">';
  } else {
    thumb.classList.add('emoji-thumb');
    thumb.innerHTML = product.emoji || '🍰';
  }

  document.getElementById('detailBadge').textContent = product.badge;
  document.getElementById('detailName').textContent = product.name;
  document.getElementById('detailPrice').textContent = formatPrice(product.price);
  document.getElementById('detailDesc').textContent = product.desc;
  document.getElementById('breadcrumbName').textContent = product.name;

  const metaList = document.getElementById('detailMeta');
  metaList.innerHTML = '';
  product.meta.forEach(function (item) {
    const li = document.createElement('li');
    li.textContent = item;
    metaList.appendChild(li);
  });

  // Khởi tạo link Đặt bánh ngay với số lượng mặc định là 1
  const orderLink = document.getElementById('orderNowBtn');
  if (orderLink) {
    orderLink.href = 'lien-he.html?san_pham=' + encodeURIComponent(product.name) + '&so_luong=1';
  }

  renderRelatedProducts(id, product.category);
}

function renderRelatedProducts(currentId, category) {
  const relatedRoot = document.getElementById('relatedProducts');
  if (!relatedRoot) return;

  relatedRoot.innerHTML = '';
  const ids = Object.keys(PRODUCTS).filter(function (key) {
    return key !== currentId && PRODUCTS[key].category === category;
  }).slice(0, 4);

  ids.forEach(function (key) {
    const p = PRODUCTS[key];

    // Nếu bánh có ảnh thật thì hiện ảnh, không thì hiện icon emoji thay thế
    var thumbHtml;
    if (p.image) {
      thumbHtml = '<div class="product-thumb"><img src="' + p.image + '" alt="' + p.name + '"></div>';
    } else {
      thumbHtml = '<div class="product-thumb emoji-thumb">' + (p.emoji || '🍰') + '</div>';
    }

    const col = document.createElement('div');
    col.className = 'col-6 col-md-3';
    col.innerHTML =
      '<a class="product-link" href="chi-tiet.html?id=' + key + '">' +
        '<div class="product-card">' +
          thumbHtml +
          '<div class="product-body">' +
            '<span class="badge-cake">' + p.badge + '</span>' +
            '<h5 class="mt-2">' + p.name + '</h5>' +
            '<p class="product-price">' + formatPrice(p.price) + '</p>' +
          '</div>' +
        '</div>' +
      '</a>';
    relatedRoot.appendChild(col);
  });
}

/* ---------- 5. Khởi chạy khi trang tải xong ---------- */
window.addEventListener('DOMContentLoaded', function () {
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  renderProductDetail();
});