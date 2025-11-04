# 3.2 Spesifikasi Sistem

## 3.2.1 Spesifikasi Bentuk Dokumen Sistem Berjalan

### Dokumen Input

1. **Data Konten (data.json)**

   - Berisi informasi perusahaan, produk, dan kontak
   - Format: JSON
   - Lokasi: `src/data/data.json`

2. **Media Assets**
   - Gambar produk dan portfolio
   - Logo perusahaan
   - Format: JPG, JPEG, PNG
   - Lokasi: `public/img/`

### Dokumen Output

1. **Website Company Profile**

   - Single Page Application (SPA)
   - Responsive design
   - Format: HTML, CSS, JavaScript
   - URL: Dapat diakses melalui browser

2. **Email Notifikasi**
   - Email dari contact form
   - Dikirim via EmailJS
   - Berisi: nama, email, dan pesan pengirim

## 3.2.2 Spesifikasi File

### File Konfigurasi

| File              | Fungsi                               | Lokasi  |
| ----------------- | ------------------------------------ | ------- |
| package.json      | Konfigurasi dependencies dan scripts | Root    |
| public/index.html | Template HTML utama                  | public/ |

### File Data

| File      | Fungsi                  | Format |
| --------- | ----------------------- | ------ |
| data.json | Database konten website | JSON   |

### File Komponen React

| File             | Fungsi                  | Props                                     |
| ---------------- | ----------------------- | ----------------------------------------- |
| App.jsx          | Komponen utama aplikasi | -                                         |
| navigation.jsx   | Menu navigasi           | -                                         |
| header.jsx       | Hero section            | data: HeaderData                          |
| gallery.jsx      | Galeri portfolio        | data: GalleryData[]                       |
| features.jsx     | Kategori produk         | data: FeatureData[]                       |
| featureModal.jsx | Detail produk           | isOpen, onClose, category, images, folder |
| about.jsx        | Tentang perusahaan      | data: AboutData                           |
| services.jsx     | Layanan perusahaan      | data: ServiceData[]                       |
| contact.jsx      | Form kontak             | data: ContactData                         |
| footer.jsx       | Footer website          | data: FooterData                          |
| image.jsx        | Komponen gambar         | title, largeImage, smallImage             |

### File Styling

| File          | Fungsi             |
| ------------- | ------------------ |
| App.css       | Style komponen App |
| index.css     | Style global       |
| bootstrap.css | Framework CSS      |
| style.css     | Custom styling     |

## 3.2.3 Struktur Kode

### Struktur Folder

```
React-company-profile/
├── public/              # Static assets
│   ├── css/            # Stylesheet files
│   ├── fonts/          # Font files
│   ├── img/            # Images
│   └── js/             # JavaScript libraries
├── src/                # Source code
│   ├── components/     # React components
│   ├── data/           # JSON data
│   ├── App.jsx         # Main component
│   └── index.js        # Entry point
├── docs/               # Documentation
└── package.json        # Project config
```

### Alur Data

```
data.json → App.jsx → Child Components → Browser
```

### State Management

- **useState**: Mengelola state lokal komponen
- **useEffect**: Load data saat aplikasi dimulai
- **Props**: Passing data dari parent ke child

### Routing

- Single Page Application (SPA)
- Navigasi menggunakan anchor links (#section)
- Smooth scroll untuk perpindahan section

## 3.2.4 Spesifikasi Program

### Teknologi yang Digunakan

| Teknologi     | Versi  | Fungsi           |
| ------------- | ------ | ---------------- |
| React         | 17.0.1 | Framework UI     |
| React DOM     | 17.0.1 | Rendering React  |
| EmailJS       | 2.6.4  | Pengiriman email |
| Smooth Scroll | 16.1.3 | Navigasi smooth  |
| Bootstrap     | 3.x    | CSS Framework    |

### Fitur Utama

#### 1. Navigation

- **Input**: Click menu item
- **Proses**: Smooth scroll ke section
- **Output**: Tampil section yang dipilih

#### 2. Gallery

- **Input**: Data portfolio dari JSON
- **Proses**: Render grid gambar
- **Output**: Galeri portfolio interaktif

#### 3. Product Modal

- **Input**: Click kategori produk
- **Proses**:
  - Buka modal
  - Load gambar produk
  - Enable carousel navigation
- **Output**: Modal dengan carousel gambar

#### 4. Contact Form

- **Input**: Nama, email, pesan
- **Proses**:
  - Validasi input
  - Kirim via EmailJS
  - Handle response
- **Output**:
  - Success: Alert berhasil + reset form
  - Error: Alert gagal

#### 5. Responsive Design

- **Desktop**: Layout multi-kolom
- **Tablet**: Layout 2 kolom
- **Mobile**: Layout 1 kolom

### Spesifikasi Teknis

#### Performance

- Load time: < 3 detik
- Image optimization: Lazy loading
- Bundle size: Optimized dengan React Scripts

#### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

#### Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 991px
- Desktop: ≥ 992px

### Keamanan

- Input validation pada form
- XSS protection (React default)
- HTTPS ready
- EmailJS API key protection

### Deployment

- **Build Command**: `yarn run build`
- **Output**: Folder `build/` dengan static files
- **Hosting**: Compatible dengan static hosting (Netlify, Vercel, GitHub Pages)
