# Email API Intern

## Description
Tugas ini bertujuan untuk mengembangkan API menggunakan Node.js yang memungkinkan pengguna untuk mengirim email melalui layanan Gmail. API ini akan menggunakan pustaka nodemailer untuk mengelola proses pengiriman email.

## Directions

1. **Konfigurasi Proyek:**
   - Buat proyek Node.js baru.
   - Inisialisasi proyek dengan `npm init`.

2. **Instalasi Dependencies:**
   - Instal pustaka Express untuk membuat server.
   - Instal pustaka nodemailer untuk mengirim email melalui Gmail.

3. **Konfigurasi Gmail:**
   - Buat akun pengguna Gmail atau gunakan akun yang ada.
   - Gunakan Konfigurasi Google OAUTH(Secure Apps).
   - atau Atur akses kurang aman (Less Secure Apps) pada akun Gmail.

4. **Buat API Endpoint:**
   - Buat API endpoint POST `/send-email` untuk menerima permintaan pengiriman email.
   - Terima data seperti alamat email penerima, subjek, isi pesan, dll.

5. **Kirim Email:**
   - Gunakan nodemailer untuk mengirim email melalui akun Gmail.
   - Konfigurasi transporter untuk menghubungkan ke layanan Gmail.
   - Buat fungsi untuk mengirim email dengan informasi yang diterima dari permintaan API.

6. **Validasi Input:**
   - Pastikan data yang diterima dari permintaan API valid sebelum mengirim email.
   - Berikan tanggapan yang sesuai jika ada kesalahan validasi.

7. **Pengujian:**
   - Uji API dengan mengirim permintaan menggunakan alat seperti Postman atau cURL.
   - Verifikasi apakah email berhasil terkirim.

8. **Dokumentasi:**
   - Buat dokumentasi yang menjelaskan cara menggunakan API, endpoint yang tersedia, dan contoh permintaan.

9. **Keamanan:**
   - Pastikan untuk mengamankan informasi kredensial Gmail.
   - Pertimbangkan mengimplementasikan autentikasi atau otorisasi jika diperlukan.
