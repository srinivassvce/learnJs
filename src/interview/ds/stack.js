"use-strict";
modules.exports = class Stack {
    constructor() {
        this.items = [];
        this.top = null;
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.shift();
    }

    getTop() {
        return this.items[0];
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

function isBalanced(exp) {
    const map = new Map();
    map.set("}", "{");
    map.set("]", "[");
    map.set(")", "(");
    let stack = new Stack();
    const opening = ["{", "[", "("];
    const closing = ["}", "]", ")"];
    exp.split("").forEach(char => {
        if(closing.find(closingChar => closingChar === char)) {
            if(stack.isEmpty()) {
                // Meaning there are no opening paranthersis before we encountered a closing
                // paranthesis.
                return false;
            }
            const stackElement = stack.pop();
            if(map.get(char) != stackElement) {
                return false;

            }

        } else if(opening.find(openingChar => openingChar === char)) {
            stack.push(char);
        }
    });
    return true;
}

isBalanced("{{}}{{}}[]")

/**
 * {{}}[]()
 * stack = {{[(
 **/