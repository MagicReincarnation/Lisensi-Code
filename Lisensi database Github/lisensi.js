/*
cekDomainWeb(function(status,loglisensi) {
  if (status) {
    alert(`Lisensi Untuk Web dengan BlogID ${loglisensi} TELAH terdaftar.`);
  } else {
alert(`Lisensi Untuk Web dengan BlogID ${loglisensi} TIDAK terdaftar.`);
  }
}, 0); // Mode 0: Kedua lisensi harus terdaftar
*/

cekDomainWeb(function(status, loglisensi) {
  if (status) {
    alert(`Lisensi Untuk Web dengan BlogID ${loglisensi} TELAH terdaftar.`);
  } else {
    alert(`Lisensi Untuk Web dengan BlogID ${loglisensi} TIDAK terdaftar.`);
  }
}, 1); // Mode 1: Hanya blogID yang harus terdaftar

/*

cekDomainWeb(function(status,loglisensi) {
  if (status) {
   alert(`Lisensi Untuk Web dengan BlogID ${loglisensi} TELAH terdaftar.`);
  } else {
    alert(`Lisensi Untuk Web dengan BlogID ${loglisensi} TIDAK terdaftar.`);
  }
}, 2); // Mode 2: Hanya domain yang harus terdaftar

*/



//harap ganti link github json dengan milik kamu sendiri

function cekDomainWeb(t, e = 0) {
  let n = "lisensiWebx1x2",
    o = localStorage.getItem(n);
  var r = document.querySelector('meta[itemprop="blogId"][content]');
  let i = r ? r.getAttribute("content") : null,
    a = window.location.hostname,
    l = i;
  if (o) {
    let c = JSON.parse(o),
      s = validateCachedData(c, e);
    if (s) {
      t(!0, l = c.blogID);
      return
    }
  }
  fetch("https://raw.githubusercontent.com/MagicReincarnation/HirutshujiProfile/main/Lisensi/Lisensi_x0.json").then(t => {
    if (!t.ok) throw Error("Respons tidak berhasil");
    return t.json()
  }).then(o => {
    let r = !1,
      c = !1;
    for (let s in o) {
      let h = o[s];
      h.blogID;
      let u = h.domain,
        g = h.lisensi,
        m = h.pswd,
        d = xorDecrypt(m, "hirutshujix01Okt2024"),
        b = xorDecrypt(u, d),
        f = xorDecrypt(g, d),
        p = b === a,
        D = i && f === i;
      if (0 === e && p && D || 1 === e && D || 2 === e && p) {
        r = p, c = D, localStorage.setItem(n, JSON.stringify({
          blogID: f,
          domain: b
        })), l = f;
        break
      }
    }
    0 === e && r && c || 1 === e && c || 2 === e && r ? t(!0, l) : t(!1, l)
  }).catch(t => {
    console.error("Operasi fetch gagal:", t)
  })
}

function xorDecrypt(t, e) {
  let n = atob(t),
    o = "";
  for (let r = 0; r < n.length; r++) o += String.fromCharCode(n.charCodeAt(r) ^ e.charCodeAt(r % e.length));
  return o
}

function validateCachedData(t, e) {
  let n = window.location.hostname,
    o = document.querySelector('meta[itemprop="blogId"][content]'),
    r = o ? o.getAttribute("content") : null,
    i = t.domain === n,
    a = r && t.blogID === r;
  return 0 === e && !!i && !!a || 1 === e && !!a || 2 === e && !!i
}