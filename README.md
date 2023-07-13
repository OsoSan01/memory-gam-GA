# Memory game first project

# Try my game
[Memory game](https://ososan01.github.io/memory-gam-GA/)

## Goals
	-Having an MVP by the end of the week.
	-Relate and use all the material given to us on the last two weeks.


# Intro
As part of the boot camp journey we were asked to do a project on our own, having a whole week to do so.

I must say that the idea of flying solo was scary. I was not 100% confident doing a project with a final MVP (minimal viable product) only after two weeks of classes. However, once I started, things got a little easier, numeros subjects revised in previous weeks started to click. 

From the variety of options, I chose the game “Checkers”. As time progressed. I noticed it was a bit more challenging than I expected. 

Didn’t want to be hitting a wall or a dead end. In order to avoid that, I decided to change to a different game (that and my wife told me she wanted that kind of game). That’s how I ended with memory.


# How it works and what I used.

## General idea and pseudo code

Memory is a simple game. A player has different numbers of cards and need to pair two images/icons until finding all of them. The cards are “flipped” so the player can’t see the images in advance. 

Each turn the player must flip two cards. If the images do not match, the cards must be flip again. If the cards match, they stay like that and won't be used or touched again.

The player wins when all the pairs are found.

So… how to translate that into code?

After researching for a couple of days and watching some videos on how to, the general idea is as follows:

	- There are “cards” with a “front” (blank space) and a “back” (where the soon-to-be-paired images are)

	- When the player clicks on one of the cards, the front one stops to be displayed and the back one is displayed.

	- If the clicked cards are not the same images, those cards will be “flipped” to their original not showing the image position.

	- The player wins if pairs all the images inside a certain amount of time.

	- The player loses if time runs out.

	- The replay button will reset all the cards, timer and moves and will “shuffle” the images to be on random places.



## Used tools.

For the project, I used HTML, CSS and JS.

Alongside the project, I read a lot. From different pages with similar projects, to a couple of books suggested by one of the instructors.

At the same time I watched and followed some code-along videos to be more familiar with the project.

For the animations, I searched for ideas and examples on Google, trying the most interesting ones. Some are still far advanced for me to incorporate them into my project, but they look amazing.

Finally, but not less important. The help and guidance of all the instructors in the course helped me more than they can imagine. 


# Problems and solutions and tricky parts.

The first problem that I encountered was how to start. As mentioned above, I read and watched a lot to have an idea of where to start.

First,  I started with the HTML template. A raw layout, with an idea of what I wanted to achieve. 

That changed a couple of times over the project.

CSS was the following. The visual element. How was the player going to interact with it. 

Draw of the first layout and tryed to replicate that in CSS. This element changed a lot at the beginning and  at the end of the project.

With JS things got trickier. From creating elements and delaying functions to start or be done after a certain time (like the flip or the shake animation) or showing and hiding the win/lose statements after one condition or if the “try again” button was clicked. 

I’m still not 100% confident (by any means) in my expertise in JS. However, I learnt a lot and got clarity on multiple subjects we studied in the weeks before.

The final touches were some animations done over CSS.


# Conclusion. 
## What I liked, what I hated.

I am happy with the result. Overall, I think both goals got achieved during the week.

What I hated:
I keep making silly mistakes and not remembering things from simple syntaxis over JS. That will chance with more experience and practice.
Feeling lost and with no idea where to start. However, writting down the overal layout, pseudo code, talking to my team-mates and instructors helped me to get pass that.
Feeling not ready enough. Adding to the last point, I needed to remind myself that I am starting this journey and I should not be so hard on myself.

What I liked:
The final product and the fact that I pulled off succesfully.
Having the chance to practice what I have been learning over the last weeks.


# Thanks
