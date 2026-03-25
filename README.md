# 89sam1book-saas
  SaaS system for book sale
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>89sam1book Interactive Pro</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>89sam1book</h1>
        <p>เข้าใจตัวเองในแบบที่คุณไม่เคยรู้มาก่อน</p>
        <div class="header-btns">
            <button class="btn-mode" onclick="toggleMode()">🌙 Dark/Light Mode</button>
            <button class="btn" onclick="showPage('chapters')">📖 เริ่มอ่าน</button>
            <button class="btn" onclick="showPage('shop')">🛒 ไปที่ร้านค้า</button>
        </div>
    </header>

    <div id="home" class="section">
        <h2>🧠 Psychebook คืออะไร</h2>
        <p>หนังสือจิตวิทยาที่ช่วยให้คุณเข้าใจความคิด อารมณ์ และตัวตน</p>
        <div class="card">
            <h3>🔥 Highlights</h3>
            <ul>
                <li>เข้าใจตัวเองลึกขึ้น</li>
                <li>จัดการอารมณ์ได้</li>
                <li>อ่านง่าย ใช้ได้จริง</li>
            </ul>
        </div>
        <div class="card">
            <h3>📘 Free Chapter</h3>
            <p>ทดลองอ่านฟรี พร้อมดาวน์โหลด eBook</p>
            <button class="btn" onclick="showEbookPopup()">รับฟรี</button>
        </div>
    </div>

    <div id="chapters" class="section" style="display:none">
        <h2>📖 สารบัญ</h2>
        <div class="card" onclick="showPage('c1')">
            <h3>Chapter 1: ทำไมเราคิดมาก</h3>
            <p>สำรวจต้นตอของความคิดที่วนเวียน</p>
        </div>
        <div class="card" onclick="showPage('c2')">
            <h3>Chapter 2: วงจรของอารมณ์</h3>
            <p>เรียนรู้วิธีรับมือกับความรู้สึกที่ถาโถม</p>
        </div>
        <button class="btn" onclick="showPage('home')">⬅ กลับหน้าหลัก</button>
    </div>

    <div id="c1" class="section" style="display:none">
        <h2>Chapter 1: ทำไมเราคิดมาก</h2>
        <div class="progress-container"><div id="progress-bar-1" class="progress-bar"></div></div>
        <p>คุณไม่ได้คิดมากเกินไป แต่คุณแค่ยังหาวิธีหยุดคิดไม่ได้...</p>
        
        <div class="video-container">
            <iframe width="100%" height="315" src="https://www.youtube.com/embed/c60LXavAHAI" frameborder="0" allowfullscreen></iframe>
        </div>

        <div class="quiz-box">
            <h3>💡 Quiz: อะไรคือสาเหตุหลักของการวนเวียนในความคิด?</h3>
            <button class="quiz-btn" onclick="submitQuiz(1,'ความคิด')">กระบวนการคิด</button>
            <button class="quiz-btn" onclick="submitQuiz(1,'อารมณ์')">ปฏิกิริยาอารมณ์</button>
        </div>

        <textarea id="reflection-1" placeholder="เขียนสิ่งที่คุณได้รับจากบทนี้..."></textarea>
        <button class="btn" onclick="saveReflection(1)">บันทึก Reflection</button>
        
        <div class="nav-btns">
            <button class="btn" onclick="showPage('chapters')">⬅ สารบัญ</button>
            <button class="btn" onclick="nextChapter()">บทถัดไป ➡</button>
        </div>
    </div>
<section id="book-highlights" class="section">
    <h2 style="text-align:center;">🌟 ทำไมต้องมี 89 LAWS ครบทั้งเซต?</h2>
    <div class="highlights-container">
        <div class="card highlight-card">
            <span class="book-number">01</span>
            <h4>จิตวิทยาสร้างเงิน (Money Psychology)</h4>
            <p>ถอดรหัสความคิดของเศรษฐี และกฎการดึงดูดความมั่งคั่งที่ใช้ได้จริง</p>
        </div>
        <div class="card highlight-card">
            <span class="book-number">02</span>
            <h4>กฎแห่งการศึกษา (Education Laws)</h4>
            <p>การเรียนรู้ในศตวรรษที่ 21 ที่โรงเรียนไม่ได้สอน เพื่อสร้างรายได้แบบยั่งยืน</p>
        </div>
        <div class="card highlight-card">
            <span class="book-number">03</span>
            <h4>Neuro-Awakening</h4>
            <p>ปลุกพลังสมองด้วย Dopamine Hacking และวิทยาศาสตร์การทำงานของสมอง</p>
        </div>
        <div class="card highlight-card">
            <span class="book-number">04</span>
            <h4>The Oil Illusion</h4>
            <p>บทเรียนประวัติศาสตร์และพลังงานที่กำหนดทิศทางเศรษฐกิจโลก</p>
        </div>
        <div class="card highlight-card">
            <span class="book-number">05</span>
            <h4>Wealth Mastery</h4>
            <p>การบริหารจัดการทรัพย์สินและกลยุทธ์การลงทุนแบบ Low Risk High Return</p>
        </div>
        <div class="card highlight-card">
            <span class="book-number">06</span>
            <h4>The Meaning of Life</h4>
            <p>การตื่นรู้และเป้าหมายที่แท้จริงของการมีชีวิตที่ยิ่งใหญ่</p>
        </div>
    </div>
</section>

<section id="sample-chapters" class="section">
    <div class="card preview-box">
        <h3>📄 ตัวอย่างสารบัญ: Neuro-Awakening</h3>
        <div class="chapter-list">
            <div class="chapter-item"><span>Ch 1</span> ปลดล็อกศักยภาพสมองที่ถูกลืม</div>
            <div class="chapter-item"><span>Ch 2</span> กลไก Dopamine กับการสร้างนิสัยใหม่</div>
            <div class="chapter-item"><span>Ch 3</span> สมาธิแบบ Deep Work ในยุคดิจิทัล</div>
            <div class="chapter-item"><span>Ch 4</span> กฎ 89 ข้อสู่การตื่นรู้ระดับเซลล์</div>
        </div>
        <p style="text-align:center; margin-top:20px;">
            <a href="#" class="btn-outline">📥 ดาวน์โหลด Sample PDF (ฟรี)</a>
        </p>
    </div>
</section>
<section id="video-insights" class="section">
    <h2 style="text-align:center;">🎥 เจาะลึกบทเรียนจาก 89 LAWS</h2>
    <p style="text-align:center; opacity:0.8;">เรียนรู้แนวคิดเบื้องต้นผ่านวิดีโอแนะนำโดยผู้เชี่ยวชาญ</p>
    
    <div class="video-grid">
        <div class="card video-card">
            <div class="video-wrapper">
                <iframe src="https://www.youtube.com/embed/c60LXavAHAI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <h4>Insight 01: ทำไมเราถึงคิดมาก?</h4>
            <p>สำรวจกลไกของสมองและวิธีการหยุดวงจรความคิดที่วนเวียน</p>
        </div>

        <div class="card video-card">
            <div class="video-wrapper">
                <iframe src="https://www.youtube.com/embed/Nj1qQg1JQyI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <h4>Insight 02: กฎแห่งความสำเร็จ</h4>
            <p>สรุปแนวคิดสำคัญที่ช่วยให้คุณก้าวข้ามขีดจำกัดเดิมๆ</p>
        </div>

        <div class="card video-card">
            <div class="video-wrapper">
                <iframe src="https://www.youtube.com/embed/oqd_QUlarXM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
            <h4>Insight 03: พลังแห่งการตื่นรู้</h4>
            <p>วิธีการนำทฤษฎีในหนังสือไปปรับใช้ในชีวิตจริงอย่างได้ผล</p>
        </div>
    </div>
</section>
/* Video Section Styling */
.video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    margin-top: 30px;
}

.video-card {
    padding: 15px;
    transition: 0.3s;
}

.video-card h4 {
    margin: 15px 0 5px 0;
    color: var(--primary);
}

.video-card p {
    font-size: 0.9rem;
    opacity: 0.8;
}

/* ทำให้วิดีโอเป็น Responsive (16:9) */
.video-wrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
    height: 0;
    overflow: hidden;
    border-radius: 8px;
    background: #000;
}

