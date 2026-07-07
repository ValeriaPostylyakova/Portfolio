FROM minio/minio:latest

ENTRYPOINT ["/bin/sh", "-c"]

CMD ["minio server /data --address :${PORT}"]