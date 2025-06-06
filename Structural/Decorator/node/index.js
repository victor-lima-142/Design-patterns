var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Abstract decorator for HttpService
 *
 * @implements {HttpService}
 */
class HttpServiceDecorator {
    constructor(service) {
        this.service = service;
    }
}
/**
 * Concrete implementation of HttpService
 * This class simulates a basic HTTP service that fetches a URL
 *
 * @implements {HttpService}
 */
class BasicHttpService {
    request(url) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`Fetching ${url}...`);
            yield new Promise((resolve) => setTimeout(resolve, 1000)); // Simula um delay
            console.log(`Done fetching ${url}`);
        });
    }
}
/**
 * Concrete decorator that adds logging functionality to the request
 *
 * @extends {HttpServiceDecorator}
 */
class LoggingDecorator extends HttpServiceDecorator {
    request(url) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`[LOG] Starting request to ${url}`);
            yield this.service.request(url);
            console.log(`[LOG] Finished request to ${url}`);
        });
    }
}
/**
 * Concrete decorator that adds timing functionality to the request
 *
 * @extends {HttpServiceDecorator}
 */
class TimingDecorator extends HttpServiceDecorator {
    request(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const start = Date.now();
            yield this.service.request(url);
            const duration = Date.now() - start;
            console.log(`[TIME] Request took ${duration}ms`);
        });
    }
}
class Main {
    static main() {
        let service = new BasicHttpService();
        service = new LoggingDecorator(service);
        service = new TimingDecorator(service);
        service.request("https://example.com")
            .then(() => console.log("Request completed"))
            .catch((error) => console.error(error));
    }
}
