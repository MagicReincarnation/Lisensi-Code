let lisensikey = "DAgGFFpdV1FdXxocXBddXVRHRVkcRxEaXA=="; //Lisensi ini didapat dari generator Lisensi bagian Json domain

//Semua kode dibawah ini wajib diencrypt 
cekDomainWeb((statusIzin) => {
  if (!statusIzin) {
    alert("Lisensi tidak terdaftar");
    return;
  } else {
    alert("Lisensi terdaftar Jalankan kode.");
  }
});

function cekDomainWeb(callback) {
  const urlDatabase = 'https://raw.githubusercontent.com/MagicReincarnation/HirutshujiProfile/main/Lisensi/Lisensi_x0.json';

  fetch(urlDatabase)
    .then(response => {
      if (!response.ok) {
        throw new Error('Respons tidak berhasil');
      }
      return response.json();
    })
    .then(objekDomainDiizinkan => {
      const masterPassword = "hirutshujix01Okt2024";
      let domainDiizinkan = false;
      let blogIDDiizinkan = false;
      for (const idDomain in objekDomainDiizinkan) {
        const dataDomain = objekDomainDiizinkan[idDomain];
        const blogID = dataDomain.blogID; 
        const encryptedLisensiDomain = dataDomain.domain;
        const encryptedLisensiBlogID = dataDomain.lisensi;
        const encryptedPassword = dataDomain.pswd; 
        const decryptedPassword = xorDecrypt(encryptedPassword, masterPassword);
        const decryptedDomain = xorDecrypt(encryptedLisensiDomain, decryptedPassword);
        const domainSaatIni = xorDecrypt(lisensikey, decryptedPassword);
        const decryptedBlogID = xorDecrypt(encryptedLisensiBlogID, decryptedPassword);
        
        if (decryptedDomain === domainSaatIni && decryptedBlogID === blogID) {
          domainDiizinkan = true;
          blogIDDiizinkan = true;
          break;
        }
      }

      if (domainDiizinkan && blogIDDiizinkan) {
        callback(true); 
      } else {
        callback(false);
      }
    })
    .catch(error => {
      console.error('operasi fetch:', error);
    });
}
function xorDecrypt(encryptedData, password) {
  let decoded = atob(encryptedData);
  let decrypted = '';
  for (let i = 0; i < decoded.length; i++) {
    decrypted += String.fromCharCode(decoded.charCodeAt(i) ^ password.charCodeAt(i % password.length));
  }
  return decrypted;
}