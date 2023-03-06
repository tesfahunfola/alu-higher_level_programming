#!/usr/bin/python3

import sys

if __name__ == "__main__":
    args = sys.argv[1:]
    argstr = 'argument'
    lengthofargs = len(args)

    if lengthofargs == 0:
        argstr = argstr + 's.'
    elif lengthofargs == 1:
        argstr = argstr + ':'
    else:
        argstr = argstr + 's:'

    print(lengthofargs, argstr)

    if lengthofargs > 0:
        for i in range(lengthofargs):
            print('{}: {}'.format(i+1, args[i]))
