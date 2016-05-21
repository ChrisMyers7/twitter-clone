$(document).ready(function() {

    $('.tweet-actions').hide();
    $('.stats').hide();
    $('.reply').hide();
    
//    
    var showMe = function() {
            console.log($(this).find('.tweet-actions'))
            return $(this).find('.tweet-actions').show();
        };
    
    var hideMe = function() {
        $(this).children('.tweet-actions').hide()
    }
    
    $('.content').hover(
        function() {
            $(this).find('.tweet-actions').slideDown('fast');
        },
        function() {
            $(this).find('.tweet-actions').slideUp('fast');
        }
    )
    $('.content').on('click',function() {
        $(this).find('.stats').slideDown('medium');
    })
    
    $('.content').on('click',function() {
        $(this).find('.reply').slideDown('medium');
    })
    
    $('.content').mouseleave(function() {
        $(this).find('.stats').slideUp();
    })
    
     $('.content').mouseleave(function() {
        $(this).find('.reply').slideUp();
    })
    
    
    $('#new-tweet').on('click', function(e) {
        e.stopPropagation();
        $(this).css('height', '5em');
        $('#tweet-controls').slideDown();
    });
    $('html').on('click', function() {
        $('#new-tweet').css('height', '2.5em');
        $('#tweet-controls').slideUp();
    });
    $(".tweet-compose").focusin('click', function() {
        $(this).css('height', '5em');
    });
    $('tweet-compose').focusout('click', function() {
        $(this).css('height', '2.5em');
    });
    
    $('#new-tweet').on("keyup", function() {
        var tweetSize = $("#new-tweet").val();
        var charSize = 0;
        
        if (tweetSize !== undefined) {
            charSize = tweetSize.length;
        }
        var displayCharSet = 140 - charSize;
        if (displayCharSet <= 10) {
            $('#char-count').css('color', 'red');
        } else if (displayCharSet > 10) {
            $('#char-count').css("color", '#ddd')
        }
        if (displayCharSet < 0) {
            $('#tweet-submit').hide();
        } else if (displayCharSet >= 0) {
            $('#tweet-submit').show();
        }
        $('#char-count').text(displayCharSet);
    });
    
    
    
    var NewTweet = function() {
        
    }
    
    var makeTweet = function(item) {
        if (item) {
//           
            
                $('#stream').prepend(
                    '<div class="tweet">' +
						'<div class="content">' +
							'<img class="avatar" src="img/damenleeturks.jpg" />' +
							'<strong class="fullname">My BFF</strong>' +
							'<span class="username">@mybff</span>' +
							'<p class="tweet-text">' + item + '</p>' +
							'<div class="tweet-actions">' +
								'<ul>' +
									'<li><span class="icon action-reply"></span> Reply</li>' +
									'<li><span class="icon action-retweet"></span> Retweet</li>' +
									'<li><span class="icon action-favorite"></span> Favorite</li>' +
									'<li><span class="icon action-more"></span> More</li>' +
								'</ul>' +
                                
				        '</div>' +
                    
                        '<div class="stats">' +
								'<div class="retweets">' +
									'<p class="num-retweets">30</p>' +
									'<p>RETWEETS</p>' +
								'</div>' +
								'<div class="favorites">' +
									'<p class="num-favorites">6</p>' +
									'<p>FAVORITES</p>' +
								'</div>' +
								'<div class="users-interact">' +
									'<div>' +

//										<!-- BLACK DIAMOND: Implement the Bootstrap tooltips for when you hover over a user’s avatar image -->
//										<!-- HINT: Bootstrap has good documentation =) -->
										'<img src="img/alagoon.jpg" />' +
										'<img src="img/vklimenko.jpg" />' +
									'</div>' +
								'</div>' +

//								<!-- BLACK DIAMOND: Make the timestamp below similar to how they look on Twitter (1h, 18m, 1m) and use the jQuery timeago plugin to make them automatic. -->
//								<!-- HINT: Refer to timeago documentation -->
								'<div class="time">' +
								    '1:04 PM - 19 Sep 13' +
								'</div>' +
							'</div>' +
							'<div class="reply">' +
								'<img class="avatar" src="img/alagoon.jpg" />' +
								'<textarea class="tweet-compose" placeholder="Reply to @mybff"/></textarea>' +
							'</div>' +
                    
                    '</div>' 
                )
                 $('.tweet-actions').hide();
                 $('.stats').hide();
                 $('.reply').hide();
            
             $('.content').hover(
                function() {
                    $(this).find('.tweet-actions').slideDown('fast');
                },
                function() {
                    $(this).find('.tweet-actions').slideUp('fast');
                }
            )
             $('.content').on('click',function() {
                $(this).find('.stats').slideDown('medium');
                })
    
             $('.content').on('click',function() {
                 $(this).find('.reply').slideDown('medium');
             })
    
             $('.content').mouseleave(function() {
                 $(this).find('.stats').slideUp('medium');
             })
    
             $('.content').mouseleave(function() {
                 $(this).find('.reply').slideUp('medium');
             })
        } 
    }
    
    $("#tweet-submit").on('click', function() {
        var newTweet = $('#new-tweet').val().trim();
//        console.log("hi");
        makeTweet(newTweet);
        $('#new-tweet').val('');
    })
    
})