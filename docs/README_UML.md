# Dokumentasi UML - React Company Profile PT Jaya Beton Indonesia

## 📋 Daftar Isi

1. [Pendahuluan](#pendahuluan)
2. [Class Diagram](#class-diagram)
3. [Sequence Diagrams](#sequence-diagrams)
4. [Cara Menggunakan Diagram](#cara-menggunakan-diagram)
5. [Tools yang Digunakan](#tools-yang-digunakan)

## 📖 Pendahuluan

Dokumentasi ini berisi UML (Unified Modeling Language) diagrams untuk proyek React Company Profile PT Jaya Beton Indonesia. Diagram-diagram ini dibuat untuk membantu memahami struktur dan alur kerja aplikasi.

### Tujuan Dokumentasi

- Memberikan visualisasi struktur komponen aplikasi
- Menjelaskan hubungan antar komponen
- Mendokumentasikan alur interaksi user dengan sistem
- Memudahkan maintenance dan pengembangan aplikasi

## 🏗️ Class Diagram

Class Diagram menunjukkan struktur statis aplikasi, termasuk:

- **Komponen React**: App, Navigation, Header, Gallery, Features, dll
- **Data Models**: JsonData, HeaderData, GalleryData, dll
- **External Services**: EmailJS, SmoothScroll
- **Relationships**: Composition, Dependency, Aggregation

### File: `UML_CLASS_DIAGRAM.md`

**Komponen Utama:**

1. **App Component** - Root component yang mengelola state dan layout
2. **UI Components** - Navigation, Header, Gallery, Features, About, Services, Contact, Footer
3. **Modal Components** - FeatureModal untuk menampilkan detail produk
4. **Data Layer** - JsonData dengan berbagai model data
5. **Services** - EmailJS untuk contact form, SmoothScroll untuk navigasi

**Relationship Types:**

- **Composition (◆)**: App mengandung semua child components
- **Dependency (- - >)**: Components menggunakan data models
- **Aggregation**: JsonData mengandung berbagai data models

## 🔄 Sequence Diagrams

Sequence Diagrams menunjukkan interaksi dinamis dalam aplikasi:

### File: `UML_SEQUENCE_DIAGRAMS.md`

### 1. **Inisialisasi Aplikasi**

Menggambarkan proses loading aplikasi dari awal hingga render lengkap:

- Browser load application
- App initialization dengan useState dan useEffect
- Import dan load data dari JSON
- Render semua child components
- Initialize SmoothScroll

**Use Case**: User pertama kali mengakses website

### 2. **Membuka Modal Produk**

Menggambarkan interaksi user dengan fitur product modal:

- User click kategori produk
- Modal terbuka dengan carousel
- User navigasi antar gambar (next, prev, dots)
- User close modal

**Use Case**: User ingin melihat detail produk

### 3. **Mengirim Contact Form**

Menggambarkan proses pengiriman form kontak:

- User mengisi form (name, email, message)
- State update untuk setiap input
- Submit form ke EmailJS
- EmailJS kirim ke email server
- Tampilkan success/error message
- Reset form jika berhasil

**Use Case**: User ingin menghubungi perusahaan

### 4. **Navigasi Smooth Scroll**

Menggambarkan proses smooth scrolling:

- User click navigation link
- SmoothScroll animate scroll
- Browser scroll ke target section

**Use Case**: User navigasi antar section

### 5. **Melihat Gallery**

Menggambarkan interaksi dengan gallery:

- Gallery render thumbnails
- User click thumbnail
- Lightbox buka gambar full-size
- User close lightbox

**Use Case**: User melihat portfolio proyek

## 🛠️ Cara Menggunakan Diagram

### Untuk Membaca Diagram

1. **Class Diagram**:

   - Kotak = Class/Component
   - Garis dengan diamond (◆) = Composition (has-a relationship)
   - Garis putus-putus (- - >) = Dependency (uses)
   - Angka di garis = Multiplicity (1, 0..\*, dll)

2. **Sequence Diagram**:
   - Kotak di atas = Actor/Object
   - Garis vertikal = Lifeline
   - Panah horizontal = Message/Method call
   - Kotak pada lifeline = Activation (object sedang aktif)

### Untuk Render Diagram

Diagram menggunakan **PlantUML** syntax. Untuk me-render:

#### Option 1: Online PlantUML Editor

1. Buka [PlantUML Online Editor](http://www.plantuml.com/plantuml/uml/)
2. Copy kode PlantUML dari file markdown
3. Paste di editor
4. Diagram akan ter-render otomatis

#### Option 2: VS Code Extension

1. Install extension "PlantUML" di VS Code
2. Buka file `.md` yang berisi diagram
3. Tekan `Alt+D` untuk preview diagram

#### Option 3: Generate Image

```bash
# Install PlantUML
npm install -g node-plantuml

# Generate PNG dari PlantUML code
plantuml diagram.puml
```

## 🔧 Tools yang Digunakan

### 1. **PlantUML**

- Text-based UML diagram tool
- Mudah di-version control
- Support berbagai jenis diagram
- Website: https://plantuml.com/

### 2. **VS Code Extensions**

- **PlantUML**: Preview dan export diagram
- **Markdown Preview Enhanced**: Preview markdown dengan diagram

### 3. **Online Tools**

- [PlantUML Online Editor](http://www.plantuml.com/plantuml/uml/)
- [PlantText](https://www.planttext.com/)

## 📊 Struktur Proyek

```
React-company-profile/
├── docs/
│   ├── README_UML.md              # File ini
│   ├── UML_CLASS_DIAGRAM.md       # Class Diagram
│   └── UML_SEQUENCE_DIAGRAMS.md   # Sequence Diagrams
├── src/
│   ├── components/                # React Components
│   ├── data/                      # JSON Data
│   ├── App.jsx                    # Main App Component
│   └── index.js                   # Entry Point
└── public/                        # Static Assets
```

## 📝 Catatan Penting

### Untuk Laporan

1. **Class Diagram** menunjukkan arsitektur sistem secara keseluruhan
2. **Sequence Diagrams** menunjukkan 5 use case utama aplikasi
3. Semua diagram menggunakan standar UML 2.0
4. Diagram dapat di-export ke format PNG/SVG untuk laporan

### Maintenance

- Update diagram saat ada perubahan struktur komponen
- Tambahkan sequence diagram untuk fitur baru
- Pastikan diagram tetap sync dengan kode

## 🎯 Use Cases yang Didokumentasikan

1. ✅ Inisialisasi Aplikasi
2. ✅ Membuka Modal Produk
3. ✅ Mengirim Contact Form
4. ✅ Navigasi Smooth Scroll
5. ✅ Melihat Gallery

## 📞 Kontak

Untuk pertanyaan atau saran terkait dokumentasi ini:

- Email: info@jayabeton.com
- Website: PT Jaya Beton Indonesia

---

**Dibuat untuk**: Laporan Proyek React Company Profile  
**Tanggal**: 2025  
**Versi**: 1.0  
**Status**: ✅ Complete
