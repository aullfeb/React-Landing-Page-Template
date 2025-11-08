# 📦 Panduan Deployment ke GitHub Pages

## ✅ Konfigurasi yang Sudah Dilakukan

Proyek ini sudah dikonfigurasi lengkap untuk deployment ke GitHub Pages dengan:

1. ✅ **Homepage URL** di `package.json`: `https://aullfeb.github.io/React-Company-Profile`
2. ✅ **Deploy Scripts** di `package.json`:
   - `predeploy`: Otomatis build sebelum deploy
   - `deploy`: Deploy ke GitHub Pages
3. ✅ **GitHub Actions Workflow**: Automatic deployment saat push ke main/master
4. ✅ **gh-pages package**: Sudah terinstall untuk manual deployment

## 🚀 Cara Deploy

### Metode 1: Automatic Deployment (Direkomendasikan)

**Langkah-langkah:**

1. **Push code ke GitHub:**

   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

   (Ganti `main` dengan `master` jika branch utama Anda adalah master)

2. **Aktifkan GitHub Pages di Repository Settings:**

   - Buka repository di GitHub: https://github.com/aullfeb/React-Company-Profile
   - Klik **Settings** (tab di atas)
   - Klik **Pages** di menu sidebar kiri
   - Di bagian **Source**, pilih **GitHub Actions**
   - Klik **Save**

3. **Tunggu Deployment Selesai:**

   - Buka tab **Actions** di repository Anda
   - Anda akan melihat workflow "Deploy to GitHub Pages" sedang berjalan
   - Tunggu hingga selesai (biasanya 2-3 menit)
   - Status akan berubah menjadi ✅ hijau jika berhasil

4. **Akses Website Anda:**
   - Website akan live di: **https://aullfeb.github.io/React-Company-Profile/**
   - Setiap kali Anda push ke main/master, website akan otomatis update

### Metode 2: Manual Deployment

Jika Anda ingin deploy manual tanpa GitHub Actions:

```bash
# Install dependencies (jika belum)
npm install

# Deploy ke GitHub Pages
npm run deploy
```

atau dengan yarn:

```bash
yarn install
yarn deploy
```

Command ini akan:

1. Build project (`npm run build`)
2. Push hasil build ke branch `gh-pages`
3. GitHub Pages akan otomatis serve dari branch tersebut

**Catatan untuk Manual Deployment:**

- Jika menggunakan metode ini, di GitHub Pages settings pilih **Source: Deploy from a branch** dan pilih branch `gh-pages`

## 🔧 Troubleshooting

### Problem: Website tidak muncul atau blank page

**Solusi:**

1. Pastikan `homepage` di `package.json` sudah benar
2. Clear browser cache dan refresh
3. Tunggu 5-10 menit setelah deployment pertama

### Problem: CSS/Images tidak load

**Solusi:**

1. Pastikan semua path menggunakan relative path, bukan absolute path
2. Gunakan `process.env.PUBLIC_URL` untuk asset paths jika diperlukan
3. Rebuild dan deploy ulang

### Problem: GitHub Actions workflow gagal

**Solusi:**

1. Cek tab **Actions** untuk melihat error log
2. Pastikan GitHub Pages sudah diaktifkan di Settings
3. Pastikan repository tidak private (atau aktifkan GitHub Pages untuk private repo)

### Problem: 404 Error saat refresh page

**Solusi:**

- Ini normal untuk SPA (Single Page Application) di GitHub Pages
- Gunakan HashRouter dari react-router-dom jika menggunakan routing
- Atau tambahkan 404.html yang redirect ke index.html

## 📝 Catatan Penting

1. **Branch Protection**: Jika Anda menggunakan branch protection rules, pastikan GitHub Actions memiliki permission untuk deploy

2. **Custom Domain**: Jika ingin menggunakan custom domain:

   - Tambahkan file `CNAME` di folder `public/` dengan isi domain Anda
   - Configure DNS settings di domain provider Anda

3. **Environment Variables**:

   - Jangan commit sensitive data (API keys, secrets)
   - Gunakan GitHub Secrets untuk environment variables

4. **Build Size**:
   - GitHub Pages memiliki limit 1GB per repository
   - Optimize images dan assets untuk performa lebih baik

## 🎯 Next Steps

Setelah deployment berhasil:

1. ✅ Test semua fitur di live site
2. ✅ Test di berbagai browser (Chrome, Firefox, Safari)
3. ✅ Test di mobile devices
4. ✅ Setup Google Analytics (optional)
5. ✅ Setup custom domain (optional)
6. ✅ Add SEO meta tags untuk better search visibility

## 📞 Support

Jika mengalami masalah:

1. Cek dokumentasi GitHub Pages: https://docs.github.com/en/pages
2. Cek GitHub Actions logs untuk error details
3. Pastikan semua dependencies terinstall dengan benar

---

**Website URL:** https://aullfeb.github.io/React-Company-Profile/

**Repository:** https://github.com/aullfeb/React-Company-Profile

Happy Deploying! 🚀
