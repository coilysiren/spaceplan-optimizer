# spaceplan-optimizer

Hacky coding excerise I decided to spend an hour on, which tells you the best purchases for idle game [Spaceplan](http://jhollands.co.uk/spaceplan/). It appends a "time till return on investment" to the Thing Maker information window, refreshed on click.

![Imgur](http://i.imgur.com/fEBtxyh.gif)

The game's HTML is a bit... sub-optimal, so I expect this script to break at some point.

The `##### s` value shows you the seconds until you make all your power back from buying a thing, always go for the one with the lowest number.

**Doesn't work early game!** Although you don't really need is as much early game anyways.

Script will usually show `NaN` when there's an issue

## Usage

Open inspect element after the page has fully loaded, then open the console.

In the console, the contents of [optimizer.js](https://raw.githubusercontent.com/lynncyrin/spaceplan-optimizer/master/optimizer.js)
