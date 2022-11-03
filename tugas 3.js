// 3. Events Handler (onClick di HTML)
function tombol() {
    // 1. Membuat Teks (Manipulasi Element)
    const a = document.getElementById('judul'); // Deklarasi Variabel 
    a.innerHTML = ' HTML (Hypertext Markup Language)'; // innerHTML

    const b = document.getElementById('subjudul');
    b.innerHTML = 'pengertian';

    // 2. Membuat Element (Manipulasi Node)
    const elemenH3 = document.createElement('h3'); // Deklarasi Variabel untuk membuat elements
    const teksElemenH3 = document.createTextNode('HTML (Hypertext Markup Language) adalah bahasa standard yang digunakan untuk menampilkan halaman web. Yang biasa dilakukan dengan HTML adalah mengatur tampilan web dan isinya, membuat tabel dalam halaman web, mempublikasikan halaman web secara onle, membuat form yang bisa digunakan untuk menangani registrasi dan transaksi via web, menambahkan objek-objek seperti citra dan radio dll, menampilkan area gambar dibrowser. Tag adalah penanda perintah didalam HTML. Adapun tag yang digunakan pada HTML adalah <b> yang berfungsi untuk membuat teks tercetak tebal, <em> yang berfungsi untuk membuat penekanan pada teks, <i> yang berfungsi untuk membuat tercetak miring, <p> yang berfungsi untuk membuat teks paragraf, <small> yang berfungsi untuk membuat teks tercetak kecil dan masih banyak lagi tag yang ada pada HTML.'); // Deklarasi Variabel untuk mengisi teks

    elemenH3.appendChild(teksElemenH3); // Fungsi untuk memasukkan isi teks kedalam element yg telah dibuat

    const cetak = document.getElementById('body'); // Deklarasi Variabel untuk mencetak element yg telah dibuat

    cetak.appendChild(elemenH3); // Fungsi untuk mencetak element yg telah dibuat
}