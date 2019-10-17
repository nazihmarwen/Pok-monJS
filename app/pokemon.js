function Pokemon(config) {
    this.name = config.name;
    this.imageUrl = config.imageUrl;
    this.x = config.x;
    this.y = config.y;
    this.speed = config.speed || 5;
    this.pikachuImgHeight = 256;
    this.directions = {
        "DOWN": this.pikachuImgHeight / 4 * 0,
        "LEFT": this.pikachuImgHeight / 4 * 1,
        "RIGHT": this.pikachuImgHeight / 4 * 2,
        "UP": this.pikachuImgHeight / 4 * 3
    };
    this.sx = 0;
    this.sy = this.directions["DOWN"];
}

Pokemon.prototype.move = function(direction) {

    // Animation

    this.sx = this.sx === 192 ? 0 : this.sx + 64;

    // Direction

    this.sy = this.directions[direction];
    
    // Mouvement

    switch(direction) {
        case "UP":
            this.y -= this.speed;
            if (this.y < -64) {
                this.y = 600;
            }
            break;
        case "DOWN":
            this.y += this.speed;
            if (this.y > 600) {
                this.y = -64;
            }
            break;
        case "LEFT":
            this.x -= this.speed;
            if (this.x < -64) {
                this.x = 800;
            }
            break;
        case "RIGHT":
            this.x += this.speed;
            if (this.x > 800) {
                this.x = -64;
            }
            break;
        default:
            break;
    }

};