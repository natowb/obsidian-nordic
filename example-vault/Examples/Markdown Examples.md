Cheat Sheet for Obsidian Markdown Syntax, a Reference Table


# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

## Text Formatting 
### Bold

BOLD:  **Two Stars for Bolded Text**
ITALICS: *One Star for Italicised Text*
STRIKETHROUGH: ~~Two Tildes for Strikethrough Text~~
HIGHLIGHT: ==Two Equals Signs for Highlighted Text==

## How to Make Links in Obsidian


[[Canvas Example.canvas|Canvas Example]]
Link to a [[Tables#^853b40]]
[[Tables#something]]
Link to a [[Tables| prefered display text]]
[Link to a website](https;://github.com/natowb/obsidian-nordic)

## Embedding in Obsidian

Embedding a note within another note is a great way to keep content up-to-date. If you copied and pasted the content, later you would need to update the original and then anywhere you pasted it.

By embedding the original note into new notes, you only have to update the original and all will be updated.

![[Tables]]
![[Tables#something]]
![Image](https://raw.githubusercontent.com/natowb/obsidian-nordic/stable/obsidian-nordic.png)

## Creating Lists

### Unordered List

- First Item
- Second Item
- Third Item
    - Tab to embed an item
    - Continue adding embedded items
- Shift-Tab to return


### Ordered List

1. First Item
2. Second Item
3. Third Item
    1. Tab to Embed an Item
    2. Return to continue adding embedded items
4. Shift-Tab to return

### Checklist

- [ ] First Task
- [ ] Second Task
- [ ] Third Task
    - [ ] Tab to Embed a task
    - [ ] Return to continue adding embedded tasks
- [ ] Shift Tab to return

## Make Tables


|Heading|Heading 2|
|---|---|
|First Row|Second Column|
|Second Row|Second Column|
|Third Row|Second Column|

## Adding Footnotes

Here is a sentence with a ^[This Footnote is found at the bottom of the page] footnote.

## Creating Tags

#tagexample 

## Adding Code to Your Notes

Insert tick marks around `any text` to turn it into in-line code

````
~~~
Code block with Tildes
~~~

```
Code Block with ticks
```

    Code Block with four spaces
````