<?php

/**
 * Interface for HttpService
 * 
 */
interface HttpService
{
    function request(string $url): void;
}

/**
 * Abstract decorator for HttpService.
 *
 * @implements HttpService
 */
abstract class HttpServiceDecorator implements HttpService
{
    protected HttpService $service;

    public function __construct(HttpService $service)
    {
        $this->service = $service;
    }

    abstract function request(string $url): void;
}

/**
 * Concrete implementation of HttpService.
 * This class simulates a basic HTTP service that fetches a URL.
 *
 * @implements HttpService
 */
class BasicHttpService implements HttpService
{
    public function request(string $url): void
    {
        echo "Requesting URL: $url\n";
    }
}

/**
 * Concrete decorator that adds logging functionality to the request.
 *
 * @extends HttpServiceDecorator
 */
class LoggingDecorator extends HttpServiceDecorator
{
    public function __construct(HttpService $service)
    {
        parent::__construct($service);
    }

    public function request(string $url): void
    {
        echo "[LOG] Starting request to: $url\n";
        $this->service->request($url);
        echo "[LOG] Finished request to: $url\n";
    }
}

/**
 * Concrete decorator that adds timing functionality to the request.
 *
 * @extends HttpServiceDecorator
 */
class TimingDecorator extends HttpServiceDecorator
{
    public function __construct(HttpService $service)
    {
        parent::__construct($service);
    }

    public function request(string $url): void
    {
        $startTime = microtime(true);
        $this->service->request($url);
        $endTime = microtime(true);
        echo "[TIME] Request to $url took " . ($endTime - $startTime) . " ms\n";
    }
}

class Main
{
    public static function main(): void
    {
        $httpService = new BasicHttpService();
        $httpService = new LoggingDecorator($httpService);
        $httpService = new TimingDecorator($httpService);
        $httpService->request("http://www.example.com");
    }
}

Main::main();

?>