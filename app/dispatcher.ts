let guid = require('guid');

//let listeners:{[key:string]:Function} = {};
interface IDispatchPayload<T>{
	payload:T;
	type:string;
}

class Dispatcher {
	private listeners:{[key:string]:Function} = {};
	
	constructor(){}
	
	register(cb:Function){
		var id = guid.raw();
		this.listeners[id] = cb;
		return id;
	}
	
	dispatch<T>(payload:IDispatchPayload<T>){
		console.info("Dispatching..", payload);
		for(let id in this.listeners){
			let listener = this.listeners[id];
			listener(payload);
		}
	}
}

let dispatcher:Dispatcher = new Dispatcher();

export {dispatcher, IDispatchPayload};
