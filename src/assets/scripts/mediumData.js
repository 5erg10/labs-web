export default class mediumData {
	constructor() {
		this.endpoint = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed`;
	}
	getListOfPost(path, callback, error){
		let rss_url = `${ this.endpoint }/${ path }`;
		fetch( rss_url )
			.then( res => res.json())
			.then( post => callback(post))
			.catch(error) 
	}
}