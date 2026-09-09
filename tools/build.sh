#!/usr/bin/env bash

echo "Processing css..."

if ! npx postcss src/main.css -o theme.mini.css; then
    echo "Error: PostCSS failed" >&2
    exit 1
fi

echo "Building final css file..."

if ! cat src/styled-settings.css theme.mini.css > theme.css; then
    echo "Error: Failed to create theme.css" >&2
    exit 1
fi

echo "Compiled to theme.css"

# Copy development files to the test vault when NATO_DEV is set.
if [[ -n "${NATO_DEV:-}" ]]; then
    TEST_VAULT="${TEST_VAULT:-test-vault}"
    DESTINATION="$TEST_VAULT/.obsidian/themes/Nordic"

    if ! mkdir -p "$DESTINATION"; then
        echo "Error: Failed to create destination directory: $DESTINATION" >&2
        exit 1
    fi

    if ! cp manifest.json "$DESTINATION/manifest.json"; then
        echo "Error: Failed to copy manifest.json" >&2
        exit 1
    fi

    if ! cp theme.css "$DESTINATION/theme.css"; then
        echo "Error: Failed to copy theme.css" >&2
        exit 1
    fi

    echo "Copied manifest.json and theme.css to $DESTINATION"
fi
