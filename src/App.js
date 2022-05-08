import React, { useState } from 'react';

export default function App() {
	const AllQuestions = [
		{
			questionText: 'Who is making the Web standards?',
			answerOptions: [
				{ answerText: 'Google', isCorrect: false },
				{ answerText: 'Microsoft', isCorrect: false },
				{ answerText: 'Mozilla', isCorrect: false },
				{ answerText: 'The world Wide Web Consortium', isCorrect: true },
			],
		},
		{
			questionText: 'Choose the correct HTML element for the largest heading:',
			answerOptions: [
				{ answerText: '<h6>', isCorrect: false },
				{ answerText: '<heading>', isCorrect: false },
				{ answerText: '<h1>', isCorrect: true },
				{ answerText: '<head>', isCorrect: false },
			],
		},
		{
			questionText: 'What is the correct HTML element for inserting a line break?',
			answerOptions: [
				{ answerText: '<break>', isCorrect: false },
				{ answerText: '<br>', isCorrect: true },
				{ answerText: '<lb>', isCorrect: false },
				{ answerText: '<brr>', isCorrect: false },
			],
		},
		{
			questionText: 'What does HTML stand for?',
			answerOptions: [
				{ answerText: 'hypers texts Markups languages', isCorrect: false },
				{ answerText: 'hyper text Markup language', isCorrect: true },
				{ answerText: 'hyperlinks text Markup language', isCorrect: false },
				{ answerText: 'home tools Markup language', isCorrect: false },
			],
		},
		{
			questionText: 'Choose the correct HTML element to define important text?',
			answerOptions: [
				{ answerText: '<i>', isCorrect: false },
				{ answerText: '<h2>', isCorrect: false },
				{ answerText: '<important>', isCorrect: false },
				{ answerText: '<strong>', isCorrect: true },
			],
		},
	];

	const [question, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextSawal = question + 1;
		if (nextSawal < AllQuestions.length) {
			setCurrentQuestion(nextSawal);
		} else {
			setShowScore(true);
		}
	};
	return (
		<div className='app'>
			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {AllQuestions.length}
				</div>
			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {question + 1}</span>/{AllQuestions.length}
						</div>
						<div className='question-text'>{AllQuestions[question].questionText}</div>
					</div>
					<div className='answer-section'>
						{AllQuestions[question].answerOptions.map((answerOption) => (
							<button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
					</div>
				</>
			)}
		</div>
	);
}