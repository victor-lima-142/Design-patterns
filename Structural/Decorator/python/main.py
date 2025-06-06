from abc import ABC, abstractmethod


class HttpService(ABC):
    """Interface for HttpService."""
    @abstractmethod
    def request(url: str) -> None:
        pass


class HttpServiceDecorator(HttpService):
    """Abstract decorator for HttpService."""
    def __init__(self, service: HttpService):
        self._service = service


    def request(self, url: str) -> None:
        self._service.request(url)

    @property
    def service(self) -> HttpService:
        return self._service

    @service.setter
    def service(self, service: HttpService) -> None:
        self._service = service


class BasicHttpService(HttpService):
    """
    Concrete implementation of HttpService.

    This class simulates a basic HTTP service that fetches a URL.
    """
    def request(self, url: str) -> None:
        print(f"Making HTTP request to {url}")

class LogginDecorator(HttpServiceDecorator):
    """Concrete decorator that adds logging functionality to the request."""
    def __init__(self, service: HttpService):
        super().__init__(service)

    def request(self, url: str) -> None:
        print(f"Logging request to {url}")
        super().request(url)


class TimingDecorator(HttpServiceDecorator):
    """Concrete decorator that adds timing functionality to the request."""
    def __init__(self, service: HttpService):
        super().__init__(service)

    def request(self, url: str) -> None:
        import time

        start_time = time.time()
        super().request(url)
        end_time = time.time()
        print(f"Request to {url} took {end_time - start_time:.5f} seconds")

class Main:
    @staticmethod
    def main() -> None:
        service = BasicHttpService()
        service = LogginDecorator(service)
        service = TimingDecorator(service)
        service.request("https://example.com")

if __name__ == "__main__":
    Main.main()