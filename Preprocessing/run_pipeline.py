#!/usr/bin/env python3
"""Simple CLI for the normalization pipeline.

Usage:
  python run_pipeline.py "some text to normalize"
  echo "some text" | python run_pipeline.py
"""
import sys

# Import normalize_input from package or module. The module is resilient to both package and
# script execution modes because of the fallback imports we added to `normalize.py`.
from normalize import normalize_input


def main():
    if len(sys.argv) > 1:
        text = " ".join(sys.argv[1:])
    else:
        # If stdin is piped (non-tty), read it; otherwise prompt the user interactively.
        if not sys.stdin.isatty():
            text = sys.stdin.read().strip()
        else:
            try:
                text = input("Enter text to normalize: ").strip()
            except (EOFError, KeyboardInterrupt):
                # User cancelled / sent EOF
                return

            # Keep prompting until non-empty input is provided (or user cancels)
            while not text:
                try:
                    text = input("Please enter some text (or Ctrl-C to quit): ").strip()
                except (EOFError, KeyboardInterrupt):
                    return

    if not text:
        return

    print(normalize_input(text))


if __name__ == "__main__":
    main()
