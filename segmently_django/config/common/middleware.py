from django.utils.deprecation import MiddlewareMixin

class DisableCsrfCheck(MiddlewareMixin):

	def process_request(self, req):
		attr = '_dont_enforce_csrf_checks'
		if not getattr(req, attr, False):
			setattr(req, attr, True)


MIDDLEWARE = [
	'django.middleware.security.SecurityMiddleware',
	'django.contrib.sessions.middleware.SessionMiddleware',
	'corsheaders.middleware.CorsMiddleware',
	'config.common.middleware.DisableCsrfCheck',
	'reversion.middleware.RevisionMiddleware',
	'django.middleware.common.CommonMiddleware',
	'django.middleware.csrf.CsrfViewMiddleware',
	'django.contrib.auth.middleware.AuthenticationMiddleware',
	'django.contrib.messages.middleware.MessageMiddleware',
	'django.middleware.clickjacking.XFrameOptionsMiddleware',
]
