#!/usr/bin/python3
"""
Prints out values in the states table of a db where name matches the argument in a safe way
"""


import sys
import MySQLdb

if __name__ == '__main__':
    db = MySQLdb.connect(user=sys.argv[1], passwd=sys.argv[2],
                         db=sys.argv[3], port=3306)

    cursor = db.cursor()
    cursor.execute("SELECT * FROM states WHERE name = %s;", (sys.argv[4],))
    states = cursor.fetchall()

    for state in states:
        print(state)
