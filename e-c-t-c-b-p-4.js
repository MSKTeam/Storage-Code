window.addEventListener('load', function() {
  document.getElementsByClassName("check-box")[0].innerHTML = content;
  const imgTags = document.querySelectorAll(".check-box img");
  if (imgTags.length > 0) {
    imgTags.forEach((imgTag, index) => {
      if (imgTag.hasAttribute("src")) {
        const domains = ["i0.wp.com", "i1.wp.com", "i2.wp.com", "i3.wp.com"];
        const randomDomain = domains[Math.floor(Math.random() * domains.length)];
        const originalSrc = imgTag.getAttribute("src");
        const newSrc = originalSrc.replace(/^https?:\/\//i, '');
        const finalSrc = `https://${randomDomain}/${newSrc}`;
        imgTag.setAttribute("data-src", finalSrc);
        imgTag.removeAttribute("src");
        imgTag.removeAttribute("title");
        imgTag.classList.add("lazyload");
        imgTag.setAttribute("data-src", imgTag.getAttribute("data-src").replace("s1600", "s1600-rw"));
        imgTag.setAttribute("fetchpriority", "low");
        imgTag.setAttribute("title", "MSKTeam");
        const linkTag = document.createElement("link");
        linkTag.rel = "preload";
        linkTag.as = "image";
        linkTag.setAttribute("fetchpriority", "low");
        linkTag.href = finalSrc.replace("s1600", "s1600-rw");
        setTimeout(() => {
          document.head.appendChild(linkTag);
        }, index * 200);
      }
    });
  }
});
