#!/usr/bin/python3
"""
Adds all arguments to a Python list and saves them to a JSON file
"""

import sys
from os import path
from typing import List
from save_to_json_file import save_to_json_file
from load_from_json_file import load_from_json_file

def add_item(args: List[str]):
    """
    Adds all arguments to a Python list and saves them to a JSON file
    """
    filename = 'add_item.json'

    # create an empty list or load the existing one from file
    if path.exists(filename):
        my_list = load_from_json_file(filename)
    else:
        my_list = []

    # add each argument to the list
    for arg in args:
        my_list.append(arg)

    # save the updated list to file
    save_to_json_file(my_list, filename)

if __name__ == "__main__":
    # call the add_item function with the command line arguments
    add_item(sys.argv[1:])
