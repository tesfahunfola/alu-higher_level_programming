#!/usr/bin/python3
"""
Reads stdin line by line and computes metrics
"""

import sys

total_size = 0
status_codes = {200: 0, 301: 0, 400: 0, 401: 0, 403: 0, 404: 0, 405: 0, 500: 0}
count = 0

try:
    for line in sys.stdin:
        count += 1
        split_line = line.split()
        if len(split_line) > 6:
            size = int(split_line[6])
            status = int(split_line[8])
            total_size += size
            if status in status_codes:
                status_codes[status] += 1
        if count == 10:
            print("File size: {}".format(total_size))
            for code in sorted(status_codes.keys()):
                if status_codes[code] > 0:
                    print("{}: {}".format(code, status_codes[code]))
            count = 0
except KeyboardInterrupt:
    pass

print("File size: {}".format(total_size))
for code in sorted(status_codes.keys()):
    if status_codes[code] > 0:
        print("{}: {}".format(code, status_codes[code]))

