/*
MODULE :
Yang pertama, berkas data-source.js membutuhkan nilai clubs yang berasal dari module clubs.js. Untuk mendapatkan nilainya, kita perlu mengimpor nilai clubs dengan cara menambahkan kode berikut di awal baris kode data-source.js
*/
import clubs from "./clubs.js";

/*
1.
Pada project Club Finder lebih tepatnya pada class DataSource, kita masih menggunakan callback untuk mendapatkan nilai club berdasarkan keyword pengguna. 
seperti dibawah :

class DataSource {
  constructor(onSuccess, onFailed) {
    this.onSuccess = onSuccess;
    this.onFailed = onFailed;
  }

  searchClub(keyword) {
    const filteredClubs = clubs.filter((club) =>
      club.name.toUpperCase().includes(keyword.toUpperCase())
    );

    if (filteredClubs.length) {
      this.onSuccess(filteredClubs);
    } else {
      this.onFailed(`${keyword} is not found`);
    }
  }
  
*/

/*
2.
Karena Anda sudah belajar mengenai Promise pada JavaScript. Seharusnya kita dapat memanfaatkannya. Sehingga kita tidak membutuhkan callback onSuccess dan onFailed lagi. Hal ini dikarenakan fungsi kedua callback tersebut dapat digantikan dengan penggunaan resolve dan reject pada promise.

hasil dibawah :
*/

// Langkah awal, pada class DataSource. Kita hapus constructor yang memuat callback function pada class.
// Karena kita sudah menghapus callback function beserta constructor class-nya, kita tidak perlu membuat instance dari class DataSource. Kita buat method searchClub dapat diakses secara langsung dari DataSource tanpa harus membuat instance.
// untuk membuat method dalam class dapat diakses tanpa membuat instance, kita perlu menambahkan keyword static sebelum membuat method-nya.
// Jangan lupa ubah juga pemanggilan callback onSuccess() dan onFailed(), menggunakan resolve() dan reject()

class DataSource {
  static searchClub(keyword) {
    return new Promise((resolve, reject) => {
      const filteredClubs = clubs.filter((club) =>
        club.name.toUpperCase().includes(keyword.toUpperCase())
      );

      if (filteredClubs.length) {
        resolve(filteredClubs);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSource;