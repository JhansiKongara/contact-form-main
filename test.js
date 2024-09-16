const myHeaders = new Headers();
myHeaders.append(
  "accept",
  "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7"
);
myHeaders.append("accept-language", "en-GB,en-US;q=0.9,en;q=0.8");
myHeaders.append("cache-control", "max-age=0");
myHeaders.append("content-type", "application/x-www-form-urlencoded");
myHeaders.append(
  "cookie",
  "_ga=GA1.4.1270444711.1718473754; _ga_4YRSQV3FXK=GS1.1.1725349098.1.1.1725349192.60.0.0; _ga=GA1.1.1270444711.1718473754; _gid=GA1.4.1156050751.1726308959; user_id=13528236; authtoken=1b48592d3055d6f628a37da049927af44374635a-1515823011; valid_till=2024-09-14 16:20:27; valid_till_in_utc=2024-09-14 10:50:27; mobileNum=8688691945; ticket_id=288581; accesstype=web; bookingRefNo=IDJP14092400247982; _ga_MT8JLQ6M96=GS1.1.1726308957.1.1.1726309442.0.0.0"
);
myHeaders.append("origin", "https://ttdevasthanams.ap.gov.in");
myHeaders.append("priority", "u=0, i");
myHeaders.append(
  "referer",
  "https://ttdevasthanams.ap.gov.in/ttd-common/v1/servlet/redirect"
);
myHeaders.append(
  "sec-ch-ua",
  '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"'
);
myHeaders.append("sec-ch-ua-mobile", "?1");
myHeaders.append("sec-ch-ua-platform", '"Android"');
myHeaders.append("sec-fetch-dest", "document");
myHeaders.append("sec-fetch-mode", "navigate");
myHeaders.append("sec-fetch-site", "same-origin");
myHeaders.append("upgrade-insecure-requests", "1");
``;
myHeaders.append(
  "user-agent",
  "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Mobile Safari/537.36"
);

const urlencoded = new URLSearchParams();
urlencoded.append("param1", "b5bce2b1a2e2439088f3595571cebf2e");

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: urlencoded,
  redirect: "follow",
};

fetch("https://ttdevasthanams.ap.gov.in/jop/v1/payment-options", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
