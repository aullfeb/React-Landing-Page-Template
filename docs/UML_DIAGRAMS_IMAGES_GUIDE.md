# Panduan Menghasilkan Gambar UML untuk Laporan

## 📸 Cara Generate Gambar UML

Untuk memasukkan diagram ke dalam laporan, Anda perlu mengkonversi kode PlantUML menjadi gambar. Berikut beberapa cara:

## 🌐 Metode 1: Online PlantUML Editor (Paling Mudah)

### Langkah-langkah:

1. **Buka PlantUML Online Editor**

   - Kunjungi: http://www.plantuml.com/plantuml/uml/
   - Atau: https://www.planttext.com/

2. **Copy Kode PlantUML**

   - Buka file `UML_CLASS_DIAGRAM.md` atau `UML_SEQUENCE_DIAGRAMS.md`
   - Copy kode yang ada di dalam blok ` ```plantuml ` sampai ` ``` `
   - Contoh: Copy dari `@startuml` sampai `@enduml`

3. **Paste ke Editor**

   - Paste kode di editor online
   - Diagram akan otomatis ter-render

4. **Download Gambar**
   - Klik tombol "PNG" atau "SVG" untuk download
   - Simpan dengan nama yang sesuai, contoh:
     - `class_diagram.png`
     - `sequence_app_initialization.png`
     - `sequence_product_modal.png`
     - `sequence_contact_form.png`
     - `sequence_smooth_scroll.png`
     - `sequence_gallery.png`

## 💻 Metode 2: VS Code Extension

### Instalasi:

1. **Install Extension**

   ```
   - Buka VS Code
   - Tekan Ctrl+Shift+X (Windows) atau Cmd+Shift+X (Mac)
   - Cari "PlantUML"
   - Install extension "PlantUML" by jebbs
   ```

2. **Install Java (Diperlukan)**

   - Download Java JRE: https://www.java.com/download/
   - Install Java di komputer Anda

3. **Install Graphviz (Diperlukan)**
   - Download: https://graphviz.org/download/
   - Install Graphviz di komputer Anda

### Cara Menggunakan:

1. **Buka File Markdown**

   - Buka `UML_CLASS_DIAGRAM.md` atau `UML_SEQUENCE_DIAGRAMS.md`

2. **Preview Diagram**

   - Tekan `Alt+D` untuk preview
   - Atau klik kanan → "Preview Current Diagram"

3. **Export ke Gambar**
   - Klik kanan pada diagram
   - Pilih "Export Current Diagram"
   - Pilih format (PNG, SVG, PDF)
   - Simpan gambar

## 🖼️ Metode 3: PlantUML Server (Untuk Banyak Diagram)

### Menggunakan URL:

PlantUML dapat di-render langsung dari URL:

```
http://www.plantuml.com/plantuml/png/[encoded_diagram]
```

### Contoh untuk Class Diagram:

1. Copy kode PlantUML
2. Encode menggunakan PlantUML encoder
3. Gunakan URL untuk embed atau download

## 📋 Checklist Gambar untuk Laporan

Pastikan Anda memiliki gambar-gambar berikut:

### Class Diagram:

- [ ] `class_diagram.png` - Class Diagram lengkap

### Sequence Diagrams:

- [ ] `sequence_01_app_initialization.png` - Inisialisasi Aplikasi
- [ ] `sequence_02_product_modal.png` - Membuka Modal Produk
- [ ] `sequence_03_contact_form.png` - Mengirim Contact Form
- [ ] `sequence_04_smooth_scroll.png` - Navigasi Smooth Scroll
- [ ] `sequence_05_gallery.png` - Melihat Gallery

## 🎨 Tips untuk Gambar Berkualitas

### 1. **Resolusi**

- PNG: Gunakan resolusi tinggi (minimal 1920px width)
- SVG: Format vector, bisa di-scale tanpa kehilangan kualitas

### 2. **Format yang Disarankan**

- **Untuk Laporan Digital (PDF)**: SVG atau PNG high-res
- **Untuk Laporan Print**: PNG 300 DPI atau SVG
- **Untuk Presentasi**: PNG atau SVG

### 3. **Ukuran File**

- Compress PNG jika terlalu besar
- SVG biasanya lebih kecil dan lebih baik

### 4. **Penamaan File**

Gunakan nama yang deskriptif:

```
✅ BAIK:
- class_diagram_company_profile.png
- sequence_contact_form_submission.png

❌ KURANG BAIK:
- diagram1.png
- image.png
```

## 📄 Contoh Struktur Folder untuk Laporan

