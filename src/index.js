const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */
const linkler = document.querySelectorAll("nav a");
const navkeys = Object.keys(siteContent.nav);
for (let i = 0; i < navkeys.length; i++) {
  linkler[i].textContent = siteContent.nav[navkeys[i]];
}
const italicYap = document.querySelectorAll("header nav a");
for (let i = 0; i < italicYap.length; i++) {
  italicYap[i].classList.add("italic");
}
const img1 = document.querySelector(".logo");
img1.src = "http://localhost:9000/img/logo.png";
const img2 = document.querySelector("#cta-img");
img2.src = "http://localhost:9000/img/cta.png";
const img3 = document.querySelector(".middle-img");
img3.src = "http://localhost:9000/img/accent.png";

const textler = document.querySelector(".cta-text h1");
textler.textContent = "Bu DOM Mükemmel";
const textler1 = document.querySelector(".cta-text button");
textler1.textContent = "Başlayın";

const footerText = document.querySelector("footer a");
footerText.textContent = "Copyright Bir Şirket Sitesi 2022";
footerText.classList.add("bold");

document.getElementsByTagName("h4")[0].textContent = "Özellikler";
document.getElementsByTagName("p")[0].textContent =
  "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
document.getElementsByTagName("h4")[1].textContent = "Hakkında";
document.getElementsByTagName("p")[1].textContent =
  "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
document.getElementsByTagName("h4")[2].textContent = "Servisler";
document.getElementsByTagName("p")[2].textContent =
  "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
document.getElementsByTagName("h4")[3].textContent = "Ürünler";
document.getElementsByTagName("p")[3].textContent =
  "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
document.getElementsByTagName("h4")[4].textContent = "Vizyon";
document.getElementsByTagName("p")[4].textContent =
  "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

document.getElementsByTagName("h4")[5].textContent = "İletişim";
const iletişim1 = document.querySelectorAll(".contact p");
iletişim1[0].textContent =
  "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye";
iletişim1[1].textContent = "+90 (123) 456-7899";
iletişim1[2].textContent = "satis@birsirketsitesi.com.tr";
