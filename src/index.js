const messages = {
	motivational: [
		'You are doing great, keep it up!',
		'All is harder at the beginning but it gets easier. Keep working!',
		"Don't ever give up",
		'Persistence is the key to success.',
		'Stay focused, stay determined.',
		'The best way it is do the maximum and shut up.',
	],
	inspirational: [
		"I'm proud of you.",
		'Believe in yourself, always.',
		'Hard work always pays off.',
		'Success is a journey, not a destination.',
		'Your journey is your own.',
		'Challenges make you stronger.',
	],
	encouraging: [
		'You have the power within you.',
		'Every effort counts.',
		'Make every moment matter.',
		'Convert yourself powerful like a beast.',
		'Keep pushing your limits.',
	],
	reflections: [
		'The most difficult thing is to live, dying is easy.',
		'Every step counts, no matter how small.',
		'Believe in your potential.',
		'Your hard work is inspiring.',
		'Keep striving for greatness.',
		'Stay resilient and keep moving forward.',
	],
	philosophical: [
		'The only way to make sense out of change is to plunge into it, move with it, and join the dance. - Alan W. Watts',
		'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you lived and lived well. - Ralph Waldo Emerson',
		'The only true wisdom is in knowing you know nothing. - Socrates',
		'The unexamined life is not worth living. - Socrates',
		'The only way to do great work is to love what you do. - Steve Jobs',
		'The mind is everything. What you think you become. - Buddha',
		'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',
		'The only thing necessary for the triumph of evil is for good men to do nothing. - Edmund Burke',
		'The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt',
		'The only thing we have to fear is fear itself. - Franklin D. Roosevelt',
		'The only way to discover the limits of the possible is to go beyond them into the impossible. - Arthur C. Clarke',
		"The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
		'The only real failure in life is not to be true to the best one knows. - Henry David Thoreau',
		'The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you lived and lived well. - Ralph Waldo Emerson',
	],
};

const randomMessage = () => {
	const categories = Object.keys(messages);
	const randomCategory = categories[Math.floor(Math.random() * categories.length)];
	const selectedCategory = messages[randomCategory];

	const message = selectedCategory[Math.floor(Math.random() * selectedCategory.length)];

	console.log(`${message}`);
};

module.exports = {
	randomMessage,
};
