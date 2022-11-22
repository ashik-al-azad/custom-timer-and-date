(function ($) {
    "use strict";

    // multifull countdown
    $("[data-countdown]").each(function () {
        var $this = $(this),
            finalDate = $(this).data("countdown");
        $this.countdown(finalDate, function (event) {
            $this.html(event.strftime('<div class="time-count">%D <span>DAY</span></div><div class="time-count">%H <span>Hour</span></div><div class="time-count">%M <span>Minute</span></div><div class="time-count">%S <span>Second</span></div>'));
        });
    });

})(jQuery);