Cheat Sheet for Obsidian Markdown Syntax, a Reference Table


|Markdown Element|Syntax|Example|
|---|---|---|
|Headings 1-6|#|# My Heading **See below for more examples**|
|Bold|**|Chocolate is **so good!**|
|Italics|*|I read the *NY Times*|
|Underline|N/A|Only with Plugin|
|Strikethrough|~~|~~woops~~|
|Links|[]|**See below for examples**|
|Embed|!|**See below for examples**|
|Unordered List|–|– first bullet point|
|Numbered List|1.|1. Make bread|
|Tasks|– [ ]|– [x] Go shopping|
|Table|\||**See below for examples**|
|Footnotes|^[]|Yaks are found in TIbet^[An other Himalayan regions]|
|Tags|#|#tagshavenospaces|
|Code Block|“` or ~~~|` ``` this is a code block `“` ~~~ so is this ~~~|
|Horizontal rule/ line|—|—|
|Images|![]()|![Mountains and grass](/_res/helmet.jpg)|
|Highlight|==|Highlight ==this.==|


## Markdown Headings

There are six possible headings you can use in Obsidian, they are numbered from 1 (biggest) to 6 (smallest). The special character for creating headings is the hash symbol #. To make an H1 type # with a space after it, two hashes for an H2, etc.

Using headings instead of bolded text will be more useful later if you want to link to a specific section (see below) or for making a table of contents etc.

Here is the markdown for each heading and the resulting heading that will appear in your note.

```
# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6
```

# Heading 1

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

## Text Formatting in Obsidian

If you’re used to using Microsoft Word, Google Docs, or Pages, you’re probably used to having a bar at the top of the page with all your formatting options. In Obsidian, you can use markdown to change your formatting, here’s how:

### Bold

To make something bold you surround it with two stars (**) on either side.

```
**Two Stars for Bolded Text**
```

**Two Stars for Bolded Text**

### Italics

To make something italic you surround it with one star (*) on either side.

```
*One Star for Italicized Text*
```

_One Star for Italicized Text_

### Strikethrough

To strikethrough or cross out your text, surround the text with two tildes (~~). Sometimes called the wiggly line, this character is usually found to the left of the number 1 on your keyboard (SHIFT `)

```
~~Two Tildes for Strikethrough Text~~
```

~~Two Tildes for Strikethrough Text~~

### Highlight

To highlight text, surround the text with two equals symbols on each side

```
==Two Equals Signs for Highlighted Text==
```

==Two Equals Signs for Highlighted Text==

## How to Make Links in Obsidian

In Obsidian links are created with double square brackets [[]].

### Link to a Note

The most basic link in Obsidian is a note link, it requires only double square brackets. Obsidian will open a dialog box to help you select the note you want to link to.

```
[[Link to a note within Obsidian]]
```

### Link to a Heading within a Note

```
Link to a [[note's specific heading #Heading]]
```

### Link to a Block within a Note

```
Link to a [[note's specific ^Block]]
```

### Link to a Note but Change the Display text

Sometimes you want to link to a note but want to change the anchor text, you can do this with the pipe symbol |. The text after the pipe symbol will be displayed.

```
Link to a [[note title | prefered display text]]
```

### Link to a Website

To create a link to an external website, add parenthesis after the square brackets with the URL.

```
[Link to a website](https://facedragons.com)
```

