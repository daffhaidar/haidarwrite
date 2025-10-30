# 📝 Cara Menambah Artikel Blog Baru

## Quick Start (5 Menit!)

### Step 1: Buka Template

1. Buka file `src/data/blogPostTemplate.js`
2. Copy template yang ada (dari `COPY DARI SINI` sampai `COPY SAMPAI SINI`)

### Step 2: Edit File Blog Posts

1. Buka `src/data/blogPosts.js`
2. Scroll ke bagian paling akhir array `blogPosts` (sebelum `];`)
3. Paste template yang sudah di-copy
4. Tambahkan koma (`,`) setelah artikel sebelumnya

### Step 3: Edit Isi Artikel

Hapus semua komentar `//` dan ganti dengan info artikel kamu:

```javascript
{
  id: 11,  // ⚠️ PENTING: Tambah 1 dari artikel terakhir
  title: "Judul Artikel Kamu",
  slug: "judul-artikel-kamu",
  excerpt: "Ringkasan singkat yang menarik perhatian pembaca.",
  content: "Paragraf pembuka artikel kamu...",
  publishedDate: "2025-10-29",
  lastModified: "2025-10-29",
  readTime: "5 min read",
  category: "Technical Writing",  // Pilih: Technical Writing, Copywriting, atau Industry Insights
  tags: ["Tag1", "Tag2", "Tag3"],
  featured: true,  // true = tampil di homepage
  image: "https://images.pexels.com/...",
  author: {
    name: "Daffa Haidar",
    avatar: "/images/author-avatar.jpg",
  },
  seo: {
    metaDescription: "Deskripsi SEO untuk Google.",
    keywords: ["keyword1", "keyword2", "keyword3"],
  },
  link: "https://www.linkedin.com/posts/...",
},
```

### Step 4: Save & Check

1. Save file `blogPosts.js`
2. Website otomatis reload (hot reload)
3. Check artikel baru muncul di Blog section

## 📋 Field Explanation

### `id` (WAJIB)

- Nomor unik untuk artikel
- Cek artikel terakhir, tambah 1
- Contoh: Artikel terakhir id: 10 → pakai 11

### `title` (WAJIB)

- Judul artikel yang menarik
- Max 60 karakter untuk SEO
- Contoh: "5 Cloud Security Best Practices Every Developer Should Know"

### `slug` (WAJIB)

- URL-friendly version dari title
- Huruf kecil, pisah dengan `-`
- No special characters
- Contoh: "cloud-security-best-practices-developers"

### `excerpt` (WAJIB)

- Ringkasan singkat (1-2 kalimat)
- Muncul di card preview
- Max 150-200 karakter
- Hook pembaca untuk baca lebih lanjut

### `content` (WAJIB)

- Paragraf pembuka artikel
- Muncul di preview/detail page
- Engaging dan informatif

### `publishedDate` (WAJIB)

- Format: `YYYY-MM-DD`
- Contoh: `"2025-10-29"`

### `lastModified` (WAJIB)

- Format: `YYYY-MM-DD`
- Sama dengan publishedDate kalau artikel baru

### `readTime` (WAJIB)

- Estimasi waktu baca
- Format: `"X min read"`
- Rumus: Total kata ÷ 200 = menit
- Contoh: `"5 min read"`

### `category` (WAJIB)

Pilih salah satu:

- `"Technical Writing"` - Tutorial, dokumentasi, how-to
- `"Copywriting"` - Marketing copy, ads, content strategy
- `"Industry Insights"` - Analisa, opinion, trend

### `tags` (WAJIB)

- Array 3-5 tags
- Keywords relevan
- Contoh: `["Web3", "Blockchain", "Tutorial", "Development"]`

### `featured` (WAJIB)

- `true` = Tampil di featured section homepage
- `false` = Hanya di blog section
- Max 3 featured articles akan ditampilkan

### `image` (WAJIB)

- URL cover image
- Recommended: Pexels.com (free stock photos)
- Format: `?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop`
- Ukuran optimal: 800x400px

### `author` (WAJIB)

```javascript
author: {
  name: "Daffa Haidar",
  avatar: "/images/author-avatar.jpg",
}
```

### `seo` (WAJIB)

```javascript
seo: {
  metaDescription: "Deskripsi untuk Google Search max 160 char",
  keywords: ["keyword1", "keyword2", "keyword3", "keyword4"],
}
```

### `link` (WAJIB)

