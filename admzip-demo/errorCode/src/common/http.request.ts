import * as https from 'https';
import * as http from 'http';

export class Http {

  static request(options: https.RequestOptions, body?: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      const req = https.request(options, (res) => {
        let data = '';
        res.on('data', (chunk) => {
          data += chunk;
        });
        res.on('end', () => {
          resolve(data);
        });
      });
      req.on('error', (error) => {
        reject(error);
      });
      if(body !== undefined) req.write(body);
      req.end();
    });
  }

  static post(url: URL, body?: string, headers?: http.OutgoingHttpHeaders): Promise<string> {
    const options: https.RequestOptions = {
      hostname: url.hostname,
      port: url.port,
      path: url.pathname,
      protocol: url.protocol,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body),
        ...headers,
      },
    };
    return Http.request(options, body);
  }

}



