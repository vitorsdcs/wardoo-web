'use strict';

angular.module('Home', []);
angular.module('Navbar', []);
angular.module('Sidebar', []);
angular.module('Authentication', []);
angular.module('Principal', []);
angular.module('Coordinator', []);
angular.module('Teacher', []);
angular.module('Responsible', []);
angular.module('Student', []);
angular.module('SchoolClass', []);

angular.module('Wardoo', [
	'Home',
	'Navbar',
	'Sidebar',
	'Authentication',
	'Principal',
	'Coordinator',
	'Teacher',
	'Responsible',
	'Student',
	'SchoolClass',
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
			
			.when('/principal/:id/edit/profile', {
				controller: 'PrincipalEditProfileController',
				templateUrl: 'app/components/principal/PrincipalEditProfile.html',
			})
			
			.when('/coordinators', {
				controller: 'CoordinatorListController',
				templateUrl: 'app/components/coordinator/CoordinatorList.html',
			})
			
			.when('/coordinators/add', {
				controller: 'CoordinatorCreationController',
				templateUrl: 'app/components/coordinator/CoordinatorCreation.html',
			})
			
			.when('/coordinator/:id/edit/profile', {
				controller: 'CoordinatorEditProfileController',
				templateUrl: 'app/components/coordinator/CoordinatorEditProfile.html',
			})
			
			.when('/teachers', {
				controller: 'TeacherListController',
				templateUrl: 'app/components/teacher/TeacherList.html',
			})
			
			.when('/teachers/add', {
				controller: 'TeacherCreationController',
				templateUrl: 'app/components/teacher/TeacherCreation.html',
			})
			
			.when('/teacher/:id/edit/profile', {
				controller: 'TeacherEditProfileController',
				templateUrl: 'app/components/teacher/TeacherEditProfile.html',
			})
			
			.when('/responsibles', {
				controller: 'ResponsibleListController',
				templateUrl: 'app/components/responsible/ResponsibleList.html',
			})
			
			.when('/responsibles/add', {
				controller: 'ResponsibleCreationController',
				templateUrl: 'app/components/responsible/ResponsibleCreation.html',
			})
			
			.when('/responsible/:id/edit/profile', {
				controller: 'ResponsibleEditProfileController',
				templateUrl: 'app/components/responsible/ResponsibleEditProfile.html',
			})
			
			.when('/students', {
				controller: 'StudentListController',
				templateUrl: 'app/components/student/StudentList.html',
			})
			
			.when('/students/add', {
				controller: 'StudentCreationController',
				templateUrl: 'app/components/student/StudentCreation.html',
			})
			
			.when('/student/:id/edit/profile', {
				controller: 'StudentEditProfileController',
				templateUrl: 'app/components/student/StudentEditProfile.html',
			})
			
			.when('/schoolclasses', {
				controller: 'SchoolClassListController',
				templateUrl: 'app/components/schoolclass/SchoolClassList.html',
			})
			
			.when('/schoolclasses/add', {
				controller: 'SchoolClassCreationController',
				templateUrl: 'app/components/schoolclass/SchoolClassCreation.html',
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
				'FORM.SELECT': '- Select -',
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
				'PRINCIPAL.EDIT': 'Edit principal',
				
				'COORDINATOR.TITLE': 'Coordinators',
				'COORDINATOR.SINGLE': 'Coordinator',
				'COORDINATOR.ADD': 'Add coordinator',
				'COORDINATOR.LOADING': 'Loading coordinators...',
				'COORDINATOR.EMPTY': 'No coordinators found.',
				'COORDINATOR.CREATE': 'Create coordinator',
				'COORDINATOR.EDIT': 'Edit coordinator',
				
				'TEACHER.TITLE': 'Teachers',
				'TEACHER.SINGLE': 'Teacher',
				'TEACHER.ADD': 'Add teacher',
				'TEACHER.LOADING': 'Loading teachers...',
				'TEACHER.EMPTY': 'No teachers found.',
				'TEACHER.CREATE': 'Create teacher',
				'TEACHER.EDIT': 'Edit teacher',
				'TEACHER.RESPONSIBLE': 'Responsible teacher',
				
				'RESPONSIBLE.TITLE': 'Responsibles',
				'RESPONSIBLE.SINGLE': 'Responsible',
				'RESPONSIBLE.ADD': 'Add responsible',
				'RESPONSIBLE.LOADING': 'Loading responsibles...',
				'RESPONSIBLE.EMPTY': 'No responsibles found.',
				'RESPONSIBLE.CREATE': 'Create responsible',
				'RESPONSIBLE.EDIT': 'Edit responsible',
				'RESPONSIBLE.LEGAL': 'Legal responsible',
				'RESPONSIBLE.FINANCIAL': 'Financial responsible',
				'RESPONSIBLE.REMOVAL': 'Removal responsible',
				
				'STUDENT.TITLE': 'Students',
				'STUDENT.SINGLE': 'Student',
				'STUDENT.ADD': 'Add student',
				'STUDENT.LOADING': 'Loading students...',
				'STUDENT.EMPTY': 'No students found.',
				'STUDENT.CREATE': 'Create student',
				'STUDENT.EDIT': 'Edit student',
				'STUDENT.CODE': 'Code',
				
				'SCHOOLCLASS.TITLE': 'School Classes',
				'SCHOOLCLASS.SINGLE': 'School Class',
				'SCHOOLCLASS.ADD': 'Add school class',
				'SCHOOLCLASS.LOADING': 'Loading school classes...',
				'SCHOOLCLASS.EMPTY': 'No school classes found.',
				'SCHOOLCLASS.CREATE': 'Create school class',
				'SCHOOLCLASS.EDIT': 'Edit school class',
				'SCHOOLCLASS.IDENTIFICATION': 'Identification',
				'SCHOOLCLASS.LABEL': 'Label',
				
				'PARENTAGE.TITLE': 'Parentage',
				'PARENTAGE.FATHER': 'Father',
				'PARENTAGE.MOTHER': 'Mother',
				'PARENTAGE.GRANDFATHER': 'Grandfather',
				'PARENTAGE.GRANDMOTHER': 'Grandmother',
				'PARENTAGE.STEPFATHER': 'Stepfather',
				'PARENTAGE.STEPMOTHER': 'Stepmother',
				'PARENTAGE.BROTHER': 'Brother',
				'PARENTAGE.SISTER': 'Sister',
				'PARENTAGE.STEPBROTHER': 'Stepbrother',
				'PARENTAGE.STEPSISTER': 'Stepsister',
				'PARENTAGE.UNCLE': 'Uncle',
				'PARENTAGE.AUNT': 'Aunt',
				'PARENTAGE.COUSIN': 'Cousin',
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
				'FORM.SELECT': '- Selecione -',
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
				'PRINCIPAL.EDIT': 'Editar diretor',
				
				'COORDINATOR.TITLE': 'Coordenadores',
				'COORDINATOR.SINGLE': 'Coordenador',
				'COORDINATOR.ADD': 'Cadastrar coordenador',
				'COORDINATOR.LOADING': 'Carregando coordenadores...',
				'COORDINATOR.EMPTY': 'Nenhum coordenador encontrado.',
				'COORDINATOR.CREATE': 'Cadastrar coordenador',
				'COORDINATOR.EDIT': 'Editar coordenador',
				
				'TEACHER.TITLE': 'Professores',
				'TEACHER.SINGLE': 'Professor',
				'TEACHER.ADD': 'Cadastrar professor',
				'TEACHER.LOADING': 'Carregando professores...',
				'TEACHER.EMPTY': 'Nenhum professor encontrado.',
				'TEACHER.CREATE': 'Cadastrar professor',
				'TEACHER.EDIT': 'Editar professor',
				'TEACHER.RESPONSIBLE': 'Professor responsável',
				
				'RESPONSIBLE.TITLE': 'Responsáveis',
				'RESPONSIBLE.SINGLE': 'Responsável',
				'RESPONSIBLE.ADD': 'Cadastrar responsável',
				'RESPONSIBLE.LOADING': 'Carregando responsáveis...',
				'RESPONSIBLE.EMPTY': 'Nenhum responsável encontrado.',
				'RESPONSIBLE.CREATE': 'Cadastrar responsável',
				'RESPONSIBLE.EDIT': 'Editar responsável',
				'RESPONSIBLE.LEGAL': 'Responsável legal',
				'RESPONSIBLE.FINANCIAL': 'Responsável financeiro',
				'RESPONSIBLE.REMOVAL': 'Responsável pela retirada',
				
				'STUDENT.TITLE': 'Alunos',
				'STUDENT.SINGLE': 'Aluno',
				'STUDENT.ADD': 'Cadastrar aluno',
				'STUDENT.LOADING': 'Carregando alunos...',
				'STUDENT.EMPTY': 'Nenhum aluno encontrado.',
				'STUDENT.CREATE': 'Cadastrar aluno',
				'STUDENT.EDIT': 'Editar aluno',
				'STUDENT.CODE': 'Matrícula',
				
				'SCHOOLCLASS.TITLE': 'Turmas',
				'SCHOOLCLASS.SINGLE': 'Turma',
				'SCHOOLCLASS.ADD': 'Adicionar turma',
				'SCHOOLCLASS.LOADING': 'Carregando turmas...',
				'SCHOOLCLASS.EMPTY': 'Nenhuma turma encontrada.',
				'SCHOOLCLASS.CREATE': 'Cadastrar turma',
				'SCHOOLCLASS.EDIT': 'Editar turma',
				'SCHOOLCLASS.IDENTIFICATION': 'Identificação',
				'SCHOOLCLASS.LABEL': 'Nome da turma',
				
				'PARENTAGE.TITLE': 'Parentesco',
				'PARENTAGE.FATHER': 'Pai',
				'PARENTAGE.MOTHER': 'Mãe',
				'PARENTAGE.GRANDFATHER': 'Avô',
				'PARENTAGE.GRANDMOTHER': 'Avó',
				'PARENTAGE.STEPFATHER': 'Padrasto',
				'PARENTAGE.STEPMOTHER': 'Madrasta',
				'PARENTAGE.BROTHER': 'Irmão',
				'PARENTAGE.SISTER': 'Irmã',
				'PARENTAGE.STEPBROTHER': 'Meio-irmão',
				'PARENTAGE.STEPSISTER': 'Meia-irmã',
				'PARENTAGE.UNCLE': 'Tio',
				'PARENTAGE.AUNT': 'Tia',
				'PARENTAGE.COUSIN': 'Primo(a)',
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