.video-wrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.video-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(251, 191, 36, 0.2);
}
<section id="author" class="section">
    <div class="card author-card">
        <div class="author-layout">
            <div class="author-img-wrapper">
                <img src="author-profile.jpg" alt="Sam Tawatchai Phongphaew" class="author-img">
            </div>
            <div class="author-details">
                <span class="badge">Author & Publisher</span>
                <h2>ธวัชชัย ผ่องแผ้ว (Sam)</h2>
                <p><strong>ผู้เขียนซีรีส์ 89 LAWS และผู้ก่อตั้ง 89sam1book</strong></p>
                <p>ด้วยประสบการณ์ในการศึกษาด้านจิตวิทยาพฤติกรรม วิทยาศาสตร์สมอง และประวัติศาสตร์เศรษฐกิจ ผมมุ่งมั่นที่จะถ่ายทอด "กฎแห่งความสำเร็จ" ที่เรียบง่ายแต่ทรงพลัง เพื่อช่วยให้ผู้คนตื่นรู้และสร้างความมั่งคั่งได้อย่างยั่งยืน</p>
                <div class="author-stats">
                    <div class="a-stat"><strong>10+</strong><p>โครงการหนังสือ</p></div>
                    <div class="a-stat"><strong>700+</strong><p>หน้าเนื้อหาพรีเมียม</p></div>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="trust-section" class="section">
    <div class="trust-grid">
        <div class="trust-item">
            <div class="trust-icon">🛡️</div>
            <h4>Secure Payment</h4>
            <p>ชำระเงินปลอดภัยผ่าน PayPal และระบบธนาคารชั้นนำ</p>
        </div>
        <div class="trust-item">
            <div class="trust-icon">📦</div>
            <h4>Premium Delivery</h4>
            <p>แพ็กกันกระแทกอย่างดี จัดส่งถึงมือในสภาพสมบูรณ์ 100%</p>
        </div>
        <div class="trust-item">
            <div class="trust-icon">✨</div>
            <h4>Quality Content</h4>
            <p>เนื้อหาผ่านการเรียบเรียงและตรวจสอบข้อมูลอย่างละเอียด</p>
        </div>
    </div>
</section>
<section id="global-books" class="section">
    <h2 style="text-align:center;">🌎 Recommended Psychology & Self-Help</h2>
    <p style="text-align:center; opacity:0.8; margin-bottom:30px;">หนังสือแนะนำระดับโลก เพื่อการพัฒนาตนเองอย่างสมบูรณ์แบบ</p>

    <div class="category-block">
        <h3 class="cat-title"><span class="icon">🌍</span> Global Bestsellers</h3>
        <div class="book-list-mini">
            <div class="card mini-card">
                <div class="card-content">
                    <h4>Surrounded by Idiots</h4>
                    <p>ระบบ DISC แบ่งคน 4 สี เพื่อการสื่อสารที่ทรงพลัง (แปล 55+ ภาษา)</p>
                </div>
            </div>
            <div class="card mini-card gold-border">
                <div class="card-content">
                    <h4>The Magic of Thinking Big</h4>
                    <p>คลาสสิก mindset สอนให้คิดใหญ่ เพื่อผลลัพธ์ที่เปลี่ยนชีวิต</p>
                </div>
            </div>
            <div class="card mini-card">
                <div class="card-content">
                    <h4>The Power of Now</h4>
                    <p>ฝึกสติและอยู่กับปัจจุบัน เพื่อความสงบทางจิตวิญญาวน</p>
                </div>
            </div>
        </div>
    </div>

    <div class="grid-2-col">
        <div class="category-block">
            <h3 class="cat-title"><span class="icon">🇪🇺</span> European Favorites</h3>
            <div class="card mini-card">
                <h4>The Psychology of Money</h4>
                <p>เข้าใจพฤติกรรมมนุษย์เบื้องหลังการตัดสินใจเรื่องเงิน</p>
            </div>
            <div class="card mini-card">
                <h4>Likeable</h4>
                <p>การจัดการความคิดและค้นหาคุณค่าในตัวเอง (UK Bestseller)</p>
            </div>
        </div>

        <div class="category-block">
            <h3 class="cat-title"><span class="icon">🇹🇭</span> Popular in Thailand</h3>
            <div class="card mini-card">
                <h4>12 Rules for Life</h4>
                <p>กฎ 12 ข้อเพื่อสร้างระเบียบและความหมายให้ชีวิต</p>
            </div>
            <div class="card mini-card">
                <h4>Never Split the Difference</h4>
                <p>จิตวิทยาการต่อรองจากอดีตเจ้าหน้าที่ FBI</p>
            </div>
        </div>
    </div>

    <div class="source-links" style="text-align:center; font-size: 0.8rem; margin-top: 20px; opacity: 0.6;">
        อ้างอิงข้อมูลจาก: <a href="https://www.goodreads.com" target="_blank">Goodreads</a> | <a href="https://www.ookbee.com" target="_blank">Ookbee</a>
    </div>
</section>
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>89 LAWS | Official Store by Sam Phongphaew</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>89 LAWS OF SUCCESS</h1>
        <p>กฎแห่งความสำเร็จ ความมั่งคั่ง และการตื่นรู้ โดย ธวัชชัย ผ่องแผ้ว</p>
        <div class="header-btns">
            <button class="btn-mode" onclick="toggleMode()">🌙 Dark/Light Mode</button>
            <button class="btn" onclick="showPage('collection')">📖 คอลเลกชัน</button>
            <button class="btn" onclick="showPage('shop')">🛒 ร้านค้า</button>
        </div>
    </header>

    <section id="collection" class="section">
        <h2 class="section-title">📚 89 LAWS Complete Set</h2>
        <div class="book-grid">
            <div class="book-item"><img src="book1.png" alt="เล่ม 1"><h4>เล่ม 1: จิตวิทยาสร้างเงิน</h4></div>
            <div class="book-item"><img src="book2.jpg" alt="เล่ม 2"><h4>เล่ม 2: กฎแห่งการศึกษา</h4></div>
            <div class="book-item"><img src="book3.jpg" alt="เล่ม 3"><h4>เล่ม 3: กฎแห่งความคิด</h4></div>
            <div class="book-item"><img src="book4.jpg" alt="เล่ม 4"><h4>เล่ม 4: กฎแห่งอำนาจ</h4></div>
            <div class="book-item"><img src="book5.jpg" alt="เล่ม 5"><h4>เล่ม 5: กฎแห่งความมั่งคั่ง</h4></div>
            <div class="book-item"><img src="book6.jpg" alt="เล่ม 6"><h4>เล่ม 6: ความยิ่งใหญ่ของชีวิต</h4></div>
        </div>
    </section>

    <section id="video-insights" class="section">
        <h2 class="section-title">🎥 Video Insights</h2>
        <div class="video-grid">
            <div class="video-card card">
                <div class="video-wrapper"><iframe src="https://www.youtube.com/embed/c60LXavAHAI" allowfullscreen></iframe></div>
                <h4>ทำไมเราถึงคิดมาก?</h4>
            </div>
            <div class="video-card card">
                <div class="video-wrapper"><iframe src="https://www.youtube.com/embed/Nj1qQg1JQyI" allowfullscreen></iframe></div>
                <h4>กฎแห่งความสำเร็จ</h4>
            </div>
            <div class="video-card card">
                <div class="video-wrapper"><iframe src="https://www.youtube.com/embed/oqd_QUlarXM" allowfullscreen></iframe></div>
                <h4>พลังแห่งการตื่นรู้</h4>
            </div>
        </div>
    </section>

    <section id="global-books" class="section">
        <h2 class="section-title">🌎 Global Psychology & Self-Help</h2>
        <div class="category-block">
            <h3 class="cat-title">🌍 Global Bestsellers</h3>
            <div class="book-list-mini">
                <div class="card mini-card"><h4>Surrounded by Idiots</h4><p>DISC personality & communication</p></div>
                <div class="card mini-card gold-border"><h4>The Magic of Thinking Big</h4><p>Mindset & Success Classic</p></div>
                <div class="card mini-card"><h4>The Power of Now</h4><p>Mindfulness practice</p></div>
            </div>
        </div>
        <div class="grid-2-col">
            <div class="category-block">
                <h3 class="cat-title">🇪🇺 Europe</h3>
                <div class="card mini-card"><h4>The Psychology of Money</h4></div>
                <div class="card mini-card"><h4>Likeable</h4></div>
            </div>
            <div class="category-block">
                <h3 class="cat-title">🇹🇭 Thailand</h3>
                <div class="card mini-card"><h4>12 Rules for Life</h4></div>
                <div class="card mini-card"><h4>Never Split the Difference</h4></div>
            </div>
        </div>
    </section>

    <section id="shop" class="section">
        <div class="card promo-card">
            <span class="badge">PROMO</span>
            <h3>🔥 Complete Set (6 เล่ม)</h3>
            <p class="price-big">5,900 บาท</p>
            <button class="btn" onclick="addToCart('bundle_set')">🛒 สั่งซื้อครบชุด</button>
        </div>
        <div class="products-grid">
            <div class="product-card card">
                <h3>รายเล่ม (1,299.-)</h3>
                <select id="book-select">
                    <option value="book1">เล่ม 1: จิตวิทยาสร้างเงิน</option>
                    <option value="book2">เล่ม 2: กฎแห่งการศึกษา</option>
                    <option value="book3">เล่ม 3-6: อื่นๆ</option>
                </select>
                <button class="btn" onclick="addSingleBook()">➕ เพิ่มลงตะกร้า</button>
            </div>
        </div>
        <div class="cart-section card">
            <h3>🧺 ตะกร้าสินค้า: <span id="total-price">0</span> บาท</h3>
            <table id="cart-table"><tbody></tbody></table>
            <a href="https://www.paypal.com/paypalme/TAWATCHAIPHONGPHAEW" target="_blank" class="btn">💳 ชำระเงิน</a>
        </div>
    </section>

    <section id="copyright-policy" class="section">
        <div class="card policy-card">
            <h2>📜 Copyright Policy</h2>
            <p>© 2026 89sam1book สงวนสิทธิ์โดย คุณธวัชชัย ผ่องแผ้ว</p>
            <p>ห้ามคัดลอก ทำซ้ำ หรือเผยแพร่โดยไม่ได้รับอนุญาต</p>
        </div>
    </section>

    <script src="script.js"></script>
