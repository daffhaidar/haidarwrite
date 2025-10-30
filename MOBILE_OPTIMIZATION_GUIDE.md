# 📱 Mobile Optimization Guide

## Ukuran Layar yang Didukung

Website ini sudah dioptimasi untuk SEMUA ukuran layar mobile:

### 📏 Breakpoints

- **< 375px**: Small phones (iPhone SE, older Android)
- **375px - 480px**: Standard phones (iPhone 12/13/14, most Android)
- **481px - 640px**: Large phones (iPhone Pro Max, Galaxy Note)
- **641px - 768px**: Small tablets (iPad Mini)
- **769px - 1024px**: Tablets (iPad, Android tablets)
- **1025px+**: Desktop

## 🎨 Responsive Design System

### Font Sizes (Otomatis Menyesuaikan)

```
Layar Kecil (< 375px)    → 13px base
Standard Mobile          → 14px base
Large Mobile            → 14.5px base
Small Tablet            → 15px base
Tablet                  → 15.5px base
Desktop                 → 16px base
```

### Spacing System

Semua spacing otomatis scale berdasarkan ukuran layar:

- Padding
- Margin
- Gap between elements
- Section spacing

## 🛠️ CSS Classes yang Tersedia

### Responsive Text

```jsx
<h1 className="text-responsive-4xl">  // Auto scale dari 3xl → 7xl
<h2 className="text-responsive-3xl">  // Auto scale dari 2xl → 5xl
<p className="text-responsive-base">   // Auto scale dari sm → lg
```

### Responsive Spacing

```jsx
<div className="space-responsive-sm">  // Auto space: 3 → 6
<div className="space-responsive-md">  // Auto space: 4 → 10
<div className="space-responsive-lg">  // Auto space: 6 → 16
```

### Mobile Padding

```jsx
<div className="px-mobile">  // px-4 → px-8 (responsive)
<div className="py-mobile">  // py-3 → py-6 (responsive)
<div className="card-padding-mobile">  // Full card padding system
```

### Mobile Gaps

```jsx
<div className="gap-mobile-sm">  // gap-3 → gap-5
<div className="gap-mobile-md">  // gap-4 → gap-8
<div className="gap-mobile-lg">  // gap-6 → gap-12
```

### Touch Targets

```jsx
<button className="touch-target">  // Min 44x44px (Apple guideline)
<button className="btn-touch">     // Touch-optimized button
```

### Container & Layout

```jsx
<div className="container-mobile">      // Full width container with smart padding
<div className="section-margin-mobile"> // Auto section margins
<img className="img-responsive-mobile"> // Auto image sizing & rounding
```

## ✅ Best Practices

### 1. Gunakan Responsive Text Classes

❌ **Jangan:**

```jsx
<h1 className="text-5xl">Title</h1>
```

✅ **Lakukan:**

```jsx
<h1 className="text-responsive-3xl">Title</h1>
```

### 2. Gunakan Touch-Friendly Targets

❌ **Jangan:**

```jsx
<button className="px-2 py-1">Click</button>
```

✅ **Lakukan:**

```jsx
<button className="btn-touch">Click</button>
```

### 3. Gunakan Mobile Padding

❌ **Jangan:**

```jsx
<div className="p-8">Content</div>
```

✅ **Lakukan:**

```jsx
<div className="card-padding-mobile">Content</div>
```

### 4. Stack Layouts on Mobile

```jsx
<div className="flex flex-col sm:flex-row">
  <div>Left</div>
  <div>Right</div>
</div>
```

### 5. Responsive Images

```jsx
<img className="img-responsive-mobile" src="image.jpg" alt="Description" />
```

## 📊 Testing Guide

### Test di Device Ini:

- ✅ iPhone SE (Small - 375px)
- ✅ iPhone 12/13 (Standard - 390px)
- ✅ iPhone Pro Max (Large - 428px)
- ✅ Samsung Galaxy S21 (360px)
- ✅ iPad Mini (768px)
- ✅ iPad Pro (1024px)

### Chrome DevTools

1. Buka Chrome DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Test di berbagai ukuran:
   - 320px (Smallest)
   - 375px (iPhone)
   - 390px (iPhone 12/13)
   - 428px (iPhone Pro Max)
   - 768px (iPad)
   - 1024px (Desktop)

## 🎯 Mobile-First Checklist

Saat membuat component baru:

- [ ] Gunakan `text-responsive-*` untuk text
- [ ] Gunakan `btn-touch` untuk buttons
- [ ] Gunakan `card-padding-mobile` untuk cards
- [ ] Gunakan `gap-mobile-*` untuk spacing
- [ ] Test di minimum 3 ukuran layar
- [ ] Pastikan touch target minimal 44x44px
- [ ] Check image loading on mobile
- [ ] Test swipe gestures (kalau ada)

## 🚀 Performance Tips

### Lazy Loading Images

```jsx
import LazyImage from "./components/LazyImage";

<LazyImage src="large-image.jpg" alt="Description" className="img-responsive-mobile" />;
```

### Conditional Rendering

```jsx
// Render berbeda untuk mobile vs desktop
<div className="hidden md:block">Desktop Only</div>
<div className="block md:hidden">Mobile Only</div>
```

## 📱 Component Examples

### Responsive Card

```jsx
<div className="card-padding-mobile bg-dark-green-900/20 rounded-xl sm:rounded-2xl">
  <h3 className="text-responsive-xl mb-3 sm:mb-4">Title</h3>
  <p className="text-responsive-base text-gray-custom">Description</p>
</div>
```

### Responsive Button

```jsx
<button className="btn-touch bg-dark-green-400 text-dark rounded-lg hover:bg-dark-green-300 transition-colors">Click Me</button>
```

### Responsive Section

```jsx
<section className="section-margin-mobile px-mobile">
  <div className="container-mobile">
    <h2 className="text-responsive-3xl mb-6 sm:mb-8">Section Title</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-mobile-md">{/* Content */}</div>
  </div>
</section>
```

## 🐛 Common Issues & Solutions

### Issue: Text terlalu kecil di mobile

**Solution:** Gunakan `text-responsive-*` classes

### Issue: Button terlalu kecil untuk di-tap

**Solution:** Tambah `btn-touch` atau `touch-target` class

### Issue: Spacing terlalu besar/kecil di mobile

**Solution:** Gunakan `gap-mobile-*` atau `space-responsive-*`

### Issue: Image tidak responsive

**Solution:** Gunakan `img-responsive-mobile` class

### Issue: Layout berantakan di small phones

**Solution:** Test di 320px width, gunakan `flex-col` untuk mobile

## 💡 Pro Tips

1. **Always test on real devices** - Emulator tidak 100% akurat
2. **Use touch gestures** - Tambahkan swipe support kalau perlu
3. **Optimize images** - Compress untuk mobile (WebP format)
4. **Check contrast** - Text harus readable di outdoor
5. **Test offline** - PWA should work without internet

---

**Updated:** October 2025  
**Maintained by:** Daffa Haidar
