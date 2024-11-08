# SSCASN API Scraper

This repository contains a script to scrape data from SSCASN (Sistem Seleksi Calon ASN) API, which provides information about civil servant vacancies (formasi penerimaan CPNS 2024) in Indonesia. The script uses Jupyter Notebook and implements concurrency to efficiently gather data, which is then stored directly in a local MongoDB database.

## Features

- Concurrency: Utilizes concurrent requests to speed up the data scraping process.
- Jupyter Notebook: Interactive and easy-to-follow notebook format.
- Local MongoDB Storage: Stores the scraped data directly in a local MongoDB database for easy access and querying.
- High Performance: Successfully scraped 111,922 data entries in just 21 minutes.
  Requirements

## Performance

- Scraped Data: 111,922 entries
- Time Taken: 21 minutes
- Execution Date and Time: 11/5/2024, 11:00:00 AM
- Internet Speed: 41 Mbps
  - Latency:
    - Unloaded: 8 ms
    - Loaded: 13 ms