[Link to a website](https://facedragons.com)

## Embedding in Obsidian

Embedding a note within another note is a great way to keep content up-to-date. If you copied and pasted the content, later you would need to update the original and then anywhere you pasted it.

By embedding the original note into new notes, you only have to update the original and all will be updated.

```
![[Note to Embed]]
```

Blocks can also be embedded if you don’t want the entire note.

```
![[linkexample^Block]]
```

Headings too.

```
![[linkexample#Heading]]
```

The trick for changing the display text will work when embedding too.

```
![[linkexample|Change Display Text]]
```

### Embedding Images and Other Files in Obsidian Notes

The easiest way to embed a file into your notes is to use drag and drop. Images, videos, audio and other files can be embedded this way. When using drag and drop, the file will be added to your vault where ever you set up files to be stored.

_If you haven’t set up a location for your files, you can do so in **Settings>Files & Links>Attachment Folder Path**_

```
![[Image.jpg]]
![Image](https://facedragons.com/wp-content/uploads/2022/08/cropped-roundlogo-FD.png)
```

```
![[Video.mp4]]
```

```
![[Audio.mp3]]
```

```
![[Document.pdf]]
```

To link a file that exists online somewhere, enter the URL within parentheses after the link

```
![Image](https://URL.com/image.png)
```

Table of supported file types and formats

1. Markdown files: `md`;
2. Image files: `png`, `jpg`, `jpeg`, `gif`, `bmp`, `svg`;
3. Audio files: `mp3`, `webm`, `wav`, `m4a`, `ogg`, `3gp`, `flac`;
4. Video files: `mp4`, `webm`, `ogv`;
5. PDF files: `pdf`.

## Creating Lists

Lists can be started with either a dash with a space after it (- ) or a one with a period and space (1. )Hitting the return key will continue the list, tab will indent and Shift tab will return to the outer list.

### Unordered List (Bullet Points)

- First Item
- Second Item
- Third Item
    - Tab to embed an item
    - Continue adding embedded items
- Shift-Tab to return

```
- First Item
- Second Item
- Third Item
    - Tab to embed an item
    - Continue adding embedded items
- Shift Tab to return
```

### Enumerated List (Numbered List or Ordered List)

1. First Item
2. Second Item
3. Third Item
    1. Tab to Embed an Item
    2. Return to continue adding embedded items
4. Shift-Tab to return

```
1. First Item
2. Second Item
3. Third Item
    1. Tab to Embed an Item
    2. Return to continue adding embedded items
4. Shift Tab to return
```

### Checklist or To-do List

A checklist is a special kind of unordered list, when created it will become a list of clickable checkboxes. It can be tricky to create the first time, here is the exact key you need:

- **Remember, there is a space after the dash and between the square brackets, otherwise, your checklist won’t work.**

```
- [ ] First Task
- [x] Second Task
- [ ] Third Task
    - [x] Tab to Embed a task
    - [ ] Return to continue adding embedded tasks
- [ ] Shift Tab to return
```

## Make Tables

Tables in markdown may look ugly when you are creating them, but they will turn into beautiful and in-proportion tables when you’re finished.

- **Remember, rows and columns don’t need to be in line in your markdown, they will be fixed after you like off or enable “reading view.”**

```
| Heading | Heading 2 | 
| ----------- | ----------- | 
| First Row | Second Column | 
| Second Row | Second Column|
| Third Row | Second Column |
```

|Heading|Heading 2|
|---|---|
|First Row|Second Column|
|Second Row|Second Column|
|Third Row|Second Column|

## Adding Footnotes

Footnotes will be necessary if you are using Obsidian to do academic work such as essays, theses, or dissertations.

```
Here is a sentence with a ^[This Footnote is found at the bottom of the page] footnote.
```

Here is a sentence with a [1]footnote.

## Creating Tags

Tags in Obsidian work in the same way as hashtags on Twitter or Instagram. Tags can be used for categories, genres, or any other way you can think of.

- Remember, a hash and text (#text) with no space is a tag, and a hash and text with a space between (# text) them is an H1 Heading

```
#tagexample 
```

## Adding Code to Your Notes

There are two options for inserting code into your notes, either a code block or `inline code`

### Code Block

A code block is added with any of the following three methods

- Three tildes on the first and last line of the code block ~~~
- Three ticks on the first and last line of the code block “`
- Four spaces

````
~~~
Code block with Tildes
~~~

```
Code Block with ticks
```

    Code Block with four spaces
````

### In-Line Code

```
Insert tick marks around `any text` to turn it into in-line code
```

Insert tick marks around `any text` to turn it into in-line code

## Other Markdown Syntax in Obsidian

### Horizontal Line, Separator, or Horizontal Rule

To add a horizontal line or separator in your note use three dashes, remember to add a space after the dashes to make it work.

```
--- 
```

### Queries

Queries will embed a list of results into your note, the query below will return any notes with the tag #Bible for example. You can add more than one parameter, as shown further down.

````
```query
#Bible
```
````

````
```query
#Bible + New Testament
```
````