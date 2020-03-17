import {GET_QUIZ} from '../actions/actionTypes'

const initalState = {
	quizes: [
		{
			id: 1,
			name: 'Тест по истории России',
			gradient: 'linear-gradient(21deg, #dd03e4, #5611ec)',
			questions: [
				{
					title: 'Первый император Российской империи:',
					answers: ['Иван Грозный', 'Рюрик', 'Петр 2', 'Петр 1'],
					correctAnswer: 'Петр 1'
				},
				{
					title: 'Дата основания Санкт-Петербурга:',
					answers: ['1903', '1703', '1467', '1793'],
					correctAnswer: '1703'
				},
				{
					title: 'Первый президент СССР:',
					answers: ['Сталин', 'Горбачев', 'Путин', 'Ленин'],
					correctAnswer: 'Горбачев'
				}
			]
		},
		{
			id: 2,
			name: 'Тест по Javascript',
			gradient: 'linear-gradient(85deg, #fb63f9, #c2e534)',
			questions: [
				{
					title: 'Что из перечисленного не относится к JS:',
					answers: ['React', 'Vue', 'Laravel', 'Express'],
					correctAnswer: 'Laravel'
				},
				{
					title: 'Какой тип переменных лучше ипользовать:',
					answers: ['var', 'let/const'],
					correctAnswer: 'let/const'
				},
				{
					title: 'Какого нету логического оператора в JS:',
					answers: ['||', '&&', '!', '^!'],
					correctAnswer: '^!'
				},
				{
					title: 'Какого паттерна нету в JS:',
					answers: ['Строитель', 'Адаптер', 'Компоновщик', 'Дрессировщик', 'Наблюдатель'],
					correctAnswer: 'Дрессировщик'
				}
			]
		}
	],
	currentQuiz: {
		id: null,
		name: '',
		questions: [
			{
				title: '',
				answers: [],
				correctAnswer: ''
			}
		]
	}
}

export default function quizReducer(state = initalState, action) {
	switch(action.type) {
		case GET_QUIZ:
			return {
				...state,
				currentQuiz: state.quizes.find(quiz => quiz.id === Number(action.quizId))
			}
		default:
			return state
	}
}