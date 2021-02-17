var canvas = new fabric.Canvas("My_canvas");
super_img_width = 50;
super_img_height = 50;
player_X = 15;
player_Y = 15;
var playerobject = "";
var blockobject = "";
function player_update() {
    fabric.Image.fromURL("hunl.htm", function (Img) {
        playerobject = Img;
        playerobject.scaleToWidth(150);
        playerobject.scaleToHeight(140);
        playerobject.set({
            top: player_Y,
            left: player_X

        });
        canvas.add(playerobject);

    });
}
function New_image(get_image) {
    fabric.Image.fromURL(get_image, function (Img) {
        blockobject = Img;
        blockobject.scaleToWidth(block_img_width);
        blockobject.scaleToHeight(block_img_height);
        blockobject.set({
            top: player_Y,
            left: player_X

        });
        canvas.add(blockobject);

    });
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e) {
    keypressed = e.keyCode;
    console.log(keypressed);
    if (e.shiftKey == true && keypressed == "80") {
        console.log("p and shift pressed together");
        block_img_width = block_img_width + 10;
        block_img_height = block_img_height + 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if (e.shiftKey == true && keypressed == "77") {
        console.log("m and shift pressed together");
        block_img_width = block_img_width - 10;
        block_img_height = block_img_height - 10;
        document.getElementById("current_width").innerHTML = block_img_width;
        document.getElementById("current_height").innerHTML = block_img_height;
    }
    if (keypressed == ("83") {
        SuperMan();
        console.log("SuperMan");
    }

    if (keypressed == ("87") {
        WonderWoman();
        console.log("WonderWoman");
    }
  
    if (keypressed == ("72") {
        Hulk();
        console.log("Hulk");
    }

    if (keypressed == ("73") {
        IronMan();
        console.log("IronMan");
    }