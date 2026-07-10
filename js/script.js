/* =========================================================
   SWEET CAKE — main.js (Đã sửa lỗi ảnh & tăng số lượng)
   ========================================================= */

// Dữ liệu sản phẩm dùng chung - Đã sửa lại đường dẫn ảnh chính xác
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
  
  // Đổ dữ liệu hình ảnh và văn bản vào giao diện chi tiết
  const detailImg = document.getElementById("detailImage");
  if (detailImg) {
    detailImg.src = product.image;
    detailImg.alt = product.name;
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
    const col = document.createElement('div');
    col.className = 'col-6 col-md-3';
    col.innerHTML =
      '<a class="product-link" href="chi-tiet.html?id=' + key + '">' +
        '<div class="product-card">' +
          '<div class="product-thumb">' +
            '<img src="' + p.image + '" alt="' + p.name + '" style="width:100%; height:100%; object-fit:cover;">' +
          '</div>' +
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