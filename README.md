# thejosef.life - personal portfolio
Website project created for my personal portfolio. Visit it at [josefaidt.me](https://josefaidt.me/).
GoDaddy is still hosting my 1.0 release at [thejosef.life](http://www.thejosef.life/). Domain merge coming soon.

## Version 2.0
Coming soon is version 2.0 of the site, showcasing an entire new structure and layout by utilizing a combination of CSS Grid and Flexbox. Stay tuned!

## Version 1.1
Github pages introduces the ability to host website pages for users and their projects. The 1.1 release marks the move to Github pages and the overall file restructure, despite my restructure early September for easier transfer of the distribution files to my host's FTP. 

### Styling
Layout and design created solely using Flexbox.

All styling is written in SASS, then compiled down using Grunt and the Ruby-based compiler. Grunt automates compiling, minifying, and distribution copying upon change.

### Task Runner and Modules
I have chosen to use Grunt to automate tasks. For this project I used npm installed the following packages:
* grunt
* grunt-load-tasks
* grunt-contrib-uglify
* grunt-contrib-watch
* grunt-sass
* grunt-contrib-cssmin
* grunt-contrib-copy
* grunt-git
