window.addEventListener('load',function(){
const domains = ['i0.wp.com', 'i1.wp.com', 'i2.wp.com', 'i3.wp.com'];
const imgTags = new DOMParser().parseFromString(content, 'text/html').querySelectorAll('img');
const checkBox = document.querySelector('.check-box');
let counter = 0;
const interval = setInterval(() => {
  if (counter < imgTags.length) {
    const imgTag = imgTags[counter];
    let src = imgTag.getAttribute('src');
    if (src.includes('s1600')) {
      src = src.replace('s1600', 's1600-rw');
      imgTag.setAttribute("fetchpriority", "high");
      imgTag.setAttribute("title", "MSKTeam");
      imgTag.setAttribute('src', src);
    }
    const randomDomain = domains[Math.floor(Math.random() * domains.length)];
    src = src.replace('https://', `https://${randomDomain}/`);
    imgTag.setAttribute('src', src);
    checkBox.appendChild(imgTag);
    counter++;
  } else {
    clearInterval(interval);
  }
}, 500);
});
