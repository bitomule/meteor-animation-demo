if (Meteor.isClient) {
	Session.setDefault('exampleArray',[]);
	Template.hello.exampleArray = function(){
		return Session.get('exampleArray');
	};
}