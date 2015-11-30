/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../../typings/es6-Promise/es6-Promise.d.ts" />
import * as $ from 'jquery';
//import {Promise} from 'es6-promise';
class RestHelper{
	
	constructor(){}
	
	get(url:string){
		return new Promise(function(success, error){
			$.ajax({
				url:url,
				dataType:'json',
				success:success,
				error:error
			});
		});
	}
	
	post(url:string, data:any){
		return new Promise(function(success, error){
			$.ajax({
				url:url,
				method:'POST',
				dataType:'json',
				data: data,
				success:success,
				error:error
			});
		});
	}
}
let restHelper = new RestHelper;

export {restHelper};