# Explanation

I accidentally deleted my journal and for some reason I can't find it in my repository's history so this is a very rough reconstruction of what happened. I'm sorry. :c

I started the project by copying one of my homework templates over and cleaning it up. I got a little ways in before realizing I probably shouldn't have done that. I restarted with create-react-app and only copied over some basic scss (variables.scss) that contains a bunch of variables I worked out a while back. Super handy and more customizable than bootstrap. Anyways I got two sections done and then realized I probably shouldn't be using react since the class is still on basic html/css... so I restarted _again_. Luckily you said that react was fine shortly afterwards so I didn't waste too much time.

Then I forgot about the project until 1/31/2020, but that was fine since I was practically done by then. I finished it up, deployed to AWS, and realized I was supposed to deploy to github pages.

- had to enable a theme, even though I wasn't using it (wtf)
- had to move the contents of build to root, which is why there's all that junk there. Just go to portfolio.

It took me an hour or so to get all that worked out but the [site is now live](https://structbylightning.github.io/index.html).

## Major stuff

### The About/Projects/Contact cards

I saw the effect a few years ago and spent an afternoon figuring out how to replicate it. It works by sliding the borders around. Each border is actually much longer than what you can see and is dashed. Then they just move up/down/left/right with css animations that are timed to make it look like the lines are crawling around the border.

Reproducing the cards was the hardest and most enjoyable part of this assignment. I even made them sort of responsive, rather than taking the easy way out and hardcoding everything.

### About

I know this is kind of sparse. Yeah, I said I write fiction, but somehow it's harder when you're writing about yourself. I'm kind of a private person, which doesn't really help... I don't like opening up to people, especially not when it's under my real name. I don't even do social media (looks like I'm going to get the last laugh on that with all the controversy though).

### Projects

Cards, yay. Who doesn't love cards? I'm pretty sure the hover effect is terrible on mobile though, but oh well. If I was doing it for mobile I'd just have them activate as you scrolled by.

Also, the cards squish badly and then grow too much... but I'm not really sure what a good solution is, from a design perspective. I did make the layout direction change if the screen got too narrow.

### Contact

Short n sweet. I wrote this in 20 minutes and don't have anything to say about it.

## Mistakes

Old me was stupid and picked two shades of blue as secondary and tertiary colors. I went back and fixed her silliness.

Honestly, aside from the tech stack fumbles, I didn't have many major problems. This was a pretty easy and straightforward assignment from a coding perspective.

I sort of flirted with responsive design but didn't really commit to it.

Also, if I was designing this for other people I'd probably at least pay lip service to rounded corners and put 2px or something. Sharp corners are so clean though! They look so much nicer than all that curvy half-melted stuff.
