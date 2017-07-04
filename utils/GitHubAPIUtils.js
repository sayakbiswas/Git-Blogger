class GitHubAPIUtils {
	static get BaseGitHubURL() {
		return 'https://api.github.com';
	}

	static getAuthenticatedUser() {
		var promise = new Promise(function(resolve, reject) {
			var requestURL = this.BaseGitHubURL + '/user';
			var requestHeaders = new Headers();
			requestHeaders.append('Accept', 'application/vnd.github.v3+json');
			var githubToken = window.localStorage.getItem('githubToken');
			requestHeaders.append('Authorization', 'token ' + githubToken);
			var authenticatedUserRequest = new Request(requestURL, {
				method: 'GET',
				headers: requestHeaders
			});

			fetch(authenticatedUserRequest).then(function(response) {
				if(response && response.ok) {
					return response.json();
				}
				throw new Error('Problem getting your data from GitHub');
			}).then(function(data) {
				//console.log('user data ', data);
				resolve(data);
			}).catch(function(error) {
				//console.log(error);
				reject(error);
			});
		}.bind(this));

		return promise;
	}

	static getAuthenticatedUserRepos() {
		var promise = new Promise(function(resolve, reject) {
			var requestURL = this.BaseGitHubURL + '/user/repos?per_page=100';
			var requestHeaders = new Headers();
			requestHeaders.append('Accept', 'application/vnd.github.v3+json');
			var githubToken = window.localStorage.getItem('githubToken');
			requestHeaders.append('Authorization', 'token ' + githubToken);
			var authenticatedUserReposRequest = new Request(requestURL, {
				method: 'GET',
				headers: requestHeaders
			});

			fetch(authenticatedUserReposRequest).then(function(response) {
				if(response && response.ok) {
					return response.json();
				}
				throw new Error('Problem getting your data from GitHub');
			}).then(function(data) {
				//console.log('user repos ', data);
				resolve(data);
			}).catch(function(error) {
				//console.log(error);
				reject(error);
			});
		}.bind(this));

		return promise;
	}
}

module.exports = GitHubAPIUtils;
