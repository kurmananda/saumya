### You can edit your website by yourself by just following these steps :
- the following are listed according to how they appear in the website.
# How to edit --->
### Name and the info(profilepic, title, and links) :
- this can be simply edited by just going to the data folder.
- then go to main_info.yaml.
- here you can change your name, profile pic, title and any other links.
### The navigation bar:
- tabs in navbar can be edited, added or changed by:
- go to _layouts folder
- open default.html
- scroll down to class named "navbar"
- You can directly change the name or any link in the tab here and navigate it to "#(id_of_the_target_content)"
- you can add another icon by adding this :
```<li class="navbar-item"><a class="navbar-link" href={{ "/index.html#resume" | prepend: site.baseurl }}>CV</a></li>```
-but don't forget to name the target and paste the same name with "#" before..
### Bio :
- go to the outer most index.html file
- change the text in ```<p>``` (paragraph) which is under the "Bio" heading in ```<h4>```(heading).
- add anchors(<a>) wherever necessary by just tagging them around the word and link in href.
-  example : ``` <a href="your link">appearing name</a> ```
### My current research :
- go to the outer most index.html file
- change the text in ```<b>``` (bold) which is under the "current research" heading in ```<p>, <b>``` (bold paragraph).
- add anchors(<a>) wherever necessary by just tagging them around the word and link in href.
-  example : ``` <a href="your link">appearing name</a> ```
### Publications :
- go to the _data.
- then open news.yaml
- start with a new one with "-"
- there you can just change the content to what ever you want and link which you want to target to.
- here for every publication, there will be a year attached to it.
- according to to the year which you keep, it will get sorted to different tabs.
### My works :
- go to the _data.
- then open publications.yaml
- there you can just change the content to what ever you want by changing text in title
- start with a new one with "-"
- and if you want to include :
- if it's a paper, add an attribute named paper_pdf : "pdf_location.pdf"
- if it's a presentation, add an attribute named code : "ppt_location.pdf"
- according to these attributes, the name paper or presentation will be displayed.
- copy paste the attributes of venue and authors it might be useful later, so I am not changing code.
- according to to the year which you keep, it will get sorted to different tabs.
### References :
- go to the outer most index.html file and scroll down
- change the text in ```<p>``` (paragraph) which is under the "References" heading in ```<h4>```(heading).
- add anchors(<a>) wherever necessary by just tagging them around the word and link in href.
-  example : ``` <a href="your link">appearing name</a> ```
-  if you want to open mail by clicking on link just add ```href="mailto:mraimundo@ic.unicamp.br"``` "mailto:" as shown
### map of your work :
- go to the _data.
- then open publications.yaml
- you can change the data existing like : 'place, time, title, subtitle, category(school on right and work on left side of map)'
- you can add another by just copy pasting the exting work and changing the variables..!
### footer :
- the name or emal or any other link in footer can be edited, added or changed by:
- go to _layouts folder
- open default.html
- scroll down to class named "footer"
- the link inside the last two old icons automatically gets changed once you change the links in main_info.yaml
- In the new icon's(if added) you can change link there itself or create a new variable in main_info.yaml and add ```onclick="window.open('{{ site.data.main_info.new_icon }}')"``` as an attribute
- you can add another icon by adding this :
```<span onclick="window.open('{{ site.data.main_info.newicon }}')" style="cursor: pointer">```
```<i class="fa fa-github" aria-hidden="true"></i> </span>```  along with the other two icons.
- the name and the email gets changed automatically according to what you save there.