</body>
</html>
:root {
    --bg: #0f172a; --card: #1e293b; --text: #f1f5f9; --primary: #fbbf24;
}
body { margin: 0; font-family: sans-serif; background: var(--bg); color: var(--text); line-height: 1.6; }
body.light { --bg: #f8fafc; --card: #ffffff; --text: #1e293b; }

.section { max-width: 1000px; margin: 0 auto; padding: 40px 20px; }
.section-title { text-align: center; color: var(--primary); margin-bottom: 30px; }
.card { background: var(--card); padding: 20px; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 4px 20px rgba(0,0,0,0.3); }

/* Grid Systems */
.book-grid, .video-grid, .book-list-mini {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;
}
.grid-2-col { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }

/* Video */
.video-wrapper { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 8px; }
.video-wrapper iframe { position: absolute; top:0; left:0; width:100%; height:100%; border:none; }

/* Shop & Buttons */
.btn { background: var(--primary); color: #000; padding: 10px 25px; border-radius: 50px; font-weight: bold; border: none; cursor: pointer; }
.promo-card { text-align: center; border: 2px solid var(--primary); }
.price-big { font-size: 2.5rem; color: var(--primary); margin: 10px 0; }
.book-item img { width: 100%; border-radius: 8px; border: 1px solid var(--primary); transition: 0.3s; }
.book-item img:hover { transform: scale(1.05); }

/* Mini Cards (Global Books) */
.mini-card { padding: 15px; border: 1px solid rgba(255,255,255,0.1); }
.cat-title { border-left: 4px solid var(--primary); padding-left: 10px; }

@media (max-width: 768px) { .grid-2-col { grid-template-columns: 1fr; } }
const productData = {
    book1: { name: "89 LAWS เล่ม 1", price: 1299 },
    book2: { name: "89 LAWS เล่ม 2", price: 1299 },
    bundle_set: { name: "89 LAWS Complete Set", price: 5900 }
};

let cart = JSON.parse(localStorage.getItem("cartData")) || [];

function toggleMode() { document.body.classList.toggle("light"); }

function addSingleBook() {
    addToCart(document.getElementById('book-select').value);
}

function addToCart(prodId) {
    const info = productData[prodId];
    const index = cart.findIndex(i => i.id === prodId);
    if (index >= 0) cart[index].qty++;
    else cart.push({ id: prodId, name: info.name, price: info.price, qty: 1 });
    save();
}

function updateUI() {
    const tbody = document.querySelector("#cart-table tbody");
    if(!tbody) return;
    tbody.innerHTML = "";
    let total = 0;
    cart.forEach((item, i) => {
        total += item.price * item.qty;
        tbody.innerHTML += `<tr><td>${item.name} x${item.qty}</td><td>${(item.price*item.qty).toLocaleString()}</td></tr>`;
    });
    document.getElementById("total-price").innerText = total.toLocaleString();
}

function save() {
    localStorage.setItem("cartData", JSON.stringify(cart));
    updateUI();
}

updateUI();
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>89 LAWS | Official Store by Sam Phongphaew</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&display=swap" rel="stylesheet">
</head>
<body>
    <header>
        <div class="header-content">
            <h1>89 LAWS OF SUCCESS</h1>
            <p>กฎแห่งความสำเร็จ ความมั่งคั่ง และการตื่นรู้ โดย ธวัชชัย ผ่องแผ้ว</p>
            <div class="header-btns">
                <button class="btn-mode" onclick="toggleMode()">🌙 โหมดกลางคืน/สว่าง</button>
                <a href="#collection" class="btn">📖 คอลเลกชัน</a>
                <a href="#shop" class="btn">🛒 ร้านค้า</a>
            </div>
        </div>
    </header>

    <section id="collection" class="section">
        <h2 class="section-title">📚 89 LAWS Complete Set</h2>
        <div class="book-grid">
            <div class="book-item"><img src="e8aac390-26fe-11f1-9f1d-1195122641c3 (1).png" alt="เล่ม 1"><h4>เล่ม 1: จิตวิทยาสร้างเงิน</h4></div>
            <div class="book-item"><img src="copilot_image_1773642172678.jpeg" alt="เล่ม 2"><h4>เล่ม 2: กฎแห่งการศึกษา</h4></div>
            <div class="book-item"><img src="copilot_image_1773642215633.jpeg" alt="เล่ม 3"><h4>เล่ม 3: กฎแห่งความคิด</h4></div>
            <div class="book-item"><img src="image_1773642262390.jpeg" alt="เล่ม 4"><h4>เล่ม 4: กฎแห่งอำนาจ</h4></div>
            <div class="book-item"><img src="copilot_image_1773642469260.jpeg" alt="เล่ม 5"><h4>เล่ม 5: กฎแห่งความมั่งคั่ง</h4></div>
            <div class="book-item"><img src="copilot_image_1773642778304.jpeg" alt="เล่ม 6"><h4>เล่ม 6: ความยิ่งใหญ่ของชีวิต</h4></div>
        </div>
    </section>

    <section id="video-insights" class="section">
        <h2 class="section-title">🎥 Video Insights & Lessons</h2>
        <div class="video-grid">
            <div class="video-card card">
                <div class="video-wrapper"><iframe src="https://www.youtube.com/embed/c60LXavAHAI" allowfullscreen></iframe></div>
                <h4>ทำไมเราถึงคิดมาก?</h4>
            </div>
            <div class="video-card card">
                <div class="video-wrapper"><iframe src="https://www.youtube.com/embed/Nj1qQg1JQyI" allowfullscreen></iframe></div>
                <h4>กฎแห่งความสำเร็จ</h4>
            </div>
            <div class="video-card card">
                <div class="video-wrapper"><iframe src="https://www.youtube.com/embed/oqd_QUlarXM" allowfullscreen></iframe></div>
                <h4>พลังแห่งการตื่นรู้</h4>
            </div>
        </div>
    </section>

    <section id="global-success" class="section">
        <h2 class="section-title">🌍 Global Success & Recognition</h2>
        <div class="stats-container">
            <div class="stat-card card">
                <span class="stat-number">10M+</span>
                <p>ยอดขายรวมทั่วโลก</p>
            </div>
            <div class="stat-card card">
                <span class="stat-number">55+</span>
                <p>ภาษาที่ได้รับการแปล</p>
            </div>
            <div class="stat-card card">
                <span class="stat-number">4.5/5</span>
                <p>คะแนนรีวิวจากผู้อ่าน</p>
            </div>
        </div>

        <div class="grid-2-col">
            <div class="category-block card">
                <h3 class="cat-title">🌍 Global Bestsellers</h3>
                <p><strong>Surrounded by Idiots:</strong> 1.5M+ sold worldwide</p>
                <p><strong>The Magic of Thinking Big:</strong> Mindset Classic</p>
            </div>
            <div class="category-block card">
                <h3 class="cat-title">🇹🇭 Recommended in Thailand</h3>
                <p><strong>12 Rules for Life:</strong> Life Principles</p>
                <p><strong>Never Split the Difference:</strong> Negotiation</p>
            </div>
        </div>
    </section>

    <section id="shop" class="section">
        <h2 class="section-title">🛒 Order Now</h2>
        <div class="card promo-card">
            <span class="badge">🔥 BEST VALUE</span>
            <h3>89 LAWS Complete Set (6 เล่ม)</h3>
            <p class="price-big">5,900 บาท</p>
            <p>ประหยัดทันที 1,894.- เมื่อซื้อยกชุด</p>
            <button class="btn" onclick="addToCart('bundle_set')">🛒 สั่งซื้อครบชุด</button>
        </div>

        <div class="products-grid">
            <div class="product-card card">
                <h3>เลือกรายเล่ม (1,299.-)</h3>
                <select id="book-select" class="custom-select">
                    <option value="book1">เล่ม 1: จิตวิทยาสร้างเงิน</option>
                    <option value="book2">เล่ม 2: กฎแห่งการศึกษา</option>
                    <option value="book3">เล่ม 3: กฎแห่งความคิด</option>
                </select>
                <button class="btn" onclick="addSingleBook()">➕ เพิ่มลงตะกร้า</button>
            </div>
        </div>

        <div class="cart-section card">
            <h3>🧺 ตะกร้าสินค้า: <span id="total-price">0</span> บาท</h3>
            <div id="cart-list"></div>
            <a href="https://www.paypal.com/paypalme/TAWATCHAIPHONGPHAEW" target="_blank" class="btn payment-btn">💳 ชำระเงินผ่าน PayPal</a>
        </div>
    </section>

    <footer class="section">
        <div class="card policy-card">
            <h3>📜 Copyright Policy</h3>
            <p>© 2026 <strong>89sam1book</strong> สงวนสิทธิ์โดย ธวัชชัย ผ่องแผ้ว</p>
            <p>ห้ามคัดลอก ทำซ้ำ หรือเผยแพร่เนื้อหาในเว็บไซต์นี้โดยไม่ได้รับอนุญาตเป็นลายลักษณ์อักษร</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
:root {
    --bg: #020617;
    --card: #0f172a;
    --text: #f1f5f9;
    --primary: #fbbf24; /* สีทอง */
    --accent: #1e293b;
}

body {
    margin: 0;
    font-family: 'Inter', sans-serif;
    background: var(--bg);
    color: var(--text);
    line-height: 1.6;
    scroll-behavior: smooth;
}

body.light {
    --bg: #f8fafc;
    --card: #ffffff;
    --text: #1e293b;
    --accent: #e2e8f0;
}

header {
    background: linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('hero-bg.jpg');
    background-size: cover;
    text-align: center;
    padding: 100px 20px;
    border-bottom: 2px solid var(--primary);
}

h1 { font-size: 3rem; color: var(--primary); margin: 0; }

.section { max-width: 1100px; margin: 0 auto; padding: 60px 20px; }
.section-title { text-align: center; color: var(--primary); margin-bottom: 40px; font-size: 2.2rem; }

.card {
    background: var(--card);
    padding: 30px;
    border-radius: 16px;
    border: 1px solid rgba(251, 191, 36, 0.1);
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    margin-bottom: 20px;
}

/* Grids */
.book-grid, .video-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 30px;
}

.book-item { text-align: center; transition: 0.3s; }
.book-item img { width: 100%; border-radius: 10px; border: 2px solid var(--primary); }
.book-item:hover { transform: translateY(-10px); }

/* Video */
.video-wrapper { position: relative; padding-bottom: 56.25%; height: 0; border-radius: 12px; overflow: hidden; }
.video-wrapper iframe { position: absolute; top:0; left:0; width:100%; height:100%; border:none; }

/* Stats */
.stats-container { display: flex; gap: 20px; margin-bottom: 30px; }
.stat-card { flex: 1; text-align: center; }
.stat-number { font-size: 2.5rem; font-weight: 800; color: var(--primary); display: block; }

/* Shop */
.promo-card { text-align: center; border: 2px solid var(--primary); }
.price-big { font-size: 3.5rem; color: var(--primary); font-weight: 800; margin: 10px 0; }
.btn {
    background: var(--primary);
    color: #000;
    padding: 15px 35px;
    border-radius: 50px;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
    border: none;
    cursor: pointer;
    transition: 0.3s;
}
.btn:hover { transform: scale(1.05); background: #fff; }
.payment-btn { width: 100%; margin-top: 20px; box-sizing: border-box; }

.custom-select {
    width: 100%;
    padding: 12px;
    border-radius: 8px;
    background: var(--accent);
    color: var(--text);
    border: 1px solid var(--primary);
    margin-bottom: 15px;
}

@media (max-width: 768px) {
    .stats-container { flex-direction: column; }
    .grid-2-col { grid-template-columns: 1fr; }
}
const products = {
    book1: { name: "เล่ม 1: จิตวิทยาสร้างเงิน", price: 1299 },
    book2: { name: "เล่ม 2: กฎแห่งการศึกษา", price: 1299 },
    book3: { name: "เล่ม 3: กฎแห่งความคิด", price: 1299 },
    bundle_set: { name: "89 LAWS Complete Set (6 เล่ม)", price: 5900 }
};

let cart = JSON.parse(localStorage.getItem('89LawsCart')) || [];

function toggleMode() {
    document.body.classList.toggle('light');
}

function addSingleBook() {
    const bookId = document.getElementById('book-select').value;
    addToCart(bookId);
}

function addToCart(id) {
    const item = products[id];
    const cartIndex = cart.findIndex(c => c.id === id);
    
    if (cartIndex > -1) {
        cart[cartIndex].qty += 1;
    } else {
        cart.push({ ...item, id: id, qty: 1 });
    }
    
    saveAndRefresh();
    alert(`เพิ่ม ${item.name} ลงตะกร้าแล้ว!`);
}

function saveAndRefresh() {
    localStorage.setItem('89LawsCart', JSON.stringify(cart));
    renderCart();
}

function renderCart() {
    const cartList = document.getElementById('cart-list');
    const totalPrice = document.getElementById('total-price');
    if (!cartList) return;

    cartList.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.qty;
        cartList.innerHTML += `
            <div style="display:flex; justify-content:space-between; padding:10px 0; border-bottom:1px solid rgba(255,255,255,0.1);">
                <span>${item.name} (x${item.qty})</span>
                <span>${(item.price * item.qty).toLocaleString()}.- 
                <button onclick="removeItem(${index})" style="background:none; border:none; color:#ff4444; cursor:pointer; margin-left:10px;">❌</button></span>
            </div>
        `;
    });

    totalPrice.innerText = total.toLocaleString();
}

