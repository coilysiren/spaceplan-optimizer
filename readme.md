# spaceplan-optimizer

Hacky coding excerise I decided to spend an hour on, which tells you the best purchases for idle game [Spaceplan](http://jhollands.co.uk/spaceplan/). It appends a "time till return on investment" to the Thing Maker information window, refreshed on click.

![Imgur](http://i.imgur.com/fEBtxyh.gif)

The game's HTML is a bit... sub-optimal, so I expect this script to break at some point.

The `##### s` value shows you the seconds until you make all your power back from buying a thing, always go for the one with the lowest number.

**Doesn't work early game!** Although you don't really need is as much early game anyways.

Script will usually show `NaN` when there's an issue

## Usage

Open inspect element after the page has fully loaded, then open the console. **Load jQuery with the following script**, or via a [jQuerify bookmarklet](https://mreidsma.github.io/bookmarklets/jquerify.html).

    var script = document.createElement('script');script.src = "https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js";document.getElementsByTagName('head')[0].appendChild(script);

**Wait 5 seconds, then run this script**, which creates an element and updates it every second

    function update_stats(){
      $('#manufacture__container .manufacture__item').each(function() {
          cost = $(this).find("#cost").text().replace(/\,/g,'');
          income = $(this).find("#powerGain").text().replace(/\,/g,'').replace('w/sec','');
          ROI = Math.round(cost / income);
          $(this).find(".ROI").text(` ${ROI} s`);
      });
    }

    if (!window.jQuery) {

       console.log("jQuery not loaded! The jQuery include script does not load i immediately, so either wait a few seconds or try to load it again");

    } else {

      $('#manufacture__container .manufacture__item').each(function() {
          $(this).find("#costLine").append("<span class='ROI'> working...</span>");
      });

      update_stats();
      $(document).click(function() {update_stats();});

    }
