#!/usr/bin/python3
"""this is funcion that checks open boxes"""


def canUnlockAll(boxes):
    """Thi is a canUnlockAll function that checks if open boxes"""
    n = len(boxes)
    opened = set()
    queue = [0]  # Start with the first box
    
    while queue:
        current_box = queue.pop(0)
        if current_box not in opened:
            opened.add(current_box)
            for key in boxes[current_box]:
                if key not in opened and key < n:
                    queue.append(key)
    
    return len(opened) == n

