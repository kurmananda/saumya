### You can edit your website by yourself by just following these steps :
- the following are listed according to how they appear in the website.
# How to edit --->
### Name and the info(profilepic, title, and links) :
- this can be simply edited by just going to the data folder.
- then go to main_info.yaml.
- here you can change your name, profile pic, title and any other links.
### The navigation bar:
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
### My works :
### References :
- go to the outer most index.html file and scroll down
- change the text in ```<p>``` (paragraph) which is under the "References" heading in ```<h4>```(heading).
- add anchors(<a>) wherever necessary by just tagging them around the word and link in href.
-  example : ``` <a href="your link">appearing name</a> ```
-  if you want to open mail by clicking on link just add ```href="mailto:mraimundo@ic.unicamp.br"``` "mailto:" as shown
### map of your work :
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
- the name and the email gets changed automatically according to 
