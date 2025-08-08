
下面列一些该网站建站常用的修饰代码供参考，具体用法见[Materials for Mkdocs官方文档](https://squidfunk.github.io/mkdocs-material/reference/)：

1.Admonitions

???+ note

    21世纪是生物学的世纪

note可替换abstract、info、tip、success、question、warning、example、quote等

inline end靠右，inline靠左

2.缩写

CNBO

*[CNBO]: 全国中学生生物学奥林匹克竞赛

3.注释

21世纪是生物学的世纪(1)
{ .annotate }

1. 汝听，人言否？

4.卡片网格

<div class="grid cards" markdown>

- :fontawesome-brands-html5: __HTML__ for content and structure
- :fontawesome-brands-js: __JavaScript__ for interactivity
- :fontawesome-brands-css3: __CSS__ for text running out of boxes
- :fontawesome-brands-internet-explorer: __Internet Explorer__ ... huh?

</div>

5.通用网格

<div class="grid" markdown>

=== "Unordered list"

    * Sed sagittis eleifend rutrum
    * Donec vitae suscipit est
    * Nulla tempor lobortis orci

=== "Ordered list"

    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci

``` title="Content tabs"
=== "Unordered list"

    * Sed sagittis eleifend rutrum
    * Donec vitae suscipit est
    * Nulla tempor lobortis orci

=== "Ordered list"

    1. Sed sagittis eleifend rutrum
    2. Donec vitae suscipit est
    3. Nulla tempor lobortis orci
```
</div>
6.图片
<div class="grid" markdown>
对齐：

![Image title](https://dummyimage.com/600x400/eee/aaa){ align=left loading=lazy }

</div>


<figure markdown="span">
  ![Image title](https://dummyimage.com/600x400/){ width="300" }
  <figcaption>Image caption</figcaption>
</figure>

![Image title](https://dummyimage.com/600x400/){ width="300" }
/// caption
Image caption
///


7.脚注

Lorem ipsum[^1] dolor sit amet, consectetur adipiscing elit.[^2]

[^1]: Lorem ipsum dolor sit amet, consectetur adipiscing elit.

<!--必须4格缩进-->
[^2]: 
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod
    nulla. Curabitur feugiat, tortor non consequat finibus, justo purus auctor
    massa, nec semper lorem quam in massa.


8.格式化

--8<-- "biochem/index.md"

Text can be {--deleted--} and replacement text {++added++}. This can also be
combined into {~~one~>a single~~} operation. {==Highlighting==} is also
possible {>>and comments can be added inline<<}.

{==

Formatting can also be applied to blocks by putting the opening and closing
tags on separate lines and adding new lines between the tags and the content.

==}

==转录==

**翻译**

_表达_

~~细胞~~

^^分子^^

H~2~O

A^T^A

++ctrl+alt+del++  <!--https://facelessuser.github.io/pymdown-extensions/extensions/keys/#extendingmodifying-key-map-index-->

(tm)
(c)	
(r)	
c/o	
+/-	
-->	
<--	
<-->
=/=	

9.流程图

``` mermaid
graph LR
  A[Start] --> B{Error?};
  B -->|Yes| C[Hmm...];
  C --> D[Debug];
  D --> B;
  B ---->|No| E[Yay!];
```

10.代码

`#!python import`

``` py linenums="1"  hl_lines="2 3"
def bubble_sort(items):
    for i in range(len(items)):
        for j in range(len(items) - 1 - i):
            if items[j] > items[j + 1]:
                items[j], items[j + 1] = items[j + 1], items[j]
```