function removeItem(index) {
    cart.splice(index, 1);
    saveAndRefresh();
}

// โหลดข้อมูลเมื่อเปิดหน้าเว็บ
window.onload = renderCart;

​e8aac390-26fe-11f1-9f1d-1195122641c3 (1).png (รูปชุดหนังสือ 6 เล่ม)
​copilot_image_1773642215633.jpeg (เล่ม 2)
​copilot_image_1773642469260.jpeg (เล่ม 3)
​copilot_image_1773642778304.jpeg (เล่ม 4)
​image_1773642262390.jpeg (เล่ม 5)
​copilot_image_1773642172678.jpeg (เล่ม 6)

    <div id="shop" class="section" style="display:none">
        <h2>🛒 89sam1book Shop</h2>
        <div class="stock-info card">
            <p id="total-stock">สต็อกรวม: 2000 เล่ม</p>
            <p id="sold">ขายแล้ว: 0 เล่ม</p>
            <p id="remaining">คงเหลือ: 2000 เล่ม</p>
        </div>

        <div class="products-grid">
            <div class="product-card card">
                <h3>89sam1book เล่มที่ 1</h3>
                <p class="price">1,299 บาท</p>
                <p>คงเหลือ: <span id="remaining-book1">1000</span> เล่ม</p>
                <input type="number" id="qty1" min="1" value="1">
                <button class="btn" onclick="addToCart('book1')">➕ เพิ่มลงตะกร้า</button>
            </div>
            <div class="product-card card">
                <h3>89sam1book เล่มที่ 2–6</h3>
                <p class="price">2,999 บาท</p>
                <p>คงเหลือ: <span id="remaining-book2">1000</span> เล่ม</p>
                <input type="number" id="qty2" min="1" value="1">
                <button class="btn" onclick="addToCart('book2')">➕ เพิ่มลงตะกร้า</button>
            </div>
        </div>

        <div class="cart-section card">
            <h3>🧺 ตะกร้าสินค้าของคุณ</h3>
            <table id="cart-table">
                <thead>
                    <tr><th>สินค้า</th><th>ราคา</th><th>จำนวน</th><th>รวม</th><th>ลบ</th></tr>
                </thead>
                <tbody></tbody>
            </table>
            <div class="cart-total">
                <h3>ยอดรวมทั้งหมด: <span id="total-price">0</span> บาท</h3>
                <a href="https://www.paypal.com/paypalme/TAWATCHAIPHONGPHAEW" target="_blank" class="btn">💳 ชำระเงินผ่าน PayPal</a>
            </div>
        </div>
        <button class="btn" onclick="showPage('home')">⬅ กลับหน้าหลัก</button>
    </div>
<section id="review-surrounded-by-idiots" class="section">
    <div class="card review-card">
        <div class="review-header">
            <span class="badge">Psychology Bestseller</span>
            <h2>📘 Surrounded by Idiots — Thomas Erikson</h2>
        </div>

        <p class="description">
            หนังสือแนว <em>Self-help & Psychology</em> ที่อธิบายพฤติกรรมมนุษย์ผ่านระบบ <strong>DISC</strong> 
            เพื่อให้คุณเข้าใจตัวเองและคนรอบข้างได้ลึกซึ้งยิ่งขึ้น เลิกสงสัยว่าทำไมคนอื่นถึงไม่เหมือนเรา!
        </p>

        <div class="color-grid">
            <div class="color-item red"><strong>Red:</strong> มุ่งมั่น ตัดสินใจเร็ว</div>
            <div class="color-item yellow"><strong>Yellow:</strong> ร่าเริง สร้างแรงบันดาลใจ</div>
            <div class="color-item green"><strong>Green:</strong> ใจเย็น มั่นคง รับฟัง</div>
            <div class="color-item blue"><strong>Blue:</strong> รอบคอบ เน้นข้อเท็จจริง</div>
        </div>

        <div class="stats-row">
            <div class="stat-box"><h4>55+</h4><p>ภาษาที่แปล</p></div>
            <div class="stat-box"><h4>1.5M+</h4><p>เล่มทั่วโลก</p></div>
        </div>

        <h3>📌 ประโยชน์ที่คุณจะได้รับ</h3>
        <ul class="benefit-list">
            <li>ระบุสไตล์พฤติกรรมคนรอบตัวได้อย่างแม่นยำ</li>
            <li>ลดความขัดแย้งและเพิ่มประสิทธิภาพการสื่อสาร</li>
            <li>ประยุกต์ใช้ได้ทั้งเรื่องงานและความสัมพันธ์ส่วนตัว</li>
        </ul>

        <div class="author-info">
            <p><strong>ผู้เขียน:</strong> Thomas Erikson ผู้เชี่ยวชาญด้านพฤติกรรมชาวสวีเดน</p>
        </div>
    </div>
