#!/usr/bin/node
def compare_files(fileA, fileB):
    with open(fileA, 'r') as fA, open(fileB, 'r') as fB:
        contentA = fA.read()
        contentB = fB.read()

    print(f"fileA : {contentA.strip()} - fileB : {contentB.strip()}")

    if contentA == contentB:
        print("\n[Expected]\n" + contentA.strip())
    else:
        print("\n[Expected]\n" + contentA.strip())
        print("\n[Got]\n" + contentB.strip())

    print(f"\n({len(contentA)} chars long)")
    print("[stderr]:")
    print("(0 chars long)")

compare_files("file_2_0", "file_2_1")
print("\n")
compare_files("file_3_0", "file_3_1")
