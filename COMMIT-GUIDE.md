# Daftar Semantic Commit

Gunakan format berikut untuk pesan commit:

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

## Tipe Commit

- `feat`: Fitur baru
- `fix`: Perbaikan bug
- `docs`: Perubahan pada dokumentasi
- `style`: Perubahan yang tidak mempengaruhi makna kode (spasi, format, dll)
- `refactor`: Perubahan kode yang tidak memperbaiki bug atau menambah fitur
- `perf`: Perubahan kode yang meningkatkan performa
- `test`: Menambah atau memperbaiki test
- `chore`: Perubahan pada proses build atau alat bantu

## Scope

Scope bisa berupa apa saja yang menspesifikasikan bagian dari kode yang diubah.

## Subject

Subject harus berisi deskripsi singkat tentang perubahan:

- Gunakan present tense: "change" bukan "changed" atau "changes"
- Jangan menggunakan huruf kapital di awal kalimat
- Jangan menambahkan titik (.) di akhir

## Body

Body harus mencakup motivasi untuk perubahan dan membandingkannya dengan perilaku sebelumnya.

## Footer

Footer harus berisi informasi tentang Breaking Changes dan referensi ke issue yang diselesaikan oleh commit.

Breaking Changes harus dimulai dengan kata "BREAKING CHANGE:" diikuti dengan spasi atau dua baris baru. Sisa dari teks commit kemudian digunakan untuk menjelaskannya.

## Contoh

1. Commit fitur baru:

```
feat(auth): implement JWT authentication

- Add JWT token generation on login
- Implement token verification middleware
- Update user routes to use new authentication

Closes #123
```

2. Perbaikan bug:

```
fix(database): resolve connection timeout issue

Increase connection timeout from 5s to 15s to prevent
disconnects during peak hours.

Fixes #456
```

3. Perubahan dokumentasi:

```
docs(readme): update installation instructions

- Add steps for setting up environment variables
- Clarify Node.js version requirements
```

4. Refactor kode:

```
refactor(api): simplify error handling logic

Replace multiple try-catch blocks with a single
error handling middleware to improve code readability
and maintainability.
```

5. Peningkatan performa:

```
perf(search): optimize database query for search results

- Add index on 'title' and 'content' columns
- Implement caching for frequent searches

This change reduces average query time from 500ms to 50ms.
```

6. Menambah test:

```
test(user): add unit tests for user registration

Ensure all edge cases are covered:
- Valid input
- Invalid email format
- Duplicate username
- Password too short
```

7. Perubahan pada build process:

```
chore(deps): update dependencies

- Update React from 17.0.2 to 18.0.0
- Update Express from 4.17.1 to 4.18.0

BREAKING CHANGE: React 18 introduces new features that may
require updates to existing components.
```
