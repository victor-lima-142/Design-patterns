/**
 * Interface for HttpService
 * 
 * @interface
 */
interface HttpService {
    request(url: string): Promise<void>;
}

/**
 * Abstract decorator for HttpService
 * 
 * @implements {HttpService}
 */
abstract class HttpServiceDecorator implements HttpService {
    constructor(protected service: HttpService) { }

    abstract request(url: string);
}

/**
 * Concrete implementation of HttpService
 * This class simulates a basic HTTP service that fetches a URL
 * 
 * @implements {HttpService}
 */
class BasicHttpService implements HttpService {
    async request(url: string) {
        console.log(`Fetching ${url}...`);
        await new Promise((resolve) => setTimeout(resolve, 1000)); // Simula um delay
        console.log(`Done fetching ${url}`);
    }
}


/**
 * Concrete decorator that adds logging functionality to the request
 * 
 * @extends {HttpServiceDecorator}
 */
class LoggingDecorator extends HttpServiceDecorator {
    async request(url: string) {
        console.log(`[LOG] Starting request to ${url}`);
        await this.service.request(url);
        console.log(`[LOG] Finished request to ${url}`);
    }
}

/**
 * Concrete decorator that adds timing functionality to the request
 * 
 * @extends {HttpServiceDecorator}
 */
class TimingDecorator extends HttpServiceDecorator {
    async request(url: string) {
        const start = Date.now();
        await this.service.request(url);
        const duration = Date.now() - start;
        console.log(`[TIME] Request took ${duration}ms`);
    }
}

class Main {
    static main(): void {
        let service = new BasicHttpService();
        service = new LoggingDecorator(service);
        service = new TimingDecorator(service);
        service.request("https://example.com")
            .then(() => console.log("Request completed"))
            .catch((error) => console.error(error));
    }
}