/* cara pakai cukup gunakan Function callback ini, jika lisensi valid maka kode apa yg dijalankan disini.. jika tidak ada yg perlu dijalankan maka kosongkan saja.*/

/* 
checkLisensi_hr(cur_blog_id_hr, function(isLicensed) {
   if (isLicensed) {  
   
console.log("Kode dijalankan karena lisensi valid.");

          }
  });
*/

// Mendapatkan Blog ID secara dinamis
const cur_blog_id_hr = '<data:blog.blogId/>';



//Tempat config lisensi.
  const lisensi_hr = [
    {  ownerLisensi: 'Hirutshuji',
       lisensi: 'DAgGFB8cDBACAC0RBRUVCgQLAQ0BGwc=',
    }
  ];
  

function decrypt_hr(encrypted, password) {

    const decoded = atob(encrypted);

    let decrypted = '';

    for (let i = 0; i < decoded.length; i++) {

      decrypted += String.fromCharCode(decoded.charCodeAt(i) ^ password.charCodeAt(i % password.length));

    }

    return decrypted;

  }

function checkLisensi_hr(blogId, callback) {
    for (let i = 0; i < lisensi_hr.length; i++) {
        if (lisensi_hr[i].ownerLisensi !== 'Hirutshuji') {
            alert("Do not remove the owner name from this code.");
            continue;
        }
        const decryptedBlogId_hr = decrypt_hr(lisensi_hr[i].lisensi, "datakodehiru");
        if (blogId === decryptedBlogId_hr) {
            console.log("Lisensi terdaftar.");
            callback(true);  // Lisensi valid, jalankan callback dengan true
            return;
        }
    }
    
     let htmlLisensi_hirutshuji = `<div style="position: fixed;top: 10%;left: 0;width: 90%;max-width: 400px;background-color: #23282f;color: #f3f3f3;font-size: 12px;padding: 10px;margin: 5px;text-align: center;z-index: 1000;box-shadow: 0px 7px 12px #000000a6;">
    <div id="xyza_app">
        <div id="xyza_header-img"></div>
        <div id="xyza_profile">
            <section id="xyza_upper">
                <div class="xyza_dp"></div>
                <div class="xyza_details">
                    <h1 id="xyza_username">Hirutshuji</h1>
                    <p class="xyza_profession">Owner</p>
                </div>
            </section>
            <div class="xyza_links">
                <a href="https://datakodehiru.blogspot.com/?ko-fi=true">Ko-fi</a>
                <a href="https://datakodehiru.blogspot.com/?Trakteer=true">Trakteer</a>
            </div>
            <section id="xyza_middle">
                <div class="xyza_middlesvg">
                    <p>This code is free to use but it requires a license. If you want to remove the license, I need your support. Any amount will help a lot. There are many books that I want to buy and study.</p>
                    <p><a href="https://datakodehiru.blogspot.com/?SupportMe=true" target="_blank" style="color: yellow; text-decoration: underline;">Support Me</a> | <a href="https://datakodehiru.blogspot.com/?Myblog=true" target="_blank" style="color: yellow; text-decoration: underline;">My blog</a></p>
                    <p>If you do not install the license within the next <span id="xyza_timer"></span> seconds, you will be redirected to my blog.</p>     
                </div>
                <div class="xyza_pin-slider">
                    <iframe src="https://www.youtube.com/embed/videoseries?list=PLqGjLm-cHcIS37wLo_1iTOAcnY0tEDDlo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen=""></iframe>
                </div>
            </section>
        </div>
        <div class="xyza_lower">
            <h6><a href="https://datakodehiru.blogspot.com/?GetLisensi=true" title="hiru">GET YOUR LICENSE</a></h6>
        </div>
    </div>
</div>

<style>
    #xyza_app {
        position: relative;
        aspect-ratio: 9/16;
        height: auto;
        max-height: 90vh;
        border: 5px solid rgba(240, 240, 240, 0.3);
        border-radius: 18px;
        overflow-y: auto;
        background-color: #23282f;
    }

    #xyza_header-img {
        position: relative;
        width: 100%;
        aspect-ratio: 16/9;
        height: 8vh;
        background: url('https://iili.io/dlNepHl.jpg') top/cover;
        border-radius: 18px 18px 0 0;
        opacity: 0.75;
    }

    .xyza_dp {
        aspect-ratio: 1/1;
        height: 8vh;
        border: 3px solid #f3f3f3;
        border-radius: 50%;
        background: url('https://iili.io/dlNPRqB.jpg') center/cover no-repeat;
    }

    .xyza_details {
        display: flex;
        flex-direction: column;
        gap: 1vh;
        justify-content: center;
        margin-right: 20px;
    }

    .xyza_links {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        gap: 10px;
        margin-top: 10px;
    }

    .xyza_links a {
        text-decoration: none;
        background: #8300ff;
        color: #fff;
        text-shadow: 1px 1px 2px #000, 0 0 25px #00f, 0 0 5px #00008b;
        border-radius: 7px;
        font-size: 14px;
        font-weight: 700;
        display: inline-block;
        padding: 7px 15px;
    }

    #xyza_upper {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1vh;
    }

    #xyza_username {
        font-size: 1.5rem;
        color: #f3f3f3;
    }

    .xyza_profession {
        font-size: 1rem;
        color: #f3f3f3;
    }

    #xyza_middle {
        padding-top: 2vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2vh;
        font-size: 0.9rem;
    }

    .xyza_middlesvg {
        overflow-y: auto;
        overflow-x: hidden;
        word-wrap: break-word;
        padding: 20px;
    }

    .xyza_pin-slider {
        width: 100%;
        margin-top: 10vh;
    }

    .xyza_pin-slider iframe {
        width: 100%;
        height: auto;
        aspect-ratio: 16/9;
        background: rgba(240, 240, 240, 0.25);
    }

    .xyza_lower {
        display: grid;
        place-items: center;
        text-align: center;
        color: #f3f3f3;
        font-size: 1.5rem;
        width: 100%;
        height: 4vh;
        background: #23282f;
        border-radius: 0 0 18px 18px;
    }

    .xyza_lower a {
        text-decoration: none;
        color: #f3f3f3;
    }

    @media screen and (max-width: 480px), screen and (max-height: 980px) {
        #xyza_app {
            height: auto;
            width: 100%;
            border: none;
            margin: 0;
            overflow-y: auto;
            border-radius: 0;
        }
    #xyza_header-img {
        height: 20vh;
    }
 .xyza_dp {
height: 12vh;
        }
        #xyza_header-img,
        .xyza_lower {
            border-radius: 0;
        }

        .xyza_links {
            flex-direction: column;
            gap: 5px;
            margin-top: 5px;
        }

        .xyza_links a {
            width: 80%;
            text-align: center;
            padding: 5px 10px;
        }
    }
</style>`;
     
    let countdown = 999999;   
    document.body.innerHTML += htmlLisensi_hirutshuji;
    const interval = setInterval(function() {
        countdown--;
        document.getElementById("xyza_timer").textContent = countdown;
        if (countdown <= 0) {
            clearInterval(interval);
            window.location.href = "https://datakodehiru.blogspot.com";
        }
    }, 1000);
    callback(false); // Lisensi tidak valid, jalankan callback dengan false
}
