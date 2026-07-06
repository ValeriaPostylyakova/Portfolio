from storages.backends.s3 import S3Storage


class LocalMinIOStorage(S3Storage):
    def url(self, name, parameters=None, expire=None, http_method=None):
        url = super().url(name, parameters, expire, http_method)
        return url.replace("http://minio:9000", "http://localhost:9000")
