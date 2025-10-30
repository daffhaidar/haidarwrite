# 📝 Blog Post Template - Super Easy!

## 🚀 Cara Tercepat Tambah Artikel

### Step 1: Buka File

```
src/data/blogPosts.js
```

### Step 2: Scroll ke Atas

Cari bagian yang ada komentar:

```
// 🚀 TEMPLATE ARTIKEL BARU - TINGGAL UNCOMMENT & EDIT!
```

### Step 3: Copy Template

Template udah ada di file, tinggal:

1. **Copy** template yang ada `/* */`
2. **Paste** di bawah komentar panduan
3. **Hapus** `/*` dan `*/` (uncomment)
4. **Edit** sesuai artikel lo
5. **Save** - website otomatis reload!

## 📋 Template Siap Pakai

```javascript
{
  id: 11, // Ganti dengan nomor berikutnya
  title: "JUDUL ARTIKEL KAMU DI SINI", // Max 60 karakter
  slug: "url-slug-artikel-kamu", // Huruf kecil, pakai dash (-)
  excerpt: "Ringkasan singkat artikel kamu yang menarik perhatian pembaca dalam 1-2 kalimat.", // Max 200 karakter
  content: "Paragraf pembuka artikel kamu yang engaging dan bikin pembaca penasaran untuk baca lebih lanjut...", // Paragraf pertama
  publishedDate: "2025-10-29", // Format: YYYY-MM-DD (tanggal hari ini)
  lastModified: "2025-10-29", // Sama dengan publishedDate untuk artikel baru
  readTime: "5 min read", // Estimasi: jumlah kata ÷ 200 = menit
  category: "Technical Writing", // Pilih: "Technical Writing", "Copywriting", atau "Industry Insights"
  tags: ["Tag1", "Tag2", "Tag3", "Tag4"], // 3-5 keywords relevan
  featured: true, // true = tampil di homepage (max 3), false = tidak
  image: "https://images.pexels.com/photos/XXXXXX/pexels-photo-XXXXXX.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop", // Cari di pexels.com, ukuran 800x400
  author: {
    name: "Daffa Haidar", // Jangan ganti
    avatar: "/images/author-avatar.jpg", // Jangan ganti
  },
  seo: {
    metaDescription: "Deskripsi SEO artikel kamu untuk Google, max 160 karakter.", // Untuk search results
    keywords: ["keyword1", "keyword2", "keyword3"], // 3-5 keywords untuk SEO
  },
  link: "https://www.linkedin.com/posts/daffhaidar_XXXXXXXXX", // URL artikel lengkap (LinkedIn/Medium)
},
```

## Contoh Artikel Yang Sudah Diisi

```javascript
{
  id: 11,
  title: "5 Cloud Security Best Practices Every Developer Should Know",
  slug: "cloud-security-best-practices-developers",
  excerpt: "Master essential cloud security practices to protect your applications and data.",
  content: "Cloud security is no longer optional. Learn what you need to know...",
  publishedDate: "2025-10-29",
  lastModified: "2025-10-29",
  readTime: "7 min read",
  category: "Technical Writing",
  tags: ["Cloud Security", "DevSecOps", "Best Practices", "AWS"],
  featured: true,
  image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop",
  author: {
    name: "Daffa Haidar",
    avatar: "/images/author-avatar.jpg",
  },
  seo: {
    metaDescription: "Learn 5 essential cloud security best practices for developers.",
    keywords: ["cloud security", "devsecops", "security best practices"],
  },
  link: "https://www.linkedin.com/posts/daffhaidar_cloudsecurity-activity-XXXXXXXXX",
},
```

## Cara Pakai

1. **Copy template** di atas
2. **Buka file** `src/data/blogPosts.js`
3. **Scroll ke bawah** sampai ke akhir array (sebelum `];`)
4. **Paste template** setelah artikel terakhir (jangan lupa koma sebelumnya)
5. **Edit** semua nilai sesuai artikel kamu
6. **Hapus komentar** (bagian `// ...`)
7. **Save** dan website otomatis reload!

## Field Guide

- **id**: Nomor unik (cek artikel terakhir, tambah 1)
- **title**: Judul artikel (max 60 karakter)
- **slug**: URL-friendly (huruf kecil, pakai dash `-`)
- **excerpt**: Ringkasan 1-2 kalimat (max 200 karakter)
- **content**: Paragraf pembuka
- **publishedDate**: Tanggal publish (YYYY-MM-DD)
- **readTime**: Estimasi baca (kata ÷ 200 = menit)
- **category**: Pilih salah satu dari list di atas
- **tags**: 3-5 keywords relevan
- **featured**: true/false (max 3 featured di homepage)
- **image**: URL gambar 800x400px (cari di pexels.com)
- **seo.metaDescription**: Untuk Google (max 160 char)
- **link**: URL artikel lengkap (LinkedIn/Medium)

Lihat `HOW_TO_ADD_BLOG_POST.md` untuk panduan lengkap!

## 🎯 Quick Reference

### Categories (Pilih Salah Satu)

- `"Technical Writing"` - Artikel teknis, tutorial, best practices
- `"Copywriting"` - Marketing copy, sales content, persuasive writing
- `"Industry Insights"` - Trend analysis, market insights, opinions

### Tags Ideas

**Technical Writing:**

- Cloud Architecture, DevOps, System Design, API Design, Security, Infrastructure, Microservices, Database, Performance

**Copywriting:**

- Content Strategy, Brand Voice, Conversion, Email Marketing, Social Media, Sales Copy, Storytelling

**Industry Insights:**

- Web3, Blockchain, NFTs, Crypto, AI, Future Tech, Market Trends, Startup, Business Strategy

### Image Sources (Free)

- **Pexels.com** - Cari keyword artikel lo
- **Unsplash.com** - High quality photos
- Format URL: `?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop`

### Read Time Calculator

- **1-2 min:** 200-400 kata
- **3-4 min:** 600-800 kata
- **5-6 min:** 1000-1200 kata
- **7+ min:** 1400+ kata

### SEO Tips

- **Title:** Include main keyword, max 60 chars
- **Meta Description:** Compelling summary, 150-160 chars
- **Keywords:** 3-5 relevant terms, no keyword stuffing
- **Slug:** Short, descriptive, use dashes

## ⚡ Pro Tips

### 1. Featured Articles

- Max 3 artikel featured di homepage
- Pilih artikel terbaik/terbaru
- Ganti `featured: false` di artikel lama

### 2. ID Numbers

- Selalu cek artikel terakhir
- Tambah 1 untuk artikel baru
- Jangan pakai ID yang sama

### 3. Dates

- Format: `YYYY-MM-DD`
- `publishedDate`: Kapan artikel dipublish
- `lastModified`: Kapan terakhir diedit

### 4. Links

- LinkedIn post URL
- Medium article URL
- GitHub repo (untuk technical)
- External source yang relevan

## 🚨 Common Mistakes

❌ **Jangan:**

- Lupa ganti ID number
- Pakai spasi di slug (pakai dash `-`)
- Featured lebih dari 3 artikel
- Lupa uncomment template
- Image URL rusak

✅ **Lakukan:**

- Test image URL sebelum save
- Preview artikel di website
- Check mobile view
- Verify all links work
- Use descriptive slugs

---

**Need help?** Check `HOW_TO_ADD_BLOG_POST.md` untuk panduan lengkap!
