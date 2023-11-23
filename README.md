## ISEKAI: Template untuk tugas Medium

### How to run: bagaimana cara memulai dengan proyek ini
- Install modul dependency dengan
```sh
npm install
```
- Jalankan aplikasi dengan
```sh
npm start
```

### Tugas
- Buat simple server menggunakan http module di aplikasi NodeJS, port bebas (bisa 3000 atau 80)
- Server menerima request url
-- `/tambah` , metode GET , cari body di thunderclient, dan masukan angka dengan format `angka,angka` contoh `1,3` dengan tipe `Text`, dan mengembalikan response pertambahan 2 angka tersebut
-- `/kali` , metode GET , cari body di thunderclient, dan masukan angka dengan format `angka,angka` contoh `1,3` dengan tipe `Text`, dan mengembalikan response perkalian dari 2 angka tersebut
-- `/pangkat` , metode GET , cari body di thunderclient, dan masukan angka dengan format `angka,angka` contoh `1,3` dengan tipe `Text`, dan mengembalikan response pangkat dari 2 angka tersebut