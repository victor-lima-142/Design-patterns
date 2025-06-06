/**
 * Interface for HttpService
 * 
 */
interface HttpService {
    void request(String url);
}

/**
 * Abstract decorator for HttpService
 * This class implements the HttpService interface
 * and holds a reference to another HttpService object.
 * 
 * @see HttpService
 */
abstract class HttpServiceDecorator implements HttpService {
    protected HttpService decoratedService;

    public HttpServiceDecorator(HttpService decoratedService) {
        this.decoratedService = decoratedService;
    }

    @Override
    public void request(String url) {
        decoratedService.request(url);
    }
}

/**
 * Concrete implementation of HttpService
 * This class simulates a basic HTTP service that fetches a URL
 *
 * @see HttpService
 */
class BasicHttpService implements HttpService {
    @Override
    public void request(String url) {
        System.out.println("Requesting URL: " + url);
    }
}

/**
 * Concrete implementation of HttpService
 *
 * @see HttpService
 */
class LoggingDecorator extends HttpServiceDecorator {
    public LoggingDecorator(HttpService decoratedService) {
        super(decoratedService);
    }

    @Override
    public void request(String url) {
        System.out.println("[LOG] Starting request to " + url);
        super.request(url);
        System.out.println("[LOG] Finished request to " + url);
    }
}

/**
 * Concrete decorator that adds timing functionality to the request.
 *
 * @see HttpServiceDecorator
 */
class TimingDecorator extends HttpServiceDecorator {
    public TimingDecorator(HttpService decoratedService) {
        super(decoratedService);
    }

    @Override
    public void request(String url) {
        long startTime = System.currentTimeMillis();
        super.request(url);
        long endTime = System.currentTimeMillis();
        System.out.println("[TIME] Request to " + url + " took " + (endTime - startTime) + " ms");
    }
}

public class Main {
    public static void main(String[] args) {
        HttpService httpService = new BasicHttpService();
        httpService = new LoggingDecorator(httpService);
        httpService = new TimingDecorator(httpService);
        httpService.request("http://www.example.com");
    }
}