</section>

<section id="copyright-policy" class="section">
    <div class="card policy-card">
        <h2>📜 นโยบายลิขสิทธิ์ (Copyright Policy)</h2>
        <p>เนื้อหาในเว็บไซต์นี้ รวมถึงข้อความ บทความ รูปภาพ วิดีโอ โค้ด และองค์ประกอบอื่น ๆ เป็นทรัพย์สินทางปัญญาของ <strong>89sam1book</strong> และได้รับการคุ้มครองตามกฎหมายลิขสิทธิ์</p>
        
        <div class="policy-grid">
            <div class="policy-item">
                <h4>❗ ข้อห้าม</h4>
                <ul>
                    <li>คัดลอกหรือดัดแปลงเนื้อหาเพื่อเผยแพร่ใหม่</li>
                    <li>ใช้สื่อ (ภาพ/โค้ด) เพื่อผลประโยชน์ทางพาณิชย์</li>
                    <li>แจกจ่ายไฟล์โดยไม่ได้รับอนุญาต</li>
                </ul>
            </div>
            <div class="policy-item">
                <h4>✔ การอนุญาต</h4>
                <ul>
                    <li>อ่านเพื่อการศึกษาหรือใช้งานส่วนบุคคล</li>
                    <li>แชร์ลิงก์หน้าเว็บหลักเพื่อการแนะนำ</li>
                    <li>ขออนุญาตเป็นลายลักษณ์อักษรเพื่อใช้งานอื่น</li>
                </ul>
            </div>
        </div>
        <p class="contact-note">📩 ติดต่อขออนุญาตได้ผ่านช่องทาง Social Media ในหน้าติดต่อสอบถาม</p>
    </div>
</section>
<section id="preview-inside" class="section">
    <h2 style="text-align:center;">🔍 เจาะลึกเนื้อหาภายในเล่ม</h2>
    <div class="card inside-card">
        <div class="inside-grid">
            <div class="inside-text">
                <h3>สิ่งที่ทำให้ 89 LAWS ต่างจากเล่มอื่น</h3>
                <ul>
                    <li><strong>Infographic:</strong> สรุปกฎยากๆ ให้เข้าใจง่ายด้วยภาพ</li>
                    <li><strong>Action Plan:</strong> มีขั้นตอนการลงมือทำจริงท้ายบท</li>
                    <li><strong>Psychology-Based:</strong> ข้อมูลอ้างอิงจากงานวิจัยทางสมอง</li>
                </ul>
            </div>
            <div class="inside-image">
                <img src="preview-page.jpg" alt="ตัวอย่างเนื้อหาข้างในเล่ม" class="img-fluid">
            </div>
        </div>
    </div>
</section>

<section id="reviews" class="section">
    <h2 style="text-align:center;">💬 รีวิวจากผู้อ่านจริง</h2>
    <div class="testimonials-grid">
        <div class="card testimonial">
            <p>"เปลี่ยนวิธีคิดเรื่องเงินไปเลยครับ เล่ม 1 จิตวิทยาสร้างเงิน ทำออกมาได้พรีเมียมมาก"</p>
            <span>- คุณเอกชัย (นักธุรกิจ)</span>
        </div>
        <div class="card testimonial">
            <p>"หน้าปกสวยมาก เนื้อหาข้างในอ่านง่าย สรุปมาให้เป็นข้อๆ ใช้ได้จริงทันที"</p>
            <span>- คุณรินดา (เจ้าของแบรนด์)</span>
        </div>
    </div>
</section>

<section id="faq" class="section">
    <h2 style="text-align:center;">❓ คำถามที่พบบ่อย</h2>
    <div class="card faq-item">
        <h4>หนังสือเป็นแบบเล่มหรือ eBook?</h4>
        <p>มีทั้งรูปแบบเล่มพิมพ์พรีเมียม (A5) และ eBook (PDF/Epub) สำหรับอ่านบน iPad/Kindle ครับ</p>
    </div>
    <div class="card faq-item">
        <h4>ใช้เวลาจัดส่งนานเท่าไหร่?</h4>
        <p>สำหรับรูปแบบเล่ม จัดส่งถึงบ้านภายใน 2-3 วันทำการครับ</p>
    </div>
</section>
/* Inside Look Styling */
.inside-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    align-items: center;
}

@media (max-width: 768px) {
    .inside-grid { grid-template-columns: 1fr; }
}

.inside-text h3 { color: var(--primary); }
.inside-text ul { padding-left: 20px; }
.inside-text li { margin-bottom: 10px; }

.inside-image img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0,0,0,0.5);
}

/* Testimonials */
.testimonials-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.testimonial {
    font-style: italic;
    border-bottom: 3px solid var(--primary);
}

.testimonial span {
    display: block;
    margin-top: 10px;
    font-weight: bold;
    color: var(--primary);
    font-style: normal;
}

/* FAQ */
.faq-item h4 {
    color: var(--primary);
    margin-bottom: 5px;
}
.faq-item p {
    margin: 0;
    opacity: 0.9;
}


<footer class="main-footer">
    <p>© 2026 <strong>89sam1book</strong> สงวนสิทธิ์ทุกประการ. ห้ามคัดลอก ทำซ้ำ หรือเผยแพร่เนื้อหานี้โดยไม่ได้รับอนุญาต.</p>
</footer>
/* Review Card Special Styles */
.review-card {
    border-top: 4px solid var(--primary);
}

.color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 10px;
    margin: 20px 0;
}

.color-item {
    padding: 12px;
    border-radius: 8px;
    font-size: 0.9rem;
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    text-align: center;
}

