import { Direction } from "./Direction";
export class MapLocation {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static fromRobot(robot) {
        return new MapLocation(robot.x, robot.y);
    }
    equals(other) {
        return this.x === other.x && this.y === other.y;
    }
    add(d) {
        return new MapLocation(this.x + d.dx, this.y + d.dy);
    }
    addN(d, n) {
        return new MapLocation(this.x + n * d.dx, this.y + n * d.dy);
    }
    distanceSqTo(other) {
        return Math.pow(this.x - other.x, 2) + Math.pow(this.y - other.y, 2);
    }
    isAdjacentTo(other) {
        if (this.equals(other)) {
            return false
        }
        return Math.abs(this.x - other.x) <= 1 && Math.abs(this.y - other.y) <= 1;
    }
    isCardinallyAdjacentTo(other) {
        return Math.abs(this.x - other.x) + Math.abs(this.y - other.y) === 1;
    }
    directionTo(other) {
        // degenerative case of the same location
        if (this.equals(other)) {
            return Direction.NONE;
        }
        const dx = other.x - this.x;
        const dy = other.y - this.y;
        // is it a cardinal direction?
        if (Math.abs(dx) > 2 * Math.abs(dy)) {
            if (dx > 0) {
                return Direction.EAST;
            }
            else {
                return Direction.WEST;
            }
        }
        else if (Math.abs(dy) > 2 * Math.abs(dx)) {
            if (dy > 0) {
                return Direction.SOUTH;
            }
            else {
                return Direction.NORTH;
            }
        }
        // it's not cardinal
        if (dx > 0) {
            if (dy > 0) {
                return Direction.SOUTH_EAST;
            }
            else {
                return Direction.NORTH_EAST;
            }
        }
        else {
            if (dy > 0) {
                return Direction.SOUTH_WEST;
            }
            else {
                return Direction.NORTH_WEST;
            }
        }
    }
    toString() {
        return "(" + this.x + ", " + this.y + ")";
    }
}
