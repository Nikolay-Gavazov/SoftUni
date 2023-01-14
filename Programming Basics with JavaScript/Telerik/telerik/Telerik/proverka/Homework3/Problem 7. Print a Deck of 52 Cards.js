// Input.
let input = ['A'];

let print = this.print || console.log;
let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

// Solution

// Use 2 nested for-loops and a switch-case statement.

let card = gets();

let result = '';
switch (card) {
	case 'J':
		card = 11;
		break;
	case 'Q':
		card = 12;
		break;
	case 'K':
		card = 13;
		break;
	case 'A':
		card = 14;
		break;
	default:
		break;
}
for (i = 2; i <= card; i++) {
	for (j = 1; j <= 4; j++) {
		let cardIndex = i;
		if (i === 11) {
			cardIndex = 'J';
		} else if (i === 12) {
			cardIndex = 'Q';
		} else if (i === 13) {
			cardIndex = 'K';
		} else if (i === 14) {
			cardIndex = 'A';
		}
		switch (j) {
			case 1:
				result += `${cardIndex} of spades, `;
				break;
			case 2:
				result += `${cardIndex} of clubs, `;
				break;
			case 3:
				result += `${cardIndex} of hearts, `;
				break;
			case 4:
				result += `${cardIndex} of diamonds`;
				break;
		}
	}
	print(result);
	result = ``;
}

// 	if (i == 11) {
// 		print(`J of spades, J of clubs, J of hearts, J of diamonds`);
// 	} else if (i == 12) {
// 		print(`Q of spades, Q of clubs, Q of hearts, Q of diamonds`);
// 	} else if (i == 13) {
// 		print(`K of spades, K of clubs, K of hearts, K of diamonds`);
// 	} else if (i == 14) {
// 		print(`A of spades, A of clubs, A of hearts, A of diamonds`);
// 	} else {
// 		print(`${i} of spades, ${i} of clubs, ${i} of hearts, ${i} of diamonds`);
// 	}
// }
