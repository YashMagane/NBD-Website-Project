window.onload= function (){

    var paper = new Raphael( 0, 0, 800, 600);
    
    var backGround = paper.rect(0,0,800,600);
    
    backGround.attr({ fill: "blue"});
    
    var ball = paper.circle(50,50,30);

    ball.attr({ fill: "45-green-yellow"});

    function bounce_drop1() {

        ball.animate({cy: 570 , cx: 400}, 500, 'ease-in', bounce_up1);
        
    }
        
    

        function bounce_up1() {

        ball.animate({cy: 50, cx: 750}, 500, 'ease-out', bounce_drop2);
            
    }

    function bounce_drop2() {

        ball.animate({cy: 570 , cx: 400}, 500, 'ease-in', bounce_up2);
        
    }
        

        function bounce_up2() {

        ball.animate({cy: 50, cx: 50}, 500, 'ease-out', bounce_drop1);
            
    }

    bounce_drop1();


    
};