.red { background: #e11d48; }
.yellow { background: #fbbf24; color: #000; text-shadow: none; }
.green { background: #16a34a; }
.blue { background: #2563eb; }

.stats-row {
    display: flex;
    justify-content: space-around;
    background: rgba(255,255,255,0.05);
    padding: 15px;
    border-radius: 10px;
    margin: 20px 0;
}

.stat-box h4 { color: var(--primary); margin: 0; font-size: 1.5rem; }
.stat-box p { margin: 0; font-size: 0.8rem; opacity: 0.7; }

/* Policy Section Styles */
.policy-card {
    border: 1px solid rgba(255,255,255,0.1);
    font-size: 0.95rem;
}

.policy-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    margin: 20px 0;
}

.policy-item h4 { color: var(--primary); margin-bottom: 10px; }
.policy-item ul { padding-left: 20px; }
.contact-note { font-style: italic; opacity: 0.8; text-align: center; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 15px; }

/* Footer Style */
.main-footer {
    text-align: center;
    padding: 30px;
    font-size: 0.85rem;
    color: #888;
    background: #020617;
}


    <footer class="section">
        <hr>
        <h2>🌍 ติดตามและติดต่อผู้เขียน</h2>
        <div class="social-links">
            <a href="https://www.linkedin.com/in/sam-phongphaew-ab2111347" target="_blank">LinkedIn</a>
            <a href="https://www.youtube.com/@Ebook1book" target="_blank">YouTube</a>
            <a href="https://www.facebook.com/" target="_blank">Facebook</a>
            <a href="https://www.tiktok.com/" target="_blank">TikTok</a>
        </div>
        <p>© 2026 89sam1book โดย คุณธวัชชัย ผ่องแผ้ว</p>
    </footer>

    <div id="ebook-popup">
        <div class="popup-content">
            <h2>รับ Free Chapter</h2>
            <p>กรอกอีเมลเพื่อรับลิงก์ดาวน์โหลด</p>
            <input type="email" id="subscriber-email" placeholder="email@example.com">
            <button class="btn" onclick="closeEbookPopup()">ตกลง</button>
            <button class="btn btn-close" onclick="closeEbookPopup()">ปิด</button>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>:root {
    --bg-dark: #0f172a;
    --card-dark: #1e293b;
    --text-white: #f1f5f9;
    --primary: #38bdf8;
    --accent: #0ea5e9;
}

body {
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: var(--bg-dark);
    color: var(--text-white);
    transition: background 0.3s, color 0.3s;
    line-height: 1.6;
}

/* Light Mode Override */
body.light {
    --bg-dark: #f1f5f9;
    --card-dark: #ffffff;
    --text-white: #1e293b;
}

header {
    text-align: center;
    padding: 60px 20px;
    background: linear-gradient(135deg, #1e293b, #020617);
    color: white;
}

.section {
    max-width: 800px;
    margin: 40px auto;
    padding: 20px;
}

.card {
    background: var(--card-dark);
    padding: 25px;
    margin: 20px 0;
    border-radius: 15px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.btn {
    background: var(--primary);
    color: #000;
    border: none;
    padding: 12px 25px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
    transition: 0.3s;
    display: inline-block;
}

.btn:hover {
    background: var(--accent);
    transform: translateY(-2px);
}

.btn-mode {
    background: transparent;
    border: 1px solid var(--primary);
    color: var(--primary);
    padding: 8px 15px;
    cursor: pointer;
    border-radius: 20px;
}

/* Shop Styling */
.products-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

input[type="number"], input[type="email"], textarea {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    margin: 10px 0;
    box-sizing: border-box;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #444;
}

/* Progress Bar */
.progress-container {
    width: 100%;
    background: #334155;
    height: 10px;
    border-radius: 5px;
    margin: 15px 0;
}

.progress-bar {
    height: 100%;
    background: var(--primary);
    width: 0%;
    border-radius: 5px;
}

/* Popup */
#ebook-popup {
    display: none;
    position: fixed;
    top:0; left:0; width:100%; height:100%;
    background: rgba(0,0,0,0.85);
    z-index: 1000;
}

.popup-content {
    background: var(--card-dark);
    max-width: 400px;
    margin: 100px auto;
    padding: 40px;
    border-radius: 15px;
    text-align: center;
}
// --- CONFIGURATION ---
let currentChapter = 1;
const totalChapters = 2;
let stockBook1 = 1000;
let soldBook1 = 562;
let stockBook2 = 1000;
let soldBook2 = 420;

const priceMap = {
    book1: 1299,
    book2: 2999
};

const productNames = {
    book1: "89sam1book เล่มที่ 1",
    book2: "89sam1book เล่มที่ 2–6"
};

let cart = JSON.parse(localStorage.getItem("cartData")) || [];

// --- NAVIGATION & UI ---
function toggleMode() {
    document.body.classList.toggle("light");
}

function showPage(pageId) {
    document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
    const target = document.getElementById(pageId);
    if (target) {
        target.style.display = 'block';
        window.scrollTo(0, 0);
    }
    
    if (pageId.startsWith('c')) {
        currentChapter = parseInt(pageId.replace('c', ''));
        updateProgress();
    }
}

function nextChapter() {
    if (currentChapter < totalChapters) showPage('c' + (currentChapter + 1));
}

function updateProgress() {
    const bar = document.getElementById(`progress-bar-${currentChapter}`);
    if (bar) bar.style.width = (currentChapter / totalChapters * 100) + "%";
}

// --- SHOP LOGIC ---
function updateStockDisplay() {
    document.getElementById("remaining-book1").innerText = stockBook1 - soldBook1;
    document.getElementById("remaining-book2").innerText = stockBook2 - soldBook2;
    document.getElementById("total-stock").innerText = `สต็อกรวม: ${stockBook1 + stockBook2} เล่ม`;
    document.getElementById("sold").innerText = `ขายแล้ว: ${soldBook1 + soldBook2} เล่ม`;
    document.getElementById("remaining").innerText = `คงเหลือ: ${(stockBook1 - soldBook1) + (stockBook2 - soldBook2)} เล่ม`;
}

function addToCart(prodId) {
    const qtyInput = document.getElementById(prodId === "book1" ? "qty1" : "qty2");
    let qty = parseInt(qtyInput.value);
    
    let available = (prodId === "book1" ? stockBook1 - soldBook1 : stockBook2 - soldBook2);
    if (qty > available) {
        alert("ขออภัย! สินค้าในสต็อกไม่เพียงพอ");
        return;
    }

    const itemIndex = cart.findIndex(item => item.id === prodId);
    if (itemIndex >= 0) {
        cart[itemIndex].qty += qty;
    } else {
        cart.push({ id: prodId, name: productNames[prodId], price: priceMap[prodId], qty: qty });
    }

    if (prodId === "book1") soldBook1 += qty;
    else soldBook2 += qty;

    saveCart();
    updateCartUI();
    updateStockDisplay();
    alert("เพิ่มลงตะกร้าแล้ว!");
}

function updateCartUI() {
    const tbody = document.querySelector("#cart-table tbody");
    tbody.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        let row = `<tr>
            <td>${item.name}</td>
            <td>${item.price.toLocaleString()}</td>
            <td>${item.qty}</td>
            <td>${(item.price * item.qty).toLocaleString()}</td>
            <td><button onclick="removeItem(${index})" style="background:red; color:white; border:none; border-radius:4px; cursor:pointer;">X</button></td>
        </tr>`;
        tbody.innerHTML += row;
        total += item.price * item.qty;
    });

    document.getElementById("total-price").innerText = total.toLocaleString();
}

function removeItem(index) {
    const removed = cart.splice(index, 1)[0];
    if (removed.id === "book1") soldBook1 -= removed.qty;
    else soldBook2 -= removed.qty;

    saveCart();
    updateCartUI();
    updateStockDisplay();
}

function saveCart() {
    localStorage.setItem("cartData", JSON.stringify(cart));
}

// --- FEATURES ---
function submitQuiz(chapter, answer) {
    const answers = { 1: "ความคิด", 2: "อารมณ์" };
    if (answer === answers[chapter]) alert("ถูกต้องครับ! 🎉");
    else alert("ลองทบทวนดูอีกครั้งนะครับ 😅");
}

function saveReflection(chapter) {
    const text = document.getElementById(`reflection-${chapter}`).value;
    localStorage.setItem(`reflection_ch${chapter}`, text);
    alert("บันทึกความคิดเห็นของคุณแล้ว");
}

function showEbookPopup() { document.getElementById("ebook-popup").style.display = "block"; }
function closeEbookPopup() { document.getElementById("ebook-popup").style.display = "none"; }

// Initialize
updateStockDisplay();
updateCartUI();
<section id="review-surrounded-by-idiots" class="section">
  <div class="card review-card">
    <div class="review-header">
        <span class="badge">Bestseller Psychology</span>
        <h2>📘 Surrounded by Idiots</h2>
        <p class="author-sub">เขียนโดย: <strong>Thomas Erikson</strong></p>
    </div>

    <p class="description">
        <strong>Surrounded by Idiots</strong> เป็นหนังสือแนว <em>Self-help & Psychology</em> 
        ที่นำเสนอระบบ <strong>DISC</strong> เพื่ออธิบายพฤติกรรมมนุษย์ผ่านสี 4 สี 
        ช่วยให้คุณเลิกสงสัยว่าทำไมคนรอบข้างถึงเข้าใจยาก และเปลี่ยนมาเป็น "สื่อสารให้ตรงใจ" แทน
    </p>

    <div class="color-grid">
        <div class="color-item red"><strong>Red</strong> (Dominance) - กล้าตัดสินใจ, มุ่งมั่น</div>
        <div class="color-item yellow"><strong>Yellow</strong> (Influence) - ร่าเริง, ช่างพูด, คิดบวก</div>
        <div class="color-item green"><strong>Green</strong> (Steadiness) - ใจเย็น, รับฟัง, ชอบความมั่นคง</div>
        <div class="color-item blue"><strong>Blue</strong> (Compliance) - เจ้าระเบียบ, ละเอียด, เน้นข้อมูล</div>
    </div>

    <div class="stats-row">
        <div class="stat-box">
            <h4>🌍 55+</h4>
            <p>ภาษาทั่วโลก</p>
        </div>
        <div class="stat-box">
            <h4>📈 1.5M+</h4>
            <p>ยอดขายทั่วโลก</p>
        </div>
    </div>

    <h3>📌 ประโยชน์ที่คุณจะได้รับ</h3>
    <ul class="benefit-list">
        <li><strong>ลดความขัดแย้ง:</strong> เข้าใจว่าสิ่งที่เขาทำ ไม่ใช่เพราะแกล้งเรา แต่เป็นสไตล์ของเขา</li>
        <li><strong>เพิ่มประสิทธิภาพงาน:</strong> รู้วิธีสั่งงานหรือขอความช่วยเหลือให้ได้ผล 100%</li>
        <li><strong>ความสัมพันธ์ดีขึ้น:</strong> สื่อสารกับครอบครัวและเพื่อนร่วมงานได้อย่างราบรื่น</li>
    </ul>

    <div class="author-box">
        <p><em>"Thomas Erikson เป็นผู้เชี่ยวชาญด้านพฤติกรรมชาวสวีเดน ที่ทำให้จิตวิทยาที่ดูยาก กลายเป็นเรื่องสนุกและใช้ได้จริงในชีวิตประจำวัน"</em></p>
    </div>
  </div>
</section>
/* Review Section Styling */
.review-card {
    border-left: 5px solid var(--primary);
    transition: 0.4s;
}

.badge {
    background: var(--primary);
    color: #000;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
}

.author-sub {
    color: var(--primary);
    margin-top: 5px;
}

/* Color Grid Layout */
.color-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin: 20px 0;
}

.color-item {
    padding: 10px;
    border-radius: 8px;
    font-size: 14px;
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
}

.red { background: #ef4444; }
.yellow { background: #facc15; color: #000; text-shadow: none; }
.green { background: #22c55e; }
.blue { background: #3b82f6; }

/* Stats Row */
.stats-row {
    display: flex;
    justify-content: space-around;
    background: rgba(255, 255, 255, 0.05);
    padding: 15px;
    border-radius: 12px;
    margin: 20px 0;
}

.stat-box {
    text-align: center;
}

.stat-box h4 {
    margin: 0;
    font-size: 24px;
    color: var(--primary);
}

.stat-box p {
    margin: 0;
    font-size: 12px;
    opacity: 0.7;
}

.benefit-list {
    padding-left: 20px;
}

.benefit-list li {
    margin-bottom: 10px;
}

.author-box {
    margin-top: 20px;
    padding: 10px;
    border-top: 1px dashed rgba(255,255,255,0.2);
    font-style: italic;
    font-size: 14px;
    opacity: 0.8;
}
<section id="review-thinking-big" class="section">
  <div class="card review-card magic-gold">
    <div class="review-header">
        <span class="badge">Success & Mindset</span>
        <h2>📘 The Magic of Thinking Big</h2>
        <p class="author-sub">เขียนโดย: <strong>David J. Schwartz</strong></p>
    </div>

    <p class="description">
        หนึ่งในหนังสือพัฒนาตนเองที่ทรงอิทธิพลที่สุดตลอดกาล สอนให้คุณปลดล็อกพลังของ <strong>"ความเชื่อ"</strong> 
        เพราะขนาดของความสำเร็จ จะขึ้นอยู่กับขนาดของความคิดที่คุณมีต่อตัวเอง
    </p>

    <div class="key-takeaways">
        <div class="takeaway-item">🚀 <strong>คิดใหญ่:</strong> ก้าวข้ามความกลัวและข้อจำกัดที่ตัวเองสร้างขึ้น</div>
        <div class="takeaway-item">🛡️ <strong>รักษาโรคแก้ตัว:</strong> เลิกหาเหตุผลว่าทำไมเราถึงทำไม่ได้</div>
        <div class="takeaway-item">💎 <strong>ทัศนคติคือทุกอย่าง:</strong> วิธีการมองโลกที่เปลี่ยนวิกฤตเป็นโอกาส</div>
    </div>

    <div class="quote-box">
        "เชื่อว่ามันเป็นไปได้ แล้วใจคุณจะหาหนทางทำให้มันเกิดขึ้นเอง"
    </div>
  </div>
</section>

<section id="review-power-of-now" class="section">
  <div class="card review-card power-zen">
    <div class="review-header">
        <span class="badge">Spirituality & Mindfulness</span>
        <h2>📘 The Power of Now</h2>
        <p class="author-sub">เขียนโดย: <strong>Eckhart Tolle</strong></p>
    </div>

    <p class="description">
        หนังสือที่จะเปลี่ยนชีวิตคุณด้วยการพาคุณกลับมาอยู่กับ <strong>"ปัจจุบันขณะ"</strong> 
        หยุดการวนเวียนอยู่กับความเจ็บปวดในอดีต และความกังวลในอนาคตที่ยังมาไม่ถึง
    </p>

    <div class="zen-grid">
        <div class="zen-item">🧘‍♂️ <strong>Awareness:</strong> รู้เท่าทันความคิดที่คอยตัดสินเรา</div>
        <div class="zen-item">⏳ <strong>No Time:</strong> เข้าใจว่า "ตอนนี้" คือเวลาเดียวที่มีอยู่จริง</div>
        <div class="zen-item">✨ <strong>Inner Peace:</strong> ค้นพบความสงบที่อยู่ลึกภายใต้พายุอารมณ์</div>
    </div>

    <div class="stats-row">
        <div class="stat-box">
            <h4>🌐 33+</h4>
            <p>ภาษาที่แปล</p>
        </div>
        <div class="stat-box">
            <h4>🕯️ #1</h4>
            <p>NY Times Bestseller</p>
        </div>
    </div>
  </div>
</section>
<section id="collection" class="section">
    <h2 style="text-align:center;">📚 ชุดหนังสือ 89 LAWS Complete Set</h2>
    <div class="book-grid">
        <div class="book-item">
            <img src="path-to-your-image/book1.jpg" alt="เล่ม 1 จิตวิทยา">
            <h4>เล่ม 1: จิตวิทยาสร้างเงิน</h4>
        </div>
        <div class="book-item">
            <img src="path-to-your-image/book2.jpg" alt="เล่ม 2 Education">
            <h4>เล่ม 2: กฎแห่งการศึกษา</h4>
        </div>
        <div class="book-item">
            <img src="path-to-your-image/book3.jpg" alt="เล่ม 3 Greatness">
            <h4>เล่ม 3: กฎแห่งความคิด</h4>
        </div>
        <div class="book-item">
            <img src="path-to-your-image/book4.jpg" alt="เล่ม 4 Power">
            <h4>เล่ม 4: กฎแห่งอำนาจ</h4>
        </div>
        <div class="book-item">
            <img src="path-to-your-image/book5.jpg" alt="เล่ม 5 Wealth">
            <h4>เล่ม 5: กฎแห่งความมั่งคั่ง</h4>
        </div>
        <div class="book-item">
            <img src="path-to-your-image/book6.jpg" alt="เล่ม 6 Greatness Life">
            <h4>เล่ม 6: ความยิ่งใหญ่ของชีวิต</h4>
        </div>
    </div>
</section>

<section id="shop" class="section">
    <div class="card promo-card">
        <h3>🔥 Special Bundle Offer</h3>
        <p>ซื้อครบเซต 6 เล่ม จากปกติ 7,794.- เหลือเพียง <strong>5,900 บาท</strong></p>
        <button class="btn" onclick="addToCart('bundle_set')">🛒 สั่งซื้อครบชุด (ประหยัด 1,800+)</button>
    </div>

    <div class="products-grid">
        <div class="product-card card">
            <h3>89 LAWS (รายเล่ม)</h3>
            <p>เลือกเล่มที่ต้องการ</p>
            <select id="book-select">
                <option value="book1">เล่ม 1: จิตวิทยาสร้างเงิน</option>
                <option value="book2">เล่ม 2: กฎแห่งการศึกษา</option>
                <option value="book3">เล่ม 3: กฎแห่งความคิด</option>
                <option value="book4">เล่ม 4: กฎแห่งอำนาจ</option>
                <option value="book5">เล่ม 5: กฎแห่งความมั่งคั่ง</option>
                <option value="book6">เล่ม 6: ความยิ่งใหญ่ของชีวิต</option>
            </select>
            <p class="price">ราคาเล่มละ 1,299 บาท</p>
            <button class="btn" onclick="addSingleBook()">➕ เพิ่มลงตะกร้า</button>
        </div>
    </div>
</section>
.book-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    margin: 30px 0;
}

.book-item {
    text-align: center;
    transition: 0.3s;
}

.book-item img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.5);
    margin-bottom: 10px;
}

.book-item:hover {
    transform: scale(1.05);
}

.promo-card {
    background: linear-gradient(135deg, #4338ca, #1e1b4b);
    border: 2px solid #fbbf24;
    text-align: center;
}

#book-select {
    width: 100%;
    padding: 10px;
    margin-bottom: 15px;
    background: #0f172a;
    color: white;
    border: 1px solid var(--primary);
    border-radius: 5px;
}

// เพิ่มข้อมูลราคาและชื่อ
const productData = {
    book1: { name: "89 LAWS เล่ม 1", price: 1299 },
    book2: { name: "89 LAWS เล่ม 2", price: 1299 },
    book3: { name: "89 LAWS เล่ม 3", price: 1299 },
    book4: { name: "89 LAWS เล่ม 4", price: 1299 },
    book5: { name: "89 LAWS เล่ม 5", price: 1299 },
    book6: { name: "89 LAWS เล่ม 6", price: 1299 },
    bundle_set: { name: "89 LAWS Complete Set (6 เล่ม)", price: 5900 }
};

function addSingleBook() {
    const selectedBook = document.getElementById('book-select').value;
    addToCart(selectedBook);
}

// แก้ไขฟังก์ชัน addToCart เดิม
function addToCart(prodId) {
    const itemInfo = productData[prodId];
    const itemIndex = cart.findIndex(item => item.id === prodId);

    if (itemIndex >= 0) {
        cart[itemIndex].qty += 1;
    } else {
        cart.push({ 
            id: prodId, 
            name: itemInfo.name, 
            price: itemInfo.price, 
            qty: 1 
        });
    }

    saveCart();
    updateCartUI();
    alert(`เพิ่ม ${itemInfo.name} ลงตะกร้าแล้ว!`);
}
<!DOCTYPE html>
<html lang="th">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>89 LAWS | Official Store</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <h1>89 LAWS OF SUCCESS</h1>
        <p>กฎแห่งความสำเร็จ ความมั่งคั่ง และการตื่นรู้ โดย ธวัชชัย ผ่องแผ้ว</p>
        <div class="header-btns">
            <button class="btn-mode" onclick="toggleMode()">🌙 Dark/Light Mode</button>
            <button class="btn" onclick="showPage('collection')">📖 คอลเลกชัน</button>
            <button class="btn" onclick="showPage('shop')">🛒 ร้านค้า</button>
        </div>
    </header>

    <section id="collection" class="section">
        <h2 style="text-align:center;">📚 89 LAWS Complete Set</h2>
        <div class="book-grid">
            <div class="book-item">
                <img src="book1.jpg" alt="เล่ม 1 จิตวิทยา">
                <h4>เล่ม 1: จิตวิทยาสร้างเงิน</h4>
            </div>
            <div class="book-item">
                <img src="book2.jpg" alt="เล่ม 2 Education">
                <h4>เล่ม 2: กฎแห่งการศึกษา</h4>
            </div>
            <div class="book-item">
                <img src="book3.jpg" alt="เล่ม 3 Greatness">
                <h4>เล่ม 3: กฎแห่งความคิด</h4>
            </div>
            <div class="book-item">
                <img src="book4.jpg" alt="เล่ม 4 Power">
                <h4>เล่ม 4: กฎแห่งอำนาจ</h4>
            </div>
            <div class="book-item">
                <img src="book5.jpg" alt="เล่ม 5 Wealth">
                <h4>เล่ม 5: กฎแห่งความมั่งคั่ง</h4>
            </div>
            <div class="book-item">
                <img src="book6.jpg" alt="เล่ม 6 Greatness Life">
                <h4>เล่ม 6: ความยิ่งใหญ่ของชีวิต</h4>
            </div>
        </div>
    </section>

    <div id="shop" class="section" style="display:none">
        <div class="card promo-card">
            <span class="badge">คุ้มที่สุด</span>
            <h3>🔥 89 LAWS Complete Set (6 เล่ม)</h3>
            <p>รวมกฎแห่งความสำเร็จทุกมิติ จากปกติ 7,794.-</p>
            <p class="price-big">พิเศษเพียง 5,900 บาท</p>
            <button class="btn" onclick="addToCart('bundle_set')">🛒 สั่งซื้อครบชุด (ประหยัด 1,800+)</button>
        </div>

        <div class="products-grid">
            <div class="product-card card">
                <h3>รายเล่ม (เล่มที่ 1-6)</h3>
                <p>เลือกเล่มที่ต้องการสะสม</p>
                <select id="book-select">
                    <option value="book1">เล่ม 1: จิตวิทยาสร้างเงิน</option>
                    <option value="book2">เล่ม 2: กฎแห่งการศึกษา</option>
                    <option value="book3">เล่ม 3: กฎแห่งความคิด</option>
                    <option value="book4">เล่ม 4: กฎแห่งอำนาจ</option>
                    <option value="book5">เล่ม 5: กฎแห่งความมั่งคั่ง</option>
                    <option value="book6">เล่ม 6: ความยิ่งใหญ่ของชีวิต</option>
                </select>
                <p class="price">1,299 บาท</p>
                <button class="btn" onclick="addSingleBook()">➕ เพิ่มลงตะกร้า</button>
            </div>
        </div>

        <div class="cart-section card">
            <h3>🧺 ตะกร้าสินค้าของคุณ</h3>
            <div class="table-responsive">
                <table id="cart-table">
                    <thead>
                        <tr><th>สินค้า</th><th>ราคา</th><th>จำนวน</th><th>รวม</th><th>ลบ</th></tr>
                    </thead>
                    <tbody></tbody>
                </table>
            </div>
            <div class="cart-total">
                <h3>รวมทั้งสิ้น: <span id="total-price">0</span> บาท</h3>
                <a href="https://www.paypal.com/paypalme/TAWATCHAIPHONGPHAEW" target="_blank" class="btn">💳 ชำระเงินผ่าน PayPal</a>
            </div>
        </div>
    </div>

    <footer class="section">
        <p>© 2026 89sam1book โดย คุณธวัชชัย ผ่องแผ้ว</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
:root {
    --bg-dark: #0f172a;
    --card-dark: #1e293b;
    --text-white: #f1f5f9;
    --primary: #fbbf24; /* สีทอง */
    --accent: #d97706;
}

body {
    margin: 0; font-family: 'Inter', sans-serif;
    background: var(--bg-dark); color: var(--text-white);
    line-height: 1.6; transition: 0.3s;
}

body.light {
    --bg-dark: #f8fafc; --card-dark: #ffffff; --text-white: #1e293b;
}

header {
    text-align: center; padding: 60px 20px;
    background: linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('header-bg.jpg');
    background-size: cover; border-bottom: 2px solid var(--primary);
}

.section { max-width: 1000px; margin: 0 auto; padding: 40px 20px; }

.card {
    background: var(--card-dark); padding: 25px; border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.3); margin-bottom: 20px;
}

.book-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 20px;
}