```
Laporan/
├── images/
│   ├── uml/
│   │   ├── class_diagram.png
│   │   ├── sequence_01_app_initialization.png
│   │   ├── sequence_02_product_modal.png
│   │   ├── sequence_03_contact_form.png
│   │   ├── sequence_04_smooth_scroll.png
│   │   └── sequence_05_gallery.png
│   └── screenshots/
│       ├── homepage.png
│       ├── products.png
│       └── contact.png
├── BAB_1_Pendahuluan.docx
├── BAB_2_Landasan_Teori.docx
├── BAB_3_Analisis_Sistem.docx
└── BAB_4_Implementasi.docx
```

## 📝 Template Caption untuk Laporan

### Class Diagram:

```
Gambar X.X Class Diagram Aplikasi Company Profile PT Jaya Beton Indonesia
Sumber: Dokumentasi Proyek (2025)
```

### Sequence Diagrams:

```
Gambar X.X Sequence Diagram Inisialisasi Aplikasi
Sumber: Dokumentasi Proyek (2025)

Gambar X.X Sequence Diagram Interaksi Modal Produk
Sumber: Dokumentasi Proyek (2025)

Gambar X.X Sequence Diagram Pengiriman Form Kontak
Sumber: Dokumentasi Proyek (2025)

Gambar X.X Sequence Diagram Navigasi Smooth Scroll
Sumber: Dokumentasi Proyek (2025)

Gambar X.X Sequence Diagram Tampilan Gallery
Sumber: Dokumentasi Proyek (2025)
```

## 🔍 Verifikasi Kualitas Gambar

Sebelum memasukkan ke laporan, pastikan:

- [ ] Gambar jelas dan mudah dibaca
- [ ] Text dalam diagram tidak terlalu kecil
- [ ] Warna kontras dan mudah dibedakan
- [ ] Tidak ada bagian yang terpotong
- [ ] Format file sesuai (PNG/SVG)
- [ ] Ukuran file tidak terlalu besar (< 5MB per gambar)

## 🆘 Troubleshooting

### Problem: Diagram tidak ter-render

**Solusi**:

- Pastikan kode PlantUML lengkap (dari `@startuml` sampai `@enduml`)
- Check syntax error di kode PlantUML

### Problem: Gambar terlalu kecil

**Solusi**:

- Export dengan resolusi lebih tinggi
- Gunakan format SVG yang bisa di-scale

### Problem: Text tidak terbaca

**Solusi**:

- Increase font size di PlantUML code
- Export dengan resolusi lebih tinggi
- Gunakan format SVG

### Problem: File terlalu besar

**Solusi**:

- Compress PNG menggunakan tools online
- Gunakan format SVG (biasanya lebih kecil)
- Reduce resolusi jika masih terlalu besar

## 🎓 Untuk Laporan Akademik

### Yang Perlu Dijelaskan:

1. **Class Diagram**:

   - Struktur komponen aplikasi
   - Relationship antar komponen
   - Data models yang digunakan
   - External services integration

2. **Sequence Diagrams**:
   - Alur interaksi user dengan sistem
   - Proses yang terjadi di backend
   - Communication antar komponen
   - Error handling

### Contoh Penjelasan di Laporan:

```
3.2 Perancangan Sistem

3.2.1 Class Diagram
Gambar 3.1 menunjukkan class diagram dari aplikasi Company Profile
PT Jaya Beton Indonesia. Aplikasi ini dibangun menggunakan arsitektur
component-based dengan React sebagai framework utama.

Komponen utama (App) berfungsi sebagai container yang mengelola state
aplikasi dan mengatur layout. App component memiliki relationship
composition dengan child components seperti Navigation, Header, Gallery,
Features, About, Services, Contact, dan Footer.

Data aplikasi disimpan dalam format JSON (JsonData) yang berisi berbagai
model data seperti HeaderData, GalleryData, FeatureData, dan lain-lain.
Aplikasi juga mengintegrasikan external services seperti EmailJS untuk
pengiriman email dan SmoothScroll untuk navigasi yang smooth.

3.2.2 Sequence Diagram
Berikut adalah sequence diagram untuk use case utama aplikasi:

a) Inisialisasi Aplikasi (Gambar 3.2)
   Menjelaskan proses loading aplikasi dari browser hingga semua
   komponen ter-render...

b) Membuka Modal Produk (Gambar 3.3)
   Menjelaskan interaksi user saat membuka detail produk...

[dst...]
```

## 📚 Referensi

- PlantUML Official: https://plantuml.com/
- PlantUML Online Editor: http://www.plantuml.com/plantuml/uml/
- PlantText: https://www.planttext.com/
- VS Code PlantUML Extension: https://marketplace.visualstudio.com/items?itemName=jebbs.plantuml

---

**Catatan**: Pastikan semua gambar sudah di-generate sebelum menyusun laporan akhir!
