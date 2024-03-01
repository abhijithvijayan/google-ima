<h1 align="center">google-ima.js</h1>
<div align="center">
  <a href="https://github.com/abhijithvijayan/google-ima.js/blob/main/license">
    <img src="https://img.shields.io/github/license/abhijithvijayan/google-ima.js.svg" alt="LICENSE" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20google-ima.js%21%20by%20%40_abhijithv%0A%0AA%20drop%20in%20replacement%20for%20Google%27s%20Interactive%20Media%20Ads%20library%20for%20preventing%20websites%20crashing%20if%20Adblocker%20is%20enabled.%0Ahttps%3A%2F%2Fgithub.com%2Fabhijithvijayan%2Fgoogle-ima.js%0A%0A%23google%20%23ima%20%23javascript">
     <img src="https://img.shields.io/twitter/url/http/shields.io.svg?style=social" alt="TWEET" />
  </a>
</div>
<h3 align="center">🙋‍♂️ Made by <a href="https://twitter.com/_abhijithv">@abhijithvijayan</a></h3>
<p align="center">
  Donate:
  <a href="https://www.paypal.me/iamabhijithvijayan" target='_blank'><i><b>PayPal</b></i></a>,
  <a href="https://www.patreon.com/abhijithvijayan" target='_blank'><i><b>Patreon</b></i></a>
</p>
<p align="center">
  <a href='https://www.buymeacoffee.com/abhijithvijayan' target='_blank'>
    <img height='36' style='border:0px;height:36px;' src='https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/orange_img.png' border='0' alt='Buy Me a Coffee' />
  </a>
</p>
<hr />

A drop in replacement for [Google's Interactive Media Ads](https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side) library for preventing websites crashing if Adblocker is enabled.

❤️ it? ⭐️ it on [GitHub](https://github.com/abhijithvijayan/google-ima.js/stargazers) or [Tweet](https://twitter.com/intent/tweet?text=Check%20out%20google-ima.js%21%20by%20%40_abhijithv%0A%0AA%20drop%20in%20replacement%20for%20Google%27s%20Interactive%20Media%20Ads%20library%20for%20preventing%20websites%20crashing%20if%20Adblocker%20is%20enabled.%0Ahttps%3A%2F%2Fgithub.com%2Fabhijithvijayan%2Fgoogle-ima.js%0A%0A%23google%20%23ima%20%23javascript) about it.

## Table of Contents

- [Usage](#usage)
- [FAQs](#faqs)
- [Issues](#issues)
    - [🐛 Bugs](#-bugs)
- [LICENSE](#license)

## Usage

Inject the script into the page and you are done.

> **paste in console or use extensions that inject scripts**

```js
(() => {
  var sdk = "https://raw.githubusercontent.com/abhijithvijayan/google-ima.js/main/sdk.js";
  var scriptToInject = document.createElement("script");
  // use any proxy, eg: `https://corsproxy.io/?`
  var scriptSrcURL = 'https://api.codetabs.com/v1/proxy/?quest=' + encodeURIComponent(sdk);

  fetch(scriptSrcURL).then((res) => res.text()).then((code) => {
    scriptToInject.append(code);
    document.body.append(scriptToInject);
  })
})();
```


<hr />

## FAQs

### 1. What is the purpose of this dumb sdk mirror that does nothing?

I personally ran into issue with https://www.fancode.com crashing when SDK failed to load through my ad blocker dns resolver. I didn't want to solve it by whitelisting the domain which would've defeated the purpose of ad blocker. So this dumb SDK acted like a proxy for the website scripts which prevented it from crashing.

## Issues

_Looking to contribute? Look for the [Good First Issue](https://github.com/abhijithvijayan/google-ima.js/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22good+first+issue%22)
label._

### 🐛 Bugs

Please file an issue [here](https://github.com/abhijithvijayan/google-ima.js/issues/new) for bugs, missing documentation, or unexpected behavior.

[**See Bugs**](https://github.com/abhijithvijayan/google-ima.js/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc+label%3A%22type%3A+bug%22)

## License

MIT © [Abhijith Vijayan](https://abhijithvijayan.in)