.book-item img {
    width: 100%; border-radius: 10px; border: 1px solid var(--primary);
    transition: 0.3s; cursor: pointer;
}

.book-item img:hover { transform: scale(1.05); box-shadow: 0 0 20px var(--primary); }

.promo-card {
    text-align: center; border: 2px solid var(--primary);
    background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
}

.price-big { font-size: 2rem; color: var(--primary); font-weight: bold; }

.btn {
    background: var(--primary); color: #000; padding: 12px 30px;
    border-radius: 50px; font-weight: bold; cursor: pointer; border: none;
    transition: 0.3s; text-decoration: none; display: inline-block;
}

.btn:hover { background: #fff; transform: translateY(-3px); }

table { width: 100%; border-collapse: collapse; margin: 20px 0; }
th, td { padding: 15px; text-align: left; border-bottom: 1px solid rgba(255,255,255,0.1); }

.badge {
    background: var(--primary); color: #000; padding: 5px 15px;
    border-radius: 20px; font-size: 0.8rem; font-weight: bold;
}
const productData = {
    book1: { name: "89 LAWS เล่ม 1: จิตวิทยาสร้างเงิน", price: 1299 },
    book2: { name: "89 LAWS เล่ม 2: กฎแห่งการศึกษา", price: 1299 },
    book3: { name: "89 LAWS เล่ม 3: กฎแห่งความคิด", price: 1299 },
    book4: { name: "89 LAWS เล่ม 4: กฎแห่งอำนาจ", price: 1299 },
    book5: { name: "89 LAWS เล่ม 5: กฎแห่งความมั่งคั่ง", price: 1299 },
    book6: { name: "89 LAWS เล่ม 6: ความยิ่งใหญ่ของชีวิต", price: 1299 },
    bundle_set: { name: "89 LAWS Complete Set (6 เล่ม)", price: 5900 }
};

let cart = JSON.parse(localStorage.getItem("cartData")) || [];

function toggleMode() { document.body.classList.toggle("light"); }

function showPage(pageId) {
    document.querySelectorAll('.section').forEach(sec => sec.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
    window.scrollTo(0, 0);
}

function addSingleBook() {
    const selectedId = document.getElementById('book-select').value;
    addToCart(selectedId);
}

function addToCart(prodId) {
    const itemInfo = productData[prodId];
    const itemIndex = cart.findIndex(item => item.id === prodId);

    if (itemIndex >= 0) {
        cart[itemIndex].qty += 1;
    } else {
        cart.push({ id: prodId, name: itemInfo.name, price: itemInfo.price, qty: 1 });
    }

    saveCart();
    updateCartUI();
    alert(`เพิ่ม ${itemInfo.name} ลงตะกร้าแล้ว!`);
}

function updateCartUI() {
    const tbody = document.querySelector("#cart-table tbody");
    if(!tbody) return;
    tbody.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price * item.qty;
        tbody.innerHTML += `
            <tr>
                <td>${item.name}</td>
                <td>${item.price.toLocaleString()}</td>
                <td>${item.qty}</td>
                <td>${(item.price * item.qty).toLocaleString()}</td>
                <td><button onclick="removeItem(${index})" style="cursor:pointer; background:none; border:none; color:red;">❌</button></td>
            </tr>`;
    });
    document.getElementById("total-price").innerText = total.toLocaleString();
}

function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
}

function saveCart() {
    localStorage.setItem("cartData", JSON.stringify(cart));
}

// เริ่มต้นระบบ
updateCartUI();


import Header from "@/components/header";
import Hero from "@/components/hero";
import Features from "@/components/features";
import Pricing from "@/components/pricing";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Footer />
    </main>
  );
}export default function Dashboard() {
  return <h1>Dashboard (กำลังเชื่อมระบบ)</h1>;
}export default function Login() {
  return <h1>Login Page</h1>;
}