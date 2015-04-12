'use strict';

angular.module('Home', []);
angular.module('Navbar', []);
angular.module('Sidebar', []);
angular.module('Authentication', []);
angular.module('Principal', []);
angular.module('Coordinator', []);
angular.module('Teacher', []);
angular.module('Responsible', []);

angular.module('Wardoo', [
	'Home',
	'Navbar',
	'Sidebar',
	'Authentication',
	'Principal',
	'Coordinator',
	'Teacher',
	'Responsible',
    'ngRoute',
    'ngCookies',
	'ngResource',
	'ngMask',
	'ngAnimate',
	'pascalprecht.translate',
])

.config(['$routeProvider', '$locationProvider', '$translateProvider',
	function ($routeProvider, $locationProvider, $translateProvider) {
		$routeProvider
			.when('/', {
				controller: 'HomeController',
				templateUrl: 'app/components/home/HomeView.html',
			})
			
			.when('/login', {
				controller: 'LoginController',
				templateUrl: 'app/components/authentication/LoginView.html',
			})
			
			.when('/logout', {
				controller: 'LogoutController',
				template: '',
			})
			
			.when('/principals', {
				controller: 'PrincipalListController',
				templateUrl: 'app/components/principal/PrincipalList.html',
			})
			
			.when('/principals/add', {
				controller: 'PrincipalCreationController',
				templateUrl: 'app/components/principal/PrincipalCreation.html',
			})
			
			.when('/coordinators', {
				controller: 'CoordinatorListController',
				templateUrl: 'app/components/coordinator/CoordinatorList.html',
			})
			
			.when('/coordinators/add', {
				controller: 'CoordinatorCreationController',
				templateUrl: 'app/components/coordinator/CoordinatorCreation.html',
			})
			
			.when('/teachers', {
				controller: 'TeacherListController',
				templateUrl: 'app/components/teacher/TeacherList.html',
			})
			
			.when('/teachers/add', {
				controller: 'TeacherCreationController',
				templateUrl: 'app/components/teacher/TeacherCreation.html',
			})
			
			.when('/responsibles', {
				controller: 'ResponsibleListController',
				templateUrl: 'app/components/responsible/ResponsibleList.html',
			})
			
			.when('/responsibles/add', {
				controller: 'ResponsibleCreationController',
				templateUrl: 'app/components/responsible/ResponsibleCreation.html',
			});
		
		$translateProvider
			.translations('en', {
				'HOME.TITLE': 'Home',
				'HOME.HELLOWORLD': 'Hello world!',
				
				'SIDEBAR.HIDE': 'Hide sidebar',
				'SIDEBAR.SHOW': 'Show sidebar',
				'NAVIGATION.TOGGLE': 'Toggle navigation',
				'NAVIGATION.CREATE': 'Create',
				
				'AUTHENTICATION.SIGNIN': 'Sign in',
				'AUTHENTICATION.SIGNOUT': 'Sign out',
				'AUTHENTICATION.LOGIN': 'Login',
				'AUTHENTICATION.LOGOUT': 'Logout',
				'AUTHENTICATION.DESCRIPTION': 'Enter your information below to log in.',
				'AUTHENTICATION.WELCOME': 'Welcome',
				
				'CREDENTIAL.TITLE': 'Credentials',
				'CREDENTIAL.USERNAME': 'Username',
				'CREDENTIAL.PASSWORD': 'Password',
				
				'FORM.WARNING.REQUIRED': 'This is a required field.',
				'FORM.ERROR.REQUIRED': 'This field is required.',
				'FORM.ERROR.MINLENGTH': 'This field must be at least {{ num }} characters long.',
				'FORM.ERROR.MAXLENGTH': 'This field cannot be longer than {{ num }} characters.',
				'FORM.ERROR.DATE': 'This is not a valid date. Please input a valid date.',
				'FORM.ERROR.CPF': 'This is not a valid CPF. Please input a valid CPF.',
				'FORM.ERROR.EMAIL': 'This is not a valid email. Please input a valida email.',
				'FORM.ERROR.PHONE': 'This is not a valid phone number. Please input a valid phone number.',
				'FORM.SAVE': 'Save',
				'FORM.CANCEL': 'Cancel',
				
				'SCHOOL.TITLE': 'School',
				
				'PERSON.NAME': 'Name',
				'PERSON.BIRTHDATE': 'Birthdate',
				'PERSON.CPF': 'CPF',
				'PERSON.RG': 'RG',
				'PERSON.CONTACT': 'Contact',
				'PERSON.YEARSOLD': 'years old',
				'PERSON.PERSONALINFO': 'Personal info',
				'PERSON.FIRSTNAME': 'First name',
				'PERSON.LASTNAME': 'Last name',
				'PERSON.GENRE': 'Genre',
				'PERSON.MALE': 'Male',
				'PERSON.FEMALE': 'Female',
				'PERSON.EMAIL': 'Email',
				'PERSON.PHONE': 'Phone',
				'PERSON.PHONEALT': 'Secondary Phone',
				'PERSON.ACCOUNT': 'My account',
				'PERSON.PROFILE': 'My profile',
				
				'PRINCIPAL.TITLE': 'Principals',
				'PRINCIPAL.SINGLE': 'Principal',
				'PRINCIPAL.ADD': 'Add principal',
				'PRINCIPAL.LOADING': 'Loading principals...',
				'PRINCIPAL.EMPTY': 'No principals found.',
				'PRINCIPAL.CREATE': 'Create principal',
				
				'COORDINATOR.TITLE': 'Coordinators',
				'COORDINATOR.SINGLE': 'Coordinator',
				'COORDINATOR.ADD': 'Add coordinator',
				'COORDINATOR.LOADING': 'Loading coordinators...',
				'COORDINATOR.EMPTY': 'No coordinators found.',
				'COORDINATOR.CREATE': 'Create coordinator',
				
				'TEACHER.TITLE': 'Teachers',
				'TEACHER.SINGLE': 'Teacher',
				'TEACHER.ADD': 'Add teacher',
				'TEACHER.LOADING': 'Loading teachers...',
				'TEACHER.EMPTY': 'No teachers found.',
				'TEACHER.CREATE': 'Create teacher',
				
				'RESPONSIBLE.TITLE': 'Responsibles',
				'RESPONSIBLE.SINGLE': 'Responsible',
				'RESPONSIBLE.ADD': 'Add responsible',
				'RESPONSIBLE.LOADING': 'Loading responsibles...',
				'RESPONSIBLE.EMPTY': 'No responsibles found.',
				'RESPONSIBLE.CREATE': 'Create responsible',
				
				'STUDENT.TITLE': 'Students',
				'STUDENT.SINGLE': 'Student',
				'STUDENT.ADD': 'Add student',
				'STUDENT.LOADING': 'Loading students...',
				'STUDENT.EMPTY': 'No students found.',
				'STUDENT.CREATE': 'Create student',
			})
			.translations('pt-br', {
				'HOME.TITLE': 'Início',
				'HOME.HELLOWORLD': 'Olá mundo!',
				
				'SIDEBAR.HIDE': 'Esconder menu lateral',
				'SIDEBAR.SHOW': 'Exibir menu lateral',
				'NAVIGATION.TOGGLE': 'Alternar menu',
				'NAVIGATION.CREATE': 'Cadastrar',
				
				'AUTHENTICATION.SIGNIN': 'Entrar',
				'AUTHENTICATION.SIGNOUT': 'Sair',
				'AUTHENTICATION.LOGIN': 'Entrar',
				'AUTHENTICATION.LOGOUT': 'Sair',
				'AUTHENTICATION.DESCRIPTION': 'Digite seu nome de usuário e senha para entrar.',
				'AUTHENTICATION.WELCOME': 'Bem-vindo',
				
				'CREDENTIAL.TITLE': 'Credenciais',
				'CREDENTIAL.USERNAME': 'Nome de usuário',
				'CREDENTIAL.PASSWORD': 'Senha',
				
				'FORM.WARNING.REQUIRED': 'Este é um campo obrigatório.',
				'FORM.ERROR.REQUIRED': 'Este campo é obrigatório.',
				'FORM.ERROR.MINLENGTH': 'Este campo precisa ter ao menos {{ num }} caracteres.',
				'FORM.ERROR.MAXLENGTH': 'Este campo não pode ter mais que {{ num }} caracteres.',
				'FORM.ERROR.DATE': 'Esta data é inválida. Por favor, digite uma data válida.',
				'FORM.ERROR.CPF': 'Este CPF é inválido. Por favor, digite um CPF válido.',
				'FORM.ERROR.EMAIL': 'Este não é um e-mail válido. Por favor, digite um e-mail válido.',
				'FORM.ERROR.PHONE': 'Este não é um telefone válido. Por favor, digite um telefone válido.',
				'FORM.SAVE': 'Salvar',
				'FORM.CANCEL': 'Cancelar',
				
				'SCHOOL.TITLE': 'Escola',
				
				'PERSON.NAME': 'Nome',
				'PERSON.BIRTHDATE': 'Data de nascimento',
				'PERSON.CPF': 'CPF',
				'PERSON.RG': 'RG',
				'PERSON.CONTACT': 'Contato',
				'PERSON.YEARSOLD': 'anos',
				'PERSON.PERSONALINFO': 'Informações pessoais',
				'PERSON.FIRSTNAME': 'Nome',
				'PERSON.LASTNAME': 'Sobrenome',
				'PERSON.GENRE': 'Sexo',
				'PERSON.MALE': 'Masculino',
				'PERSON.FEMALE': 'Feminino',
				'PERSON.EMAIL': 'E-mail',
				'PERSON.PHONE': 'Telefone',
				'PERSON.PHONEALT': 'Celular',
				'PERSON.ACCOUNT': 'Minha conta',
				'PERSON.PROFILE': 'Meu perfil',
				
				'PRINCIPAL.TITLE': 'Diretores',
				'PRINCIPAL.SINGLE': 'Diretor',
				'PRINCIPAL.ADD': 'Cadastrar diretor',
				'PRINCIPAL.LOADING': 'Carregando diretores...',
				'PRINCIPAL.EMPTY': 'Nenhum diretor encontrado.',
				'PRINCIPAL.CREATE': 'Cadastrar diretor',
				
				'COORDINATOR.TITLE': 'Coordenadores',
				'COORDINATOR.SINGLE': 'Coordenador',
				'COORDINATOR.ADD': 'Cadastrar coordenador',
				'COORDINATOR.LOADING': 'Carregando coordenadores...',
				'COORDINATOR.EMPTY': 'Nenhum coordenador encontrado.',
				'COORDINATOR.CREATE': 'Cadastrar coordenador',
				
				'TEACHER.TITLE': 'Professores',
				'TEACHER.SINGLE': 'Professor',
				'TEACHER.ADD': 'Cadastrar professor',
				'TEACHER.LOADING': 'Carregando professores...',
				'TEACHER.EMPTY': 'Nenhum professor encontrado.',
				'TEACHER.CREATE': 'Cadastrar professor',
				
				'RESPONSIBLE.TITLE': 'Responsáveis',
				'RESPONSIBLE.SINGLE': 'Responsável',
				'RESPONSIBLE.ADD': 'Cadastrar responsável',
				'RESPONSIBLE.LOADING': 'Carregando responsáveis...',
				'RESPONSIBLE.EMPTY': 'Nenhum responsável encontrado.',
				'RESPONSIBLE.CREATE': 'Cadastrar responsável',
				
				'STUDENT.TITLE': 'Alunos',
				'STUDENT.SINGLE': 'Aluno',
				'STUDENT.ADD': 'Cadastrar aluno',
				'STUDENT.LOADING': 'Carregando alunos...',
				'STUDENT.EMPTY': 'Nenhum aluno encontrado.',
				'STUDENT.CREATE': 'Cadastrar aluno',
			});
		$translateProvider.preferredLanguage('pt-br');
		
		$locationProvider.html5Mode(true);
	}
])

.run(['$rootScope', '$cookieStore', '$http', '$location',
	function($rootScope, $cookieStore, $http, $location) {
		$rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
			$rootScope.isLoggedIn = $rootScope.globals.currentUser ? true : false;
			$rootScope.isLoggedOut = $rootScope.globals.currentUser ? false : true;
			
			if ($rootScope.isLoggedOut && current.$$route.originalPath != "/login") {
				$location.path("/login");
			}
		});
		
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Bearer ' + $rootScope.globals.currentUser.token;
        }
	}
]);