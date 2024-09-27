# Lisensi-Code

<div class="separator" style="clear: both;"><a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGortYOsBRDaYeAXh7WjwcFlO4HzkYH1XfO29ZXr4PdGqvJoA0q-7-XOhZntVed-zjooO-en_50Hby1oBhwVZmVwASRjdFU_bfH3CR7X-LrnSRxYoArdPPV4LAS4J7JkV35D4Ov7RP6Mmm_b5-4Fwq5XN4sGQVyftuthaVKUlqd1XcXaRgIFkVj1F_Od9N/s1600/Thumbnail%20lisensi.jpeg" style="display: block; padding: 1em 0; text-align: center; "><img alt="" border="0" data-original-height="720" data-original-width="1280" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgGortYOsBRDaYeAXh7WjwcFlO4HzkYH1XfO29ZXr4PdGqvJoA0q-7-XOhZntVed-zjooO-en_50Hby1oBhwVZmVwASRjdFU_bfH3CR7X-LrnSRxYoArdPPV4LAS4J7JkV35D4Ov7RP6Mmm_b5-4Fwq5XN4sGQVyftuthaVKUlqd1XcXaRgIFkVj1F_Od9N/s1600/Thumbnail%20lisensi.jpeg"/></a></div>

<p>kode lisensi yang dienkripsi dan dekripsi `Lisensi` menggunakan kata sandi, dan memakai blogId sebagai persamaannya, aku menggunakan metode sederhana berbasis XOR dengan kata sandi.
</p>

```Javascript
<script>
  // Mendapatkan Blog ID secara dinamis
  const cur_blog_id_hr = '<data:blog.blogId/>';

  // Array dengan data lisensi
  const lisensi_hr = [
     { 
      ownerLisensi: 'Hirutshuji',
      lisensi: 'AQMBBwEDBwU=' // Ganti dengan lisensi terenkripsi
    }
  ];
  
  </script>
```
<p>kode ini adalah kode yang digunakan sebagai pengecek lisensi, jika benar maka jalankan kode fitur tertentu, jika salah kita bisa kasih logika seperti redirect aja ke blog kamu</p>


```Javascript
<script>
/*<![CDATA[*/
const lisensi_hr_password = "123456";// password lisensi disini

  function decrypt_hr(encrypted, password) {
    const decoded = atob(encrypted);
    let decrypted = '';
    for (let i = 0; i < decoded.length; i++) {
      decrypted += String.fromCharCode(decoded.charCodeAt(i) ^ password.charCodeAt(i % password.length));
    }
    return decrypted;
  }
  
  function checkLisensi_hr(blogId) {
    for (let i = 0; i < lisensi_hr.length; i++) {
      if (lisensi_hr[i].ownerLisensi !== 'Hirutshuji') {
        console.log("Owner lisensi tidak terdaftar.");
        continue;
      }
      
      const decryptedBlogId_hr = decrypt_hr(lisensi_hr[i].lisensi, lisensi_hr_password);
      if (blogId === decryptedBlogId_hr) {
        console.log("lisensi terdaftar.");
        // Lakukan sesuatu jika lisensi benar, misal jalankan kodenya
        
        return true;
      }
    }
    console.log("lisensi tidak terdaftar");
    // Lakukan sesuatu jika lisensi salah, misal redirect ke blog kamu 
    
    return false;
  }

  const isLicensed_hr = checkLisensi_hr(cur_blog_id_hr);
  /*]]>*/
</script>
```

<h3>Cara kerja kode di atas untuk memeriksa lisensi blog:</h3>
<ul>
<li>1. Ambil Blog ID:
   Kode mengambil `blogId` secara dinamis menggunakan &#039;&lt;data:blog.blogId/&gt;&#039;.</li>

<li> 2. Dekripsi dan Cek:
   Blog ID dienkripsi menggunakan kata sandi, dan dekripsi dilakukan dengan kata sandi yang sama.</li>

<li> 3. Owner Lisensi:
   Pastikan `ownerLisensi` adalah "Hirurshuji" dan sesuai dengan kata sandi yang digunakan untuk enkripsi. </li>
  
<hr/>
<li><h3>Fitur</h3></li>

<li>- Generate Lisensi:
  Gunakan halaman HTML generator untuk menghasilkan lisensi terenkripsi.</li>

<li>- Cek Lisensi di Blogger:
  Tempel kode pengecekan lisensi di template HTML Blogger kamu untuk memeriksa validitas lisensi.</li>
</ul>


<p>Dengan ini, kamu bisa mengontrol lisensi blog kamu dengan kata sandi yang hanya kamu ketahui.</p>


<p>Kode ini akan memastikan bahwa Blog ID yang benar terenkripsi dengan benar dan dimiliki oleh "Hirutshuji" sebagai pemilik kode lisensinya.</p>

<p>Untuk Fitur "Generate Lisensi" bersifat private, digithub..
kirim link github untuk diinvite ke kodenya.</p>
  
<a class="btn info" href="https://t.me/webhiru" target="_blank">Group Telegram</a>