- URL ke artikel lengkap
- Bisa LinkedIn, Medium, blog pribadi
- Contoh: `"https://www.linkedin.com/posts/daffhaidar_..."`

## 🎨 Cara Cari Gambar Cover

### Option 1: Pexels (Recommended)

1. Buka [pexels.com](https://pexels.com)
2. Search keyword relevan (misal: "cloud computing")
3. Filter: Landscape orientation
4. Pilih gambar yang eye-catching
5. Click gambar → Copy URL
6. Tambahkan parameter:
   ```
   ?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop
   ```

**Contoh:**

```
https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop
```

### Option 2: Unsplash

- Similar cara seperti Pexels
- URL format berbeda tapi tetap bisa dipakai

### Option 3: Upload Sendiri

- Upload ke `/public/images/blog/`
- Gunakan path: `"/images/blog/nama-gambar.jpg"`
- Compress dulu sebelum upload (max 200KB)

## ✅ Checklist Sebelum Save

- [ ] ID unik dan tidak bentrok
- [ ] Title menarik dan informatif
- [ ] Slug sesuai format (lowercase, dash-separated)
- [ ] Excerpt engaging max 200 karakter
- [ ] Category sesuai dengan isi artikel
- [ ] Tags relevan (3-5 tags)
- [ ] Image URL valid dan bisa diakses
- [ ] Read time realistic
- [ ] SEO meta description max 160 karakter
- [ ] Link artikel lengkap valid
- [ ] Syntax benar (koma, quotes, brackets)

## 🐛 Troubleshooting

### Artikel tidak muncul?

**Cek:**

1. Syntax error (missing comma, bracket, quote)
2. ID unik tidak duplikat
3. File sudah di-save
4. Browser sudah reload

**Fix:**

- Check console untuk error
- Pastikan koma di akhir object (sebelum `}`)
- ID harus number, bukan string

### Gambar tidak keluar?

**Cek:**

1. URL valid dan accessible
2. Format URL benar
3. No CORS issues

**Fix:**

- Test URL di browser baru
- Gunakan Pexels/Unsplash
- Upload sendiri ke `/public/images/`

### Featured tidak muncul di homepage?

**Cek:**

1. `featured: true`
2. Max 3 featured (sorted by date)

**Fix:**

- Set artikel lain jadi `featured: false`
- Update `publishedDate` ke tanggal lebih baru

### Category tidak match?

**Fix:**

- Harus exact match: `"Technical Writing"`, `"Copywriting"`, atau `"Industry Insights"`
- Check kapitalisasi dan spacing

## 💡 Tips Menulis Artikel yang Engaging

### Title Formula

- **How-to**: "How to Build X in Y Minutes"
- **Listicle**: "5 Ways to Improve X"
- **Comparison**: "X vs Y: Which is Better?"
- **Case Study**: "How We Achieved X Using Y"
- **Guide**: "Complete Guide to X for Beginners"

### Excerpt Formula

```
[Hook] + [Value Proposition] + [Call to curiosity]
```

**Contoh:**

```
"Most developers ignore cloud security until it's too late.
Learn 5 essential practices that can save your company millions
and prevent devastating data breaches."
```

### Tags Tips

- Mix general + specific tags
- Include technology names
- Add relevant keywords
- Max 5 tags

**Contoh:**

```javascript
tags: ["Cloud Computing", "AWS", "Security", "DevOps", "Best Practices"];
```

## 📊 SEO Optimization

### Meta Description Formula

```
[What] + [How] + [Why/Benefit]
```

**Contoh:**

```
"Learn essential cloud security practices to protect your applications
and prevent costly data breaches. Complete guide with real-world examples."
```

### Keywords Tips

- 4-6 keywords max
- Mix short-tail + long-tail
- Include LSI keywords
- Match user search intent

## 🚀 Advanced: Bulk Adding

Kalau mau tambah banyak artikel sekaligus:

```javascript
// Di akhir array blogPosts
  ...existingPosts,
  {
    id: 11,
    // ... artikel 1
  },
  {
    id: 12,
    // ... artikel 2
  },
  {
    id: 13,
    // ... artikel 3
  },
];
```

⚠️ **HATI-HATI**: Pastikan semua ID unik dan syntax benar!

## 📞 Need Help?

**Error persists?**

1. Check browser console (F12)
2. Look for red error messages
3. Check line number
4. Fix syntax error

**Still stuck?**

- Review `blogPostTemplate.js`
- Check existing articles for reference
- Compare with working article format

---

**Happy Writing! 🎉**

Last Updated: October 2025
